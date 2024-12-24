import "bootstrap/dist/css/bootstrap.min.css";
import "../appraisalForm/AppraisalForm.css";

const FooterBar = () => {

return(
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
)
}

export default FooterBar