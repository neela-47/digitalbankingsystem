
import NavBarS from '../Landingpage/NavBarS';
import { Outlet } from 'react-router-dom';
import Footer from '../Landingpage/Footer';

const Root = () => {
    return (
       
          <>
          
            <NavBarS></NavBarS>
            <Outlet></Outlet>
            <Footer></Footer>
            
          </>
       
    );
};

export default Root;