import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import homeStyle from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSun,
  faMoon,
  faVolumeMute,
  faVolumeHigh,
  faCog,
  faGamepad,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import clickSound from "../components/click.mp3";

const Home = () => {
  const [view, setView] = useState("main"); // main, ai, settings, social
  const [isDark, setIsDark] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      return theme ? JSON.parse(theme).isDark : true;
    } catch {
      return true;
    }
  });

  const [isSoundOn, setIsSoundOn] = useState(() => {
    try {
      const sound = localStorage.getItem("sound");
      return sound ? JSON.parse(sound).isOn : true;
    } catch {
      return true;
    }
  });

  const audioRef = useRef(new Audio(clickSound));

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const playSound = () => {
    if (isSoundOn) {
      const audio = audioRef.current;
      audio.currentTime = 0;
      audio.play().catch((err) => console.error("Audio playback failed:", err));
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", JSON.stringify({ isDark: !isDark }));
    playSound();
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    localStorage.setItem("sound", JSON.stringify({ isOn: !isSoundOn }));
    playSound();
  };

  const buttonStyle = {
    color: isDark ? "#fff" : "#1a1a1a",
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.05)",
    border: isDark
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)",
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#1a1a1a" : "#f5f5f5";
    document.body.style.color = isDark ? "#fff" : "#1a1a1a";
  }, [isDark]);

  const renderMain = () => (
    <>
      <Link to="/player-vs-player">
        <button
          className={homeStyle.mainBtn}
          style={buttonStyle}
          onClick={playSound}
        >
          <FontAwesomeIcon icon={faGamepad} /> Play vs Player
        </button>
      </Link>
      <button
        className={homeStyle.mainBtn}
        style={buttonStyle}
        onClick={() => {
          setView("ai");
          playSound();
        }}
      >
        <FontAwesomeIcon icon={faGamepad} /> Play vs AI
      </button>
      <button
        className={homeStyle.mainBtn}
        style={buttonStyle}
        onClick={() => {
          setView("settings");
          playSound();
        }}
      >
        <FontAwesomeIcon icon={faCog} /> Settings
      </button>
    </>
  );

  const renderAI = () => (
    <>
      <Link to="/player-vs-ai-easy">
        <button
          className={homeStyle.aiBtn}
          style={buttonStyle}
          onClick={playSound}
        >
          Easy Mode
        </button>
      </Link>
      <Link to="/player-vs-ai-hard">
        <button
          className={homeStyle.aiBtn}
          style={buttonStyle}
          onClick={playSound}
        >
          Hard Mode
        </button>
      </Link>
      <button
        className={homeStyle.backBtn}
        style={buttonStyle}
        onClick={() => {
          setView("main");
          playSound();
        }}
      >
        Back
      </button>
    </>
  );

  const renderSettings = () => (
    <>
      <button
        className={homeStyle.settingBtn}
        style={buttonStyle}
        onClick={toggleTheme}
      >
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        {isDark ? " Light Mode" : " Dark Mode"}
      </button>
      <button
        className={homeStyle.settingBtn}
        style={buttonStyle}
        onClick={toggleSound}
      >
        <FontAwesomeIcon icon={isSoundOn ? faVolumeHigh : faVolumeMute} />
        {isSoundOn ? " Sound On" : " Sound Off"}
      </button>
      <div className={homeStyle.socials}>
        <button
          className={homeStyle.socialBtn}
          style={buttonStyle}
          onClick={() => window.open("https://santosh-gamma.vercel.app/")}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </button>
        <button
          className={homeStyle.socialBtn}
          style={buttonStyle}
          onClick={() => window.open("https://github.com/SantoshThapa9")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button
          className={homeStyle.socialBtn}
          style={buttonStyle}
          onClick={() => window.open("https://www.linkedin.com/in/santosh986")}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </div>
      <button
        className={homeStyle.backBtn}
        style={buttonStyle}
        onClick={() => {
          setView("main");
          playSound();
        }}
      >
        Back
      </button>
    </>
  );

  return (
    <div className={homeStyle.container}>
      <h1 className={homeStyle.title}>Tic Tac Toe</h1>
      <div className={homeStyle.content}>
        {view === "main" && renderMain()}
        {view === "ai" && renderAI()}
        {view === "settings" && renderSettings()}
      </div>
    </div>
  );
};

export default Home;
