import React from 'react'
import './Homescrene.css'
import pizzas from '../data'
import Pizza from '../components/Pizza'
export default function Homescrene() {
  return (
    <div>
        <div className='row'>
            {pizzas.map(pizza=>{
                return<div>
                    <Pizza pizza={pizza}/>
                </div>
            })}
        </div>
    </div>
  )
}
