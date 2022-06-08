import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
