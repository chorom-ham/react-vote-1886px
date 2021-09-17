import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
export default function ProfileList() {
  const list = [
    {
      name: "김주연",
      major: "컴퓨터공학과",
      age: 22,
      movie: ["미션임파서블", "마이너리티 리포트"],
    },
    {
      name: "조연진",
      major: "의상학과",
      age: 24,
      movie: ["위대한개츠비", "인셉션", "비포더블러드"],
    },
    {
      name: "황다원",
      major: "정치외교학과",
      age: 20,
      movie: ["시빌워", "엣지오브투머로우"],
    },
  ];

  return (
    <div>
      {list.map((value, index) => (
        <ProfileCard
          key={index}
          name={value.name}
          major={value.major}
          age={value.age}
          movie={value.movie}
        />
      ))}
    </div>
  );
}
