

class SavingAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    addInterest(){
        super.balance += super.balance * this._interest/100;
    }

    toString(){
        return "Saving Account" + super .getNumber()  + ": balance " + this._balance;
    }
    
    endOfMonth() {
        if(super.getBalance() < 0){
            return "Interest added SavingsAccount  " +super.getNumber() + " ::balance " + this.getBalance() + " interest : " 
            + (this.addInterest() - super.getBalance()); 
        }
    }
}