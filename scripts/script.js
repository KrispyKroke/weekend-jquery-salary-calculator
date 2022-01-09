$(document).ready(readyNow);

let totalMonthlyCosts = 0;
let employeeCounter = 0;
let monthlyCost;

// Made a function to run once the DOM is loaded.  Waits for a click event to run the addEmployee function
function readyNow() {
    console.log('JQuery is loaded!');
    $('#addEmployee').on('click', addEmployee);
}

// Beginning of addEmployee function.  Collects values from input fields to add to DOM
function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    monthlyCost = annualSalary / 12;
    // Checks to see if all input fields were filled out
    if (firstName === '' || lastName === '' || idNumber === '' || jobTitle === '' || annualSalary === '') {
        alert('Please fill out all inputs before submitting.');
        return;
    // Runs the rest of the code to append employee information in the table on the DOM if all input fields are filled out
    } else {
        // Calculates totalMonthlyCosts and updates value on the DOM every time an employee is added.  Also implements rounding to two decimal places.
        totalMonthlyCosts += monthlyCost;
        let totalMonthlyCostsRounded = totalMonthlyCosts.toFixed(2);
        totalMonthlyCosts = Number(totalMonthlyCostsRounded);
        // Turns background-color of the total monthly costs to red if the costs exceed 20000 dollars
        if(totalMonthlyCosts > 20000) {
            $('h3').css('background-color', 'red');
        }
        $('h3').empty();
        $('h3').append(`Total Monthly Costs: $${totalMonthlyCosts}`);
        // Empties out input fields
        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#title').val('');
        $('#annualSalary').val('');
        // Added an employeeCounter variable to help make a unique ID for each row of data added to target later for deletion
        employeeCounter++;
        // Makes a new row and delete button with unique IDs each time an employee is added so we can target rows by id
        let rowID = "employeeData" + employeeCounter + "";
        let deleteButtonID = "deleteButton" + employeeCounter + "";
        let newRow = `<tr id=${rowID}></tr>`;
        $('.employeeTable').append(newRow);
        // Creates a new row and adds a single employee's data to the DOM
        $(`#${rowID}`).append(`<td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>$ ${annualSalary}</td>
        <td><button id=${deleteButtonID} class="deleteButtons">Delete</button></td>`);
        // Adds styling to delete buttons
        $('.deleteButtons').css('cursor', 'pointer');
        $('.deleteButtons').css('background-color', 'aqua');
        $('.deleteButtons').css('color', 'black');
    }
}