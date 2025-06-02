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
        <title>Tic Tac Toe Game by Santosh Thapa</title>
        <meta
          name="description"
          content="Play Tic Tac Toe online for free! A modern game by Santosh Thapa featuring Player vs Player and AI modes with multiple difficulty levels."
        />
        <meta
          name="keywords"
          content="tic tac toe, santosh thapa, online game, multiplayer game, AI game, browser game"
        />
        <meta property="og:title" content="Tic Tac Toe Game by Santosh Thapa" />
        <meta
          property="og:description"
          content="Enjoy Tic Tac Toe online — play with friends or challenge AI. Built by Santosh Thapa using React."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tic-tac-toe-ruddy-ten-15.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tic Tac Toe Game by Santosh Thapa"
        />
        <meta
          name="twitter:description"
          content="Play Tic Tac Toe online with friends or against AI. Created by Santosh Thapa."
        />

        <link
          rel="canonical"
          href="https://tic-tac-toe-ruddy-ten-15.vercel.app/"
        />
        <meta name="author" content="Santosh Thapa" />
        <link rel="author" href="https://santosh-gamma.vercel.app/" />
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
