import React from "react";
import './ilafyu.css'; // Make sure to import the CSS file

const Ilafyu = () => {
    return (
        <div className="flex-container">
            <div className="flex-item">
                <img src="image1.jpg" alt="Image 1" />
            </div>
            <div className="flex-item">
                <img src="image2.jpg" alt="Image 2" />
            </div>
            <div className="flex-item">
                <img src="image3.jpg" alt="Image 3" />
            </div>
        </div>
    );
}

export default Ilafyu;
