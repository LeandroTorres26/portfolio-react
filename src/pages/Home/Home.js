import './home.scss'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <section className={'home'}>
            <h1 className={'home__title'}>Creating enjoyable experiences</h1>
            <Link to='/projetos'><button className={'home__cta'}>Check it out!</button></Link>
        </section>
    )
}

export default Home
