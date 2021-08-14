import React from 'react'
import styled from 'styled-components'

const RightSide = (props) => {
    return (
        <Container>
            <FollowSide>
            <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        </FollowSide>
        </Container>
    )
}

const Container = styled.div `
    grid-area: rightside;
`;

const FollowSide = styled.div `
text-align:center;
overflow: hidden;
margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;

`;


const Title = styled.div `

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);


`;
export default RightSide
