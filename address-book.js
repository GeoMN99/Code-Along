function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName =function() {
    return this.firstName + " " + this.lastName;
};

function AddressBook() {
    this.contacts = [];
    this.currentId = 1;
}

AddressBook.prototype.addContact =function(contact) {
    contact.id = this.currentId;
    this.contacts.push(contact);
    this.currentId++;
}

AddressBook.prototype.findContact = function(id) {
    for (let i=0; i <this.contacts.length; i++) {
        if (this.contacts[i].id === id) {
            return this.contacts[i];
        }
    }
    return false;
};

AddressBook.prototype.deleteContact = function(id) {
    for (let i=0; i <this.contacts.length; i++) {
        if (this.contacts[i].id === id) {
            this.contacts.splice(i, 1);
            return true;
        }
    }
    return false;
}