let addressBook = new AddressBook();
let selectedContactId = null;

function displayContact() {
    const contactDiv = document.getElementById("contacts");
    contactDiv.innerHTML = "";
    addressBook.contacts.forEach(function(contact) {
        const p = document.createElement("p");
        p.textContent =contact.fullName();
        p.addEventListener("click", function(){
            showContactDetails(contact.id);
        });
        contactDiv.appendChild(p);
    });
}

function showContactDetails(id) {
    const contact =addressBook.findContact(id);
    if (contact) {
        selectedContactId = id;
        document.getElementById("detail-name").textContent = contact.fullName();
        document.getElementById("detail-phone").textContent = contact.phoneNumber;
        document.getElementById("contact-details").style.display = "block";
    }
}

document.getElementById("new-contact").addEventListener("submit", function(e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone-number").value;

    if (firstName && lastName && phone) {
        const contact = new Contact(firstName, lastName, phone);
        addressBook.addContact(contact);
        displayContact();
        document.getElementById("new-contact").reset();
    }
});

document.getElementById("delete-btn").addEventListener("click", function() {
    if (selectedContactId) {
        addressBook.deleteContact(selectedContactId);
        document.getElementById("contact-details").style.display = "none";
        selectedContactId = null;
        displayContact();
    }
});