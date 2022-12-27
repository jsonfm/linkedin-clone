import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import { InputOption } from "../InputOption";
import "./index.css";


export function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input
                        type="text"
                    />
                    <button
                        type="submit"
                    >
                        send
                    </button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption
                    Icon={ImageIcon}
                    title="Photo"
                    color="#70B5F9"
                />
                <InputOption
                    Icon={SubscriptionsIcon}
                    title="Video"
                    color="#E7A33E"
                />
                <InputOption
                    Icon={EventIcon}
                    title="Event"
                    color="#C0CBCD"
                />
                <InputOption
                    Icon={CalendarViewDayIcon}
                    title="Write an Article"
                    color="#7FC15E"
                />
            </div>
        </div>
    </div>
  )
}