// Code your solution 
function findMatching(arr, s) {
  arr= arr.filter(function (ss) {
    
    return ss.toLowerCase() === s.toLowerCase();

  })
  return arr;
}

function fuzzyMatch  (arr, s) {
    arr= arr.filter(function(ss){
    return ss.toLowerCase().indexOf(s.toLowerCase()) === 0;
  })
  return arr;
}
  
function matchName(arr,s) {
  arr = arr.filter(function(v){
    return v['name'] === s });
    return arr;
}