import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
const users = [
  {
    name: "김용연",
    major: "컴퓨터공학과",
    currentAge: 21,
    nextYearAge: 22,
    movies: ["대니쉬 걸", "포레스트 검프"]
  },
  {
    name: "김영희",
    major: "조경학과",
    currentAge: 20,
    nextYearAge: 21,
    movies: ["포미니츠", "빌리 엘리어트"]
  },
  {
    name: "권철수",
    major: "경영학과",
    currentAge: 22,
    nextYearAge: 23,
    movies: ["샹치", "너의 이름은"]
  }

]

export default function ProfileList() {
  return <div>
    <ProfileCard name={users[0].name} major={users[0].major} currentAge={users[0].currentAge} nextYearAge={users[0].nextYearAge} movies={users[0].movies}/>
  </div>;
}
