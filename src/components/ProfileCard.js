import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard({
  name,
  major,
  currentAge,
  nextYearAge,
  movies,
}) {
  const [likes, setLikes] = useState(0); // 좋아요 개수

  // button click event handler
  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Wrapper>
      <ProfileLikes>
        <Button onClick={handleClick}>좋아요</Button>
        <span>{likes}명이 좋아요를 눌렀습니다</span>
      </ProfileLikes>
      <ProfileData>
        <h1>{name}</h1>
        <p>
          안녕하세요? 저는 이화여자대학교 {major}에 다니고 있어요. <br />
          올해는 {currentAge}살이고, 내년에는 {nextYearAge}살이에요.
        </p>
        <h2>좋아하는 영화</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </ProfileData>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  margin: 15px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ProfileLikes = styled.div`
  text-align: right;
`;

const Button = styled.button`
  background-color: #5f27cd;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 3px 5px;
  cursor: pointer;
  margin-right: 8px;
`;

const ProfileData = styled.div``;
