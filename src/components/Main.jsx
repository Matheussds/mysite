import '../assets/css/components/main.css'
import Button from './Button'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default () => {
    const [show, setShow] = useState(false);

    function menu() {
        return (
            <div onClick={showMenu} className='menu flex flex--column'>
                <Link to="/dadosPessoais">
                    <Button name="Dados Pessoais" />
                </Link>
                <Link to="/portifolio">
                    <Button name="Portifólio" />
                </Link>
                <Link to="/academico">
                    <Button name="Acadêmico" />
                </Link>
                <Link to="/conhecimento">
                    <Button name="Conhecimentos" />
                </Link>
                <Link to="/experiencia">
                    <Button name="Experiência" />
                </Link>
                <Link to="/contato">
                    <Button name="Contato" />
                </Link>
            </div>
        );
    }

    function showMenu() {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <>
            <button className='menu-button' onClick={showMenu}>Menu</button>
            {show ?
                <div className='dropdown-menu flex--all-center'>
                    {menu()}
                </div>
                :
                null
            }
            <main className='container flex'>
                <div className='display-menu flex '>
                    {menu()}
                </div>

                <div className='content flex flex--between flex--quebra'>
                    <Outlet />
                </div>

            </main>
        </>
    )
}