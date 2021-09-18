import styled from "styled-components";
import ProfileCard from "./ProfileCard";

const candidates = [
  {
    name: "김명지",
    major: "컴퓨터공학과",
    age: 21,
    movies: ["UP", "Bridget Jones's Baby"],
  },
  {
    name: "김곰례",
    major: "유아교육과",
    age: 21,
    movies: ["7번방의 선물", "인터스텔라", "독수리 5형제"],
  },
  {
    name: "김명준",
    major: "디지털킹왕짱과",
    age: 23,
    movies: ["친구", "파워레인저", "돈"],
  },
];

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
export default function ProfileList() {
  return (
    <div>
      {candidates.map((candidates, index) => (
        <ProfileCard
          key={index}
          name={candidates.name}
          major={candidates.major}
          age={candidates.age}
          movies={candidates.movies}
        />
      ))}
    </div>
  );
}
