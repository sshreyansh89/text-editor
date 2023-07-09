import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/textarea';
import React, { useState } from 'react';






function App() {

  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a1031";
      document.body.style.color = "white";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }


  return (
    <>
      <Navbar title="TEXT-EDITOR" onToggle={toggleMode} tmode={mode} about="About" />
      <div className="container my-4">

 <TextArea bgc={mode} heading="Enter the text to analyze" />
    </div>

    </>
  );
}

export default App;
