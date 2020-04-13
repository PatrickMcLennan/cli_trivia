import figlet from "figlet";
import Logger from "./Logger";
import prompts from "prompts";

// Prompts & Displays - //
export const asciiArt = (message: string) =>
  new Promise((res, rej) =>
    figlet(message, (err, data) => {
      if (err || !data) return rej(new Logger(err).error());
      else return res(console.log(data));
    })
  );

export const { log, clear } = console;

export const textPrompt = (name: string, message: string) =>
  prompts({
    type: "text",
    name,
    message,
  })
    .then((response) => response[name].toString())
    .catch((error: Error) => new Logger(error).error());

// - Align Text - //
// export const rightAlign = (_len, longest, line) => ({
//   indent: Math.floor(longest - Number(line)),
// });

// export const centerAlign = (len, longest, _line, _lines) => ({
//   character: `\n`,
//   indent: Math.floor((longest - len) / 2),
//   prefix: `~`,
// });

export const spacing: Function = (length: number) => console.log(Array.from({ length }, () => `\n`).join(""));
