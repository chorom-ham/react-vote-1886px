import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    background-color : #F6FFDB;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    max-width: 50rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ProfileList />
    </>
  );
}

export default App;
