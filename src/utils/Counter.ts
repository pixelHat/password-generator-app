export class CounterMap<K>{
  private readonly map: Map<K,number>;

  constructor(text: Iterable<K>) {
    this.map = new Map<K, number>();
    for (const char of text) {
      this.set(char);
    }
  }

  set(key: K) {
    const currentValue = this.map.get(key);
    this.map.set(key, currentValue || 0);
  }

  get(key: K) {
    return this.map.get(key);
  }

  uniqueCharacters() {
    let idx = 0;
    for(const _ of this.map.keys()) {
      idx++;
    }
    return idx;
  }
}
