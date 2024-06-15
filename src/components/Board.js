import * as React from "react";
import { Box, Button, Grid } from "@chakra-ui/react";
import {
  useGame,
  calculateWinner,
  calculateNextValue,
  calculateStatus,
} from "../context/GameContext";
import "./Board.css";

function Board() {
  const { squares, selectSquare } = useGame();

  const winner = calculateWinner(squares); // Variable untuk function calculateWinner
  const nextValue = calculateNextValue(squares); // Variable untuk function calculateNextValue
  const status = calculateStatus(winner, squares, nextValue); // Variable untuk function calculateStatus

  function renderSquare(i) {
    return (
      <Button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </Button>
    );
  }

  return (
    <Box textAlign="center">
      <Box mb={4} fontSize="xl" color={"white"}>
        {status}
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Grid>
    </Box>
  );
}

export default Board;
