import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div className="avatar-div">
          <Avatar
            className="avatar_share"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFiU2yvc-NDWA/profile-displayphoto-shrink_100_100/0/1616837029697?e=1634774400&v=beta&t=P0Kxv9V08495NNjbFdGZmzQkU1MORsTN-PL8kt_M8-k"
          />
          <button>Start a post</button>
        </div>
        <div className="Icons_div">
          <button>
            <PanoramaOutlinedIcon style={{ color: "#70B5f9" }} />
            <span>Photo</span>
          </button>

          <button>
            <YouTubeIcon style={{ color: "#7FC15E" }} />
            <span>Video</span>
          </button>

          <button>
            <EventNoteIcon style={{ color: "#E7A33E" }} />
            <span>Event</span>
          </button>

          <button>
            <AssignmentIcon style={{ color: "#FC9295" }} />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg" alt="" />
            <div>
              <span>Title</span>
              <span>Description</span>
              <span>date</span>
            </div>
          </a>

          <MoreHorizIcon className="btn-more" />
        </SharedActor>
        <Description>Descriptions</Description>
        <SharedImage>
          <a>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D22AQFRWWs44RE05g/feedshare-shrink_800/0/1628702305375?e=1631750400&v=beta&t=4FFOee7MowVldgqxK_6peAQ_oenw7ZjK72IsGjJZlrc"
              alt=""
            />
          </a>
        </SharedImage>
        <SocialCounts>
          <li>
            <button>
              <img src="/images/like.svg" alt="" />
              <img src="/images/heart.svg" alt="" />
              <img src="/images/clape.svg" alt="" />
              <span>377</span>
            </button>
          </li>
          <li>
            <a>3 comments</a>
          </li>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="/images/action-like.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/action-comment.svg" alt="" />
            <span>Comment</span>
          </button>
          <button>
          <img src="/images/action-share.svg" alt="" />
            <span>Share</span>
          </button>
          <button>
          <img src="/images/action-send.svg" alt="" />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
    </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
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
  display: flex;
  flex-direction: column;
  color: #958b8b;
  background: white;
  margin: 0 0 8px 0;
  .avatar-div {
    display: flex;
    align-items: center;
    margin: 8px 16px 0px 16px;
    .avatar_share {
      width: 48px !important;
      height: 48px !important;
      cursor: pointer;
    }
    button {
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      margin-left: 16px;
      box-shadow: inset 0 0 0 1px rgba(122, 88, 88, 0.3);
      color: rgba(0, 0, 0, 0.6);
      background-color: #fff;
      text-align: left;
      min-height: 48px;
      font-size: 14px;
      max-width: none;
      font-weight: 600;
      line-height: 1.5;
      background: transparent;
      outline: none;
      border: none;
      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
        cursor: pointer;
      }
    }
  }
  .Icons_div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 4px;

    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      span {
        margin-left: 8px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
`;
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding-right: 40px;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px !important;
      height: 48px !important;
      cursor:pointer;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  .btn-more {
    position: absolute;
    right: 12px;
    color:rgba(0,0,0,0.6) !important;
    cursor:pointer;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  overflow: auto;
  align-items: flex-start;
  margin: 0 16px;
  padding: 8px 0;
  list-style: none;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 4px;
    font-size: 12px;
    cursor: pointer;
    color: #00000099;
    font-weight: 500;
    a:hover {
      text-decoration: underline;
      color: #378fe9;
    }
    button {
      display: flex;
      border: none;
      background: transparent;
      img {
        margin-right: 4px;
        cursor: pointer;
      }
      span {
        font-size: 12px;
        color: #00000099;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          color: #378fe9;
        }
      }
    }
  }
`;

const SocialActions = styled.div`
align-items: center;
display: flex;
justify-content: flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;
button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    border: none;
    background-color: transparent;
    &:hover{
      background-color: rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        cursor: pointer;
    }
    span{
        color:rgba(0,0,0,0.6);
            font-weight:600;
            font-size:14px;
    }
    @media (min-width: 768px) {
        span {
            margin-left: 8px;
        }
    }
}
`;
export default Main;
