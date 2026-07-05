class BankAccount {
    constructor(name , balance, status, type) {
        this.Name = name 
        this.Balance = balance 
        this.accountNumber = this.generateAccountNumber()
        this.Status = status
        this.Type = type

    }

    generateAccountNumber() {
        return Math.floor(Math.random() * 9000000000);
    }

   



    // deposit funds
    deposit(amount) {   
    if (this.Status !== "active") {
        return `Account is not active. Cannot deposit funds.`;    
    }

    if (this.Type !== "savings" && this.Type !== "current") {
        return `Invalid account type. Cannot deposit funds.`;
    }
     this.balance += amount;
        return `Deposit successful. New balance: ${this.balance}`;
}

    // withdraw funds
    withdraw(amount) {
        if (this.Status !== "active") {
        return `Account is not active. Cannot withdraw funds.`;    
    }

    if (this.Type !== "savings" && this.Type !== "current") {
        return `Invalid account type. Cannot withdraw funds.`;
    }
    if (amount >= this.Balance) {
        return `Insufficient funds.`;
    }
     this.Balance -= amount;
        return `Withdrawal successful. New balance: ${this.balance}`;
}

}


let Account1 = new BankAccount ("mafi", 1000, "active", "savings")

console.log(Account1)

