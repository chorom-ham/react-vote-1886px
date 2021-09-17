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
        <button onClick={add_like}>좋아요</button>
        {likes}명이 좋아요를 눌렀습니다.
      </Like>
      <Profile>
        <header>{candidates.name}</header>
        안녕하세요? 저는 이화여자대학교 {candidates.major}에 다니고 있어요.
        올해는 {candidates.age}
        살이고, 내녀에는{candidates.age + 1}살이에요.
      </Profile>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 60%;
  outline: solid;
`;
const Like = styled.div``;
const Profile = styled.div``;
