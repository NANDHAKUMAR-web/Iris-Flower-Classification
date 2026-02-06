# Iris Flower Classification System

A full-stack web application for classifying iris flowers using machine learning. Built with React, FastAPI, and scikit-learn.

## 🔗 [Project Demo](https://iris-flower-classification-liard.vercel.app/)

## Features

- Interactive web interface with sidebar navigation
- Machine learning powered classification
- Real-time predictions with confidence scores
- Image upload support
- Responsive design for all devices
- Detailed model information and API documentation

## Technology Stack

### Frontend
- React with Vite
- React Router for navigation
- Modern CSS with animations
- Responsive design

### Backend
- Python 3.13+
- FastAPI for REST API
- scikit-learn for ML models
- Random Forest Classifier

### Machine Learning
- Iris dataset (150 samples, 3 species)
- 4 features: Sepal Length, Sepal Width, Petal Length, Petal Width
- 93%+ accuracy on test data

## Project Structure

```
.
├── backend/
│   ├── main.py              # FastAPI application
│   ├── train_model.py       # ML model training script
│   ├── requirements.txt     # Python dependencies
│   ├── iris_model.joblib    # Trained model
│   └── model_info.joblib    # Model metadata
├── src/
│   ├── components/
│   │   └── Sidebar.jsx      # Navigation sidebar
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About project page
│   │   ├── ModelConfig.jsx  # Model & API info page
│   │   └── Prediction.jsx   # Prediction page
│   └── App.jsx              # Main app component
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.13+
- pip (Python package manager)

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
pip install --break-system-packages -r backend/requirements.txt
```

3. Train the ML model (already done):
```bash
python3 backend/train_model.py
```

### Running the Application

1. Start the backend server (in one terminal):
```bash
python3 backend/main.py
```
The backend will run at http://localhost:8000

2. Start the frontend development server (in another terminal):
```bash
npm run dev
```
The frontend will run at http://localhost:5173

3. Open your browser and navigate to http://localhost:5173

## Using the Application

### Navigation

The sidebar provides access to four main sections:

1. **Home** - Overview of the iris classification system
2. **About Project** - Details about the dataset, algorithms, and technologies
3. **Model & API** - Model information and API documentation
4. **Prediction** - Make predictions with flower measurements

### Making Predictions

1. Navigate to the Prediction page
2. Optionally upload an image of the flower
3. Enter the four measurements:
   - Sepal Length (cm)
   - Sepal Width (cm)
   - Petal Length (cm)
   - Petal Width (cm)
4. Click "Predict Flower Type"
5. View the prediction result with confidence scores

## API Endpoints

### GET /
Health check endpoint

### GET /api/model-info
Returns model information including features, target classes, and accuracy

### POST /api/predict
Make a prediction with flower measurements

**Request Body (multipart/form-data):**
- `sepal_length`: float (required)
- `sepal_width`: float (required)
- `petal_length`: float (required)
- `petal_width`: float (required)
- `image`: file (optional)

**Response:**
```json
{
  "prediction": "setosa",
  "confidence": 0.98,
  "probabilities": {
    "setosa": 0.98,
    "versicolor": 0.01,
    "virginica": 0.01
  }
}
```

## Model Details

- **Algorithm**: Random Forest Classifier
- **Training Data**: Iris dataset (150 samples)
- **Features**: 4 (sepal and petal measurements)
- **Classes**: 3 (Setosa, Versicolor, Virginica)
- **Accuracy**: 93.33% on test set

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## License

This project is for educational purposes.

## Acknowledgments

- Iris dataset from UCI Machine Learning Repository
- scikit-learn for ML capabilities
- FastAPI for the backend framework
- React and Vite for the frontend
