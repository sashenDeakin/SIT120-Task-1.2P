const inputFelidValue = document.getElementById("stringMethod");
const stringSubmitButton = document.getElementById("stringSubmit");
const stringType = document.getElementById("string-select");
const stringDemo = document.getElementById("string-demo");
const errorMessage = document.getElementById("error");
const extraInput = document.getElementById("extra-input");
const secondExtraInput = document.getElementById("extra-input-two");

const numberFirstInput = document.getElementById("number-method");
const secondNumberInput = document.getElementById("extra-input-number");
const numberSelector = document.getElementById("string-select-number");
const displayOperator = document.getElementById("displayOperator");
const numberDemo = document.getElementById("number-demo");
const numberSubmitButton = document.getElementById("numberSubmit");
const numberError = document.getElementById("error-number-method");

const newDate = document.getElementById("newDate");
const newTime = document.getElementById("newTime");

console.log("SIT120 - Introduction to Responsive Web Apps - Pass Task 2");

/* Date and Time */

function getDate(params) {
  const currentDate = new Date(params);
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
  newDate.innerHTML = formattedDate;
}

function getTime(currentTime) {
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  //const seconds = currentTime.getSeconds();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
  console.log(formattedTime);

  newTime.innerHTML = formattedTime;
}

/* String Methods; */

function stringMethods() {
  const options = [];
  restart();

  function updateInputValue(params) {
    inputFelidValue.value = params;
    extraInput.value = "";
    secondExtraInput.value = "";
    /* stringDemo.innerHTML = ""; */
  }

  function restart() {
    extraInput.style.display = "none";
    secondExtraInput.style.display = "none";
    loopSelectOptions();
    updateInputValue("Hello world!");
  }

  stringType.onclick = function () {
    selectProcess();
    getTime(new Date());
  };

  stringSubmitButton.onclick = function () {
    errorMessage.innerHTML = null;
    submitStringMethod();
  };

  function loopSelectOptions() {
    for (let index = 0; index < stringType.options.length; index++) {
      const element = stringType.options[index];
      options.push(element.value);
    }
  }

  function selectProcess() {
    restart();

    if (options[1] === stringType.value || options[2] === stringType.value) {
      extraInput.style.display = "flex";
      extraInput.placeholder = "Enter Slice Number";
      extraInput.type = "number";
      updateInputValue("Apple, Banana, Kiwi");
      if (options[2] === stringType.value) {
        extraInput.type = "text";
        extraInput.placeholder = "Enter Replace Word";
        secondExtraInput.style.display = "flex";
        secondExtraInput.placeholder = "Enter New Word";
        secondExtraInput.type = "text";
        updateInputValue("My Name Is Sashen");
      }
    } else if (options[5] === stringType.value) {
      extraInput.style.display = "flex";
      secondExtraInput.style.display = "flex";
      inputFelidValue.placeholder = "Enter First Word";
      extraInput.placeholder = "Enter Second Word";
      secondExtraInput.placeholder = "Enter Join Operator";
      secondExtraInput.type = "text";
      extraInput.type = "text";

      updateInputValue("Hello");
    } else if (
      options[6] === stringType.value ||
      options[7] === stringType.value ||
      options[8] === stringType.value
    ) {
      updateInputValue('"      Hello World!      "');
    } else if (
      options[9] === stringType.value ||
      options[10] === stringType.value
    ) {
      extraInput.style.display = "flex";
      secondExtraInput.style.display = "flex";
      extraInput.placeholder = "Enter string";
      secondExtraInput.placeholder = "Enter length";
      secondExtraInput.type = "number";

      updateInputValue("5");
    } else if (
      options[11] === stringType.value ||
      options[12] === stringType.value
    ) {
      secondExtraInput.style.display = "flex";
      secondExtraInput.type = "number";
      secondExtraInput.placeholder = "Enter index";
    } else {
      extraInput.style.display = "none";
      secondExtraInput.style.display = "none";
    }
  }

  function submitStringMethod() {
    const inputValue = inputFelidValue.value;
    const firstInput = extraInput.value;
    const secondInput = secondExtraInput.value;
    var finalDemo;

    loopSelectOptions();

    try {
      if (inputValue) {
        if (options.length < 0) return;

        if (options[0] === stringType.value) {
          const length = inputValue.length;
          finalDemo = `Length is: ${length}`;
        } else if (options[1] === stringType.value) {
          const slice = inputValue.slice(extraInput.value);
          finalDemo = `${slice}`;
        } else if (options[2] === stringType.value) {
          const replace = inputValue.replace(firstInput, secondInput);
          finalDemo = `${replace}`;
        } else if (options[3] === stringType.value) {
          const upperCase = inputValue.toUpperCase();
          finalDemo = `${upperCase}`;
        } else if (options[4] === stringType.value) {
          const loverCase = inputValue.toLowerCase();
          finalDemo = `${loverCase}`;
        } else if (options[5] === stringType.value) {
          const concat = inputValue.concat(secondInput, firstInput);
          finalDemo = `${concat}`;
        } else if (options[6] === stringType.value) {
          const trim = inputValue.trim();
          finalDemo = `${trim}`;
        } else if (options[7] === stringType.value) {
          const trim = inputValue.trimStart();
          finalDemo = `${trim}`;
        } else if (options[8] === stringType.value) {
          const trim = inputValue.trimEnd();
          finalDemo = `${trim}`;
        } else if (options[9] === stringType.value) {
          const pad = inputValue.toString().padStart(secondInput, firstInput);
          finalDemo = `${pad}`;
        } else if (options[10] === stringType.value) {
          const pad = inputValue.toString().padEnd(secondInput, firstInput);
          finalDemo = `${pad}`;
        } else if (options[11] === stringType.value) {
          const charAt = inputValue.charAt(secondInput);
          finalDemo = `${charAt}`;
        } else if (options[12] === stringType.value) {
          const charAt = inputValue.charCodeAt(secondInput);
          finalDemo = `${charAt}`;
        } else if (options[13] === stringType.value) {
          const split = inputValue.split(secondInput);
          finalDemo = `${split}`;
        }
      } else {
        errorMessage.innerHTML = "Please Enter Right Value";
      }
    } catch (error) {
      alert(error.message);
    }

    stringDemo.innerHTML = finalDemo;

    if (!finalDemo) return;

    demoBorderStyle(stringDemo);

    /*  console.log(options); */
  }
}

