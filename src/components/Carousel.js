import React, { useEffect, useState } from 'react';
import '../components/Carousel.css';
import img1 from '../assets/img1-aloha.png';
import img2 from '../assets/img2-aloha.png';
import img3 from '../assets/img3-aloha.png';

const images = [img1, img2, img3];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Troca a imagem a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="carousel">
            <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="carousel-image" />
        </div>
    );
}

export default Carousel;