
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import PageNotFound from './component/PageNotFound';
import AddRecipePage from './AddRecipePage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/add-recipe-page" element={<AddRecipePage />} />
        </Routes>
    </div>
  );
}

export default App;
