import React from 'react'

const Componente1 = (props) => {
 

    const aumentar =()=>{
        props.setCount(e=>e+1);

        const valorN = props.count + 1;
        localStorage.setItem('contador',valorN)



    }
    const disminuir =()=>{
        props.setCount(e=>e-1);

        const valorN = props.count - 1;
        localStorage.setItem('contador',valorN)



    }
    const resetear =()=>{
        props.setCount(e=>e*0);

        const valorN = props.count * 0;
        localStorage.setItem('contador',valorN)



    }
    

   



  return (
    <div class='contenedor1'>
        <h3>Contador : {props.count} </h3>
        <button onClick={aumentar} >Aumentar</button>
        <button onClick={disminuir} >Disminuir</button>
        <button onClick={resetear} >Resetear</button>
        
    </div>
  )
}

export default Componente1
