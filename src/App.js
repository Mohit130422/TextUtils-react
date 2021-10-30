//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
    const [mode, setMode] = useState('light');//whether dark mode is on/off
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }


    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark Mode has been ON", "success");
            document.title = "TextUtils-DarkMode";
            // setInterval(() => {
            //     document.title="TextUtils is amazing app";
            // }, 2000);
            // setInterval(() => {
            //     document.title="install this amazing app";
            // }, 1500);
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been On", "success");
            document.title = "TextUtils-LightMode";
        }
    }
    return (
        //<Router>
            <div>
                <Navbar title="React Text Utils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                {/* <Navbar/> */}
                <div className="container">
                    {/* <Switch>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/"> */}
                            <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
                        {/* </Route>
                    </Switch> */}
                </div>
            </div>
        //</Router>
    );
}

export default App;