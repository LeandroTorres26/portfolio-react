import './nav.scss'
import {Link} from 'react-router-dom'
import logo from '../../image/logo-portfolio-min.svg'
const nav = () => {
    return (
        <nav>
            <Link to='/'><img src={logo} className={'logo'} alt="Logo Leandro Torres"/></Link>
            <ul className={'menu'}>
                <Link to='/projetos'><li className={'menu__item'}>Projects</li></Link>
                <Link to='/habilidades'><li className={'menu__item'}>Skills</li></Link>
                <Link to='/contato'><li className={'menu__item'}>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default nav
