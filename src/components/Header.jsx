import React from "react"
import { Link } from "react-router-dom"
export default function Header() {
    return ( 
      <>  
      <div className="head-img"></div>
      <div className="p-3 bg-matte">
            <nav className="">
            <Link style={{"font-family": 'Lora'}} className="m-auto headtext head-font text-decoration-none" to="/">Recipe Engine<i className="fa-solid fa-bowl-food px-3"></i></Link>
          </nav> 
      </div>
    </>
   )
}