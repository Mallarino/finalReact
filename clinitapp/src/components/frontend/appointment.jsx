import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor.
    console.log('Form submitted:', formData);
  };

  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength="4"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                minLength="4"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="date"
                name="date"
                className="form-control datepicker"
                id="date"
                placeholder="Appointment Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="doctor"
                id="doctor"
                className="form-select"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center">
            <button type="submit">Make an Appointment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
