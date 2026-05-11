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

