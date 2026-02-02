from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
from typing import Optional
import os
import cv2

app = FastAPI(title="Iris Flower Classification API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = "backend/iris_model.joblib"
MODEL_INFO_PATH = "backend/model_info.joblib"

model = None
model_info = None

@app.on_event("startup")
async def load_model():
    global model, model_info
    try:
        if os.path.exists(MODEL_PATH) and os.path.exists(MODEL_INFO_PATH):
            model = joblib.load(MODEL_PATH)
            model_info = joblib.load(MODEL_INFO_PATH)
            print("Model loaded successfully!")
            print(f"Model accuracy: {model_info['accuracy'] * 100:.2f}%")
        else:
            print("Model files not found. Please run train_model.py first.")
    except Exception as e:
        print(f"Error loading model: {e}")

@app.get("/")
async def root():
    return {
        "message": "Iris Flower Classification API",
        "status": "running",
        "model_loaded": model is not None
    }

@app.get("/api/model-info")
async def get_model_info():
    if model_info is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    return {
        "feature_names": model_info['feature_names'],
        "target_names": model_info['target_names'],
        "accuracy": model_info['accuracy'],
        "model_type": "Random Forest Classifier"
    }


@app.post("/api/predict")
async def predict(
    sepal_length: float = Form(None),
    sepal_width: float = Form(None),
    petal_length: float = Form(None),
    petal_width: float = Form(None),
    image: UploadFile = File(None)
):
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    try:
        # --- CASE 1: If image is uploaded, extract features ---
        if image is not None:
            contents = await image.read()
            print("Filename:", image.filename)
            np_arr = np.frombuffer(contents, np.uint8)
            img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

            if img is None:
                raise HTTPException(status_code=400, detail="Invalid image file")

            # Resize for consistency
            img = cv2.resize(img, (600, 600))
            hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

            # Color ranges
            petal_lower = np.array([120, 40, 40])
            petal_upper = np.array([160, 255, 255])
            petal_mask = cv2.inRange(hsv, petal_lower, petal_upper)

            sepal_lower = np.array([20, 30, 100])
            sepal_upper = np.array([40, 255, 255])
            sepal_mask = cv2.inRange(hsv, sepal_lower, sepal_upper)

            def get_largest_contour(mask):
                contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
                if contours:
                    return max(contours, key=cv2.contourArea)
                return None

            def get_length_width(cnt):
                if cnt is None:
                    return 0, 0
                x, y, w, h = cv2.boundingRect(cnt)
                return max(w, h), min(w, h)

            petal_length_px, petal_width_px = get_length_width(get_largest_contour(petal_mask))
            sepal_length_px, sepal_width_px = get_length_width(get_largest_contour(sepal_mask))

            # Conversion factor (example: 0.02 cm per pixel)
            cm_per_pixel = 0.02
            sepal_length = round(sepal_length_px * cm_per_pixel, 2)
            sepal_width  = round(sepal_width_px  * cm_per_pixel, 2)
            petal_length = round(petal_length_px * cm_per_pixel, 2)
            petal_width  = round(petal_width_px  * cm_per_pixel, 2)

        # --- CASE 2: If no image, use form inputs ---
        if None in [sepal_length, sepal_width, petal_length, petal_width]:
            raise HTTPException(status_code=400, detail="Missing features or image")

        features = np.array([[sepal_length, sepal_width, petal_length, petal_width]])

        if features.shape[1] != 4:
            raise HTTPException(status_code=400, detail="Invalid number of features")

        prediction = model.predict(features)[0]
        probabilities = model.predict_proba(features)[0]

        target_names = model_info['target_names']
        prediction_name = target_names[prediction]

        probability_dict = {
            name.lower(): float(prob)
            for name, prob in zip(target_names, probabilities)
        }

        confidence = float(max(probabilities))

        return {
            "prediction": prediction_name,
            "confidence": confidence,
            "probabilities": probability_dict,
            "input_features": {
                "sepal_length": sepal_length,
                "sepal_width": sepal_width,
                "petal_length": petal_length,
                "petal_width": petal_width
            }
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid input: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
