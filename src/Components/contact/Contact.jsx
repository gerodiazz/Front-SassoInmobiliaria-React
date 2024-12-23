import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-style">
        <header className="header text-center mb-5">
          <h1 className="mb-3">Contacto</h1>
          <p className="half-text">
            <div className="top"></div>
            <div className="bottom"></div>
            Si tenés dudas o consultas, escribinos.
          </p>
        </header>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Formulario */}
          <div className="col-md-6">
            <form className="card shadow p-4">
              {/* Nombre */}
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg shadow-sm"
                  placeholder="Nombre"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg shadow-sm"
                  placeholder="Email"
                />
              </div>

              {/* Teléfono */}
              <div className="mb-4">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control form-control-lg shadow-sm"
                  placeholder="Teléfono"
                />
              </div>

              {/* Dirección */}
              <div className="mb-4">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input
                  type="text"
                  id="address"
                  className="form-control form-control-lg shadow-sm"
                  placeholder="Dirección"
                />
              </div>

              {/* Localidad */}
              <div className="mb-4">
                <label htmlFor="city" className="form-label">Localidad</label>
                <input
                  type="text"
                  id="city"
                  className="form-control form-control-lg shadow-sm"
                  placeholder="Localidad"
                />
              </div>

              {/* Consulta */}
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Consulta</label>
                <textarea
                  id="message"
                  className="form-control form-control-lg shadow-sm"
                  rows="4"
                  placeholder="Escriba su consulta aquí..."
                ></textarea>
              </div>

              {/* Botón Enviar */}
              <button type="submit" className="btn btn-primary w-100 py-2 shadow-sm">
                Enviar
              </button>
            </form>
          </div>

          {/* Información adicional */}
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">Contáctanos</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faClock} className="icon-custom me-2" />
                    <strong>Horario:</strong> Lunes a viernes de 9 a 17 hs.
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon-custom me-2" />
                    <strong>Teléfono:</strong> +54 9 341 5767374
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-custom me-2" />
                    <strong>Dirección:</strong> Moreno 1623 3º “A”, Rosario, Santa Fe
                  </li>
                  <li className="mb-3">
                    <FontAwesomeIcon icon={faEnvelope} className="icon-custom me-2" />
                    <strong>Correo:</strong> sassoinmobiliaria@gmail.com
                  </li>
                  <li className="mb-3">
                    <strong>Síguenos:</strong>
                    <ul className="list-inline mt-2">
                      <li className="list-inline-item">
                        <a href="#" className="text-decoration-none">
                          <FontAwesomeIcon icon={faFacebook} className="icon-custom fs-4" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-decoration-none">
                          <FontAwesomeIcon icon={faInstagram} className="icon-custom fs-4" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="map-container mt-4">
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
    </div>
  );
};

export default ContactForm;
