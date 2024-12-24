import { FaBed, FaShower, FaWarehouse } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "react-bootstrap";

const PropItem = ({
  id,
  key,
  name,
  adress,
  price,
  image,
  area,
  baths,
  bedrooms,
  isActive,
  isDistingued,
  typeOfProp,
  typeOfOffer,
}) => {
  const navigate = useNavigate();
  const detailsHandler = () => {
    navigate(`/propDetails/${id}`, {
      state: {
        prop: {
          name,
          adress,
          price,
          image,
          area,
          baths,
          bedrooms,
          isActive,
          isDistingued,
          typeOfProp,
          typeOfOffer,
        },
      },
    });
  };
  return (
    <>
      <Card key={key} className="m-4 d-flex flex-row w-50">
        <CardImg
          className="w-25"
          variant="top"
          src={image}
          alt="Imagen de la propiedad"
          height={175}
        />
        <CardBody className="d-flex flex-column p-3">
          <CardGroup className="d-flex flex justify-content-between">
            <CardText className="bg-warning rounded-4 px-3 text-primary">
              {typeOfOffer}
            </CardText>
            <CardText>
              <h6>USD$ {price}</h6>
            </CardText>
          </CardGroup>
          <CardGroup className="d-flex flex-column">
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{adress}</CardSubtitle>
          </CardGroup>
          <CardGroup className="d-flex justify-content-between">
            <CardGroup className="mt-3">
              <CardText className="mx-2">
                <FaBed className="mt-1 mx-2" />
                {bedrooms}
              </CardText>
              <CardText className="mx-2">
                <FaShower className="mt-1 mx-2" />
                {baths}
              </CardText>
              <CardText className="mx-2">
                <FaWarehouse className="mt-1 mx-2" />
                {area} m2
              </CardText>
            </CardGroup>
            <CardGroup>
              <Button
                onClick={detailsHandler}
                className="px-5 my-2 rounded-5 btn btn-dark"
              >
                <h6>Detalles</h6>
              </Button>
            </CardGroup>
          </CardGroup>
        </CardBody>
      </Card>
    </>
  );
};

PropItem.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  adress: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  area: PropTypes.number,
};

export default PropItem;
