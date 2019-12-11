import { Observable, Subject } from 'rxjs';
import { StorageChangeArguments } from './storage-change-arguments.interface';

export abstract class CoolStorageBase {
  private storageObject: any;
  private itemSetSubject: Subject<StorageChangeArguments>;
  private itemRemovedSubject: Subject<StorageChangeArguments>;

  constructor(storageObject: any, storageObjectName: string) {
    if (!storageObject) {
      throw new Error(`Current browser does not support ${ storageObjectName }`);
    }

    this.storageObject = storageObject;

    this.itemSetSubject = new Subject<StorageChangeArguments>();
    this.itemRemovedSubject = new Subject<StorageChangeArguments>();
  }

  public get itemSetObservable(): Observable<StorageChangeArguments> {
    return this.itemSetSubject.asObservable();
  }

  public get itemRemovedObservable(): Observable<StorageChangeArguments> {
    return this.itemRemovedSubject.asObservable();
  }

  public getItem(key: string): string {
    return this.storageObject.getItem(key) || null;
  }

  public setItem(key: string, value: string): void {
    this.itemSetSubject.next({
      key,
      value
    });

    this._setItemInStorage(key, value);
  }

  public removeItem(key: string): void {
    let currentValue = this.tryGetObject(key);

    if (!currentValue) {
      currentValue = this.getItem(key);
    }

    this.itemRemovedSubject.next({
      key,
      value: currentValue
    });

    this.storageObject.removeItem(key);
  }

  public key(index: number): string {
    return this.storageObject.key(index);
  }

  public clear(): void {
    this.storageObject.clear();
  }

  public get length(): number {
    return this.storageObject.length;
  }

  public getObject<T>(key: string): T {
    const jsonInStorage = this.getItem(key);

    if (jsonInStorage === null) {
      return null;
    }

    return JSON.parse(jsonInStorage) as T;
  }

  public tryGetObject<T>(key: string): T {
    try {
      return this.getObject<T>(key);
    } catch (e) {
      return null;
    }
  }

  public setObject(key: string, value: any): void {
    this.itemSetSubject.next({
      key,
      value
    });

    this._setItemInStorage(key, JSON.stringify(value));
  }

  private _setItemInStorage(key: string, value: string) {
    this.storageObject.setItem(key, value);
  }
}
