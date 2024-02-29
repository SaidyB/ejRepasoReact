import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {

  //VALIDACIONES

  const validateUserName= (userName)=>{
    const sinEspacios= userName.trim();
    if (sinEspacios.length>5){
      return true;
    } else{
      return false;
    }
  }

  const validateUserCareer= (userCareer)=>{
    const sinEspacios= userCareer.trim();
    if (sinEspacios.length>5){
      return true;
    } else{
      return false;
    }  
  }

  //States

  const [userName, setUserName]= useState(" ");
  const [userCareer, setUserCareer]= useState(" ");

  const [mostrar, setMostrar]= useState(false);

  //Manjeadores de eventos

  const onSubmitForm= (e) =>{
    e.preventDefault();
    if (!validateUserCareer(userCareer) || !validateUserName(userName)){
      alert('Por favor chequea que la información sea correcta')
      setMostrar(false)
      
    }else{
      setMostrar(true)
      alert('Gracias  por su aporte')
      
      
      
      
    }
  }

  const onChangeName= (e) => setUserName(e.target.value)
  const onChangeCareer= (e) => setUserCareer(e.target.value)


  return (
    <>
      <div>
        <h1>¿Qué carrera estudias?</h1>
        <form onSubmit={onSubmitForm}>
          <input
          type="text"
          placeholder='Ingrese su nombre'
          value={userName}
          onChange={onChangeName}
          />
          <input
          type="text"
          placeholder="Ingrese su carrera"
          value={userCareer}
          onChange={onChangeCareer}/>
          
          <button type='submit'>Enviar</button>


        </form>

        {/* {<Card key={1} mostrar={mostrar} nombre={nombre} carrera={carrera}/>} */}

        

        


      </div>
      
      
    </>
  )
}

export default App
