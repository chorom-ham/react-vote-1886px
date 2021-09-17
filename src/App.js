import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 15px;
  }
  body {
    background-color : #F6FFDB;
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
