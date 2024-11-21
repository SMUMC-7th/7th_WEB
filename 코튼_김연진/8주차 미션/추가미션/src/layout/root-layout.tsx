import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (
        <div className="flex h-full w-full flex-col">
            <Navbar></Navbar>
            <div className="flex w-[90%] self-center mt-[80px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;
