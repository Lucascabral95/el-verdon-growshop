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
  );
}

export default App;
