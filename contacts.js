const fs = require('fs/promises');
const path = require('path');
const uuid = require('uuid-random');

const contactsPath = path.join(__dirname, '/db/contacts.json')

async function listContacts() {
    const date = await fs.readFile(contactsPath)
    const contacts = JSON.parse(date)
    
    return contacts
}

async function getContactById(contactId) {
    const contactsAll = await listContacts();
    const contact = contactsAll.find(contact => String(contact.id) === String(contactId));
    
    return contact;
}

async function removeContact(contactId) {
    const contactsAll = await listContacts();

    const contactDeleteId = contactsAll.find(contact => String(contact.id) === String(contactId));
    const filteredContact = contactsAll.filter(contact => String(contact.id) !== String(contactId));
    await fs.writeFile(contactsPath, JSON.stringify(filteredContact));

    return contactDeleteId;
}

async function addContact(name, email, phone) {
    const contactsAll = await listContacts();
    const newContact = {
        id: uuid(),
        name,
        email,
        phone
    } 
    await fs.writeFile(contactsPath, JSON.stringify([...contactsAll, newContact]));
  
    return newContact;
}


module.exports = {listContacts, getContactById, removeContact, addContact};