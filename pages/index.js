import db from "../db";

import dynamic from "next/dynamic";

const Foot = dynamic(() => import("../Components/Layout/foot/foot"));
const About = dynamic(() => import("../Components/About/about"));
const Experience = dynamic(() => import("../Components/Experience/Experience"));
const Nevbar = dynamic(() => import("../Components/Layout/nevbar/nevbar"));
import Homepage from "../Components/HomePage/Homepage";
const Contact = dynamic(() => import("../Components/Contact"));
const Project = dynamic(() => import("../Components/Project/Project"));
const Skills = dynamic(() => import("../Components/Skills"));

import { collection, getDocs } from "firebase/firestore";

export default function Home({ Data }) {
  const mainStyle = {
    scrollBehavior: "smooth",
  };
  console.log("HELLO And Welcome To My Portfolio");
  const [
    aboutData,
    { ExperienceData },
    homeData,
    { NevbarData },
    { ProjectData },
    { SkillsData },
  ] = Data;

  return (
    <div style={mainStyle}>
      <Nevbar data={NevbarData} />
      <Homepage data={homeData} />
      <About data={aboutData} />
      <Skills data={SkillsData} />
      <Project data={ProjectData} />
      <Experience data={ExperienceData} />
      <Contact />
      <Foot />
    </div>
  );
}

export async function getStaticProps() {
  const DataRef = await getDocs(collection(db, "Data"));
  const Data = DataRef.docs.map((entry) => entry.data());

  return {
    props: {
      Data,
    },
    revalidate: 60,
  };
}
