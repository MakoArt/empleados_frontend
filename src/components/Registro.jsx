import React,{useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'


export default function Registro() {
    
    const[nombre,setNombre]=useState('')
    const[correo,setCorreo]=useState('')
    const[contrasena,setContrasena]=useState('')
    
    const registro=async(e)=>{
        e.preventDefault()
        const usuario={nombre,correo,contrasena}
        const respuesta=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/jefe/crear`,usuario)
        const mensaje=respuesta.data.mensaje 
        
        if(mensaje!=='Bienvenido'){
            Swal.fire({
                position:'top-end',
                icon:'error',
                title:'Guardado Incorrecto',
                showConfirmButton:false,
                timer:1500
            })
        }else{
            const token=respuesta.data.token 
            const nombre=respuesta.data.nombre 
            const idUser=respuesta.data.id
            sessionStorage.setItem('token',token)
            sessionStorage.setItem('nombre',nombre)
            sessionStorage.setItem('idusuario',idUser)
            window.location.href='/'
            
            Swal.fire({
                position:'top-end',
                icon:'success',
                title:'Guardado correcto',
                showConfirmButton:false,
                timer:1500
        })
        
    }
    } 
    
    return (
        <>

        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center">
                            <i className="da fas-user-plus">

                            </i>
                        </div>
                        <div className="card-header text-center">
                            <h4><i className="fas fa-user"></i>Inicio de sesión jefe</h4>
                        </div>
                        <div className="card-body">

                        </div>
                        <form onSubmit={registro}>
                            
                            
                            
                            <div className="form-group">
                                <label htmlFor="">Nombre</label>
                                <input type="text" className="form-control" 
                                required onChange={(e)=>setNombre(e.target.value)}/>
                            </div>  


                            <div className="form-group">
                                <label htmlFor="">Correo</label>
                                <input type="email" className="form-control" 
                                required onChange={(e)=>setCorreo(e.target.value)}/>
                            </div>    
                            
                            
                            
                              <div className="form-group">
                                <label htmlFor="">Contraseña</label>
                                <input type="password" className="form-control" 
                                required onChange={(e)=>setContrasena(e.target.value)}/>
                                <input type="submit" className="btn btn-primary btn-block"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
