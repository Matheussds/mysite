import './App.css';
import './assets/css/base/base.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Portifolio from './screens/Portifolio';
import DadosPessoais from './screens/DadosPessoais'
import Contato from './screens/Contato';
import Academico from './screens/Academico';
import Conhecimento from './screens/Conhecimento';
import Experiencia from './screens/Experiencia';

function App() {
  return (
    <div className="App-body flex flex--column">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<DadosPessoais />} />
            <Route path="dadosPessoais" element={<DadosPessoais />} />
            <Route path="portifolio" element={<Portifolio />} />
            <Route path="academico" element={<Academico />} />
            <Route path="conhecimento" element={<Conhecimento />} />
            <Route path="experiencia" element={<Experiencia/>} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>,
      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
