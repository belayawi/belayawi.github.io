class CheckingAccount extends Account {
  constructor(balance, overdraftLimit) {
    super(balance);
    this._overdraftLimit = overdraftLimit;
  }

  setOverdraftLimit(overdraftLimit) {
    this._overdraftLimit = overdraftLimit;
  }
  getOverdraftLimit() {
    return this._overdraftLimit;
  }
  withdraw(amount) {
    if (super.balance - amount > this.overdraftLimit) {
      throw new RangeError('Overdraft Limit Succeeded');
    } else {
      super.withdraw(amount);
    }
  }
  toString() {
    return (
      'Checking Account' +
      super.getNumber() +
      ': OverDraft Limit is ' +
      this._overdraftLimit
    );
  }
  endOfMonth() {
    if(super.getBalance() < 0){
        return "Warning, low balance CheckingAccount " +super.getNumber() + " :balance " + super.getBalance() + " Overdraft limit : " + this._overdraftLimit; 
    }
}
}
