import Logger from "./Logger";
import Stats from "./Stats";

import * as F from "./functions";
import chalk from "chalk";
import prompts from "prompts";
import Question from "./Question";

new Question({
  ascii: "CLI Trivia",
  question: "First Name: ",
  heading: "Enter a name",
  correctAnswer: 0,
  game: new Stats(""),
  type: "text",
}).ask();
