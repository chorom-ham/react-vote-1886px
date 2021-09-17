import userEvent from "@testing-library/user-event";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
export default function ProfileList() {
  const profile = [
    {
      name: "김유민",
      major: "컴퓨터공학전공",
      age: 21,
      movies: ["인터스텔라", "그래비티"],
    },
    {
      name: "김이화",
      major: "컴퓨터공학전공",
      age: 20,
      movies: ["라라랜드", "기생충"],
    },
    {
      name: "박이화",
      major: "국어국문학전공",
      age: 22,
      movies: ["타이타닉", "어벤져스", "토이스토리"],
    },
  ];

  return (
    <div>
      {profile.map((value, index) => (
        <ProfileCard
          key={index}
          name={value.name}
          major={value.major}
          age={value.age}
          movies={value.movies}
        />
      ))}
    </div>
  );
}
