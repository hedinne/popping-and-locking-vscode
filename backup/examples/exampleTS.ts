import { default as love } from "../types/index2";

export async function notMuch(ValueIn: string) {
  return { ValueIn, love };
}

class ParentClass {}
interface Interface {
  value: string;
}

interface argument {
  value: string | number;
  gabriel: number;
}

type tada = number | boolean;

async function asyncFunction() {
  const variable1 = 2 + 10;
  let variable2: string = "this is a string indeed";
  variable2 = 'this is a "string" indeed';
  variable2 = variable1.toFixed(200 - 400);
  return variable2;
}
export type anyone = number | string;

asyncFunction.somemethode = async () => {};

export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  let checker: boolean;
  checker = true;
  checker = false;
  checker.valueOf();
  const gabriel = checker ? 48 : 47;
  const some = new ClassName({ value: "value", gabriel });
  some.otherMethodeValue;
  return { some, variable1 };
};

export class ClassName extends ParentClass implements Interface {
  public value: string;
  public values: tada;

  public constructor(parametre: argument) {
    super();
    if (
      typeof parametre.value !== "number" ||
      typeof parametre.value === "string"
    ) {
      this.value = parametre.value;
    }
    this.value = "parametre.value;";
  }
  public async asyncMethode() {
    const variable1 = 10;
    let variable2: string;
    variable2 = await variable1.toFixed(2_000);
    return variable2;
  }
  public set otherMethodeValue(some) {
    this._othervalue = some;
    const anyhow = this._otherMethode().souris;
    console.log(some, anyhow);
  }
  public get otherMethodeValue() {
    return this._otherMethode();
  }
  public _othervalue: any;
  private _otherMethode() {
    try {
      const popo: string = "ceci est un étron";
      let mice = "jerry";
      mice = "ichy";
      console.log("mice", mice);
      return {
        values: [null, NaN, Infinity, this, true, false, undefined],
        popo,
        souris: mice
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
