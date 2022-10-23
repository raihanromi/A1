const cleartext = () => {
  document.getElementById("magic-input").value = "";
};

const capitalize = () => {
  let input_value = document.getElementById("magic-input").value;
  new_input_value=input_value.toUpperCase()
  console.log(new_input_value)
  if (input_value===new_input_value){
    document.getElementById("magic-input").value=input_value.toLowerCase()
  }else{
    document.getElementById("magic-input").value=input_value.toUpperCase()
}
};

const sortLines = () => {
  let input_value = document.getElementById("magic-input").value;
  let magicArray = input_value.split("\n");
  let newmagicinput = "";
  magicArray.sort();
  console.log( magicArray)
  for (let i = 0; i < magicArray.length; i++) {
    if (i == magicArray.length - 1) {
      newmagicinput += magicArray[i];
    } else {
      newmagicinput += magicArray[i] + "\n";
    }
  }
  console.log(newmagicinput);
  document.getElementById("magic-input").value = newmagicinput;
};

const reverse = () => {
  let input_value = document.getElementById("magic-input").value;
  let magicArray = input_value.split("\n");
  console.log(magicArray);
  var newmagicinput = "";
  magicArray.reverse();
  for (let i = 0; i < magicArray.length; i++) {
    if (i == magicArray.length - 1) {
      newmagicinput += magicArray[i];
    } else {
      newmagicinput += magicArray[i] + "\n";
    }
  }
  document.getElementById("magic-input").value = newmagicinput;
};

const stripBlank = () => {
  let input_value = document.getElementById("magic-input").value;
  let magicArray = input_value.split("\n");
  let newmagicinput = "";
  magicArray.forEach((magicline) => {
    if (magicline === "") {
      return;
    }
    newmagicinput += magicline.trim() + "\n";
  });
  document.getElementById("magic-input").value = newmagicinput;
};


const addLineNo=() => {
  let magicinput = document.getElementById("magic-input").value;
  let magicArray = magicinput.split("\n");
  let newmagicinput = "";
  for (let i = 0; i < magicArray.length; i++) {
    if (i == magicArray.length - 1) {
      newmagicinput += i + 1 + ") " + magicArray[i];
    } else {
      newmagicinput += i + 1 + ") " + magicArray[i] + "\n";
    }
  }
  document.getElementById("magic-input").value = newmagicinput;
}
const shuffleLines =() =>{
  let magicinput = document.getElementById("magic-input").value;
  let magicArray = magicinput.split("\n");
  let newmagicinput = "";
  magicArray.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  for (let i = 0; i < magicArray.length; i++) {
    if (i == magicArray.length - 1) {
      newmagicinput += magicArray[i];
    } else {
      newmagicinput += magicArray[i] + "\n";
    }
  }
  document.getElementById("magic-input").value = newmagicinput;
}

