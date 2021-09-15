import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
  }
  html {
    font-size : 0.8rem;
  }
  body {
    background-image : url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80");
    height: 100%;
    background-position: center;
    background-size: cover;
  }
`;

const Header = styled.div`
  width: 15rem;
  padding-top: 2rem;
  padding-left: 4rem;
  color: white;
`;

function App() {
  return (
    <>
      <h2>
        <Header>List of Languages</Header>
      </h2>
      <GlobalStyle />
      <ProfileList />
    </>
  );
}

export default App;
