
//part 1
// Add an event listener to the "Send" button

function userForm() {
    // Get form data
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

    // Display form data in the console
    //console.log("First Name: " + firstName);
    //console.log("Last Name: " + lastName);
    //console.log("Email Address: " + email);
    //console.log("Address: " + address);
    //console.log("City: " + city);
    //console.log("Province: " + province);
    //console.log("Membership Type: " + membership);
    let formResult = document.getElementById("output");

    formResult.innerHTML = "Full Name: " + firstName + lastName + "<br>";
    formResult.innerHTML += "Email Address: " + email + "<br>";
    formResult.innerHTML += "Address: " + address + "<br>";
    formResult.innerHTML += "City: " + city + "<br>";
    formResult.innerHTML += "Province: " + province + "<br>";
    formResult.innerHTML += "Membership Type: " + membership;
}




//Part2
// Define the myExcelFuns() function

function myExcelFuns() {
    let result = document.getElementById("result");
    // Get the user's input
    let input = document.getElementById("numbers").value;
    //check if it's empty or null
    if (!input || input.trim() === "") {
        alert("Please enter numbers separated by spaces.");
        return; // Exit the function to prevent further processing
    }
    //get the user's checked
    let selectedFunctionRadio = document.querySelector('input[name=function]:checked').value;
    //check if it's empty
    if (!selectedFunctionRadio) {
        alert("Please select a function (AutoSum, Average, Max, Min).");
        return; // Exit the function to prevent further processing
    }

    let numbersText = input.split(" ");
    let numbers = [];
    console.log(numbersText);
    for (let i = 0; i < numbersText.length; i++) {
        numbers[i] = parseInt(numbersText[i]);
        if (isNaN(numbers[i])) {
            alert("Please only type number.");
            return;
        }
    }

    console.log(numbers);
    console.log(selectedFunctionRadio);
    let resultNum = 0;
    if (selectedFunctionRadio === 'autosum') {
        console.log("hvjhbhj")
        resultNum = autoSum(numbers);
    } else if (selectedFunctionRadio === 'average') {
        resultNum = average(numbers);
    } else if (selectedFunctionRadio === 'max') {
        resultNum = max(numbers);
    } else if (selectedFunctionRadio === 'min') {
        resultNum = min(numbers);
    } else {
        console.log("error")
        result.value = "Please choose an operation.";
    }
    result.value = resultNum;
}


function autoSum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function average(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length;
}

function max(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

function min(array) {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i];
        }
    }
    return result;
}


// Change the color
function changeColor(colorNum) {
    const body = document.body;
    if (colorNum == 1) {
        // Switch to the light theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        // Switch to the dark theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}