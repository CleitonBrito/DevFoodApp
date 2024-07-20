import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import Carousel from 'react-bootstrap/Carousel';

export function Banner() {
    const [isDesktop, setDesktop] = useState(false);
    const maxWidth = 810

    useEffect(() => {
    if (window.innerWidth >= maxWidth) {
        setDesktop(true);
    } else {
        setDesktop(false);
    }

    const updateMedia = () => {
        if (window.innerWidth >= maxWidth) {
        setDesktop(true);
        } else {
        setDesktop(false);
        }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
    }, []);

  return (
    <div>
        { !isDesktop ? (
        <Carousel className='mt-3' indicators={false} touch={true} fade={true}>
            <Carousel.Item>
                <Image 
                    className="rounded-2xl h-32 sm:h-40 md:h-56"
                    source={{ uri : "./src/assets/banner1.png" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    className="w-full rounded-xl h-32 sm:h-40 md:h-56"
                    source={{ uri : "./src/assets/banner2.png" }}
                />
            </Carousel.Item>
        </Carousel>
        ) : (
            <div></div>
        )}
        </div>
  );
}