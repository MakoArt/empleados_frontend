import React,{useState,useEffect} from 'react'

import Axios from 'axios'
import './Index.css'
import Swal from 'sweetalert2'

export default function Index(){

    const[empleados,setEmpleados]=useState([])
    const[nombre,setNombre] =useState('')
    const[apellidos,setApellidos]=useState('')
    const[identificacion,setIdentificacion]=useState('')
    const[puesto,setPuesto]=useState('')
    const[tcontratos,setTcontratos]=useState([])
    const[contratoSelect,setContratoSelect]=useState('')


   useEffect(()=>{
   
      obtenerEmpleados()
      setTcontratos(['Fijo','Temporal','Practicante'])
      setContratoSelect('Fijo') //por defecto
       
   },[])


    const obtenerEmpleados=async()=>{
        const id=sessionStorage.getItem('idusuario')
        const token=sessionStorage.getItem('token')
        const respuesta=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/empleado/listarempleadosjefe/`+id,{

             headers:{'autorizacion':token}

        })
        console.log(respuesta.data)
         setEmpleados(respuesta.data)
    }

     const guardar=async(e)=>{
        console.log(e)
        e.preventDefault()
         
         const usuario={
             
            nombre,
             apellidos,
             identificacion,
             puesto,
             tcontrato:contratoSelect,
             jefe:sessionStorage.getItem('idusuario')
             
         }
         const token=sessionStorage.getItem('token')
         const respuesta=await Axios.post('http://localhost:4000/empleado/crear',usuario,{
             headers:{'autorizacion':token}
         })
         const mensaje=respuesta.data.mensaje
         Swal.fire({
             icon:'success',
             title:mensaje,
             showConfirmationButton:false
         })
         setTimeout(()=>{
             window.location.href='/index'
         },1500)
     }

return(
   <>
    <div>
         <header className="py-2-bg-primary text-white">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6">
                         <h1><i className="fas fa-pencil-alt">Empleados</i></h1>
                     </div>
                 </div>
             </div>
         </header>
    </div>
    
  
  <div className="navbar py-4">
      <div className="container">
          <div className="col-md-3">
               
               <h1>AÑADE EMPLEADOS</h1>
   
          </div>
            <div className="col-md-6 ml-auto">
                <div className="input-group">
                    <input  className="form-control mr-sm-2" type='search' placeholder='buscar...'/>
                </div>
            </div>
      </div>
  </div>

   {/*MODAL*/ }
    
           
                
                  <form action="" onSubmit={guardar}>

                  <label htmlFor="">Nombre</label>
                  <input type="text" className="form-control" required
                   onChange={(e)=>setNombre(e.target.value)}   
                  />
                 
              
              
              
            
                  <label htmlFor="">Apellidos</label>
                  <input type="text" className="form-control" required
                   onChange={(e)=>setApellidos(e.target.value)}   
                  />
        
          
              
              
             
                  <label htmlFor="">Puesto</label>
                  <input type="text" className="form-control" required
                   onChange={(e)=>setPuesto(e.target.value)}   
                  />
          
      
              
              
                  <label htmlFor="">Identificacion</label>
                  <input type="text" className="form-control" required
                   onChange={(e)=>setIdentificacion(e.target.value)}   
                  />
         
              
              
            
                  <label htmlFor="">Tipo de contratop</label>
                  <select name="" id="" className="form" onChange={(e)=>setContratoSelect(e.target.value)}>
                    
                    {
                        
                     tcontratos.map(tcontrato=>(

                         <option key={tcontrato}>
                             {tcontrato}
                         </option>      

                        
                     ))

                    }
                  </select>
    
               
                   <button className="btn btn-primary " type="submit" >Guardar</button>
   
                  
                   </form>
 
               




            

  {/*mOSTRAR EMPLEADOS*/}

 <section>
     <div className="container">
         <div className="row">
             <div className="col-md-12">
                 <div className="card-header">
                     <h4>Empleados de {sessionStorage.getItem('nombre')}</h4>
                 </div>
                 <table className="table table-responsive-lg table-striped">
                     <thead className="thead-dark">
                         <tr>
                             <th>#</th>
                             <th>Nombre</th>
                             <th>Apellidos</th>
                             <th>Identificacion</th>
                             <th>Tipo de contrato</th>
                             <th>Opciones</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             empleados.map((emplead,i)=>(

                                <tr key={emplead._id}>
                                       <td>{i+1}</td>
                                      <td>{emplead.nombre}</td>
                                      <td>{emplead.apellidos}</td>
                                      <td>{emplead.identificacion}</td>
                                      <td>{emplead.tcontrato}</td>
                                       <td>
                                           <button className="btn btn-danger mr-1">Eliminar</button>                      
                                           <button className="btn btn-warning mr-1">Editar</button>
                                       </td>


                                </tr>

        
                             ))
                         }
                     </tbody>
                 </table>
             </div>
         </div>
     </div>
 </section>
  






 
</>
)
}