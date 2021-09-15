import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 12px;
  }
  body {
    background-color : #F6FFDB;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    max-width: 37rem;
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
