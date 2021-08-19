
exports.min = function min (array) {
  if (array === undefined || array.length === 0){
    return 0
  }else{
    array.sort( (a, b) => a - b );
    return array[0];
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0){
    return 0
  }else{
    array.sort( (a, b) => a - b );
    return array[(array.length)-1];
  }
}

exports.avg = function avg (array) {
  let i=0;
  let sum=0;
  let count=0;
  let res=0;
  if (array === undefined || array.length === 0){
    return 0
  }else{
    for (i=0;i<array.length;i++){
      sum+=array[i];
      count++;
    }
    res = sum / count;
    return res;
  }
}
