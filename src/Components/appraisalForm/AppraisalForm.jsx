import "bootstrap/dist/css/bootstrap.min.css";
import "./AppraisalForm.css";

const AppraisalForm = () => {
  return (
    <div className="appraisal-page">
      <header className="header">
        <h1>Tasaciones</h1>
        <p>
          Si desea conocer el valor de su propiedad, complete sus datos y en
          breve nos pondremos en contacto.
        </p>
      </header>

      <div className="container my-5">
  <div className="row justify-content-center">
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

        {/* Sucursal */}
        <div className="mb-4">
          <label htmlFor="branch" className="form-label">Sucursal</label>
          <select
            id="branch"
            className="form-control form-control-lg shadow-sm"
          >
            <option value="">Seleccione una sucursal</option>
            <option value="rosario">Rosario</option>
            <option value="santa-fe">Santa Fe</option>
          </select>
        </div>

        {/* Dirección de la propiedad */}
        <div className="mb-4">
          <label htmlFor="property-address" className="form-label">Dirección de la propiedad</label>
          <input
            type="text"
            id="property-address"
            className="form-control form-control-lg shadow-sm"
            placeholder="Dirección de la propiedad"
          />
        </div>

        {/* Descripción de la propiedad */}
        <div className="mb-4">
          <label htmlFor="property-description" className="form-label">Descripción de la propiedad</label>
          <textarea
            id="property-description"
            className="form-control form-control-lg shadow-sm"
            rows="5"
            placeholder="Descripción de la propiedad"
          ></textarea>
        </div>

        {/* Botón Enviar */}
        <button type="submit" className="btn btn-primary w-100 py-2 shadow-sm">
          Enviar
        </button>
      </form>
    </div>
  </div>
</div>


      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h6>Rosario</h6>
              <p>
                <strong>Teléfonos:</strong> 341-5767374 / 341-6197695
                <br />
                <strong>Email:</strong> sassoinmobiliaria@gmail.com
                <br />
                <strong>Dirección:</strong> Moreno 1623 &quot;A&quot;, Rosario, Santa
                Fe
              </p>
            </div>
            <div className="col-md-6">
              <h6>Santa Fe</h6>
              <p>
                <strong>Teléfonos:</strong> 341-5767374 / 341-6197695
                <br />
                <strong>Email:</strong> sassoinmobiliaria@gmail.com
                <br />
                <strong>Dirección:</strong> Sarmiento 3652, Santa Fe Capital
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppraisalForm;