import React from 'react';
import {Route , Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contant';
import Home from './Home';
import Menu from './Menu';
import User from './User';


const App = () => {
    return(
        <>
        <Menu/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/user/:name/:last' element={<User/>}/>
            <Route path='/user/:name' element={<User/>}/>

        </Routes>
        </>
    );
}
export default App;