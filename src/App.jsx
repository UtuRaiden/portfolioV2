import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
