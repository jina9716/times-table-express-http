'use strict';

exports.timesTable = function(num){
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `${num}*${i}=${num*i}\n`;
  }
  return result;
};