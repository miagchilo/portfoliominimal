/* eslint-disable */
import '../CSS/animation.css'
import '../CSS/navbar.scss'
import React from 'react'
const Navbar=()=>{

    return(
    
        <div class="navbar">
  <h1>MIAGCHILO<div id="nav-icon1" onClick={()=>{
    let element=document.getElementById("nav-icon1")
    let navs=document.getElementById("navs")
    let hero=document.getElementById("hero")
    
    if(element.className==="nav-icon1"){
      element.className='nav-icon1 open'
      navs.className="navigation-open"
      hero.style.opacity=0
      
    }
    else{
      element.className='nav-icon1'
      navs.className='navigation-close'
      hero.style.opacity=1
    }
  }}>
  <span></span>
  <span></span>
  <span></span>
</div> </h1>
  <ul id="navs" className="navigation-close">
    <li><a href="/">Home</a></li>
    <li><a  href="mailto:stasmiagchilo@gmail.com">Contact</a></li>
    <li><a href="https://tictactoe-plum.vercel.app/">Play</a></li>
    <li><a href="https://react2final.vercel.app/">Next.js</a></li>
    <li><a href="https://webglsceneandmodel.vercel.app/">3D</a></li>
  </ul>
</div>
    )
}

export default Navbar