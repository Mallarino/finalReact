import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
        <div className='text-center'>
            <h1>PAGINA NO ENCONTRADA</h1>
            <Link to={"/"} className='btn btn-success'>Regresar a inicio</Link>
        </div>
    </>
    
  )
}

export default NotFound