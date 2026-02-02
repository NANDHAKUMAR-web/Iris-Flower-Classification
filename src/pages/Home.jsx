import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="main-title">Iris Flower Classification System</h1>
        <p className="subtitle">Machine Learning Powered Classification</p>
      </div>

      <div className="overview-section">
        <h2>What is Iris Flower Classification?</h2>
        <p>
          The Iris flower dataset is one of the most famous datasets in machine learning and statistics.
          It contains measurements of 150 iris flowers from three different species: Setosa, Versicolor, and Virginica.
        </p>
        <p>
          Each flower is characterized by four features: sepal length, sepal width, petal length, and petal width.
          Using these measurements, our machine learning model can accurately predict which species a flower belongs to.
        </p>
      </div>

      <div className="ml-section">
        <h2>How Machine Learning Powers This Application</h2>
        <p>
          Our system uses advanced machine learning algorithms trained on the Iris dataset.
          The model learns patterns from historical data to make accurate predictions on new flower measurements.
        </p>
        <p>
          You can upload an image of an iris flower and input its measurements to get instant classification results.
        </p>
      </div>

      <div className="workflow-section">
        <h2>Simple Workflow</h2>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Input Data</h3>
              <p>Upload flower image and enter measurements</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>ML Model</h3>
              <p>Process data through trained model</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Prediction</h3>
              <p>Get flower species classification</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Accurate Predictions</h3>
          <p>High accuracy model trained on validated data</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Results</h3>
          <p>Get instant classification results</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Easy to Use</h3>
          <p>Simple interface for everyone</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔬</div>
          <h3>Scientific Approach</h3>
          <p>Based on proven ML algorithms</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
