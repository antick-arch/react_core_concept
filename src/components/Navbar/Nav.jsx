import navImg from '../../assets/burger-logo.png'
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div className='left'>
                    <img src={navImg} alt="" />
                    <span></span>
                </div>
                <div className='right'>
                    <p>HOME</p>
                    <p>ORDER</p>
                    <p>CONTACT</p>
                    <p>ABOUT US</p>
                </div>
            </nav>
        </div>
    );
};

export default Nav;