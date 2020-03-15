module.exports = function check(str, bracketsConfig) {
    let y = bracketsConfig.length * 2;
    let arr = bracketsConfig.toString().split(',');
    let arr2 = arr.map((v,i) => arr[i].concat(arr[i+1])).filter((v,i) => (i % 2 == 0) ? arr[i] : '');
    let str2 = str
    let x = 0;
    do {
      str = str.replace(arr2[x], '');
      x = arr2.findIndex((v,i) => (str.indexOf(v) != -1));
    } while (x != -1)
    return str.length == 0;
}
