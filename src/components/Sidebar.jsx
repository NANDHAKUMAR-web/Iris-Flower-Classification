import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">🌸</div>
        <h2 className="sidebar-title">Iris Classifier</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} end>
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Home</span>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">📚</span>
          <span className="nav-text">About Project</span>
        </NavLink>

        <NavLink to="/model" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Model & API</span>
        </NavLink>

        <NavLink to="/predict" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <span className="nav-icon">🔮</span>
          <span className="nav-text">Prediction</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Machine Learning</p>
        <p>Classification System</p>
      </div>
    </div>
  );
}

export default Sidebar;
