/** @format */

import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import mongosanitize from "express-mongo-sanitize";
import { config } from "dotenv";

config();
const jwtSecret = process.env.JWTSECRET;
const router = express.Router();
const User = mongoose.model("User");
const List = mongoose.model("List");
const ListItem = mongoose.model("ListItem");

function returnAllLists(userId: any, res: any) {
  return User.findById(userId)
    .populate({
      path: "lists",
      populate: {
        path: "listItems"
      }
    })
    .exec((userErr, doc) => {
      if (!!userErr) console.error("User.populate Error", userErr);
      return res.status(200).json({
        success: true,
        successMessage: "Here is the page",
        data: doc.collection
      });
    });
}

/**
 * Send LIST
 */

debugger;

(() => {
  const objectLike = { propertyOne: 10, propertyTwo: "string" };
  const { propertyOne } = objectLike;
  const myArray = [5, 10, 15, 20, 25];
  const [cinq, dix] = myArray;
  global.console.log("Hello World");
  return { propertyOne, cinq, dix };
})();

export type defined = string | 450 | null | true | false | undefined;
@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

export async function greeter(name: any) {
  return await delayedHello(name, Delays.Long);
}
export async function notMuch(ValueIn: string) {
  return { ValueIn };
}

class ParentClass {}
interface IInterface {
  value: string;
}

interface Arguments {
  value: string | number;
  gabriel: number;
}

type Tada = number | boolean;

enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

async function asyncFunction() {
  const objectLike = { propertyOne: 10, propertyTwo: "string" };
  const { propertyOne } = objectLike;

  const variable1 = 2 + 10;
  let message: string = "this is a string indeed";
  message = 'this is a "string" indeed';
  const variable3 = new Greeter(message);

  const variable2 = await variable1.toFixed(200 - 400);
  return { variable2, variable3, propertyOne };
}
export type anyone = number | string;

asyncFunction.somemethode = async () => {};

export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  let checker: boolean;
  checker = true;
  checker = false;
  checker.valueOf();
  const angel = checker ? 48 : 47;
  const some = new ClassName({ value: "value", gabriel: angel });
  some.otherMethodeValue;
  return { some, variable1 };
};
/**
 * Some predefined delays (in milliseconds).
 */

/**
 * Returns a Promise<string> that resolves after given time.
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 * @see https://www.exemple.com
 */
function delayedHello(
  name: string,
  delay: number = Delays.Medium
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay)
  );
}
export class ClassName extends ParentClass implements IInterface {
  public value: string;
  public values: Tada;

  public constructor(parametre: Arguments) {
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
        values: [450, null, NaN, Infinity, this, true, false, undefined],
        popo,
        souris: mice
      };
    } catch (error) {
      throw new global.GLOBAL.global.Error(error.message);
    }
  }
}
export {
  jwt,
  jwtSecret,
  List,
  ListItem,
  mongosanitize,
  returnAllLists,
  router,
  User
};

export function formatStockChartData(stockChartDataInfos: any[]): any[] {
  return stockChartDataInfos.map(stockChartData => {
    return {
      symbol: stockChartData.symbol,
      iexSymbolID: stockChartData.iexSymbolID,
      qtSymbolID: stockChartData.qtSymbolID,
      date: stockChartData.date,
      minute: stockChartData.minute,
      label: stockChartData.label,
      candle: {
        high: stockChartData.high,
        low: stockChartData.low,
        open: stockChartData.open,
        close: stockChartData.close
      },
      volume: stockChartData.volume,
      average: stockChartData.average,
      notional: stockChartData.notional,
      numberOfTrades: stockChartData.numberOfTrades,
      marketHigh: stockChartData.marketHigh,
      marketLow: stockChartData.marketLow,
      marketAverage: stockChartData.marketAverage,
      marketVolume: stockChartData.marketVolume,
      marketNotional: stockChartData.marketNotional,
      marketNumberOfTrades: stockChartData.marketNumberOfTrades,
      marketOpen: stockChartData.marketOpen,
      marketClose: stockChartData.marketClose,
      changeOverTime: stockChartData.changeOverTime,
      marketChangeOverTime: stockChartData.marketChangeOverTime
    };
  });
}
