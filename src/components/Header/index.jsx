import React from 'react';
import { HeaderOption } from "../HeaderOption";
import SearchIcon from '@mui/icons-material/Search';
import "./index.css";


export function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
          alt="linkedin-logo" 
        />
        <div className="header__search">
          <SearchIcon/>
          <input
            type="text"
          />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home"/>
      </div>
    </div>
  )
}
