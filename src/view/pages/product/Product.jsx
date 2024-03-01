import {Component} from "react";

export class Product extends Component {
    render() {
        return (
            <div className={"w-full"}>
                <div className={"h-[60px] shadow-2xl flex justify-center items-center text-blue-600 text-4xl font-bold"}>
                    <h1>Product</h1>
                </div>

            </div>
        )
    }
}