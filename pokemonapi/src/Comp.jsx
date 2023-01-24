import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const Comp = () => {
    const [ num,setNum] = useState();
    const [name,setName] = useState();
    const [moves,setMoves] = useState();


    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });
    return(
        <>
        <h1>You choose {num}</h1>
        <h1>My name is {name}</h1>
        <h1>I have {moves} moves</h1>


        <select value = {num} onChange = {(event) => {
            setNum(event.target.value);
        }} >
            <option value ={1}>1</option>
            <option value ={2}>2</option>
            <option value ={3}>3</option>
            <option value ={4}>4</option>
            <option value ={5}>5</option>
            <option value ={6}>6</option>
            <option value ={7}>7</option>
            <option value ={8}>8</option>
            <option value ={9}>9</option>
            <option value ={10}>10</option>
            <option value ={11}>11</option>
            <option value ={12}>12</option>
            <option value ={13}>13</option>
            <option value ={25}>25</option>


        </select>
        </>
    );
};
export default Comp;

