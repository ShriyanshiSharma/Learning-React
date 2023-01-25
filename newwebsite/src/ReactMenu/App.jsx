import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import {Route , Routes ,Navigate} from 'react-router-dom';

const App = () => {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/sevice' element={<Service/>}/>
            <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </>
    );
}
export default App;