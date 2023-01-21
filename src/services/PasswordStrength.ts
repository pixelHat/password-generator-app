import { PASSWORD_SYMBOLS } from "../constants";
import { CounterMap } from "../utils/Counter";
import { escapeRegExp } from "../utils/regex";

export enum StrengthEnum {
  TOO_WEAK,
  MEDIUM,
  HIGH,
  STRONG
}

export class PasswordStrength {
  static calculateStrength(password: string) {
    return Math.min(
      PasswordStrength.size(password),
      PasswordStrength.uniqueCharacters(password),
      PasswordStrength.classesOfCharacters(password)
    );
  }

  static size(password: string) {
    if (password.length > 10) return StrengthEnum.STRONG;
    if (password.length > 7) return StrengthEnum.HIGH;
    if (password.length > 5) return StrengthEnum.MEDIUM;
    return StrengthEnum.TOO_WEAK;
  }

  static uniqueCharacters(password: string) {
    const counter = new CounterMap(password);
    const uniques = counter.uniqueCharacters();
    if (uniques >= 7) return StrengthEnum.STRONG;
    if (uniques >= 5) return StrengthEnum.HIGH;
    if (password.length >= 3) return StrengthEnum.MEDIUM;
    return StrengthEnum.TOO_WEAK;
  }

  static classesOfCharacters(password: string) {
    const hasUpperLetter = password.match(/[A-Z]/);
    const hasLowerLetter = password.match(/[a-z]/);
    const hasNumber = password.match(/[0-9]/);
    const pattern = `[${escapeRegExp(PASSWORD_SYMBOLS)}]`;
    const regex = new RegExp(pattern, "g");
    const hasSymbol = password.match(regex);
    return [hasUpperLetter, hasSymbol, hasNumber, hasLowerLetter].filter(v => !!v).length - 1;
  }
}
