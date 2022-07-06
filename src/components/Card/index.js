import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Container, Img } from './style';
const Card = ({ src }) => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "50px",
            duration: 2000,
            reset: false,
        });

        sr.reveal(".card", { delay: 400 });
    }, []);
    return (
        <Container className='card'>
            <Img
                src={src}
                alt="Calçados"
            />
        </Container>
    )
}

export default Card