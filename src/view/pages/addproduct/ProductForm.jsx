import {Component} from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export class ProductForm extends Component {
    render() {
        return (
            //main container
            <div className={"w-full"}>

                {/*shadow bar*/}
                <div className={"h-[60px] shadow-2xl"}></div>

                {/*title section*/}
                <div className={"h-[74px] flex"}>

                    {/*title section*/}
                    <div className={"w-[60%] flex flex-col justify-center pl-8"}>
                        <h3 className={"font-bold"}>Product Add</h3>
                        <h3 className={"text-[11px]"}>Create New Products</h3>
                    </div>

                </div>


                {/*form section*/}
                <div className={"h-[80vh] flex justify-center "}>
                    <Card sx={{minWidth: 275}} className={"w-[95%] h-[85%]"}>
                        <CardContent className={"h-full"}>


                        </CardContent>
                    </Card>
                </div>

            </div>
        )
    }
}