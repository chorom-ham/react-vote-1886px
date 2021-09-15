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

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Wrapper>
      <div className="profile__likes">
        <button onClick={handleClick}>좋아요</button>
        <span> {likes}명이 좋아요를 눌렀습니다</span>
      </div>
      <div className="profile__data">
        <h2>{name}</h2>
        <p>
          안녕하세요? 저는 이화여자대학교 {major}에 다니고 있어요. <br />
          올해는 {currentAge}살이고, 내년에는 {nextYearAge}살이에요.
        </p>
        <h3>좋아하는 영화</h3>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
