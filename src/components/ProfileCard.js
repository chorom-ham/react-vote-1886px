import { useState } from "react";
import styled from "styled-components";
import { GoThumbsup } from 'react-icons/go';

export default function ProfileCard({ candidates }) {
  
  // 좋아요 추가
  const [likes, setLikes] = useState(0); 
  const onIncrease = () => {
    setLikes(prevLikes => prevLikes + 1);
  }  

  // 소개말 줄바꿈
  const information = candidates.info.split('\n').map(
    data => (<span>{data}<br /></span>)
  );

  // 영화 리스트
  const movies = candidates.movie.map(
    (mov) => (<li>{mov}</li>)
  );

  return (
    <Wrapper>
      <Like>
        <Button onClick={onIncrease}><GoThumbsup /></Button>
        <span>{likes}명이 좋아요를 눌렀습니다.</span>
      </Like>
      <h1>{candidates.name}</h1>
      <span >
        {information}
      </span>
      <h2>좋아하는 영화</h2>
      <ul>
        {movies}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ebfbee;
  border: 2px solid #868e96;
  border-radius: 1rem;
  padding: 3rem;
  margin: 5rem;

  &:hover {
    background-color: #b2f2bb;
  }
`;

const Like = styled.div`
  float:right;
`;

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: salmon;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.8rem;

  &:hover {
    color: yellow;
  }

  &:active {
    background-color: crimson;
  }
`;
