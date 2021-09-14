import styled from "styled-components";
import ProfileCard from "./ProfileCard";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
const movies=["대니쉬 걸", "포레스트 검프"]

export default function ProfileList() {
  console.log(movies)
  return <div>
    <ProfileCard name="김용연" major="컴퓨터공학과" currentAge="21" nextYearAge="22" movies={movies}/>
  </div>;
}
