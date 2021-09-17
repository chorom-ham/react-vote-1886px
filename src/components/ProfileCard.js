import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard(props) {
  const [likes, setLikes] = useState(0); // 좋아요 개수
  const LikeButton = () => {
    setLikes(likes+1);
  };
  

  return  (
    <Wrapper>
      <Likes>
        <Button onClick={LikeButton}>좋아요</Button>
        <h3>{likes}명이 좋아요를 눌렀습니다!</h3>
      </Likes>
      <Content>
        <h1>{props.name}</h1>
          안녕하세요! 저는 이화여자대학교 {props.major} 재학중입니다.<br />
          올해는 {props.age}세이고, 내년에는 {props.age+1}세입니다.      
        <h2>좋아하는 영화</h2>
        <ul>{props.movie.map((value, index) => (
          <li key={index}>{value}</li>
        ))}</ul>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fbebeb;
  border-radius: 1.5rem;
  width: 52rem;
  padding: 3rem;
  margin: 3rem;
`;

const Likes = styled.div`
  text-align: right;
`;

const Button = styled.button`
  background-color: #96b6d6;
  color: white;
  border-radius: 0.7rem;
  width: 7rem;
  padding: 0.5rem;
  text-align: center;
`;

const Content = styled.div`
font-size: 1.5rem;
`;