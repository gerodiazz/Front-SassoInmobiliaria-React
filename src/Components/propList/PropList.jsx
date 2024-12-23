import PropItem from "../propItem/PropItem"

const Properties = [
    {
        id: 1,
        name: "prop1",
        description: "prop1 desc",
        adress: "adress prop1",
        Price: 20000,
        Image: "https://assets.diarioconcepcion.cl/2018/05/Corredor-de-propiedades-850x400.jpg",
        Area: 20.1,
        Baths: 2,
        Bedrooms: 4,
        Latitude: 17.04010394,
        Longitude: -3.313123123,
        IsActive: true,
        IsDistingued: true,
        IsUpToCredit: false,
        TypeOfProp: "departamento",
        TypeOfOffer: "venta",
        StateOfDevelop: "finalizado"
    },
    {
        id: 2,
        name: "prop2",
        description: "prop2 desc",
        adress: "adress prop2",
        Price: 40000,
        Image: "https://assets.diarioconcepcion.cl/2018/05/Corredor-de-propiedades-850x400.jpg",
        Area: 120.3,
        Baths: 3,
        Bedrooms: 5,
        Latitude: 112.04010394,
        Longitude: -34.313123123,
        IsActive: true,
        IsDistingued: true,
        IsUpToCredit: false,
        TypeOfProp: "casa",
        TypeOfOffer: "venta",
        StateOfDevelop: "finalizado"
    },
    {
        id: 3,
        name: "prop3",
        description: "prop3 desc",
        adress: "adress prop3",
        Price: 35000,
        Image: "imageURL",
        Area: 75.3,
        Baths: 1,
        Bedrooms: 2,
        Latitude: 173.04010394,
        Longitude: -31.313123123,
        IsActive: true,
        IsDistingued: true,
        IsUpToCredit: false,
        TypeOfProp: "departamento",
        TypeOfOffer: "alquiler",
        StateOfDevelop: "finalizado"
    }

]

const PropList = () =>{

    const productsMapped = Properties.map((prop) => (
        <>
            <div className="d-flex flex-column">
                <PropItem
                    key={prop.id}
                    name={prop.name}
                    adress={prop.adress}
                    price={prop.Price}
                    image={prop.Image}
                    area={prop.Area}
                    baths={prop.Baths}
                    bedrooms={prop.Bedrooms}
                    isActive={prop.IsActive}
                    isDistingued={prop.IsDistingued}
                    typeOfProp={prop.TypeOfProp}
                    typeOfOffer={prop.TypeOfOffer}
                />
            </div>
        </>
    ))

    return(
        <>
            <h1>Lista de propiedades</h1>
            <div>
            {productsMapped} 
            </div>
        </>  
    )
}

export default PropList