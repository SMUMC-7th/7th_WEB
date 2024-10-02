import Navbar from "./Navbar";
import Profile from "./Profile";

function Sidebar(){
    console.log("sidebar");
    
    return (
        <>
            <Profile/>
            <h1>"사이드바"</h1>
            <Navbar/>
        </>
    )
}
export default Sidebar;