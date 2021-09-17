import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard(candidates) {
  const [likes, setLikes] = useState(0); // 좋아요 개수
  const add_like = () => {
    setLikes(likes + 1);
  };
  return (
    <Wrapper>
      <Like>
        <Button onClick={add_like}>좋아요</Button>
        {likes}명이 좋아요를 눌렀습니다.
      </Like>
      <Profile>
        <Name>{candidates.name}</Name>
        <br />
        안녕하세요? 저는 이화여자대학교 {candidates.major}에 다니고 있어요.
        <br /> 올해는 {candidates.age}
        살이고, 내년에는{candidates.age + 1}살이에요.
      </Profile>
      <br />
      <FavMovie>좋아하는 영화</FavMovie>
      <MovieList>
        {candidates.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </MovieList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 45rem;
  outline: solid;
`;
const Like = styled.div`
  padding-top: 0.5rem;
  margin-left: 27rem;
`;
const Name = styled.div`
  font-size: 2.5rem;
`;
const Profile = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
`;
const Button = styled.button`
  background-color: lightpink;
`;
const FavMovie = styled.div`
  font-size: 2.5rem;
`;
const MovieList = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
`;
