import { useState } from "react";
import styled, {css} from "styled-components";
import {darken, lighten} from "polished";

export default function ProfileCard({person}) {
    const MovieList = () => (
        <StyledMovieList>
            <h3>좋아하는 영화</h3>
            <ul>
                {person.movies.map((movie, index) => <li key={index}>{movie}</li>)}
            </ul>
        </StyledMovieList>
    );


    function ButtonSection() {
        const [likes, setLikes] = useState(0); // 좋아요 개수
        const [likeState, setLikeState] = useState("unlike");
        const [color, setColor] = useState("grey");
        const like = () => {
            setLikes(likes + 1)
            setColor("Red")
        };
        const unlike = () => {
            setLikes(likes - 1)
            setColor("grey")
        };

        const LikeButton = () => {
            if (likeState === "unlike") {
                like();
                setLikeState("like");
            } else {
                unlike();
                setLikeState("unlike");
            }
        };

        return (
            <StyledButtonSection color={color}>
                <button value='unlike' onClick={LikeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>
                    </svg>
                </button>
                <p>{likes}명이 좋아요를 눌렀습니다</p>
            </StyledButtonSection>
        );
    };


    return (
        <Wrapper>
            <ButtonSection />
            <h2>{person.name}</h2>
            <p>
                안녕하세요! 저는 {person.school} {person.major}에 다니고 있어요.
                올해는 {person.age}살이고, 내년에는 {person.age+1}살이에요.
            </p>
            <MovieList />

        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  padding: 1.5rem 4rem 3rem 4rem;
  background-color: white;
  border-radius: 1.5rem;
  
  h2{
    font-size: 3rem;
    font-weight: bolder;
    margin: 0;
  }
  p{
    font-size: 1.4rem;
    line-height: 2.5rem;
    margin: 1.5rem 0;
  }
`;

const StyledButtonSection = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  
  p {
    font-size: 1.1rem;
    margin: 0;
    color: grey;
  }
  
  ${ ({color}) => {
      return css`
        button {
          fill: ${color};
          border: none;
          background-color: transparent;
          transition-duration: 0.1s;
        }
    
        button:hover {
          fill: ${darken(0.2, color)};
        }
    `;
  }}

  svg {
    margin-top: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StyledMovieList = styled.div`
    li {
    font-size: 1.3rem;
    }
    h3{
    font-size: 2rem;
    margin-bottom: 0.8rem;
    margin-top: 0rem;
    }
`;