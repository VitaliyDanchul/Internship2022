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

console.log(`First name: ${invoice.firstName}`);
console.log(`Last name: ${invoice.lastName}`);

// eslint-disable-next-line dot-notation
console.log(`First name: ${invoice['firstName']}`);
// eslint-disable-next-line dot-notation
console.log(`Last name: ${invoice['lastName']}`);

/**
 * 2. Log Object Keys
 */

const keys = Object.keys(invoice);

console.log({
    keys,
});

/**
 * 3. Log Object values
 */

const values = Object.values(invoice);

console.log({
    values,
});

/**
 * 4. Log Object entries
 */

const entries = Object.entries(invoice);

console.log({
    entries,
});

/**
 * 5. Create second variable invoce from original
 * Please, use more than one solution
 */

console.log('Object cloning via assign:');
// eslint-disable-next-line prefer-object-spread
const copiedInvoice = Object.assign({}, invoice);

console.log({
    copiedInvoice,
});

console.log('Object cloning via JSON:');
const copiedInvoice2 = JSON.parse(JSON.stringify(invoice));

console.log({
    copiedInvoice2,
});

console.log('Object cloning via spread:');
const copiedInvoice3 = { ...invoice };

console.log({
    copiedInvoice3,
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

// /**
//  * 7. Loop through object and log key-values
//  */

// eslint-disable-next-line no-restricted-syntax
for (const [key, value] of Object.entries(invoice)) {
    console.log('%d %d', key, value);
}
