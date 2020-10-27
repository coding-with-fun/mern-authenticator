import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="main_structure">
            <Router>
                <Navbar />
                <Body />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
