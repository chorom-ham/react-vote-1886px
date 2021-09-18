import userEvent from "@testing-library/user-event";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
export default function ProfileList() {
  const candidates = [
    {
      id: 1,
      name: "LSJ",
      age: 22,
      major: "이화여자대학교 컴퓨터공학과 19학번",
      info: "주민번호 뒷자리 4인 밀레니엄 베이비!",
      movie: ["블랙위도우", "마당을 나온 암탉"],
    },
    {
      id: 2,
      name: "김이화",
      age: 23,
      major: "이화여자대학교 실용음악과 19학번",
      info: "노래는 별로 안좋아해요.",
      movie: ["라이온 킹", "파바로티"],
    },
    {
      id: 3,
      name: "닌자",
      age: 5,
      major: "닌자",
      info: "미안하지만 정체는 비밀이에요.",
      movie: ["보스베이비", "나루토질풍전", "꾸러기 닌자 토리"],
    },
  ];

  return (
    <div>
      {candidates.map((candidates) => (
        <ProfileCard
          key={candidates.id}
          name={candidates.name}
          age={candidates.age}
          major={candidates.major}
          info={candidates.info}
          movie={candidates.movie}
        />
      ))}
    </div>
  );
}
