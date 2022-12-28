import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { InputOption } from "../InputOption";
import "./index.css";


export function Post({ name, description, message, photoUrl, Icon }){
    return(
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div>
                    <h4>Full name</h4>
                    <p>Some text</p>
                </div>
            </div>
            <div className="post__body">
                <p>
                    This is my body.
                </p>
            </div>
            <div className="post__buttons">
                <InputOption
                    Icon={ThumbUpOffAltIcon}
                    title="Like"
                />
                <InputOption
                    Icon={MessageIcon}
                    title="Comment"
                />
                <InputOption
                    Icon={ShareIcon}
                    title="Share"
                />
                <InputOption
                    Icon={SendIcon}
                    title="Send"
                />
            </div>
        </div>
    )
}