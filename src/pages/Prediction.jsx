import { useState } from 'react';
import './Prediction.css';
import axios from "axios";

function Prediction() {
  const [formData, setFormData] = useState({
    sepalLength: '',
    sepalWidth: '',
    petalLength: '',
    petalWidth: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const validateForm = () => {

    const { sepalLength, sepalWidth, petalLength, petalWidth } = formData;

    const hasImage = image !== null;

    const hasValues =
      sepalLength &&
      sepalWidth &&
      petalLength &&
      petalWidth;

  // ❌ Nothing provided
    if (!hasImage && !hasValues) {
      setError('Upload an image OR enter all measurements');
      return false;
    }

    // ❌ Both provided
    if (hasImage && hasValues) {
      setError('Please use only ONE method: image or measurements');
      return false;
    }

  // ✅ If values method → validate numbers
  if (hasValues) {
    const sl = parseFloat(sepalLength);
    const sw = parseFloat(sepalWidth);
    const pl = parseFloat(petalLength);
    const pw = parseFloat(petalWidth);

      if ([sl, sw, pl, pw].some(v => isNaN(v))) {
        setError('All measurements must be valid numbers');
        return false;
      }

      if ([sl, sw, pl, pw].some(v => v < 0)) {
        setError('Measurements cannot be negative');
        return false;
      }

      if ([sl, sw, pl, pw].some(v => v > 10)) {
        setError('Measurements seem unusually large (max 10 cm)');
        return false;
      }
    }

  // ✅ Image-only is valid → no numeric validation
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formDataToSend = new FormData();
      
      if (!image){
        formDataToSend.append('sepal_length', formData.sepalLength);
        formDataToSend.append('sepal_width', formData.sepalWidth);
        formDataToSend.append('petal_length', formData.petalLength);
        formDataToSend.append('petal_width', formData.petalWidth);
      }
      if (image) {
        formDataToSend.append('image', image);
      }

      const response = await axios.post('http://localhost:8000/api/predict',
                     formDataToSend,
                      {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                      }
               );


      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        err.message ||
        "Prediction failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      sepalLength: '',
      sepalWidth: '',
      petalLength: '',
      petalWidth: ''
    });
    setImage(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
  };

  const getSpeciesColor = (species) => {
    const colors = {
      'setosa': '#667eea',
      'versicolor': '#48bb78',
      'virginica': '#f6ad55'
    };
    return colors[species.toLowerCase()] || '#667eea';
  };

  return (
    <div className="prediction-container">
      <h1 className="page-title">Flower Prediction</h1>

      <div className="prediction-layout">
        <div className="form-section">
          <div className="card">
            <h2>Enter Flower Measurements</h2>
            <form onSubmit={handleSubmit}>
              <div className="image-upload-section">
                <label className="image-upload-label">
                  Upload Flower Image (Optional)
                </label>
                <div className="image-upload-area">
                  {imagePreview ? (
                    <div className="image-preview">
                      <img src={imagePreview} alt="Flower preview" />
                      <button
                        type="button"
                        className="remove-image"
                        onClick={() => {
                          setImage(null);
                          setImagePreview(null);
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label className="upload-placeholder">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                      />
                      <div className="upload-icon">📷</div>
                      <p>Click to upload flower image</p>
                      <span className="upload-hint">PNG, JPG up to 5MB</span>
                    </label>
                  )}
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="sepalLength">
                    Sepal Length (cm) <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="sepalLength"
                    name="sepalLength"
                    value={formData.sepalLength}
                    onChange={handleInputChange}
                    placeholder="e.g., 5.1"
                    step="0.1"
                    min="0"
                    max="10"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sepalWidth">
                    Sepal Width (cm) <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="sepalWidth"
                    name="sepalWidth"
                    value={formData.sepalWidth}
                    onChange={handleInputChange}
                    placeholder="e.g., 3.5"
                    step="0.1"
                    min="0"
                    max="10"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="petalLength">
                    Petal Length (cm) <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="petalLength"
                    name="petalLength"
                    value={formData.petalLength}
                    onChange={handleInputChange}
                    placeholder="e.g., 1.4"
                    step="0.1"
                    min="0"
                    max="10"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="petalWidth">
                    Petal Width (cm) <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    id="petalWidth"
                    name="petalWidth"
                    value={formData.petalWidth}
                    onChange={handleInputChange}
                    placeholder="e.g., 0.2"
                    step="0.1"
                    min="0"
                    max="10"
                  />
                </div>
              </div>

              {error && (
                <div className="error-message">
                  <span className="error-icon">⚠</span>
                  {error}
                </div>
              )}

              <div className="button-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Predicting...
                    </>
                  ) : (
                    'Predict Flower Type'
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="result-section">
          {result ? (
            <div className="card result-card">
              <h2>Prediction Result</h2>
              <div className="result-content">
                <div className="prediction-badge" style={{ background: getSpeciesColor(result.prediction) }}>
                  <div className="species-icon">🌸</div>
                  <div className="species-name">{result.prediction}</div>
                </div>

                <div className="confidence-section">
                  <h3>Confidence Score</h3>
                  <div className="confidence-bar-container">
                    <div
                      className="confidence-bar"
                      style={{
                        width: `${result.confidence * 100}%`,
                        background: getSpeciesColor(result.prediction)
                      }}
                    ></div>
                  </div>
                  <div className="confidence-value">{(result.confidence * 100).toFixed(2)}%</div>
                </div>

                {result.probabilities && (
                  <div className="probabilities-section">
                    <h3>Class Probabilities</h3>
                    <div className="probability-list">
                      {Object.entries(result.probabilities).map(([species, prob]) => (
                        <div key={species} className="probability-item">
                          <div className="probability-label">
                            <span className="species-dot" style={{ background: getSpeciesColor(species) }}></span>
                            {species.charAt(0).toUpperCase() + species.slice(1)}
                          </div>
                          <div className="probability-bar-container">
                            <div
                              className="probability-bar"
                              style={{
                                width: `${prob * 100}%`,
                                background: getSpeciesColor(species)
                              }}
                            ></div>
                          </div>
                          <div className="probability-value">{(prob * 100).toFixed(1)}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="card placeholder-card">
              <div className="placeholder-content">
                <div className="placeholder-icon">🔍</div>
                <h3>Awaiting Prediction</h3>
                <p>Fill in the flower measurements and click predict to see the results</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Prediction;
