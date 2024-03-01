import {Component} from "react";

export class Dashboard extends Component {
    render() {
        return (
            <div className={"w-full"}>
                <div
                    className={"h-[60px] shadow-2xl flex justify-center items-center text-green-500 text-4xl font-bold "}>
                    <h1>Dashboard</h1>
                </div>

            </div>
        )
    }
}