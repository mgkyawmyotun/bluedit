import { makeAutoObservable } from 'mobx';
export class SubBluedit {
  subBlueditName: string = undefined;

  constructor() {
    makeAutoObservable(this);
  }
  setName(name: string) {
    this.subBlueditName = name;
  }
}
export class SubBlueditState {
  private static subBlueditName: SubBluedit | undefined = undefined;
  public static getSubBleditState() {
    console.log(this.subBlueditName);
    if (this.subBlueditName) {
      return this.subBlueditName;
    }
    this.subBlueditName = new SubBluedit();
    return this.subBlueditName;
  }
}
