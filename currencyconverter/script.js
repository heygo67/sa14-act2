const form = document.getElementById('currency-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const sourceCurrency = document.getElementById('source-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    const amount = document.getElementById('amount').value;

    const exchangeRate = await fetchExchangeRate(sourceCurrency, targetCurrency);
    if (exchangeRate) {
        const convertedAmount = amount * exchangeRate;
        resultDiv.innerHTML = `${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency} (Rate: ${exchangeRate})`;
    } else {
        resultDiv.innerHTML = 'Failed to fetch exchange rate. Please try again later.';
    }
});

async function fetchExchangeRate(source, target) {
    const apiKey = '6c5d7a7104ec90e875e8ed8a';
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD?access_key=6c5d7a7104ec90e875e8ed8a&symbols=${target}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.rates[target];
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}
