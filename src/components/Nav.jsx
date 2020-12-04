/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {

 const salir=()=>{
   sessionStorage.clear()
   window.location.href='/'
 }
   



    return (
        <>
            
    
            <ul className="nav bg-dark">
  <li className="nav-item ">
    <Link className="nav-link active" to="#">Inicio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#"><i className="fas fa-user"></i> Bienvenido</Link>

  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#"><i className="fas fa-user-times" onClick={()=>salir()}></i> Salir</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="/Registrar" tabindex="-1" aria-disabled="true"><i className="fas fa-user-plus"></i>Registrar</Link>
  </li>
</ul>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    )
}