/* Number Methods */

function numberMethods() {
  const options = [];
  loopSelectOptions();

  function formatOperation(params) {
    secondNumberInput.style.display = "flex";

    if (params === options[1]) {
      displayOperator.innerHTML = "-";
    } else if (params === options[2]) {
      displayOperator.innerHTML = "×";
    } else if (params === options[3]) {
      displayOperator.innerHTML = "÷";
    } else if (params === options[0]) {
      displayOperator.innerHTML = "+";
    } else if (params === options[4]) {
      displayOperator.innerHTML = "";
      secondNumberInput.placeholder = "Enter toExponential Number";
    } else if (params === options[5]) {
      displayOperator.innerHTML = "";
      secondNumberInput.placeholder = "Enter toFixed Number";
    } else if (params === options[6]) {
      displayOperator.innerHTML = "";
      secondNumberInput.placeholder = "Enter toPrecision Number";
    } else if (params === options[7]) {
      displayOperator.innerHTML = "";
      secondNumberInput.style.display = "none";
      numberFirstInput.type = "text";
    }
  }

  function operations(first, second, operator) {
    var finalDemo;

    if (operator === options[0]) {
      const sum = first + second;
      finalDemo = sum.valueOf();
    } else if (operator === options[1]) {
      const sum = first - second;
      finalDemo = sum;
    } else if (operator === options[2]) {
      const sum = first * second;
      finalDemo = sum;
    } else if (operator === options[3]) {
      const sum = first / second;
      finalDemo = sum;
    } else if (operator === options[4]) {
      const answer = first.toExponential(second);
      finalDemo = answer;
    } else if (operator === options[5]) {
      const answer = first.toFixed(second);
      finalDemo = answer;
    } else if (operator === options[6]) {
      const answer = first.toPrecision(second);
      finalDemo = answer;
    } else if (operator === options[7]) {
      const answer = Number(first);
      finalDemo = answer;
    }

    numberDemo.innerHTML = finalDemo;

    if (!finalDemo) return;

    demoBorderStyle(numberDemo);
  }

  numberSubmitButton.onclick = function () {
    const firstInput = numberFirstInput.value;
    const secondInput = secondNumberInput.value;

    if (!firstInput && !secondInput) {
      numberError.innerHTML = "Please Enter Right Value";
    } else {
      numberError.innerHTML = null;
    }

    operations(
      Math.floor(firstInput),
      Math.floor(secondInput),
      numberSelector.value
    );
  };

  function loopSelectOptions() {
    for (let index = 0; index < numberSelector.options.length; index++) {
      const element = numberSelector.options[index];
      options.push(element.value);
    }
  }

  numberSelector.onclick = function () {
    formatOperation(numberSelector.value);
    getTime(new Date());
  };
}

function demoBorderStyle(params) {
  params.style.borderStyle = "dotted";
  params.style.borderColor = "#5a54e8";
  params.style.padding = "20px";
  params.style.borderRadius = "20px";
}

getDate(Date.now());
getTime(new Date());
stringMethods();
numberMethods();
