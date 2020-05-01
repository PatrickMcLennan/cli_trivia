import Game from "./Game";
import figlet from "figlet";
import Logger from "./Logger";
import prompts from "prompts";

const NewGame: Game = new Game();

console.clear();
console.log(figlet.textSync(`CLI Trivia`));

prompts({
  type: `text`,
  name: `name`,
  message: `First Name: `,
});
