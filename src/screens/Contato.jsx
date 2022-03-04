import Card from '../components/Card'
import '../assets/css/screens/contato.css'
import sendEmail from '../api/emailjsApi'

export default () => {
    
    return (
        <>
            <Card label="celular" value="+55 (61) 99512-7463" />
            <Card label="e-mail" value="matheus.developer.dba@outlook.com" />

            <form className='flex flex--column' onSubmit={sendEmail}>
                <label className='App-primary'>Nome</label>
                <input className='contact-input bkg-default' type="text" name="user_name" />
                <label className='App-primary'>Email</label>
                <input className='contact-input bkg-default' type="email" name="user_email" />
                <label className='App-primary'>Mensagem</label>
                <textarea className='contact-input bkg-default' name="message" />
                <div className='flex flex--all--center'>
                    <input className='btn-submit' type="submit" value="Enviar" />
                </div>
            </form>


        </>
    )
}