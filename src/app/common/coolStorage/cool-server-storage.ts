export class CoolServerStorage {
  private storageObject: any;

  public constructor() {
    this.storageObject = {};
  }

  public getItem(key: string): string {
    return this.storageObject[key] || null;
  }

  public setItem(key: string, value: string): void {
    this.storageObject[key] = value;
  }

  public removeItem(key: string): void {
    this.storageObject[key] = undefined;
  }

  public key(index: number): string {
    return this.storageObject.key(index);
  }

  public clear(): void {
    this.storageObject = {};
  }

  public get length(): number {
    return Object.keys(this.storageObject).length;
  }
}
