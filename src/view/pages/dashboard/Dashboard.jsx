import {Component} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import {CommonTable} from "../../common/table/CommonTable";


export class Dashboard extends Component {
    render() {
        return (
            <div className={"w-full"}>
                <div className={"h-[60px] shadow-2xl"}></div>

                <div className={"h-[90%] w-full flex flex-wrap justify-evenly items-center "}>

                    <div className={"h-[20%] w-[40%]"}>
                        <Card sx={{ minWidth: 275 }} className={"h-full"}>
                            <CardContent className={"h-full flex"}>
                                <div className={"h-full w-[25%] flex items-center justify-center"}>
                                    <div className={"rounded-full h-[80px] w-[80px] bg-green-200 text-green-600 flex justify-center items-center"}>
                                        <LocalAtmIcon fontSize="large"/>
                                    </div>
                                </div>
                                <div className={"h-full w-[75%] flex flex-col justify-center"}>
                                    <div className={"w-full font-bold"}><h3>$4536</h3></div>
                                    <div className={"w-full font-bold"}><h3>Total Inventory Value</h3></div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                    <div className={"h-[20%] w-[40%]"}>
                        <Card sx={{ minWidth: 275 }} className={"h-full"}>
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

                    <div className={"h-[60%] w-[86%]"}>
                        <Card sx={{ minWidth: 275 }} className={"h-full"}>
                            <CardContent className={"h-full flex flex-col"}>
                                <div className={"text-2xl font-bold h-[20%]"}>
                                    <h3>Recently Added Product</h3>
                                </div>

                                <div>
                                    <CommonTable/>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>


            </div>
        )
    }
}