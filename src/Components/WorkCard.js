import { NavLink } from "react-router-dom"
import "./WorkCard.css"
// import Props1 from "../assets/img.jpg"
import React from 'react'

const WorkCard = (props) => {
    

  return (
    <div className="project-card">
            <img src={props.imgsrc} alt=""/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view}
                    className="btn">View</NavLink>
                    <NavLink to="URL.com"
                    className="btn">Source</NavLink>
                </div>
            </div>
        </div>
  )
}

export default WorkCard
