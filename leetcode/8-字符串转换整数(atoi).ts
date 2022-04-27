function myAtoi(s: string): number {
  let limit = Math.pow(2,31);
  let num = parseInt(s);

  if(isNaN(num)){
      num = 0;
  }

  if(num < - limit){
      num = -limit;
  }
  
  if(num > limit - 1){
      num = limit - 1;
  }

  return num;
};