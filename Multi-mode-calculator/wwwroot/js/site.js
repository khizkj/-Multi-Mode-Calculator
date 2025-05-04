$(document).ready(function () {
    $('.mode-buttons button').click(function () {
        const mode = $(this).data('mode');
        $('.mode-section').hide().removeClass('active');
        $('#' + mode).fadeIn().addClass('active');
    });
});

// Simple calc
let simpleExp = '';
function appendSimple(val) {
    simpleExp += val;
    $('#simple-display').val(simpleExp);
}
function calculateSimple() {
    try {
        $('#simple-display').val(eval(simpleExp));
        simpleExp = '';
    } catch {
        $('#simple-display').val("Error");
    }
}
function clearSimple() {
    simpleExp = '';
    $('#simple-display').val('');
}

// Currency
function convertCurrency() {
    const pkr = parseFloat($('#pkr').val());
    const target = $('#currency-target').val();
    const rates = {
        USD: 0.0036,
        EUR: 0.0033,
        GBP: 0.0029,
        JPY: 0.55
    };
    if (pkr && rates[target]) {
        const result = (pkr * rates[target]).toFixed(2);
        $('#currency-result').text(`Converted: ${result} ${target}`);
    }
}

// BMI
function calculateBMI() {
    const weight = parseFloat($('#weight').val());
    const height = parseFloat($('#height').val()) / 100;
    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        $('#bmi-result').text(`Your BMI is ${bmi}`);
    }
}
