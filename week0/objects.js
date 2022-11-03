const invoice = {
    firstName: 'Node',
    lastName: 'Developer',
    createdAt: '2022-10-31T22:50:59.305Z',
    amount: 150,
    currency: 'USD',
};

/**
 * 1. Log firstName and lastName in dot notation and bracket notation
 */

console.log(`First name: `);
console.log(`Last name: `);

/**
 * 2. Log Object Keys
 */

const keys = invoice.YOUR_METHOD;

console.log({
    keys,
});

/**
 * 3. Log Object values
 */

const values = invoice.YOUR_METHOD;

console.log({
    values,
});

/**
 * 4. Log Object entries
 */

const entries = invoice.YOUR_METHOD;

console.log({
    entries,
});

/**
 * 5. Create second variable invoce from original
 * Please, use more than one solution
 */

const copiedInvoice = {};

console.log({
    copiedInvoice,
});

/**
 * 6. Modify copiedInvoice amount value
 * Important: original invoice amount shouldnt be modified
 */

copiedInvoice.amount = 300;

console.log({
    invoice,
    copiedInvoice,
});

/**
 * 7. Loop through object and log key-values
 */
