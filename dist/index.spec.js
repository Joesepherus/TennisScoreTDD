"use strict";

var _index = require("./index");

describe("Tennis Scoring Tests", () => {
  test("Server scores", () => {
    (0, _index.startTennisMatch)();
    (0, _index.serverScores)();
    expect((0, _index.getScore)()).toBe("15 - Love");
  });
  test("Server scores 2 times", () => {
    (0, _index.startTennisMatch)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    expect((0, _index.getScore)()).toBe("30 - Love");
  });
  test("Opponent scores 3 times", () => {
    (0, _index.startTennisMatch)();
    (0, _index.opponentScores)();
    (0, _index.opponentScores)();
    (0, _index.opponentScores)();
    expect((0, _index.getScore)()).toBe("Love - 40");
  });
  test("Server scores 3 times and Opponent scores 2 times.", () => {
    (0, _index.startTennisMatch)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.opponentScores)();
    (0, _index.opponentScores)();
    expect((0, _index.getScore)()).toBe("40 - 30");
  });
  test("Server scores 4 times", () => {
    (0, _index.startTennisMatch)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    expect((0, _index.getScore)()).toBe("Game - Server");
  });
  test("Server scores 5 times", () => {
    (0, _index.startTennisMatch)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    (0, _index.serverScores)();
    expect((0, _index.getScore)()).toBe("Game is already over. You can't score anymore.");
  });
});