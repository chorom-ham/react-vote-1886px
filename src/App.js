import { createGlobalStyle } from "styled-components";
import ProfileList from "./components/ProfileList";
import {FaPlus} from "react-icons/fa";
import styled from "styled-components";
import Dialog from "./components/Dialog";
import {useState} from "react";

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onAdd = () => {
        setVisible(false);
    };
    const onCancel = () => {
        setVisible(false);
    };

    const TitleSection = () => (
        <StyledTitleSection>
            <h1>Profiles</h1>
            <button onClick={onClick}>
                <FaPlus />
            </button>
        </StyledTitleSection>
    );

    return (
        <>
            <GlobalStyle/>
            <TitleSection/>
            <ProfileList/>
            <Dialog onCick={onClick} onAdd={onAdd} onCancel={onCancel} visible={visible}/>
        </>
    );
}

const StyledTitleSection = styled.div`
  display: inline-flex;
  align-items: baseline;
  width: 100%;
  padding: 0 2rem 1rem 2rem;

  h1{
    color: white;
    font-size: 5rem;
    flex-grow: 1;
    margin: 0;
  }
  button{
    border: none;
    background-color: transparent;
    padding: 0;
    transition-duration: 0.2s;
  }
  button:hover{
    svg{
      fill: grey;

    }
  }
  svg {
    color: white; 
    width: 1.8rem;
    height: 1.8rem;
  }
`

export default App;
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
`;
