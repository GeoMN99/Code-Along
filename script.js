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

