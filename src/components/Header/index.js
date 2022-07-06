import Banner from '../Banner';
import NavBar from '../NavBar';
import PromoBar from '../PromoBar';

const Header = () => {
    return (
        <>
            <PromoBar
                text='Ganhe R$ 10,00 de desconto no frete'
            />
            <NavBar />
            <Banner />
        </>
    )
}

export default Header;