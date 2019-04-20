class ParentClass {}
interface IInterface {
  value: string;
}

async function asyncFunction() {
  const variable1 = 10;
  let variable2: string = "this is a string indeed";
  variable2 = variable1.toFixed(2);
  return variable2;
}
export const asyncAnonymArowFunction = async () => {
  const variable1 = await asyncFunction();
  let checker: boolean;
  checker = true;
  checker = false;
  checker.valueOf();
  return variable1;
};

interface argument {
  value: string | number;
}
export default class ClassName extends ParentClass implements IInterface {
  public value: string;

  public constructor(parametre: argument) {
    super();
    if (
      typeof parametre.value !== "number" ||
      typeof parametre.value === "string"
    ) {
      this.value = parametre.value;
    }
    this.value = " parametre.value;";
  }
  public async asyncMethode() {
    const variable1 = 10;
    let variable2: string;
    variable2 = variable1.toFixed(2);
    return variable2;
  }

  public get otherMethodeValue() {
    return this._otherMethode();
  }
  private _otherMethode() {
    try {
      return {
        values: [null, NaN, Infinity, this, true, false, undefined]
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

/*

abstract
arguments
await*
boolean
break
byte
case
// catch
char
// class*
// const
continue
debugger
default
delete
do
double
else
enum*
eval
// export*
// extends*
// false
final
finally
float
for
// function
goto
// if
// implements
import*
in
instanceof
int
// interface
// let*
long
native
// new
null
package
// private
protected
// public
// return
short
static
// super*
switch
synchronized
this
// throw
throws
transient
// true
// try
typeof
var
void
volatile
while
with
yield

*/
