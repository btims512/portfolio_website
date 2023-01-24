import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Experience />
      <Technologies />
      <About />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
