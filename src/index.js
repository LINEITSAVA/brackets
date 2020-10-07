module.exports = function check(str, bracketsConfig) {
  let brackets_open = ['(', '[', '{', '1', '3', '5'];
  let brackets_closed =[')', ']', '}', '2', '4', '6'];
      let newStr = str.match(/.{1}/g)+ "," + bracketsConfig.join();
      let newArr = newStr.split(",");


      let stack = [];

      for (let i = 0; i < newArr.length; i++) {


      if (brackets_open.indexOf(newArr[i]) === -1 && brackets_closed.indexOf(newArr[i]) === -1){
          if (stack.indexOf(newArr[i]) === -1){
            stack.push(newArr[i]);
          }
        else if (stack.indexOf(newArr[i]) !== -1 && stack.indexOf(newArr[i]) === (stack.length - 1)){
          stack.pop();
        }

        else {stack.push(newArr[i]);

          }
      }


          if (brackets_open.indexOf(newArr[i]) !== -1){

              stack.push(newArr[i]);

            }
          else if (brackets_closed.indexOf(newArr[i]) !== -1){


              if (stack.length === 0){
                  return false;}
              else {
                  let index = brackets_closed.indexOf(newArr[i]);
                  let open_bracket = brackets_open[index];
                  if (stack[stack.length-1] === open_bracket){
                      stack.pop()}

                  }
                }}
            if (stack.length === 0){
                return true;
              } else {
                return false;
              }


}
