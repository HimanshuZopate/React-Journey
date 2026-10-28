import { useState } from "react";
import "./App.css";

const GRID_SIZE = 3;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;

// Dynamically generate [1, 2, 3, 4, 5, 6, 7, 8, 0] so it scales easily
const WINNING_STATE = Array.from({ length: TILE_COUNT - 1 }, (_, i) => i + 1).concat(0);

// Helper to find which tiles can legally move into the empty space
const getValidMoves = (emptyIndex) => {
  const validMoves = [];
  const row = Math.floor(emptyIndex / GRID_SIZE);
  const col = emptyIndex % GRID_SIZE;

  if (row > 0) validMoves.push(emptyIndex - GRID_SIZE); // Up
  if (row < GRID_SIZE - 1) validMoves.push(emptyIndex + GRID_SIZE); // Down
  if (col > 0) validMoves.push(emptyIndex - 1); // Left
  if (col < GRID_SIZE - 1) validMoves.push(emptyIndex + 1); // Right

  return validMoves;
};

// Shuffling by simulating valid moves guarantees the puzzle remains solvable
const generateShuffledBoard = () => {
  let currentTiles = [...WINNING_STATE];
  let emptyIndex = TILE_COUNT - 1;

  // 150 random valid moves provides a good shuffle
  for (let i = 0; i < 150; i++) {
    const validMoves = getValidMoves(emptyIndex);
    const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];

    // Swap empty space with the chosen valid tile
    [currentTiles[emptyIndex], currentTiles[randomMove]] = [
      currentTiles[randomMove],
      currentTiles[emptyIndex],
    ];
    emptyIndex = randomMove;
  }

  return currentTiles;
};

export default function App() {
  const [tiles, setTiles] = useState(generateShuffledBoard);
  const [moves, setMoves] = useState(0);

  // Pro-tip: Derive the win state from the tiles array rather than using a separate useState.
  // This prevents bugs where the UI and the win-state get out of sync.
  const isWon = tiles.every((val, index) => val === WINNING_STATE[index]);

  const handleTileClick = (index) => {
    if (isWon) return;

    const emptyIndex = tiles.indexOf(0);
    const validMoves = getValidMoves(emptyIndex);

    if (validMoves.includes(index)) {
      const newTiles = [...tiles];
      
      // Perform the swap
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];

      setTiles(newTiles);
      setMoves((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setTiles(generateShuffledBoard());
    setMoves(0);
  };

  return (
    <div className="game-container">
      <div className="header">
        <h1>Number Puzzle</h1>
        <p>Arrange the numbers in order from 1 to 8.</p>
      </div>

      <div className="stats-bar">
        <span className="moves-counter">Moves: <strong>{moves}</strong></span>
        <button className="restart-btn" onClick={handleRestart}>
          Restart Game
        </button>
      </div>

      <div className={`board ${isWon ? "board-won" : ""}`}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => handleTileClick(index)}
            className={`tile ${tile === 0 ? "empty" : ""} ${isWon && tile !== 0 ? "won-tile" : ""}`}
          >
            {tile !== 0 ? tile : ""}
          </div>
        ))}
      </div>

      {isWon && (
        <div className="win-message">
          <p>Puzzle Solved!</p>
        </div>
      )}
    </div>
  );
}