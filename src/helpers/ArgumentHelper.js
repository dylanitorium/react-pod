import capitalize from 'capitalize';

export default class ArgumentHelper {
  static parseArguments({ argv }) {
    const argument = argv[2];
    return {
      component: capitalize(argument),
      style: argument.toLowerCase(),
    }
  }
}
