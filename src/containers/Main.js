import React, {useEffect, useState} from "react";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import PartnersSection from "./partnersSection/PartnersSection";
import TechnologiesSection from "./technologiesSection/TechnologiesSection";
import PipelineSection from "./pipelineSection/PipelineSection";

// import Talks from "./talks/Talks";
// import Blogs from "./blogs/Blogs";
// import Podcast from "./podcast/Podcast";
// import Twitter from "./twitter-embed/twitter";

import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => {
          setIsShowingSplashAnimation(false);
          // Reset scroll position to top when splash screen disappears
          window.scrollTo(0, 0);
        },
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  // Add another useEffect to ensure scroll reset when content is shown
  useEffect(() => {
    if (!isShowingSplashAnimation) {
      // Reset scroll position to top
      window.scrollTo(0, 0);
    }
  }, [isShowingSplashAnimation]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <PartnersSection />
            <PipelineSection />
            <TechnologiesSection />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;