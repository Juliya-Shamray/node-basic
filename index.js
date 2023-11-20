const contacts = require("./db/contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const getAll = await contacts.listContacts();
      console.log(getAll);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeById = await contacts.removeContact(id);
      console.log(removeById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
