import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard(candidates) {
  const [likes, setLikes] = useState(0); // 좋아요 개수

  const likeNumbers = () => {
    setLikes(likes + 1);
  };
  return (
    <Wrapper>
      <Like>
        <Button onClick={likeNumbers}>좋아요</Button>
        {likes}명이 '좋아요'를 눌렀습니다.
      </Like>
      <Profile>
        <Name>{candidates.name}</Name>
        <br />
        안녕하세요. 저는 이화여자대학교 {candidates.major}에 재학 중이에요.
        <br /> 올해는 {candidates.age}
        살이고, 내년에는 {candidates.age + 1}살이에요.
      </Profile>
      <br />
      <FavoriteMovie>좋아하는 영화</FavoriteMovie>
      <MovieList>
        {candidates.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </MovieList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: aqua;
  width: 45rem;
  outline: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 3rem;
`;
const Like = styled.div`
  margin-left: 19rem;
`;
const Name = styled.div`
  font-size: 3rem;
`;
const Profile = styled.div`
  font-size: 1.5rem;
  line-height: 2.5rem;
`;
const Button = styled.button`
  background-color: white;
  margin-right: 0.7rem;
  border-radius: 10%;
}
`;
const FavoriteMovie = styled.div`
  font-size: 2.3rem;
`;
const MovieList = styled.div`
  font-size: 1.4rem;
  margin: 1rem;
  line-height: 2rem;
  margin-top: 1.5rem;
`;
