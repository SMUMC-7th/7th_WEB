import Navbar from "./Navbar";
import Profile from "./Profile";
import "./Sidebar.css"

function Sidebar(){
    console.log("sidebar");
    
    return (
        <div className="sidebar">
            <Profile/>
            <Navbar/>
        </div>
    )
}
export default Sidebar;