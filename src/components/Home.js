import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
      <>
      <Helmet>
        <title>Feed | LinkedIn</title>
       </Helmet>
        <Container>
            <Section>
            <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talents in record time with LinkedIn Premium and unlock special benifits!
        </p>
            </Section>
            <Layout>
                <LeftSide/>
                <Main/>
                <RightSide/>
            </Layout>
        </Container>
        </>
    )
}
const Container = styled.div `
padding-top:52px;
@media (max-width:768px){
  padding-top:72px;
}

`;

const Content = styled.div `
margin-left: auto;
margin-right: auto;
width: 1128px;

`;
const Section = styled.section `
 
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media (max-width:768px){
    min-height: 50px;
  }


  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }

`;

const Layout = styled.div `
display:grid;
grid-template-areas: "leftside main rightside";
grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

`;
export default Home
