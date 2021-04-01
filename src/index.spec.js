import {
  serverScores,
  getScore,
  startTennisMatch,
  opponentScores,
} from "./index";

describe("Tennis Scoring Tests", () => {
  test("Server scores", () => {
    startTennisMatch();
    serverScores();
    expect(getScore()).toBe("15 - Love");
  });

  test("Server scores 2 times", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    expect(getScore()).toBe("30 - Love");
  });

  test("Opponent scores 3 times", () => {
    startTennisMatch();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Love - 40");
  });

  test("Server scores 3 times and Opponent scores 2 times.", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("40 - 30");
  });

  test("Server scores 3 times and Opponent scores 3 times.", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Deuce");
  });

  test("Server scores 3 times and Opponent scores 4 times.", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Advantage - Opponent");
  });

  test("Server scores 3 times and Opponent scores 5 times.", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Game - Opponent");
  });

  test("Server scores 3 times and Opponent scores 6 times.", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    opponentScores();
    expect(getScore()).toBe("Game is already over. You can't score anymore.");
  });

  test("Server scores 4 times", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    serverScores();
    expect(getScore()).toBe("Game - Server");
  });

  test("Server scores 5 times", () => {
    startTennisMatch();
    serverScores();
    serverScores();
    serverScores();
    serverScores();
    serverScores();
    expect(getScore()).toBe("Game is already over. You can't score anymore.");
  });
});
