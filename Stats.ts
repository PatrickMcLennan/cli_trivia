import axios, { AxiosResponse } from "axios";
import Logger from "./Logger";

class Stats {
  public name: string;
  public correct: number;
  public incorrect: number;
  public questions: IAxiosQuestion[];
  public round: number;

  constructor(name: string) {
    this.name = name;
    this.correct = 0;
    this.incorrect = 0;
    this.questions = [];
    this.round = 0;
  }

  addRound() {
    return (this.round += 1);
  }

  refillQuestions() {
    return axios({
      method: "GET",
      url: "https://opentdb.com/api.php?amount=10",
    })
      .then((response: AxiosResponse<{ results: IAxiosQuestion[] }>): IAxiosQuestion[] =>
        response.data.results.map(({ question, correct_answer, incorrect_answers, type }) => ({
          question: question,
          correct_answer: correct_answer,
          incorrect_answers: incorrect_answers.map((answer: string) => answer),
          type: type,
        }))
      )
      .then((newQuestions: IAxiosQuestion[]) => (this.questions = [...this.questions, ...newQuestions]))
      .catch((error: Error) => new Logger(error).error());
  }

  changeScore(success: boolean) {
    return success ? (this.correct += 1) : (this.incorrect += 1);
  }
}

export default Stats;
