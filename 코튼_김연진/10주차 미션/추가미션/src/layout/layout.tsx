import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
const Layout = () => {
    return (
        <div className="m-0 p-0 w-full h-[100vh] flex flex-col">
            <Navbar></Navbar>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;
