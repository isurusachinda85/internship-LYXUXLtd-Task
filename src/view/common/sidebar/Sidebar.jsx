import {Component} from "react";
import {Link} from "react-router-dom";

export class Sidebar extends Component {
    render() {
        return (
            <div className="w-[280px] h-[100vh] shadow-2xl">
                <div className={"border border-black"}>
                    <h1>Sidebar</h1>
                </div>

                <div className={"border border-black"}>
                    <ul>
                        <Link to="/"><li>Dashboard</li></Link>
                        <Link to="/product"><li>Product</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}