// Creating a person object
const person = {
  name: "Edison Zyberaj",
  balance: 1000,
};

// Defining the withdraw function with ES6 syntax
const withdraw = (person, amount) => {
  if (amount > person.balance) {
    console.log("Withdrawal cannot be processed due to insufficient funds.");
  } else {
    person.balance -= amount;
    console.log(
      `Withdrawal of $${amount} is done successfully. Remaining balance: $${person.balance}.`
    );
  }
};

// Testing the function
withdraw(person, 500); // Executes the instructions within the else
withdraw(person, 700); // Executes the instructions within the if as the balance decreases after the first call
