import React, { useState } from "react";
import "./App.css";

export default function TemperatureConverter() {
  // 1. STATE: We create two state variables to hold our temperatures
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // 2. STATE UPDATES & LOGIC: Function to handle Celsius input
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value); // Update Celsius state

    if (value !== "") {
      // Convert to Fahrenheit and update state (Formula: (C * 9/5) + 32)
      const converted = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(converted.toFixed(2)); 
    } else {
      setFahrenheit(""); // Clear if input is empty
    }
  };

  // 2. STATE UPDATES & LOGIC: Function to handle Fahrenheit input
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value); // Update Fahrenheit state

    if (value !== "") {
      // Convert to Celsius and update state (Formula: (F - 32) * 5/9)
      const converted = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(converted.toFixed(2));
    } else {
      setCelsius(""); // Clear if input is empty
    }
  };

  // 3. USER INPUT & RESULT DISPLAY: The UI
  return (
    <div className="converter-container">
      <h2>Temperature Converter</h2>
      
      <div className="input-group">
        <label>Celsius (°C):</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
        />
      </div>

      <h3 className="equals-sign">=</h3>

      <div className="input-group">
        <label>Fahrenheit (°F):</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
}