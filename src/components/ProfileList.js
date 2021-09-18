import ProfileCard from "./ProfileCard";

// profile card에 들어갈 사용자 정보
const USERS = [
  {
    id: 0,
    name: "김용연",
    major: "컴퓨터공학과",
    age: 21,
    movies: [
      {
        id: 0,
        title: "대니쉬 걸",
      },
      {
        id: 1,
        title: "포레스트 검프",
      },
    ],
  },
  {
    id: 1,
    name: "김영희",
    major: "조경학과",
    age: 20,
    movies: [
      {
        id: 0,
        title: "포미니츠",
      },
      {
        id: 1,
        title: "빌리 엘리어트",
      },
    ],
  },
  {
    id: 2,
    name: "권철수",
    major: "경영학과",
    age: 22,
    movies: [
      {
        id: 0,
        title: "샹치",
      },
      {
        id: 1,
        title: "너의 이름은",
      },
    ],
  },
];

export default function ProfileList() {
  return (
    <div>
      {USERS.map((USERS) => (
        <ProfileCard
          key={USERS.id}
          name={USERS.name}
          major={USERS.major}
          age={USERS.age}
          nextYearAge={USERS.age + 1}
          movies={USERS.movies}
        />
      ))}
    </div>
  );
}
