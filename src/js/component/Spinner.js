import React from 'react';

function Spinner() {
    return (
        <div>
            <div className="spinner-border text-danger" role="status">
                <span className="visual-hidden">Loading...</span>
            </div>
            
        </div>
    );
}

export default Spinner;
