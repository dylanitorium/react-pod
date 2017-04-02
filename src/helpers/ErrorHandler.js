export default class ErrorHandler {
  static throwError(process) {
    (message) => {
      console.error(`Error: ${message}`);
      process.exit(1);
    }
  }
}
