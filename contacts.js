const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, '/db/contacts.json')

async function listContacts() {
    const date = await fs.readFile(contactsPath)
    const contacts = JSON.parse(date)
    console.log(contacts)

    return contacts;
}

function getContactById(contactId) {
}

function removeContact(contactId) {
}

async function addContact(name, email, phone) {
    const contactsList = listContacts();
    const newContact = await fs.writeFile(contactsPath, JSON.stringify(contactsList));

}


module.exports = {listContacts, addContact};