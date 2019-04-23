#! /she/bang
/// <reference no-default-lib="false"/>
/** @format */
// Double slash comment
/* comment */

import { default as love } from "../backup/types/index2";
// import { default as love } from "./../backup/types/index2";

// Below are examples of using TSLint errors suppression
// Here it is suppressing missing type definitions for greeter function

// tslint:disable-next-line typedef
export async function greeter(name) {
  // tslint:disable-next-line no-unsafe-any no-return-await
  return await delayedHello(name, Delays.Long);
}
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

/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(
  name: string,
  delay: number = Delays.Medium
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay)
  );
}

/**
 * Some predefined delays (in milliseconds).
 */
export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000
}
export default class ClassName extends ParentClass implements Interface {
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
    console.log(some, anyhow, Math.PI);
  }
  public get otherMethodeValue() {
    return this._otherMethode();
  }
  public _othervalue: any;
  private _otherMethode() {
    try {
      const popo: string = "ceci est un canon";
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
