import React, { Component } from 'react'
import '../Intro/intro.css'
import profileImg from '../../assets/Tshiamo Mamba.png'
import { Link } from 'react-scroll';
import hireImg from '../../assets/hireMee.png'

function Intro(){
  
    return (
      <section className='intro'>
        <img src= {profileImg} alt='Tshiamo' className='profileImg'></img>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Tshiamo Mamba</span><br/> <span className='introRole'>Developer and Technician</span></span>
            <p className='introPara'>Passionate technologist skilled in merging software innovation with robust<br /> IT support to solve complex challenges. Proficient in Python, Java, C++, C#, <br />Html & Css, JavaScript, and with knowledge of modern frameworks <br />like Angular, ReactJS and .Net. Adept at designing scalable industrial systems, <br />intuitive web applications, and providing seamless technical support <br />to empower teams and end-users.</p>
            <Link className='hire'><button className='hireMe'><img src={hireImg} className='hireImg'></img> HIRE ME</button></Link>
        </div>
      </section>
    )
  
}
export default Intro;
