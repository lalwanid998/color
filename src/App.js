import { useState } from "react";

function App() {
    const [bgColor, setBgColor] = useState("");

    const handleClick = (color) => {
        localStorage.setItem("color", color);
        setBgColor(color);
    };

    return (
        <div style={{backgroundColor: localStorage.getItem("color"), height: 500 }}>
            <button onClick={() => handleClick("red")}>Red</button>
            <button onClick={() => handleClick("blue")}>Blue</button>
            <button onClick={() => handleClick("yellow")}>Yellow</button>
        </div>
    );
}
export default App;