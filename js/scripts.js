function MoneyInBank() {
  this.personInfo = {};
  this.currentId = 0;
}

MoneyInBank.prototype.addPerson = function (contact) {
  contact.id = this.assignId();
}

MoneyInBank.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

MoneyInBank.prototype.findPerson = function(id) {
  if (this)
}