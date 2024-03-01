import {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


export class Dashboard extends Component {
    render() {
        return (
            <div className={"w-full"}>
                <div
                    className={"h-[60px] shadow-2xl flex justify-center items-center text-green-500 text-4xl font-bold "}>
                </div>

                <div className={"border border-black h-[90%] w-full flex flex-wrap justify-center items-center gap-3"}>

                    <div className={"border border-black h-[40%] w-[40%]"}>
                        <Card sx={{ minWidth: 275 }} className={"border border-black h-1/2"}>
                            <CardContent className={"h-full flex"}>
                                <div className={"border border-black h-full w-[25%] flex items-center justify-center"}>
                                    <div className={"rounded-full border border-black h-[80px] w-[80px] bg-green-200 text-green-600 flex justify-center items-center"}>
                                        <LocalAtmIcon fontSize="large"/>
                                    </div>
                                </div>
                                <div className={"border border-black h-full w-[75%] flex flex-col justify-center"}>
                                    <div className={"border border-black w-full font-bold"}><h3>$4536</h3></div>
                                    <div className={"border border-black w-full font-bold"}><h3>Total Inventory Value</h3></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                    <div className={"h-[40%] w-[40%]"}>
                        <Card sx={{ minWidth: 275 }} className={"h-1/2"}>
                            <CardContent className={"h-full flex"}>
                                <div className={"h-full w-[25%] flex items-center justify-center"}>
                                    <div className={"rounded-full h-[80px] w-[80px] bg-green-200 text-green-600 flex justify-center items-center"}>
                                        <LocalAtmIcon fontSize="large"/>
                                    </div>
                                </div>
                                <div className={"h-full w-[75%] flex flex-col justify-center"}>
                                    <div className={"w-full font-bold"}><h3>$4536</h3></div>
                                    <div className={"w-full font-bold"}><h3>Number of Units Available</h3></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={"border border-black h-[40%] w-[80%]"}></div>

                </div>


            </div>
        )
    }
}