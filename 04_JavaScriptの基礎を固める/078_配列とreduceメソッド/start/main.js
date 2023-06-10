const array = [1, 2, 3, 4, 5];

array.reduce(function (accu, curr) {
    console.log(accu, curr);
    //curr:現在何をみているか、各ループで返される値
    //accu:1つ前のループで見ていたcurr
     return accu, curr;
});

const str = "animation";
const strArry = str.split("");

// console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  return `${accu}<${curr}>`;
},"");

console.log(result);
