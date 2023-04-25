import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import WeatherMain from './Weather/weather';
import ToDo from './ToDo/ToDo';
import News from './News/News';

function App() {
  return (
    <div>
      <Header />
      <News/>
      {/* <WeatherMain /> */}
      {/* <ToDo/> */}
      <Footer />
    </div>
  );
}

export default App;
