import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Main = () => {
    return (
        <Container>
            <ShareBox>
                <div className="avatar-div">
                    <Avatar className="avatar_share"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQFiU2yvc-NDWA/profile-displayphoto-shrink_100_100/0/1616837029697?e=1634774400&v=beta&t=P0Kxv9V08495NNjbFdGZmzQkU1MORsTN-PL8kt_M8-k"
                    />
                    <button>Start a post</button>
                </div>
                <div className="Icons_div">
                <button>
                <PanoramaOutlinedIcon style={{color:"#70B5f9"}}/>
                <span>Photo</span>
                </button>

                <button>
                <YouTubeIcon style={{color:"#7FC15E"}}/>
                <span>Video</span>
                </button>

                <button>
                <EventNoteIcon style={{color:"#E7A33E"}}/>
                <span>Event</span>
                </button>

                <button>
                <AssignmentIcon style={{color:"#FC9295"}}/>
                <span>Write article</span>
                </button>

                </div>
            </ShareBox>
        </Container>
    )
}
const Container = styled.div `
   grid-area: main;

`;
const CommonCard =styled.div `
      text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`;
const ShareBox = styled(CommonCard)`

     display:flex;
     flex-direction:column;
     color:#958b8b;
     background:white;
     margin:0 0 8px 0;
     .avatar-div{
         display:flex;
         align-items: center;
         margin:8px 16px 0px 16px;
         .avatar_share{
             width:48px !important;
             height: 48px !important;
         }
         button{   
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                margin-left:16px;
                box-shadow: inset 0 0 0 1px rgba(122, 88, 88, 0.3);
                color: rgba(0,0,0,0.6);
                background-color: #fff;
                text-align: left;
                min-height: 48px;
                font-size:14px;
                max-width:none;
                font-weight:600;
                line-height:1.5;
                background: transparent;
                outline: none;
                border:none;
                &:hover {
                background-color: rgba(0,0,0,0.07);
                
            }
                
         }
     }
     .Icons_div {
         display:flex;
         justify-content: space-around;
         flex-wrap: wrap;
         margin-bottom:4px;
         
         
        button {
            outline: none;
            color: rgba(0,0,0,0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            span{
                margin-left: 8px;
            }
            &:hover {
                background-color: rgba(0,0,0,0.07);
                border-radius: 6px;
            }
        }
    }
`;
export default Main
