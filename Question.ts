import figlet from "figlet";
import chalk from "chalk";
import align from "align-text";
import prompts from "prompts";
import Logger from "./Logger";

const { clear, log } = console;

class Question {
  public ascii: string;
  public question: string;
  public heading: string;
  public userAnswer: number | string | boolean;
  public correctAnswer: number;
  public game: IStats;
  public type: string;

  constructor({ ascii, question, heading, correctAnswer, game, type }: IQuestion) {
    this.ascii = ascii;
    this.question = question;
    this.heading = heading;
    this.userAnswer = 0;
    this.correctAnswer = correctAnswer;
    this.game = game;
    this.type = type;
  }

  async ask() {
    clear();
    this.printHeading();
    await this.printAscii().then(async () => {
      if (this.type === "text") this.printTextQuestion();
    });
  }

  printAscii() {
    return new Promise((res, rej) =>
      figlet(this.ascii, (err, data) => {
        if (err || !data) return rej(new Logger(err).error());
        else return res(log(data));
      })
    );
  }

  printHeading() {
    return log(align(this.heading, (len, longest) => longest - len));
  }

  printQuestion() {
    return log(chalk.yellow(this.question));
  }

  printTextQuestion() {
    return prompts({
      type: "text",
      name: this.question,
      message: this.question,
    })
      .then((response) => {
        this.userAnswer = response[this.question].toString();
        return this.validate();
      })
      .catch((error: Error) => new Logger(error).error());
  }

  validate() {
    if (this.question === `First Name: `) {
      this.game.name = this.userAnswer;
    }
  }
}

export default Question;
