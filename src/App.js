import React, { useState } from "react";
import "./App.css"; // Import CSS for styling

const MatrixGrid = () => {
    const [boxes, setBoxes] = useState(Array(9).fill("lightgray"));
    const [clickedOrder, setClickedOrder] = useState([]);

    const handleClick = (index) => {
        if (boxes[index] === "lightgray") {
            const newBoxes = [...boxes];
            newBoxes[index] = "green";
            setBoxes(newBoxes);
            setClickedOrder([...clickedOrder, index]);

            // If it's the last box clicked (all 9 clicked)
            if (clickedOrder.length === 8) {
                animateToOrange();
            }
        }
    };

    const animateToOrange = () => {
        clickedOrder.forEach((index, i) => {
            setTimeout(() => {
                setBoxes((prevBoxes) => {
                    const newBoxes = [...prevBoxes];
                    newBoxes[index] = "orange";
                    return newBoxes;
                });
            }, i * 300);
        });
    };

    // 🔹 Reset function to restore all boxes to light gray
    const resetGrid = () => {
        setBoxes(Array(9).fill("lightgray"));
        setClickedOrder([]);
    };

    return (
        <div className="container">
            <h1>Click the Boxes!</h1>
            <div className="grid">
                {boxes.map((color, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{ backgroundColor: color }}
                        onClick={() => handleClick(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <button className="reset-btn" onClick={resetGrid}>Reset</button>
        </div>
    );
};

export default function App() {
    return <MatrixGrid />;
}
