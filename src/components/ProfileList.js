import styled from "styled-components";
import ProfileCard from "./ProfileCard";

export default function ProfileList() {
  const languages = [
    {
      name: "Python",
      age: "30",
      type: "Object-oriented",
      inheritance: "Provides both single and multiple inheritance",
      thread: "Supports multithreading",
      library:
        "Has a huge set of libraries that make it fit for AI, datascience, etc.",
      website: "www.python.org",
    },

    {
      name: "C",
      age: "49",
      type: "Imperative procedural",
      inheritance: "Provide partial multiple inheritance using interfaces",
      thread: "Does Not support threads",
      library: "Has limited number of library support",
      website: "www.iso.org/standard/74528.html",
    },

    {
      name: "Java",
      age: "26",
      type: "Object-oriented",
      inheritance: "Provides both single and multiple inheritance",
      thread: "Has in build multithreading support",
      library: "Has library support for many concepts like UI",
      website: "oracle.com/java/",
    },
  ];

  return (
    <div>
      {languages.map((value, index) => (
        <ProfileCard key={index} {...value} />
      ))}
      ;
    </div>
  );
}
