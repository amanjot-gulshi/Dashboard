import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import WeatherMain from './Weather/weather';
import ToDo from './ToDo/ToDo';

function App() {
  return (
    <div>
      <Header />
      <WeatherMain />
      <ToDo/>
      <Footer />
    </div>
  );
}

export default App;
