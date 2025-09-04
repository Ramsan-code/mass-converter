
function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = "NaN";
        return;
    }


    const toGrams = {
        'kg': amount * 1000,
        'g': amount
    };

    const fromGrams = {
        'kg': (val) => val / 1000,
        'g': (val) => val,
    };


    const grams = toGrams[fromUnit];
    const converted = fromGrams[toUnit](grams);

    document.getElementById('result').innerText = converted.toFixed();
}
