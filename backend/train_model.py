import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import joblib

def train_iris_model():
    print("Loading Iris dataset...")
    iris = load_iris()
    X = iris.data
    y = iris.target

    feature_names = iris.feature_names
    target_names = iris.target_names

    print(f"Dataset shape: {X.shape}")
    print(f"Features: {feature_names}")
    print(f"Classes: {target_names}")

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    print("\nTraining Random Forest Classifier...")
    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=5,
        random_state=42,
        n_jobs=-1
    )

    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)

    print(f"\nModel Accuracy: {accuracy * 100:.2f}%")
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred, target_names=target_names))

    print("\nSaving model...")
    joblib.dump(model, 'backend/iris_model.joblib')

    model_info = {
        'feature_names': feature_names,
        'target_names': target_names.tolist(),
        'accuracy': accuracy
    }
    joblib.dump(model_info, 'backend/model_info.joblib')

    print("Model saved successfully!")
    return model, model_info

if __name__ == "__main__":
    train_iris_model()
