import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard(props) {
  const { name, age, type, inheritance, thread, library, website } = props;
  const [likes, setLikes] = useState(0); // 좋아요 개수

  return (
    <Wrapper>
      <rightEnded>
        <LikeButton onClick={() => setLikes(likes + 1)}>choose</LikeButton>
        <br />
        Likes: {likes}
        <div>
          <h1>{name}</h1>
          <li>{age} years old</li>
          <li>{type}</li>
          <li>{inheritance}</li>
          <li>{thread}</li>
          <li>{library}</li>
          <br />
          For further information, visit <a href={website}>{website}</a>
        </div>
      </rightEnded>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50rem;
  padding: 2rem;
  margin: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  overflow: "hidden";
  display: inline-flex;
`;

const LikeButton = styled.button`
  width: 4rem;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: #5b68ff;
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
`;

const rightEnded = styled.div`
  display: flex;
  justify-content: flex-end;
`;
