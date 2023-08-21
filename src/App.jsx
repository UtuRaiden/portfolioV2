import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {

  return (
    <div class ='flex flex-col w-screen h-screen justify-between'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
