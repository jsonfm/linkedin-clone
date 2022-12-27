import React from 'react'
import "./index.css";

export function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
        {Icon && <Icon  style={{color}} />}
        <h4>
            {title}
        </h4>
    </div>
  )
}
