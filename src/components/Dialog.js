import React, {useState} from 'react';
import styled from 'styled-components';
import ProfileList from './ProfileList';
import {darken} from "polished";

const DialogBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 126, 0.8);
`;

const DialogBlock = styled.div`
  width: 45%;
  height: fit-content;  
  padding: 5rem;
  background: white;
  border-radius: 5rem;
  
  h1{
    margin: 0 0 2rem 0;
    font-size: 3.5rem;
  }
  p{
    font-size: 1.2rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
  display: inline-flex;
  p{
    font-size: 1.3rem;
    width: 10rem;
    margin: 0;
  }
  input{
    width: 100%;
    border: none;
    border-bottom: 0.1rem solid black;
    background-color: transparent;
    margin-left: 1rem;
  }
`;

const InputGroupSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%; 
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  
  button{
    font-size: 1.5rem;
    margin-left: 2rem;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    transition-duration: 0.2s;
  }
  
  .cancel:hover{
    background-color: ${darken(0.2, 'gray')};
  }
  .add:hover{
    background-color: ${darken(0.2, 'Crimson')};
  }
`;

function Dialog({onclick, onAdd, onCancel, visible}) {
    return visible? (
        <DialogBackground>
            <DialogBlock>
                <h1>프로필 추가하기</h1>
                <InputGroupSection>
                    <InputGroup>
                        <p>이름: </p>
                        <input id={'name'} type={'text'}/>
                    </InputGroup>
                    <InputGroup>
                        <p>학교: </p>
                        <input id={'school'} type={'text'}/>
                    </InputGroup>
                    <InputGroup>
                        <p>전공: </p>
                        <input id={'major'} type={'text'}/>
                    </InputGroup>
                    <InputGroup>
                        <p>나이: </p>
                        <input id={'age'} type={'text'}/>
                    </InputGroup>
                    <InputGroup>
                        <p>좋아하는 영화: </p>
                        <input id={'movies'} type={'text'}/>
                    </InputGroup>
                </InputGroupSection>
                <ButtonGroup>
                    <button className={'cancel'} onClick={onCancel} style={{backgroundColor: 'gray'}}>취소하기</button>
                    <button className={'add'} onClick={onAdd} style={{backgroundColor: 'Crimson'}}>추가하기</button>
                </ButtonGroup>
            </DialogBlock>
        </DialogBackground>
    ) : <></>;
}

export default Dialog;