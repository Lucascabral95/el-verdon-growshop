import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AppProvider } from "../src/Context/AppContext.js"
import AppRouter from './Routes/AppRouter.js';

function App() {
  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
    //HOLAAAAAAAAAAAAAAAAAAAA ESTOY HACIENDO ESTE CAMBIO DESDE LA "rama-lucas"

    //CHAUUUUUUUUUUUUUUUUUU ME DESPIDO DESDE LA "rama-lucas"
  );
}

export default App;
