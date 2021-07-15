import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";




const App = () => {
    return (
        <div>
        <Navbar />
        <Home />    
        </div>
    );
};

export default App;