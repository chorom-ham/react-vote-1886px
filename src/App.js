import styled, { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 10px;
  }
  body {
    background-color : skyblue;
    display : flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    max-width: 37rem;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ProfileList />
    </div>
  );
}

export default App;
