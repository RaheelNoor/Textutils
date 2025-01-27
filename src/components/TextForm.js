import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { showToast } from './ToastServices';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text');

    const handleConvertToUppercase = () => {
        setText(text.toUpperCase());
    };
    const handleConvertToLowercase = () => {
        setText(text.toLowerCase());
    }
    // Handle text change
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Copy text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showToast('Text copied successfully!');
    };

    // Clear text
    const handleClear = () => {
        setText('');
    };

    // Count words
    const countWords = () => {
        return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
    };

    // Count characters
    const countCharacters = () => {
        return text.length;
    };

    return (
        <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black',
                    }}
                    rows="8"
                ></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleConvertToUppercase}>Convert Into Captial</button>
            <button className='btn btn-secondary mx-1' onClick={handleConvertToLowercase}>Convert Into Smaller</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-secondary mx-1" onClick={handleClear}>Clear Text</button>
            <div className="my-3">
                <h4>Your Text Summary</h4>
                <p>{countWords()} words and {countCharacters()} characters</p>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
};
