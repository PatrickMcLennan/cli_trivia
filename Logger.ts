import chalk from "chalk";

class Logger {
  private message: Error | string;
  constructor(text: Error | string | nulldefined) {
    this.message = text ?? `Logger recieved undefined.`;
  }

  public error(): void {
    Promise.reject();
    console.clear();
    throw new Error(chalk.red(this.message.toString()));
  }

  public success(): void {
    console.clear();
    return console.log(this.message.toString());
  }

  public info(): void {
    return console.log(chalk.yellow(this.message));
  }
}

export default Logger;
