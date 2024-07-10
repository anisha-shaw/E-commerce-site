import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
    return (
        <div>
            <Carousel autoPlay={true} showArrows={true} swipeable={true}>
                <div>
                    <img src="https://m.media-amazon.com/images/I/616SqgdNgLL._SX3000_.jpg" alt='' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61dCP8bufeL._SX3000_.jpg" alt='' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/81NTpbZ58lL._SX3000_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
