const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(Current_ACTIVITY) {

  let a = Number(Current_ACTIVITY);
 
      if (typeof Current_ACTIVITY !== "string" || Current_ACTIVITY === undefined || a ===""){
          return(false);   
      }
      else if (isNaN(a) || a === undefined || a <= 0 || a > 15){
          return(false); 
      }
      else {
          let b = ((Math.log(MODERN_ACTIVITY/a))/(0.693/HALF_LIFE_PERIOD));
          return(Math.ceil(b))
      }
}

module.exports = {
  dateSample
};
