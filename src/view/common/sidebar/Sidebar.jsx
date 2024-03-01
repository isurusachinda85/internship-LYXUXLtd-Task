import {Component} from "react";
import {Link} from "react-router-dom";
import SpeedIcon from '@mui/icons-material/Speed';
import InventoryIcon from '@mui/icons-material/Inventory';

export class Sidebar extends Component {
    render() {
        return (
            <div className="w-[280px] h-[100vh] shadow-2xl">
                <div className={"h-20 text-4xl font-bold flex justify-center items-center"}>
                    <h1>Welcome</h1>
                </div>

                <div className={"h-36"}>
                    <ul className={"h-full flex flex-col justify-around p-2 "}>
                        <Link to="/" >
                           <li className={"h-[50px] font-bold flex gap-3 items-center p-2 rounded-lg hover:bg-black hover:text-amber-50 "}><SpeedIcon/> Dashboard</li>
                        </Link>
                        <Link to="/product">
                            <li className={"h-[50px] font-bold flex gap-3 items-center p-2 rounded-lg hover:bg-black hover:text-amber-50"}><InventoryIcon/>Product</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}