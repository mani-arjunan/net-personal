class HashMap<T> {
  private arr: Array<T>;
  private totalSize: number;

  constructor(totalSize: number = 100) {
    this.totalSize = totalSize;
    this.arr = [];
  }

  set(key: string, value: T): void {
    const index = this.hash(key);

    this.arr[index] = value;
  }

  get(key: string): T {
    return this.arr[this.hash(key)];
  }

  private hash(key: string): number {
    let temp = key[0].charCodeAt(0);

    return temp % this.totalSize;
  }
}

const h = new HashMap<string>(100);

h.set("name", "Manikandan");
h.set("age", "29");
console.log(h.get("name"));
console.log(h.get("age"));
console.log(h.get("agse"));
