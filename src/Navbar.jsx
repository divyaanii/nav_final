import React from "react"

export default function Navbar(){
  return (
  <nav className="nav">
    <a href="/" className="site-title">SUBWAY</a>
    <ul>
      <li className="active">
      <a href="/pricing">Home</a>
      </li>
      <li className="active">
      <a href="/about">About</a>
      </li>
      <li className="active">
      <a href="/about">Services</a>
      </li>
      <li className="active">
      <a href="/about">Contact</a>
      </li>
    </ul>
  </nav>
  )
}
