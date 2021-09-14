import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import React, {Fragment} from 'react';

const languages=[
  {name: "Python", age: "30", type: "object-oriented", 
    inheritance: "provides both single and multiple inheritance",
    thread: "Supports multithreading",
    library: "Has a huge set of libraries that make it fit for AI, datascience, etc.",
    website: "www.python.org"},

  {name: "C", age: "49", type: "imperative procedural", 
    inheritance: "provide partial multiple inheritance using interfaces",
    thread: "Does Not support threads",
    library: "Has limited number of library support",
    website: "www.iso.org/standard/74528.html"},

  {name: "Java", age: "26", type: "object-oriented", 
    inheritance: "provides both single and multiple inheritance",
    thread: "Has in build multithreading support",
    library: "Has library support for many concepts like UI",
    website: "oracle.com/java/"},
];

export default function ProfileList() {
  return <div>
    <h1>Computer Languages</h1>
        {languages.map((language, index) =>(
          <Fragment>
          <h3 key={index}>{language.name}</h3>
          <p>
            <li>{language.age} years old</li>
            <li>{language.type}</li>
            <li>{language.inheritance}</li>
            <li>{language.thread}</li>
            <li>{language.library}</li><br/>
            For further information, visit {language.website}
          </p>
          </Fragment>
          ))}
  </div>;} 