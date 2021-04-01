"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startTennisMatch = startTennisMatch;
exports.serverScores = serverScores;
exports.opponentScores = opponentScores;
exports.getScore = getScore;

var _utils = require("./utils.js");

let score;
let gameOver;
let error;
let deuce;

function startTennisMatch() {
  score = [0, 0];
  gameOver = false;
  error = false;
  deuce = false;
}

function serverScores() {
  if (gameOver) {
    error = "Game is already over. You can't score anymore.";
    return;
  }

  score[0]++;
  getScore();
}

function opponentScores() {
  if (gameOver) {
    error = "Game is already over. You can't score anymore.";
    return;
  }

  score[1]++;
  getScore();
}

function getAdvantage(diff, isServerUp) {
  if (diff === 1) {
    if (isServerUp) {
      return "Advantage - Server";
    } else {
      return "Advantage - Opponent";
    }
  }
}

function getGameOver(diff, isServerUp) {
  if (diff > 1) {
    gameOver = true;

    if (isServerUp) {
      return "Game - Server";
    } else {
      return "Game - Opponent";
    }
  }
}

function getScore() {
  if (error) return error;
  let scoreText;
  const serverScore = score[0];
  const opponentScore = score[1];
  const diff = Math.abs(serverScore - opponentScore);

  if (serverScore > 3 || opponentScore > 3) {
    const isServerUp = serverScore > opponentScore;
    scoreText = getGameOver(diff, isServerUp);
    scoreText = !gameOver ? getAdvantage(diff, isServerUp) : scoreText;
  }

  if (serverScore >= 3 && opponentScore >= 3 && diff === 0) {
    scoreText = "Deuce";
  }

  return scoreText ? scoreText : `${(0, _utils.getScoreInText)(serverScore)} - ${(0, _utils.getScoreInText)(opponentScore)}`;
}