import React from 'react';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const handleEdit = (contact) => {
    // Llama a la función updateContact del componente padre con el id del contacto a editar
    updateContact(contact);
  };

  const handleDelete = (id) => {
    // Llama a la función deleteContact del componente padre con el id del contacto a eliminar
    deleteContact(id);
  };

  return (
    <div>
      <h2>Contactos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombres y Apellidos</th>
            <th>Teléfono/Celular</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.fullName}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.address}</td>
              <td>
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleEdit(contact.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(contact.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
