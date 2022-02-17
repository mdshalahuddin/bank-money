
function getItem(id) {
    const element = document.getElementById(id);
    return element;
}

// All the Input 
const inputValue = getItem('income');
const foodValue = getItem('food');
const rentValue = getItem('rent');
const clothesValue = getItem('clothes');
const saveValue = getItem('save');

// All the Output 
const totalExpenses = getItem('total-expenses');
const balance = getItem('balance');
const savingAmount = getItem('saving-amount');
const remainingBalance = getItem('remaining-balance');

//Error Output
const incomeError = getItem('income-error');
const foodError = getItem('food-error');
const rentError = getItem('rent-error');
const clothesError = getItem('cloth-error');
const savingError = getItem('saving-error');

// All the Button Element
const budgetExpense = getItem('calculate');
const calculateSaving = getItem('saving');

// Handle Expenses
budgetExpense.addEventListener('click', function () {
    const incomeAmount = parseFloat(inputValue.value);
    const foodAmount = parseFloat(foodValue.value);
    const rentAmount = parseFloat(rentValue.value);
    const clothesAmount = parseFloat(clothesValue.value);

    // Input Error
    if (incomeAmount <= 0 || isNaN(incomeAmount)) {
        incomeError.style.display = 'block';
        return;
    } else {
        incomeError.style.display = 'none';
    }

    if (foodAmount <= 0 || isNaN(foodAmount)) {
        foodError.style.display = 'block';
        return;
    } else {
        foodError.style.display = 'none';
    }

    if (rentAmount <= 0 || isNaN(rentAmount)) {
        rentError.style.display = 'block';
        return;
    } else {
        rentError.style.display = 'none';
    }

    if (clothesAmount <= 0 || isNaN(clothesAmount)) {
        clothesError.style.display = 'block';
        return;
    } else {
        clothesError.style.display = 'none';
    }

    // Total Expense Calculation and Result Output
    const expensesResult = foodAmount + rentAmount + clothesAmount;
    totalExpenses.innerText = expensesResult;

    // Rest Balance and Output
    if (expensesResult <= incomeAmount) {
        const restBalance = incomeAmount - expensesResult;
        balance.innerText = restBalance;
        balance.style.color = '#232323';
    } else {
        balance.innerText = 'Less than Expenses!';
        balance.style.color = 'red';
    }
});

//  Saving Amount
calculateSaving.addEventListener('click', function () {
    const currentBalance = balance.innerText;
    const incomeAmount = parseFloat(inputValue.value);
    const savingRate = parseFloat(saveValue.value);
    let savingResult = 0;

    // Saving Amount 
    if (incomeAmount <= 0 || isNaN(incomeAmount)) {
        savingError.style.display = 'block';
        return;
    } else {
        savingResult += (incomeAmount / 100) * savingRate;
        savingError.style.display = 'none';
    }
    // Show Saving Amount Output
    if (currentBalance >= savingResult && savingResult >= 0) {
        savingAmount.innerText = savingResult;
        savingError.style.display = 'none';
    } else {
        savingAmount.innerText = 00;
        remainingBalance.innerText = 00;
        savingError.style.display = 'block';
        return;
    }

    // Remaining Balance
    if (currentBalance >= 0 || !isNaN(currentBalance) && savingResult >= 0) {
        const remainingBalanceResult = currentBalance - savingResult;
        remainingBalance.innerText = remainingBalanceResult;
        savingError.style.display = 'none';
    } else {
        remainingBalance.innerText = 00;
        savingError.style.display = 'block';
    }
});