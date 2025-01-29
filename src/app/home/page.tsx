import Intro from "./intro"
import Intro2 from "./intro2";
import PersonalProject from "./personalProject";
import Skills from "./skills";

export default function Home() {
  return (
    <div>
     <Intro/>
     <Intro2/>
     <PersonalProject/>
     <Skills/>
    </div>
  );
}
