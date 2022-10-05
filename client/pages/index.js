import React from 'react';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="center">
    <h1>Добро пожаловать!</h1>
   <h4>Здесь собраны лучшие треки!</h4>
    </div>
  <style jsx>
  {`
  .center {
      margin-top:150px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      
     
    `
    
  }

  </style>
    </>
  )
}
