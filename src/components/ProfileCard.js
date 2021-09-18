import { useState } from "react";
import styled from "styled-components";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";

export default function ProfileCard({ name, age, major, info, movie }) {
  // 좋아요 추가
  const [likes, setLikes] = useState(0);
  const increseLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  // 영화 리스트
  const movies = movie.map((movie) => <li>{movie}</li>);

  // 싫어요
  const decreaseLikes = () => {
    alert("악플 금지 -.-");
  };

  return (
    <Wrapper>
      <Like>
        <Button onClick={increseLikes}>
          <GoThumbsup />
        </Button>
        <span>{likes}명이 좋아요를 눌렀습니다.</span>
      </Like>
      <h1>{name}</h1>
      <p>안녕하세요? 저는 {major}이에요.</p>
      <p>
        {age}살이고요, 눈감았다 뜨면 {age + 1}살이네요.
      </p>
      <p>{info}</p>
      <h2>좋아하는 영화</h2>
      <ul>{movies}</ul>
      <Button color="blue" onClick={decreaseLikes}>
        <GoThumbsdown />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ebfbee;
  border: 5px solid #63e6be;
  border-radius: 5rem;
  padding: 3rem;
  margin: 5rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #b2f2bb;
  }
`;

const Like = styled.div`
  float: right;
`;

const Button = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 50%;
  color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.8rem;

  background-color: ${(props) => props.color || "salmon"};
  &:hover {
    color: yellow;
  }

  &:active {
    background-color: crimson;
  }
`;
