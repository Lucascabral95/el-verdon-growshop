//--------------------------BOOTSTRAP--------------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//--------------------------BOOTSTRAP--------------------------
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <>
      <Main />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Verdon Growsop.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡Próximamente!
          </a>
        </header>
      </div>

      <Footer />

      <Header />


    </>
  );
}

export default App;
