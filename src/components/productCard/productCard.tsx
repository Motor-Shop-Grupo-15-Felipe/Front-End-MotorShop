export const ProductCard = () => {
    return (
    <>
        <section>
                
            <img className="image-vehicle" src="image-car" alt="" />
            <h2 className="title-vehicle"> Carro vermelho </h2>
            <p className="description-vehicle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis cum quasi ullam dignissimos, nemo amet quaerat.</p>

            <div className="info-owner-vehicle">
                <img className="owner-image-vehicle" src="image-user" alt="" />
                <span className="owner-vehicle">Gustavo</span>
            </div>

            <div className="info-vehicle">
                <div>
                    <span className="mileage-vehicle">0 KM</span>
                    <span className="age-vehicle">2020</span>
                </div>
                <span className="price-vehicle">R$ 50.000,00</span>
            </div>
                
        </section>   
    </>
    )
}

