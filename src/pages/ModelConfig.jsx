import './ModelConfig.css';

function ModelConfig() {
  return (
    <div className="model-config-container">
      <h1 className="page-title">Model & API Configuration</h1>

      <section className="info-card">
        <h2>Model Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Model Type:</span>
            <span className="info-value">Random Forest Classifier</span>
          </div>
          <div className="info-item">
            <span className="info-label">Training Accuracy:</span>
            <span className="info-value accuracy-high">97.5%</span>
          </div>
          <div className="info-item">
            <span className="info-label">Dataset Size:</span>
            <span className="info-value">150 samples</span>
          </div>
          <div className="info-item">
            <span className="info-label">Number of Classes:</span>
            <span className="info-value">3 (Setosa, Versicolor, Virginica)</span>
          </div>
          <div className="info-item">
            <span className="info-label">Features:</span>
            <span className="info-value">4 (Sepal & Petal measurements)</span>
          </div>
          <div className="info-item">
            <span className="info-label">Algorithm:</span>
            <span className="info-value">Ensemble Learning (Random Forest)</span>
          </div>
        </div>
      </section>

      <section className="info-card">
        <h2>Input Features</h2>
        <p className="section-description">
          The model requires the following four measurements to make a prediction:
        </p>
        <div className="features-table">
          <div className="table-header">
            <div>Feature Name</div>
            <div>Unit</div>
            <div>Typical Range</div>
            <div>Description</div>
          </div>
          <div className="table-row">
            <div className="feature-name">Sepal Length</div>
            <div>cm</div>
            <div>4.3 - 7.9</div>
            <div>Length of the outer leaf</div>
          </div>
          <div className="table-row">
            <div className="feature-name">Sepal Width</div>
            <div>cm</div>
            <div>2.0 - 4.4</div>
            <div>Width of the outer leaf</div>
          </div>
          <div className="table-row">
            <div className="feature-name">Petal Length</div>
            <div>cm</div>
            <div>1.0 - 6.9</div>
            <div>Length of the inner petal</div>
          </div>
          <div className="table-row">
            <div className="feature-name">Petal Width</div>
            <div>cm</div>
            <div>0.1 - 2.5</div>
            <div>Width of the inner petal</div>
          </div>
        </div>
      </section>

      <section className="info-card">
        <h2>API Endpoint Details</h2>
        <div className="api-section">
          <div className="api-detail">
            <span className="api-label">Method:</span>
            <span className="api-badge method-post">POST</span>
          </div>
          <div className="api-detail">
            <span className="api-label">Endpoint:</span>
            <code className="api-code">/api/predict</code>
          </div>
          <div className="api-detail">
            <span className="api-label">Content-Type:</span>
            <code className="api-code">multipart/form-data</code>
          </div>
        </div>

        <div className="api-subsection">
          <h3>Request Parameters</h3>
          <div className="code-block">
            <pre>{`{
  "image": File (optional),
  "sepal_length": float (required),
  "sepal_width": float (required),
  "petal_length": float (required),
  "petal_width": float (required)
}`}</pre>
          </div>
        </div>

        <div className="api-subsection">
          <h3>Response Format</h3>
          <div className="code-block">
            <pre>{`{
  "prediction": string,
  "confidence": float,
  "probabilities": {
    "setosa": float,
    "versicolor": float,
    "virginica": float
  }
}`}</pre>
          </div>
        </div>

        <div className="api-subsection">
          <h3>Example Response</h3>
          <div className="code-block example">
            <pre>{`{
  "prediction": "Iris-setosa",
  "confidence": 0.98,
  "probabilities": {
    "setosa": 0.98,
    "versicolor": 0.01,
    "virginica": 0.01
  }
}`}</pre>
          </div>
        </div>
      </section>

      <section className="info-card">
        <h2>How It Works</h2>
        <div className="workflow-explanation">
          <div className="workflow-step-detail">
            <div className="step-icon">1</div>
            <div className="step-text">
              <h3>Data Input</h3>
              <p>
                You provide the four flower measurements (and optionally an image).
                The system validates that all values are within expected ranges.
              </p>
            </div>
          </div>
          <div className="workflow-step-detail">
            <div className="step-icon">2</div>
            <div className="step-text">
              <h3>Preprocessing</h3>
              <p>
                The input values are normalized and formatted to match the training data structure.
                This ensures consistent predictions regardless of input variations.
              </p>
            </div>
          </div>
          <div className="workflow-step-detail">
            <div className="step-icon">3</div>
            <div className="step-text">
              <h3>Model Prediction</h3>
              <p>
                The Random Forest model processes the data through multiple decision trees.
                Each tree votes on the predicted class, and the majority wins.
              </p>
            </div>
          </div>
          <div className="workflow-step-detail">
            <div className="step-icon">4</div>
            <div className="step-text">
              <h3>Result & Confidence</h3>
              <p>
                The system returns the predicted flower species along with confidence scores
                for each possible class, giving you insight into the model's certainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-card note-card">
        <h2>Important Notes</h2>
        <ul className="notes-list">
          <li>All measurement values should be in centimeters (cm)</li>
          <li>Values outside typical ranges may result in lower confidence scores</li>
          <li>The image upload is optional and used for display purposes only</li>
          <li>The model is trained on the classic Iris dataset with high accuracy</li>
          <li>Predictions are made in real-time with minimal latency</li>
        </ul>
      </section>
    </div>
  );
}

export default ModelConfig;
