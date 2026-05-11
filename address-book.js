function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName =function() {
    return this.firstName + " " + this.lastName;
};

function Addressbook() {
    this.contacts = [];
    this.currentId = 1;
}

Addressbook.prototype.addContact =function(contact) {
    contact.id = this.currentId;
    this.contacts.push(contact);
    this.currentId++;
}

Addressbook.prototype.findContact = function(id) {
    for (let i=0; i <this.contacts.length; i++) {
        if (this.contacts[i].id === id) {
            return this.contacts[i];
        }
    }
    return false;
};

Addressbook.prototype.deleteContact = function(id) {
    for (let i=0; i <this.contacts.length; i++) {
        if (this.contacts[i].id === id) {
            this.contacts.splice(i, 1);
            return true;
        }
    }
    return false;
}