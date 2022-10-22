const cleartext = () => {
  document.getElementById("magic-input").value = "";
};

const capitalize = () => {
  let input_value = document.getElementById("magic-input").value;
  document.getElementById("magic-input").value = input_value.toUpperCase();
};

const sortLines = () => {
  let input_value = document.getElementById("magic-input").value;
  let magicArray = input_value.split("\n");
  let newmagicinput = "";
  magicArray.sort();
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


