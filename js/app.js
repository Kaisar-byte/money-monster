let remainingBalanceAfterExpense;
document.getElementById('btn-calculate').addEventListener('click', function () {
    const totalIncome = getValueFromInputId('income-field');
    const foodExpense = getValueFromInputId('expense-food');
    const rentExpense = getValueFromInputId('expense-rent');
    const clothExpense = getValueFromInputId('expense-cloth');
    const totalExpense = foodExpense + rentExpense + clothExpense;
    setValueToInnerText('total-expense', totalExpense);
    remainingBalanceAfterExpense = totalIncome - totalExpense;
    setValueToInnerText('remaining-balance', remainingBalanceAfterExpense);
})

document.getElementById('btn-save').addEventListener('click', function () {
    const amountToSaveElement = document.getElementById('amount-to-save');
    const amountToSave = amountToSaveElement.value;
    const totalSavingAmount = (Math.round(remainingBalanceAfterExpense * amountToSave) / 100).toFixed(2);
    setValueToInnerText('print-save-amount', totalSavingAmount);
    const lastBalance = remainingBalanceAfterExpense - totalSavingAmount;
    // const remainingAmountAfterAllExp = remainingBalanceAfterExpense - totalSavingAmount;
    setValueToInnerText('remaining-Amount', lastBalance)
})
