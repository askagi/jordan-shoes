import Card from "../Card";
import { Container, Content, Header, Text, Title } from "./style";

const data = [
    {
        id: 1,
        src: "../../assets/images/1.png",
    },
    {
        id: 2,
        src: '../../assets/images/2.png',
    },
    {
        id: 3,
        src: '../../assets/images/3.png',
    },
    {
        id: 4,
        src: '../../assets/images/4.png',
    },
    {
        id: 5,
        src: '../../assets/images/5.png',
    },
    {
        id: 6,
        src: '../../assets/images/6.png',
    },
    {
        id: 7,
        src: '../../assets/images/7.png',
    },
    {
        id: 8,
        src: '../../assets/images/8.png',
    },
]

const Showcase = () => {
    return (
        <Container>
            <Header>
                <Title>Destaques</Title>
                <Text>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</Text>
            </Header>
            <Content>
                {
                    data.map(item => (
                        <Card
                            key={item.id}
                            src={item.src}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Showcase;