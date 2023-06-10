const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
  console.log(accu, curr);
  return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
  //配列の各要素に対して、縮小関数を呼び出す
  let accu = defaultValue;
  for (let i = 0; i < arry.length; i++) {
    let curr = arry[i];
    accu = callback(accu, curr);
  }

  return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
