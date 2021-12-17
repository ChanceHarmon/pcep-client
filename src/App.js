
import './App.css';
import Header from "./Header/Header.js"
import Aside from './Aside/Aside.js';
import Main from "./Main/Main.js"
import Footer from "./Footer/Footer.js"
import './Util/datacamp-light.js'


function App() {

  return (
    <div className="App">
      <script type="text/javascript" src="datacamp-light.js"></script>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


