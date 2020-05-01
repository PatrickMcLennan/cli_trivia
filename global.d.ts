declare type nulldefined = null | undefined;

// - Fetch Questions - //
declare interface IAxiosQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
}

// - Displays & Prompts - //
declare interface ILoggerScreen {
  title: string;
  heading: string;
}

declare interface IQuestion {
  ascii: string;
  question: string;
  heading: string;
  userAnswer?: number | string | boolean;
  correctAnswer: number;
  game: IGame;
  type: string;
}

declare interface IGame {
  name: string;
  correct: number;
  incorrect: number;
  round: number;
}

// - Alignments - //
declare interface IAlignment {
  character?: string;
  indent?: number;
  prefix?: string;
}

declare type AlignmentParamaters = (len: number, longest: number, line: string, lines: string[]) => IAlignment | number;
