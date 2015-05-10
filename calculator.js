/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var memory = 0;
  var total = 0;

  var calculator = {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recall: recall,
    save: save,
    clear: clear
  };

  return calculator;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  function load(x){
    checkNum(x);
    total = x;
    return total;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getTotal(){
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){
    if (checkNum(x)){
    total += x;
      } else {
        return "Error";
      }
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function subtract(x){
    if (checkNum(x)){
    total -= x;
      } else {
        return "Error";
      }
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiply(x){
    if (checkNum(x)){
    total *= x;
      } else {
        return "Error";
      }
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(x){
    if (checkNum(x)){
    total /= x;
      } else {
        return "Error";
      }
  }


  /**
   * Stores the value of `total` to `memory`
   */
   function save(){
    memory = total;
    return memory;
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function recall(){
    return memory;
   }

  /**
   * Clear the value stored at `memory`
   */
   function clear(){
    memory = 0;
    return memory;
   }

   function checkNum(x){
    if(typeof x !== "number"){
      return false;
    }
    return true;
   }
}