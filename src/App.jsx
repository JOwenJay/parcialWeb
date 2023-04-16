import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [contacts, setContacts] = useState([]); // Estado para almacenar la lista de contactos
  const [editingContact, setEditingContact] = useState(null); // Estado para almacenar el contacto que se está editando

  // Función para agregar un nuevo contacto a la lista de contactos
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Función para editar un contacto en la lista de contactos
  const editContact = (contact) => {
  setEditingContact(contact);
  };

  // Función para actualizar un contacto en la lista de contactos
  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
    setEditingContact(null);
  };

  // Función para eliminar un contacto de la lista de contactos
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    // Lógica para cargar y guardar los datos en la estructura JSON, por ejemplo localStorage o una API

    // Ejemplo de carga de datos desde localStorage
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    // Lógica para guardar los datos en la estructura JSON, por ejemplo localStorage o una API

    // Ejemplo de guardado de datos en localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
    
    <div className="container mt-4">
      <h1>Agenda Telefónica</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          {/* Renderizar el formulario de contacto */}
          <ContactForm
            addContact={addContact}
            updateContact={updateContact}
            editingContact={editingContact}
          />
        </div>
        <div className="col-md-8">
          {/* Renderizar la lista de contactos */}
          <ContactList
            contacts={contacts}
            updateContact={setEditingContact}
            deleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default App;