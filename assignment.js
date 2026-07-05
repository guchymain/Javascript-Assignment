class BankAccount {
    constructor(name, balance, status, type) {
        this.name = name;
        this.balance = balance;
        this.accountNumber = this.generateAccountNumber();
        this.status = status;
        this.type = type;
    }

    generateAccountNumber() {
        return Math.floor(1000000000 + Math.random() * 9000000000);
    }

    deposit(amount) {
        if (this.status !== "active") {
            return "Account is not active. Cannot deposit funds.";
        }

        if (this.type !== "savings" && this.type !== "current") {
            return "Invalid account type.";
        }

        this.balance += amount;

        return `Deposit successful. New balance: ${this.balance}`;
    }

    withdraw(amount) {
        if (this.status !== "active") {
            return "Account is not active. Cannot withdraw funds.";
        }

        if (this.type !== "savings" && this.type !== "current") {
            return "Invalid account type.";
        }

        if (amount > this.balance) {
            return "Insufficient funds.";
        }

        this.balance -= amount;

        return `Withdrawal successful. New balance: ${this.balance}`;
    }
}

let account1 = new BankAccount("mafi", 1000, "active", "savings");
let account2 = new BankAccount("jogodo", 500, "inactive", "current");

console.log(account1);
console.log(account1.deposit(1000));
console.log(account1);
console.log(account1.withdraw(500));
console.log(account1);
console.log(account2);
console.log(account2.deposit(1000));
console.log(account2);
console.log(account2.withdraw(500));
console.log(account2);
