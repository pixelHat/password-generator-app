import { PASSWORD_SYMBOLS } from "../constants";

function shuffle(list: any[]) {
  return list.sort(() => Math.random() - 0.5)
}

class Random {
  static number(a: number , b: number) {
    return Math.floor(Math.random() * b + a);
  }

  static digit() {
    return Random.number(0, 9);
  }

  static uppercaseLetter() {
    return Random.letter().toUpperCase();
  }

  static lowercaseLetter() {
    return Random.letter().toLowerCase();
  }

  static letter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const choosedLetter = Random.number(0, letters.length);
    return letters[choosedLetter];
  }

  static symbol() {
    const choosedSymbol = Random.number(0, PASSWORD_SYMBOLS.length);
    return PASSWORD_SYMBOLS[choosedSymbol];
  }
}

class GeneratePassword {
  private generators: Function[] = [];

  constructor(private qtyOfCharacters: number) {}

  addGenerator(func: () => string|number) {
    this.generators.push(func);
  }

  generate() {
    const numberOfGenerators = this.generators.length;
    if (this.qtyOfCharacters === 0) return null;
    if (numberOfGenerators === 0) return null;
    const password = new Array(this.qtyOfCharacters)
      .fill(0)
      .map((_, idx) => this.generators[idx % numberOfGenerators]())
    return shuffle(password).join('')
  }
}

export class GeneratePasswordBuilder {

  private readonly generator: GeneratePassword;

  constructor(qtyOfCharacters: number) {
    this.generator = new GeneratePassword(qtyOfCharacters);
  }

  withUppercaseLetters(shouldUse: boolean) {
    shouldUse && this.generator.addGenerator(Random.uppercaseLetter);
    return this;
  }

  withLowercaseLetters(shouldUse: boolean) {
    shouldUse && this.generator.addGenerator(Random.lowercaseLetter);
    return this;
  }

  withNumbers(shouldUse: boolean) {
    shouldUse && this.generator.addGenerator(Random.digit);
    return this;
  }

  withSymbols(shouldUse: boolean) {
    shouldUse && this.generator.addGenerator(Random.symbol);
    return this;
  }

  build() {
    return this.generator;
  }
}
