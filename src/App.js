import Header from './components/Header'
import Banner from './components/Banner'
import Service from './components/Service'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        {/* <Service /> */}
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
