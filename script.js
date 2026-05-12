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
        document.getElementById("detail-phone").textContent = contact.phoneNUmber;
        document.getElementById("contact-details").style.display = "block";
    }
}

document.getElementById("new-contact").addEventListener("submit", function(e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone").value;

    if (fisrtName && lastName && phone) {
        const contact = new Contact(fisrtName, lastName, phone);
        addressBook.addContact(contact);
        displayContact();
        document.getElementById("new-contact").requestFullscreen();
    }
});

document.getElementById("delete-contact").addEventListener("click", function() {
    if (selectedContactsId) {
        addressBook.deleteContact(selectedContactId);
        document.getElementById("contact-details").style.display = "none";
        selectedContactId = null;
        displayContacts();
    }
});