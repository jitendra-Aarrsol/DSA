function numberToWords(number) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

  function convertGroup(num) {
    const numStr = num.toString();
    const len = numStr.length;

    if (len === 1) {
      return units[num];
    } else if (len === 2) {
      if (numStr[0] === "1" && numStr[1] !== "0") {
        return teens[numStr[1]];
      } else {
        return (
          tens[numStr[0]] + (numStr[1] !== "0" ? " " + units[numStr[1]] : "")
        );
      }
    } else if (len === 3) {
      return (
        units[numStr[0]] +
        " Hundred" +
        (numStr.slice(1) !== "00"
          ? " " + convertGroup(parseInt(numStr.slice(1)))
          : "")
      );
    }
  }

  function convertToWords(num) {
    if (num === 0) {
      return "Zero";
    }

    let numStr = num.toString();
    const numChunks = [];
    while (numStr.length > 0) {
      numChunks.push(parseInt(numStr.slice(-3)));
      numStr = numStr.slice(0, -3);
    }

    const words = [];
    for (let i = numChunks.length - 1; i >= 0; i--) {
      const groupWords = convertGroup(numChunks[i]);
      if (groupWords !== "") {
        words.push(groupWords + " " + thousands[i]);
      }
    }

    return words.reverse().join(" ");
  }

  return convertToWords(number);
}

// Test the function
const number = 123456789;
const words = numberToWords(number);
console.log(`${number} in words is: ${words}`);
