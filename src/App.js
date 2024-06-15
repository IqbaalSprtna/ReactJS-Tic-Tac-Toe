import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Game from "./components/Game";
import { GameProvider } from "./context/GameContext";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <GameProvider>
        <Box className="App">
          <Game />
        </Box>
      </GameProvider>
    </ChakraProvider>
  );
}

export default App;
