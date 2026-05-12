let addressBook = new Addressbook();
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

