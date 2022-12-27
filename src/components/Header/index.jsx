import React from 'react';
import { HeaderOption } from "../HeaderOption";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={MessageIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption
          avatar=" "
          title="me"
        />
      </div>
    </div>
  )
}
