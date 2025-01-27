import React from 'react';
import PropTypes from 'prop-types';
import { showToast } from './ToastServices';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const handleClick = () => {
    showToast('This is a success message', 'success');
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">Raheel Noor</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li>
            <Link className='nav-link' to="footer">Footer</Link>
          </li>
          <li>
            <Link className="nav-link" to="about">About</Link>
          </li>
          <li>
            <Link className='nav-link' to="contact">Contact</Link>
          </li>
          <button onClick={handleClick}>Show Success Toast</button>
        </ul>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={handleClick}
            onChange={props.toggleMode} // Attach the toggleMode function
            checked={props.mode === 'dark'} // Set the initial state of the switch
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

// PropTypes validation
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
