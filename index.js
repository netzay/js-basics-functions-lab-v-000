// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  const hq = 42;
  if (blocks > 42){
    return blocks - hq;
  } else {
    return hq - blocks;
  }
}

function distanceFromHqInFeet(feet){
  const block = 264;
  return block * distanceFromHqInBlocks(feet);
}

function distanceTravelledInFeet(start, end){
  let distance = 0;
  let feet = 264;
  if (start > end){
    distance = start - end;
    return distance * feet;
  } else {
    distance = end - start;
    return distance * feet;
  }
}

function calculatesFarePrice(start, end){
  let total = distanceTravelledInFeet(start, end);
  if (distanceTravelledInFeet(start, end) <= 400) {
    return 0;
  } else if  >= 400) && (distanceTravelledInFeet(start, end) <= 2000){
    re
  }
  
}