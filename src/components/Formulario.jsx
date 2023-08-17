import "./Formulario.css"
import { useState } from "react"
//import fondo from '../assets/distopic.jpg'
//import fondo2 from '../assets/distopic2.jpg'
//import fondo3 from '../assets/distopic3.jpg'

// eslint-disable-next-line react/prop-types
export function Formulario({setUser}) {
const [nombre, setNombre]= useState("")
const [contraseña, setContraseña]= useState("")
const [error, setError]= useState(false)

const handleSubmit = (e) => {
    e.preventDefault()

    if(nombre ==="" || contraseña ==="") {
        setError(true)
        return
    }
    setError(false)

    setUser([nombre])
}

    return(
        <section className="section-login" >
            <h1 className="rotate-top">Login</h1>
            <form
            className="formulario"
            onSubmit={handleSubmit}
            >
                <h2>Usuario</h2>
                <input 
                type="text" 
                value={nombre}
                onChange={e=> setNombre(e.target.value)}
                />
                <h2>Contraseña</h2>
                <input 
                type="password"
                value={contraseña}
                onChange={e=> setContraseña(e.target.value)}
                />
                <button className="flicker-1">iniciar sesion</button>
                
            </form>
            {error && <p className="text-flicker-in-glow">Todos Los Campos Son Obligatorios</p>}
        </section>
    )
}