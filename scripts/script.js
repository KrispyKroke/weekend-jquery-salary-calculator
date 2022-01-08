$(document).ready(readyNow);

let totalMonthlyCosts = 0;

function readyNow() {
    console.log('JQuery is loaded!');
    $('#addEmployee').on('click', addEmployee);
}

function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    if (firstName === '' || lastName === '' || idNumber === '' || jobTitle === '' || annualSalary === '') {
        alert('Please fill out all inputs before submitting.');
        return;
    } else {

    }
}