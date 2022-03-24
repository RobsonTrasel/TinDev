import React from "react";
import './Login.css'
import logo from '../assets/logo.svg'

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="TindDev"/>
                <input
                    placeholder="Digite seu usuario no GitHub"
                />
                <button type="submit">Enviar</button>
            </form>
            
        </div>

        
    )
}

