import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard(props) {
  const { name, age, type, inheritance, thread, library, website } = props;
  const [likes, setLikes] = useState(0); // 좋아요 개수

  return (
    <Wrapper>
      <button onClick={() => setLikes(likes + 1)}>choose</button>
      <br />
      Likes: {likes}
      <div>
        <h2>{name}</h2>
        <li>{age} years old</li>
        <li>{type}</li>
        <li>{inheritance}</li>
        <li>{thread}</li>
        <li>{library}</li>
        <br />
        For further information, visit <a href={website}>{website}</a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70rem;
  padding: 4rem;
  margin: 4rem;
  background-color: rgba(255, 255, 255, 0.3);
`;
