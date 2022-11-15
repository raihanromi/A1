let myInputField = document.getElementById("myInputField");
myInputField.addEventListener("input", (e) => {
  
  let b = e.target.value;
  let b_str = b.split(",");
  let b_number = [];

  for (let i = 0; i < b_str.length; i++) {
    b_num = parseInt(b_str[i]);
    b_number.push(b_num);
  }

  //max number
  let max_number = Math.max(...b_number);
  console.log(max_number);
  document.getElementById("max").innerHTML = max_number;

  //min number
  let min_number = Math.min(...b_number);
  document.getElementById("min").innerHTML = min_number;

  //sum number
  let sum = 0;
  for (let i = 0; i < b_number.length; i++) {
    sum = sum + b_number[i];
  }
  document.getElementById("sum").innerHTML = sum;

  //Average
  let avg = sum / b_number.length;
  document.getElementById("average").innerHTML = avg;

  //reverse
  reverseorder = b_number.reverse();
  reverseNum = reverseorder.join();
  console.log(reverseNum);
  document.getElementById("reverse").innerHTML = reverseNum;
});

