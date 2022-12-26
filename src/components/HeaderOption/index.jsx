import React from 'react'
import "./index.css";

export function HeaderOption({ title, Icon }) {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        <h3 className="headerOption__title">{ title }</h3>
    </div>
  )
}