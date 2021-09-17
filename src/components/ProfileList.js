import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
const candidates = [
  {
    name: "송지민",
    major: "컴퓨터공학과",
    age: 21,
    movies: ["인터스텔라", "인셉션"],
  },
  {
    name: "뽀로로",
    major: "유아교육과",
    age: 99,
    movies: ["해리포터", "뽀로로 극장판", "짱구는 못말려"],
  },
];
export default function ProfileList() {
  return (
    <div>
      {candidates.map((candidate, index) => (
        <ProfileCard
          key={index}
          name={candidate.name}
          major={candidate.major}
          age={candidate.age}
          movies={candidate.movies}
        />
      ))}
    </div>
  );
}
