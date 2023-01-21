export class Clipboard {
  constructor(private navigator: Navigator) {}

  async set(text: string) {
    this.navigator.clipboard.writeText(text);
  }
}
