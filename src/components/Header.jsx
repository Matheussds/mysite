import foto_perfil from '../assets/img/foto_perfil.jpg'
import '../assets/css/components/header.css'

const Header = () => {
    return (
        <header className="header-container flex container">
            <h1 className='App-fifth container-dividido-tres'>
                Matheus Sena
            </h1>
            <div className='hide-half container-dividido-tres flex flex--all--center'>
                <img className='hide-half cabecalho-foto-perfil' src={foto_perfil} />
            </div>
            <div className='container-dividido-tres flex' style={{justifyContent: 'right'}}>
                <img className='hide-right cabecalho-foto-perfil' src={foto_perfil} />
            </div>
        </header>
    )
}

export default Header;