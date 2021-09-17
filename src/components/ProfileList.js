import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
const candidates = [
  {
    name: "송지민",
    major: "컴퓨터공학과",
    age: 21,
  },
  {
    name: "뽀로로",
    major: "컴퓨터공학과",
    age: 21,
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
        />
      ))}
    </div>
  );
}
