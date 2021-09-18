import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";

export const GlobalStyle = createGlobalStyle`
  *{ 
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
    width: 60%;
    margin: auto;
    padding-top: 4em;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color : rgb(32,33,36);
    display: flex;
    flex-direction: column;
  }
  h1{
    color: white;
    font-size: 5rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  h2{
    font-size: 3rem;
    font-weight: bolder;
    margin: 0;
  }
  h3{
    font-size: 2rem;
    margin-bottom: 0.8rem;
    margin-top: 0rem;
  }
  p{
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin: 2.5rem 0;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <h1>Profiles</h1>
            <ProfileList/>

        </>
    );
}

export default App;
