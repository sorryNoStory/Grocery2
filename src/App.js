import './App.css';
import image from './shop.png';
import imageTwo from './man.png';
import {GroceryList} from './GroceryList'

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} width='250px' alt='shop' />
      </div>
      <div className='container'>
      <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className='container'>
      <img src={imageTwo} width='250px' alt='man' />
      </div>

    </div>
  );
}

export default App;
