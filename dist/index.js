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

function startTennisMatch() {
  score = [0, 0];
  gameOver = false;
  error = false;
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

function getScore() {
  if (error) return error;
  const serverScore = (0, _utils.getScoreInText)(score[0]);
  const opponentScore = (0, _utils.getScoreInText)(score[1]);

  if (serverScore === "Game") {
    gameOver = true;
    return "Game - Server";
  }

  if (opponentScore === "Game") {
    gameOver = true;
    return "Game - Opponent";
  }

  return `${serverScore} - ${opponentScore}`;
}