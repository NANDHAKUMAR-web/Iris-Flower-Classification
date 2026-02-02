import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="page-title">About the Project</h1>

      <section className="section">
        <h2>The Iris Dataset</h2>
        <p>
          The Iris flower dataset is a multivariate dataset introduced by British statistician
          and biologist Ronald Fisher in 1936. It is widely used in machine learning and statistics
          as a benchmark dataset for classification algorithms.
        </p>
        <p>
          The dataset contains 150 samples of iris flowers, with 50 samples from each of three species:
        </p>
        <div className="species-grid">
          <div className="species-card">
            <h3>Iris Setosa</h3>
            <p>Characterized by smaller petals and distinct features</p>
          </div>
          <div className="species-card">
            <h3>Iris Versicolor</h3>
            <p>Medium-sized petals with intermediate characteristics</p>
          </div>
          <div className="species-card">
            <h3>Iris Virginica</h3>
            <p>Larger petals and longer measurements</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Features Used for Classification</h2>
        <p>Each iris flower is measured using four key features:</p>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-label">1. Sepal Length</div>
            <p>The length of the sepal (outer part of the flower) measured in centimeters</p>
          </div>
          <div className="feature-item">
            <div className="feature-label">2. Sepal Width</div>
            <p>The width of the sepal measured in centimeters</p>
          </div>
          <div className="feature-item">
            <div className="feature-label">3. Petal Length</div>
            <p>The length of the petal (inner part of the flower) measured in centimeters</p>
          </div>
          <div className="feature-item">
            <div className="feature-label">4. Petal Width</div>
            <p>The width of the petal measured in centimeters</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Machine Learning Algorithms</h2>
        <p>
          This project employs multiple classification algorithms to predict the iris species.
          The models are trained on historical data and can achieve high accuracy rates.
        </p>
        <div className="algorithms-grid">
          <div className="algorithm-card">
            <h3>Random Forest</h3>
            <p>
              An ensemble learning method that constructs multiple decision trees and merges
              them together for more accurate and stable predictions
            </p>
          </div>
          <div className="algorithm-card">
            <h3>Logistic Regression</h3>
            <p>
              A statistical model that uses a logistic function to model the probability
              of a certain class or event
            </p>
          </div>
          <div className="algorithm-card">
            <h3>Support Vector Machine</h3>
            <p>
              A supervised learning model that analyzes data for classification by finding
              the optimal hyperplane that separates different classes
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Technologies Used</h2>
        <div className="tech-category">
          <h3>Frontend Technologies</h3>
          <ul>
            <li><strong>React:</strong> Modern JavaScript library for building user interfaces</li>
            <li><strong>Vite:</strong> Next-generation frontend tooling for fast development</li>
            <li><strong>CSS3:</strong> For responsive and attractive styling</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Backend Technologies</h3>
          <ul>
            <li><strong>Python:</strong> Programming language for machine learning</li>
            <li><strong>FastAPI:</strong> Modern, fast web framework for building APIs</li>
            <li><strong>Scikit-learn:</strong> Machine learning library for Python</li>
          </ul>
        </div>
        <div className="tech-category">
          <h3>Machine Learning</h3>
          <ul>
            <li><strong>Pandas:</strong> Data manipulation and analysis</li>
            <li><strong>NumPy:</strong> Numerical computing with arrays</li>
            <li><strong>Joblib:</strong> Model serialization and loading</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Real-World Applications</h2>
        <p>
          While this project focuses on iris flower classification, the techniques and algorithms
          used here have broader applications in various fields:
        </p>
        <ul className="applications-list">
          <li>Medical diagnosis and disease prediction</li>
          <li>Image recognition and computer vision</li>
          <li>Customer segmentation in marketing</li>
          <li>Fraud detection in financial systems</li>
          <li>Quality control in manufacturing</li>
          <li>Species identification in biology</li>
        </ul>
      </section>

      <section className="section">
        <h2>Learning Outcomes</h2>
        <div className="outcomes-grid">
          <div className="outcome-card">
            <h4>Understanding ML Basics</h4>
            <p>Learn fundamental machine learning concepts through a practical example</p>
          </div>
          <div className="outcome-card">
            <h4>Data Preprocessing</h4>
            <p>Experience how raw data is prepared and processed for model training</p>
          </div>
          <div className="outcome-card">
            <h4>Model Evaluation</h4>
            <p>Understand how to assess model performance and accuracy</p>
          </div>
          <div className="outcome-card">
            <h4>Full-Stack Integration</h4>
            <p>See how frontend, backend, and ML components work together</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
