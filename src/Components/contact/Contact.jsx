import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Contacto</h1>
        <p>Si tenés dudas o consultas, escribinos.</p>
      </header>

      <div className="container my-5">
        <div className="row">
          {/* Formulario */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  placeholder="Teléfono"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Dirección"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">Localidad</label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="Localidad"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Consulta</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Escriba su consulta aquí..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Enviar
              </button>
            </form>
          </div>

          {/* Información adicional */}
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>Horario:</strong> Lunes a viernes de 9 a 17 hs.
              </li>
              <li className="mb-3">
                <strong>Teléfono:</strong> +54 9 341 5767374
              </li>
              <li className="mb-3">
                <strong>Dirección:</strong> Moreno 1623 3º “A”, Rosario, Santa Fe
              </li>
              <li className="mb-3">
                <strong>Correo:</strong> sassoinmobiliaria@gmail.com
              </li>
              <li className="mb-3">
                <strong>Síguenos:</strong>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">Facebook</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Instagram</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB0s_yzzkRZVOUEWyL7y7lmd4qA7ygiIlc&q=Moreno+1623+Rosario+Santa+Fe+Argentina"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa de ubicación"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;