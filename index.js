// Your code here
function mapToNegativize(nums){
  return nums.map(num => num * -1)
}

function mapToNoChange(nums){
  return nums.map(num => num)
}

function mapToDouble(nums){
  return nums.map(num => num * 2)
}

function mapToSquare(nums){
  return nums.map(num => num**2)
}

function reduceToTotal(sourceArray, start = 0){
  function runningTotal(total, num){
    return total + num
  }
  return sourceArray.reduce(runningTotal, start)
}

function reduceToAllTrue(sourceArray){
  function isTrue(bools, bool){
    if(!!bools == true && !!bool ==true){
      return true
    } else {
      return false
    }
  }
  return sourceArray.reduce(isTrue, true) 
}

function reduceToAnyTrue(sourceArray){
  const reducer = function(accumulator, currentValue){  
      if(accumulator == true){
          return true
      } else {
          return !!currentValue
      } 
  }
  return sourceArray.reduce(reducer, false)
}