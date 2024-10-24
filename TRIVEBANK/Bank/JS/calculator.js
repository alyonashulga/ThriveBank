document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('term').value) * 12;

    const x = Math.pow(1 + rate, term);
    const monthly = (amount * rate * x) / (x - 1);
    
    document.getElementById('monthly').innerText = monthly.toFixed(2);
    document.getElementById('total').innerText = (monthly * term).toFixed(2);
    document.getElementById('interest').innerText = ((monthly * term) - amount).toFixed(2);
});
