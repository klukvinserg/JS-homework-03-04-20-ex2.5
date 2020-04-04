let str = prompt("Enter string");

function getResult(str) {
  let arr;
  let result = "";

  arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase();
  }
  return result;
}

document.write(`String start: ${str}<br>String end: ${getResult(str)}`);
