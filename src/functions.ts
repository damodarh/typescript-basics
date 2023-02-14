//Functions
//When we don't specify the type for function's return value, it is 'any' by default
function addNum(x: number, y: number): number {
    return x + y;
  }
  
  console.log(addNum(1, 2));
  
  //void
  function log(message: string | number): void {
      console.log(message);
  }
  
  log('void example');