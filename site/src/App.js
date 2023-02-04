import React from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import './style/App.scss';
import './style/header.scss';

const App = () => {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route>
                    
                </Route>
            </Routes>
        </Router>
    );
}
export default App;