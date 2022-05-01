import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import User from './components/User';
import MainHeader from './components/MainHeader';
import AllUser from './components/AllUsers';


function App() {
  return (
    <div>
      <MainHeader />
     
      <main>
        <Routes>
        <Route path='/addNew' element={<Form />} />
          <Route path='/addNew/:id' element={<Form />} />
          <Route path='/viewAll' element={<AllUser/>} />
        </Routes>
      </main>
     
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
