import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName.trim() === '' ||
      formData.phoneNumber.trim() === '' ||
      formData.address.trim() === ''
    ) {
      alert('Por favor completa todos los campos');
      return;
    }
    // Genera un id único para el nuevo contacto
    const id = new Date().getTime().toString();
    // Crea un nuevo contacto con el id generado y los datos del formulario
    const newContact = {
      id,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
    };
    // Llama a la función addContact del componente padre para agregar el nuevo contacto
    addContact(newContact);
    // Limpia el formulario
    setFormData({
      id: '',
      fullName: '',
      phoneNumber: '',
      address: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Contacto</h2>
      <div className="form-group">
        <label>Nombre Completo</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Celular</label>
        <input
          type="text"
          name="phoneNumber"
          className="form-control"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Dirección</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default ContactForm;
