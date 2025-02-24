import React from 'react'
import { useState } from 'react'
import './Pizza.css'
import pizzas from '../data'
export default function Pizza({pizza}) {
    const [quantity,setquantity]=useState(1);
    const [varient,setvarient]=useState('Small');
  return (
    <div>
        
      <h1>{pizza.name}</h1>
      <img src={pizza.image} style={{height:'200px', width:'200px'}}/>
      <div className='flex-container'>
        <div className='varient'>
            <p>Varients</p>
            <select value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {pizza.varients.map(varient=>{
                    return <option value={varient}>{varient}</option>
                })}
            </select>
        </div>
            <div className='quantity'>
            <p>Quantity</p>
            <select value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                {[...Array(10).keys()].map((x ,i)=>{
                    return <option value={i+1}>{i+1}</option>
                })}
            </select>
            </div>
            </div>
        <div className='flex-container'>
            <div className='prices'>
            <h1>Price: {pizza.prices[0][varient]*quantity} Rs</h1>
            
            </div>

            <div className='carts'>
           <button className='btn'>Add To Cart</button>
            
            </div>
            </div>
    </div>
  )
}
