import { useState } from "react";
import styled from "styled-components";

export default function ProfileCard(props) {
  const [likes, setLikes] = useState(0); // 좋아요 개수

  return (
    <Wrapper>
      <Title>{props.name}</Title>
      <Text>
        안녕하세요? 저는 이화여자대학교 {props.major}에 다니고 있어요. 올해는{" "}
        {props.age}살이고, 내년에는 {props.age + 1}살이에요.
      </Text>
      <Title1>좋아하는 영화</Title1>
      <Ul>
        {props.movies.map((value, index) => (
          <List key={index}>{value}</List>
        ))}
      </Ul>
      <Section>
        <Text>{likes}명이 좋아요를 눌렀습니다.</Text>
        <Button onClick={() => setLikes(likes + 1)}>❤</Button>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 65rem;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 3rem;
  margin: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: 2rem;
`;

const Title1 = styled.h2`
  font-size: 2.3rem;
`;

const List = styled.li`
  font-size: 2rem;
`;

const Ul = styled.ul``;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 2.2rem;
  background-color: #beefff;
  margin-left: 1rem;
  color: #ff0000;
  border: 0.1rem #eaeaea;
`;
