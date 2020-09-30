
exports.min = function min (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length == 0){
    return 0;
  }else {
    let result = Math.min(...array);
    return result;
  }

}

exports.max = function max (array) {
  if (array == undefined) {
  return 0;
  }
  if (array.length == 0){
      return 0;
  }else {
    let result = Math.max(...array);
    return result;
  }


}

exports.avg = function avg (array) {
  if (array == undefined) {
      return 0;
    }
  if (array.length == 0){
    return 0;
    }else {
      let result = array.reduce((sum, current) => sum + current, 0);
      return result/2/10;
    }

}
