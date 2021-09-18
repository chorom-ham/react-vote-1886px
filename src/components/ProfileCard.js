import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard({ name, major, age, nextYearAge, movies }) {
  const [likes, setLikes] = useState(0); // 좋아요 개수

  // button click event handler
  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Wrapper>
      <ProfileLikes>
        <LikeButton onClick={handleClick}>좋아요</LikeButton>
        <span>{likes}명이 좋아요를 눌렀습니다</span>
      </ProfileLikes>
      <ProfileData>
        <Name>{name}</Name>
        <p>
          안녕하세요? 저는 이화여자대학교 {major}에 다니고 있어요. <br />
          올해는 {age}살이고, 내년에는 {nextYearAge}살이에요.
        </p>
        <MovieTitle>좋아하는 영화</MovieTitle>
        <MovieLists>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </MovieLists>
      </ProfileData>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.25rem;
  margin: 0.9rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
`;

const ProfileLikes = styled.div`
  text-align: right;
`;

const LikeButton = styled.button`
  background-color: #5f27cd;
  color: white;
  border-radius: 0.3rem;
  border: none;
  padding: 0.2rem 0.3rem;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const ProfileData = styled.div``;

const Name = styled.h1``;

const MovieTitle = styled.h2``;

const MovieLists = styled.ul``;
