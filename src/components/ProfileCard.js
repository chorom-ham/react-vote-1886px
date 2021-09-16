import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard({ user }) {
  
  const [likes, setLikes] = useState(0); // 좋아요 개수

  const onIncrease = () => {
    setLikes(prevLikes => prevLikes + 1);
  }  

  return (
    <Wrapper>
      <Like>
        <Button onClick={onIncrease}>좋아요</Button>
        <span>{likes}명이 좋아요를 눌렀습니다.</span>
      </Like>
      <h1>{user.name}</h1>
      {user.info}
      <h2>좋아하는 영화</h2>
      <ul>
        <li>{user.movie}</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: lightgray;
  border: 2px solid darkgray;
  border-radius: 1rem;
  padding: 3rem;
  margin: 3rem;
`;

const Like = styled.div`
  float:right;
`;

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: crimson;
  cursor: pointer;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-right: 0.8rem;

  &:hover {
    color: yellow;
  }
`;
