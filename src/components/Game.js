import * as React from "react";
import { Button, VStack } from "@chakra-ui/react";
import Board from "./Board";
import { useGame } from "../context/GameContext";

function Game() {
  const { restart } = useGame();

  return (
    <VStack spacing={4}>
      <Board />
      <Button onClick={restart}>Restart</Button>
    </VStack>
  );
}

export default Game;
