function toRomanLazy(num) {
  let output = "";
  let romanNumeralToArabic = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  };
  
  let romanNumeralPriorityOrder = ['M','D','C','L','X','V','I'];
  
    for (let i = 0; i < romanNumeralPriorityOrder.length; i++) {    
      let ltr = romanNumeralPriorityOrder[i]  // defines letter in romanNumeralPriorityOrder array
      let araNum = romanNumeralToArabic[ltr]  // defines arabic number from Roman numeral
      let compareNum = Math.floor(num / araNum)   // use this value to concatenate the string and update num

      for (let i = 0; i < compareNum; i++) {
        output += ltr;
        num -= araNum;
      }
    }
    return output
}


// IV -> 4
// IX -> 9
// XL -> 40
// CD -> 400
// CM -> 900

toRomanLazy(3)
function toRoman(num) {
  let output = "";
  let romanNumeralToArabic = {
    'I' : 1,
    'IV' : 4,
    'V' : 5,
    'IX' : 9,
    'X' : 10,
    'XL' : 40,
    'L' : 50,
    'C' : 100,
    'CD' : 400,
    'D' : 500,
    'CM' : 900,
    'M' : 1000
  };
  
  let romanNumeralPriorityOrder = ['M','CM','D','CD','C','L','XL','X','IX','V','IV','I'];
  
    for (let i = 0; i < romanNumeralPriorityOrder.length; i++) {    
      let ltr = romanNumeralPriorityOrder[i]  // defines letter in romanNumeralPriorityOrder array
      let araNum = romanNumeralToArabic[ltr]  // defines arabic number from Roman numeral
      let compareNum = Math.floor(num / araNum)   // use this value to concatenate the string and update num

      for (let i = 0; i < compareNum; i++) {
        output += ltr;
        num -= araNum;
      }
    }
    return output
    
}

module.exports = { toRoman, toRomanLazy };
