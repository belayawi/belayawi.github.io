class Bank{
    static NextNumber;
    constructor(){
        this.accounts = [];
        this.count++;
        Bank.NextNumber=100; // assuming the bank account number starts from 100
    }

    static generateAccountNumber(){
        return Bank.NextNumber + 1;
    }
   

    addAccount(){
        let result = Bank.generateAccountNumber();
        const account =new Account(result);
        this.accounts.push(account);
        console.log(result);
        return result;
    }
    addSavingAccount(interest){
       
        const savingAccount = new SavingAccount(Bank.generateAccountNumber(), interest);
        this.accounts.push(savingAccount);
        return savingAccount;
    }

    addCheckingAccount(overdraftLimit){
       
        const checkingAccount = new CheckingAccount(Bank.generateAccountNumber(), overdraftLimit);
        this.accounts.push(checkingAccount);
        return checkingAccount;
    }
    closeAccount(number){
        const acc = this.accounts.find(account=> account.number == number);
        this.accounts.splice(this.accounts.indexOf(acc), 1);
        return acc;

    }
    accountReport(){

      let report =  accounts.map(account=> account.getNumber() + " \n" );
      return report;

    }

    endOfMonth(){
        this.accounts.forEach(account=>{
            console.log(account.endOfMonth());
        });
    }
}