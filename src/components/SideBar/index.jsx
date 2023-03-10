import React from 'react';
import { Avatar } from "@mui/material";
import "./index.css";


export function SideBar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img
                src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
            />
            <Avatar 
                class="sidebar__avatar"
                src=""
            />
            <h2>
                Jason F. Macas
            </h2>
            <h4>
                franciscomacas3@gmail.com
            </h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who view you: </p>
                <p className="sidebar__statNumber">
                    2,530
                </p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post: </p>
                <p className="sidebar__statNumber">
                    2,530
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent: </p>
            {recentItem('reactjs')}
            {recentItem('python')}
            {recentItem('fullstack')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}
