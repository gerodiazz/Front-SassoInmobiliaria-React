import { useParams } from "react-router-dom";

const PropDetails = ({ properties }) => {
  const { id } = useParams();
  const prop = properties.find((prop) => prop.id === parseInt(id));

  if (!prop) {
    return <div>Propiedad no encontrada</div>;
  }

  return (
    <div>
      <h1>{prop.name}</h1>
      <img src={prop.image} alt={prop.name} />
      <p>{prop.description}</p>
      <p>Precio: USD$ {prop.price}</p>
      <p>Área: {prop.area} m2</p>
      <p>Baños: {prop.baths}</p>
      <p>Habitaciones: {prop.bedrooms}</p>
    </div>
  );
};

export default PropDetails;
