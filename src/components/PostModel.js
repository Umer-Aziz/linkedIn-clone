import styled from "styled-components";
import React from 'react'
import {  Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const PostModel = (props) => {
    return (
        <Container>
        <Content>
         <Header>
             <h2>Create a post</h2>
             <Button>
                 <CloseIcon/>
             </Button>
         </Header>
         <SharedContent>
             <UserInfo>
                 <img src="/images/user.svg" />
                 <span>Name</span>
             </UserInfo>
         </SharedContent>
         <SharedCreation>
             <AttachAssest>
                 <AssetButton >
                     <img src="/images/share-image.svg" alt="" />
                 </AssetButton>
                 <AssetButton >
                     <img src="/images/share-video.svg" alt="" />
                 </AssetButton>
                 <AssetButton >
                     <img src="/images/share-document.svg" alt="" />
                 </AssetButton>
                 <AssetButton >
                     <img src="/images/share-hiring.svg" alt="" />
                 </AssetButton>
                 <AssetButton >
                     <img src="/images/share-occasion.svg" alt="" />
                 </AssetButton>
                 <AssetButton >
                     <img src="/images/share-poll.svg" alt="" />
                 </AssetButton>
                 <AssetButton >
                 <MoreHorizIcon/>
                 </AssetButton>
             </AttachAssest>
             <ShareComment>

             <AssetButton>
                 <img src="/images/action-comment.svg" alt="" />
                 Anyone
             </AssetButton>
             </ShareComment>
             <PostButton>
                 Post
             </PostButton>
         </SharedCreation>
        </Content>
        </Container>
    )
}

const Container = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: #000000;
    background-color: rgba(0,0,0,0.8);
    animation: fadeIn  0.3s;
`;
const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`;

const Header = styled.div `
    /* display:block; */
    padding:16px 28px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    Button{
        height:40px !important;
        width:40px !important;
        min-width:auto !important;
       color: rgba(0,0,0,0.8);
       border-radius:50%;
    }
`;

const SharedContent = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;
const UserInfo = styled.div `
display:flex;
align-items: center;
padding:12px 24px;
svg,img {
    width:48px !important;
    height:48px !important;
    background-clip: content-box;
    border:2px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
}
`;
const SharedCreation = styled.div `
display:flex;
justify-content: space-between;
padding:12px 24px 12px 16px;
`;
const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0,0,0,0.5);
`;

const AttachAssest = styled.div `
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton} {
        width: 40px !important;
        background: transparent;
        border:none;
        &:hover{
          cursor:pointer;
          background-color: rgba(0,0,0,0.07);
           border-radius:50%;
        }
    }
`;
const ShareComment = styled.div `
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    ${AssetButton} {
        background: transparent;
        border:none;
        font-size:14px;
        line-height:1.5;
        font-weight:600;
        &:hover{
          cursor:pointer;
          background-color: rgba(0,0,0,0.07);
           border-radius:30px;
        }
        img {
            margin-right: 5px;
            width:18px;
            height:18px;
        }
    }
`;

const PostButton = styled.button `
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    outline:none;
    border:none;
    font-weight:600;
    background: ${props => props.disabled ? 'rgba(0,0,0,0.5)' : '#0a66c2'};
    color: ${props => props.disabled ? 'rgba(1,1,1,0.2)' : '#fff'};
    &:hover {
        background: ${props => props.disabled ? 'rgba(0,0,0,0.08)' : '#004182'};
        cursor: ${props => props.disabled ? 'none' : 'pointer'};
        outline: none !important;
    }
`;


export default PostModel
