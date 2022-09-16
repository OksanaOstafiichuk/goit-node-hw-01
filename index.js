const argv = require("yargs").argv;

const { listContacts, getContactById, addContact, removeContact } = require('./contacts')


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const contacts = await listContacts(action);
          console.table(contacts);
      break;

      case "get":
          const contact = await getContactById(id);
          console.log(contact);
      break;

    case "add":
          const newContact = await addContact(name, email, phone);
          console.log(newContact);
      break;

    case "remove":
          const deleteContact = await removeContact(id);
          console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const start = async (argv) => {
  try {
    invokeAction(argv);
  } catch (error) {
    console.log(error);
  }
}

start(argv);
