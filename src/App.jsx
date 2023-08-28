import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Showlist from './assets/list';
import Property from './property';


// let list = [{ id: 1, name: "egg", qyt: 2, complete: false },
//   { id: 2, name: "milk", qyt: 3, complete: true },
//   { id: 3, name: "lemon", qyt: 5, complete: true },
//   { id: 4, name: "apple", qyt: 9, complete: false }];
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];

function App() {

  return (
    <>
      <h1>hi</h1>
      {/* <Showlist list={list} /> */}
      <Property array={properties}/>
    </>
  )
}

export default App
