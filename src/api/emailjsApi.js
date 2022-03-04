import emailjs from '@emailjs/browser';
import Credentials from '../config/credentials'; //Arquivo .gitignore

const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm(Credentials.SERVICE_ID, Credentials.TEMPLATE_ID, e.target, Credentials.USER_ID)
        .then((result) => {
            alert('Mensagem enviada com sucesso');
        }, (error) => {
            alert(error.text);
        });
    e.target.reset();
};

export default sendEmail;