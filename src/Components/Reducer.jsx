import React from 'react'
import { useReducer } from 'react'


const agregarTarea ={
type: 'Agregar Tarea'
}

const agregada={
    Estado: 'agregada'
}


const first = (inicial, action={}) =>{
switch (action.type) {
    case 'Agregar Tarea':
        console.log('Agregar Tarea')
        break;

    default:
        break;
}
}

export const Reducer = () => {

const [state, dispatch] = useReducer(first, agregarTarea, third)

dispatch(agregada)
  return (
    <>
    <ul>
        <li>{state}</li>
    </ul>
    </>
  )
}
