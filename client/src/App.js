import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  const[nombre,setNombre] = useState("");
  const[edad,setEdad] = useState(0);
  const[pais,setPais] = useState("");
  const[cargo,setCargo] = useState("");
  const[anios,setAnios] = useState(0);

  const [empleadosList,setEmpleados] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      edad:edad,
      pais:pais,
      cargo:cargo,
      anios:anios
    }).then(()=>{
      getEmpleados();
      alert("Empleado Registrado");
    })
  }
    const getEmpleados = ()=>{
    Axios.get("http://localhost:3001/empleados").then((response)=>{
      setEmpleados(response.data);
    });
  }
  getEmpleados();




  return (
    <div class="container">
    <div className="App">
      <div className='lista'>
          {
            empleadosList.map((val,key)=>{
              return <div className=''> {val.nombre} </div>
            })
          }
      </div>
    </div>
    <div className="card text-center">
    <div className="card-header">
      GESTION DE EMPLEADOS
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre:</span>
          <input type="text" 
          onChange={(event)=>{
          setNombre(event.target.value);
        }} className="form-control" placeholder="Ingrese Nombre" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Edad:</span>
          <input type="number" 
          onChange={(event)=>{
          setEdad(event.target.value);
        }} className="form-control" placeholder="Ingrese Edad" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        
        <label>Pais: <input
        onChange={(event)=>{
          setPais(event.target.value)
        }} type='text'></input> </label>
        <label>Cargo: <input
        onChange={(event)=>{
          setCargo(event.target.value)
        }} type='text'></input> </label>
        <label>Años: <input
        onChange={(event)=>{
          setAnios(event.target.value)
        }} type='number'></input> </label>
      </div>
      <div class="card-footer text-body-secondary">
        <button className='btn btn-success' onClick={add}>Registrar</button>
      </div>
    </div>




  </div>
  );
}

export default App;
