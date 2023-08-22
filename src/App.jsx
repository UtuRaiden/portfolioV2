import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {

  return (
    <div className ='flex flex-col w-screen h-screen justify-between'>
      {/*Displays the header */}
      <Header />
      {/*Displays whatever body is currently selected*/}
      <Outlet />
       {/*Displays the footer*/}
      <Footer />
    </div>
  )
}

export default App
