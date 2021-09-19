import styled from "styled-components";
import {GlobalStyle} from "../App"
import ProfileCard from "./ProfileCard";
import React, {useState} from "react";

// hint: Array.map, 반복되는 코드를 하나의 컴포넌트(card)를 만들어서 재사용
export default function ProfileList() {
    const schoolDefault = "이화여자대학교", majorDefault = "컴퓨터공학전공";

    const people = [
        {
            name: "정연희",
            school: schoolDefault,
            major: majorDefault,
            age: 21,
            movies: ["헝거게임", "다이버전트", "러브 로지"]
        },
        {
            name: "김유민",
            school: schoolDefault,
            major: majorDefault,
            age: 21,
            movies: ["인터스텔라", "그래비티"]
        },
        {
            name: "김용연",
            school: schoolDefault,
            major: majorDefault,
            age: 21,
            movies: ["대뉘시 걸", "포레스트 검프"]
        }
    ]

    return (
        <div>
            {people.map((person, index) =>
                <ProfileCard person={person} />
            )}
        </div>
    );
};
