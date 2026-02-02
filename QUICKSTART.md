# Quick Start Guide

## Running the Application

### Step 1: Start the Backend

Open a terminal and run:

```bash
python3 backend/main.py
```

The backend API will start on http://localhost:8000

### Step 2: Start the Frontend

Open another terminal and run:

```bash
npm run dev
```

The frontend will start on http://localhost:5173

### Step 3: Open in Browser

Navigate to http://localhost:5173 in your web browser.

## Using the Application

### Making Your First Prediction

1. Click on **Prediction** in the sidebar
2. Enter sample measurements (try these values):
   - Sepal Length: 5.1
   - Sepal Width: 3.5
   - Petal Length: 1.4
   - Petal Width: 0.2
3. Click **Predict Flower Type**
4. View the result (should predict Iris-setosa with high confidence)

### Sample Values for Testing

**Iris Setosa:**
- Sepal Length: 5.1, Sepal Width: 3.5, Petal Length: 1.4, Petal Width: 0.2

**Iris Versicolor:**
- Sepal Length: 6.4, Sepal Width: 3.2, Petal Length: 4.5, Petal Width: 1.5

**Iris Virginica:**
- Sepal Length: 6.3, Sepal Width: 3.3, Petal Length: 6.0, Petal Width: 2.5

## Troubleshooting

### Backend won't start
Make sure Python dependencies are installed:
```bash
pip install --break-system-packages -r backend/requirements.txt
```

### Frontend won't start
Make sure npm dependencies are installed:
```bash
npm install
```

### Prediction returns error
Make sure both backend and frontend are running simultaneously.

### Model not found
Run the training script:
```bash
python3 backend/train_model.py
```

## Key Features to Explore

1. **Home Page** - Overview and introduction
2. **About Project** - Learn about the dataset and algorithms
3. **Model & API** - View technical details and API documentation
4. **Prediction** - Make real-time predictions with the ML model

Enjoy exploring the Iris Flower Classification System!
