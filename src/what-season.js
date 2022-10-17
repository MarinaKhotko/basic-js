const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(Dates) {
  if (Dates === undefined || Dates === ''){
     return 'Unable to determine the time of year!'
  }
  else if(Dates instanceof Date === false){
  
  }
  else if(Dates === 'spring'){
    return spring;
  }
  else if(Dates === 'summer'){
    return summer;
  }
  else if(Dates === 'autumn'){
    return autumn;
  }
  else if(Dates === 'winter'){
    return winter;
  }
  else{
      let actualMonth= Dates.getMonth();
      let spring = [2,3,4];
      let summer = [5,6,7];
      let autumn = [8,9,10];
      let winter = [11,0,1];

      let result =''

      let yar = [ spring, summer, autumn, winter]
      for (let i=0; i<yar.length; i++){
      for (let j=0; j<yar[i].length; j++){
        if (yar[i][j] === actualMonth){
          result = result +yar[i];
        }
          }
      }
      if (result === '2,3,4'){
      return('spring');
      }
      if (result === '5,6,7'){
        return('summer');
      }
      if (result === '8,9,10'){
      return('autumn');
      }
      if (result === '11,0,1'){
        return('winter');
      }
  }

  }

module.exports = {
  getSeason
};
