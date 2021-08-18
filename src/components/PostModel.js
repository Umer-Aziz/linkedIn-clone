import styled from "styled-components";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import firebase from 'firebase';
import { postArticleAPI } from '../actions';

const PostModel = (props) => {
  const [editorText, setEditorText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState('');

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setSharedImage(image);
  };
  

  const reset = (e) => {
    setEditorText("");
        setSharedImage('');
        setVideoLink('');
        setAssetArea('');
        props.handleClick(e);
  };

  const switchAssetArea = (area) => {
    setSharedImage('');
    setVideoLink('');
    setAssetArea(area);
};
const postArticle = (e) => {
    e.preventDefault();
    if(e.target !== e.currentTarget)
    {
        return;
    }

    const payload = {
        image: sharedImage,
        video: videoLink,
        user: props.user,
        description: editorText,
        timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
};


  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <Button>
                <CloseIcon onClick={(event) => reset(event)} />
              </Button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  onFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jgp, image/png, image/jpeg"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" style={{ cursor: "pointer" }}>
                        Select an image
                      </label>
                    </p>

                    {sharedImage && (
                      <img src={URL.createObjectURL(sharedImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please upload a video"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
              <HashTag>
                <h2>Add hashtag</h2>
              </HashTag>
            </SharedContent>
            <SharedCreation>
              <AttachAssest>
                <AssetButton  onClick={() => switchAssetArea('image')}>
                  <img src="/images/share-image.svg" alt="" />
                </AssetButton>
                <AssetButton onClick = {() => switchAssetArea('media')}>
                  <img src="/images/share-video.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share-document.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share-hiring.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share-occasion.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/share-poll.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <MoreHorizIcon />
                </AssetButton>
              </AttachAssest>
              <ShareComment>
                <AssetButton>
                  <img src="/images/action-comment.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton 
                                disabled = {!editorText ? true : false} 
                                onClick = {(event) => postArticle(event)} >
                                Post
                            </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: #000000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
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

const Header = styled.div`
  /* display:block; */
  padding: 12px 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 18px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  Button {
    height: 40px !important;
    width: 40px !important;
    min-width: auto !important;
    color: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 2px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  svg,
  img {
    width: 44px !important;
    height: 44px !important;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
  }
`;
const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;

const AttachAssest = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px !important;
    background: transparent;
    border: none;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.07);
      border-radius: 50%;
    }
  }
`;
const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    background: transparent;
    border: none;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.07);
      border-radius: 30px;
    }
    img {
      margin-right: 5px;
      width: 18px;
      height: 18px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  border: none;
  font-weight: 600;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.1)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.4)" : "#fff")};
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
    cursor: ${(props) => (props.disabled ? "none" : "pointer")};
    outline: none !important;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    outline: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const HashTag = styled.div`
  padding: 12px 24px;
  color: #0a66c2;
  cursor: pointer;
  font-size: 16px;
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps) (PostModel);

