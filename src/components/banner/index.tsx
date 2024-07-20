import { Carousel } from "flowbite-react"

export function Banner() {
    return (
        <div className="h-36 sm:h-64 xl:h-80 2xl:h-96 mb-0">
            <Carousel slideInterval={4000} leftControl=" " rightControl=" " pauseOnHover indicators={false}>
                <img className="rounded-xl" src="./src/assets/banner1.png" alt="..." />
                <img className="rounded-xl" src="./src/assets/banner2.png" alt="..." />
            </Carousel>
        </div>
    )
}