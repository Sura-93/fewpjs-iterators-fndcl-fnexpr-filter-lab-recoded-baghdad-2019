// Code your solution 
function findMatching(arr, s) {
  arr= arr.filter(function (ss) {
    
    return ss.toLowerCase() === s.toLowerCase();

  })
}
