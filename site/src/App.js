import React from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Home from "./components/Home";
import Footer from "./components/Footer";

import './style/App.scss';
import './style/header.scss';
import './style/home.scss';
import './style/footer.scss';
import './style/contact.scss';
import './style/mediaquery.scss';

const App = () => {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/service" element={<Service/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}
export default App;