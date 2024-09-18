import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import PageNotFound from './Components/PageNotFound';
// import Layout from './Components/Layout';
import UseStateEx from './Components/useStateEx';
import UseEffect from './Components/UseEffect';

function App() {
  return (
    <>
    {/* // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/about' element={<About />} />
    //       <Route path='/contact' element={<Contact />} />
    //       <Route path='/*' element={<PageNotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter> */}
    <UseStateEx />
    <UseEffect />
    </>

  );
}
export default App;




