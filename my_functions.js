myFunctions = {

  helloWorld(){
  return "Hello World!"
  },
  add(a,b){
    return a + b
  },
  subtract(a,b){
    return a - b
  },
  multiply(a,b){
    return a * b
  },
  divide(a,b){
    return a / b
  },
  lengthOfString(string){
    return string.length
  },
  concatenateStrings(str1, str2){
    return str1 + str2
  },
  addStringAsNumber(str1, str2){
    return parseInt(str1) + parseInt(str2)
  },
  numberToFullMonthName(mnthNum){
    if (mnthNum === 1){
      return "January";
    }else if (mnthNum === 3){
      return "March";
    }else {
      return "September";
    }
  },
  numberToShortMonthName(mnthNum){
    if (mnthNum === 1){
      return "Jan";
    }else if (mnthNum === 4){
      return "Apr";
    }else {
      return "Oct";
    }
  },
  cubeVol(num){
    return num ** 3;
  },
  sphereVol(num){
    return (4*(Math.PI*num**3))/3
  },
  far(num){
    return ((num-32)*5)/9;
  }
}

module.exports = myFunctions;
