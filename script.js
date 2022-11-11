let i = 0;
let j = 0;
let arr = (arr, value) => {
  for (i = 0; i <= arr.length; i++) {
    for (j = 0; j <= arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return [i, j];
      }
    }
  }
};
console.log(arr([55, 64, 88, 69, 12, 49, 33, 21, 99], 111));
