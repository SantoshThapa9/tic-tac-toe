import Home from "./homepage/Home";
import { Pvp } from "./components/Pvp";
import { Easy } from "./components/Easy";
import { Hard } from "./components/Hard";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Tic Tac Toe Game - Play Online</title>
        <meta
          name="description"
          content="Play Tic Tac Toe online for free! Challenge your friends in Player vs Player mode or test your skills against AI in easy and hard difficulties."
        />
        <meta
          name="keywords"
          content="tic tac toe, online game, multiplayer game, browser game, AI game"
        />
        <meta property="og:title" content="Tic Tac Toe Game - Play Online" />
        <meta
          property="og:description"
          content="Play Tic Tac Toe online for free! Challenge your friends or play against AI."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tic Tac Toe Game - Play Online" />
        <meta
          name="twitter:description"
          content="Play Tic Tac Toe online for free! Challenge your friends or play against AI."
        />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>
      <HashRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player-vs-player" element={<Pvp />} />
          <Route path="/player-vs-ai-easy" element={<Easy />} />
          <Route path="/player-vs-ai-hard" element={<Hard />} />
        </Routes>
      </HashRouter>
    </>
  );
}
