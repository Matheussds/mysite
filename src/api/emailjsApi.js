import emailjs from '@emailjs/browser';
//import Credentials from '../config/credentials'; //Arquivo .gitignore

const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            alert('Mensagem enviada com sucesso');
        }, (error) => {
            alert(error.text);
        });
    e.target.reset();
};

export default sendEmail;