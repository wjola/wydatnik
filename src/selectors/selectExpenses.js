const getSelectedExpenses = (expenses, filters) => {
    return expenses.filter((expense) => {
        const categoryMatch = filters.categories.length === 0 || filters.categories.includes(expense.category);
        const amountFromMatch = !filters.amountFrom || (filters.amountFrom && expense.amount > filters.amountFrom);
        const amountToMatch = !filters.amountTo || (filters.amountTo && expense.amount < filters.amountTo);

        return categoryMatch && amountFromMatch && amountToMatch;
    }).sort(compare(filters.sortBy));
}

const compare = (criterion) => {
    switch (criterion) {
        case 'date':
            return compareAmount;
        case 'amount':
            return compareAmount
    }
}

const compareDate = (x, y) => {
    return
}

const compareAmount = (x, y) => {
    console.log(x, y);
    if (x.amount < y.amount) {
        return -1;
    } else if (x.amount > y.amount) {
        return 1;
    } else {
        return 0;
    }
}

export default getSelectedExpenses;