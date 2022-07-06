import { Background, Text, Title, Wrapper } from './style';

const Banner = () => {
    const description = ['O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.']
    return (
        <>
            <Background />
            <Wrapper>
                <Title>A melhor loja de Jordan</Title>
                <Text
                    strings={description}
                    typeSpeed={30}
                    showCursor={false}
                />
            </Wrapper>
        </>
    )
}
export default Banner;