import {Component} from "react";
import AddIcon from '@mui/icons-material/Add';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, TextField} from "@mui/material";
import {CommonTable} from "../../common/table/CommonTable";
import {Link} from "react-router-dom";

export class Product extends Component {
    render() {
        return (

            //main container
            <div className={"w-full"}>

                {/*shadow bar*/}
                <div className={"h-[60px] shadow-2xl"}></div>

                {/*title & button section*/}
                <div className={"h-[74px] flex"}>

                    {/*title section*/}
                    <div className={"w-[60%] flex flex-col justify-center pl-8"}>
                        <h3 className={"font-bold"}>Product List</h3>
                        <h3 className={"text-[11px]"}>Manage Your Products</h3>
                    </div>

                    {/*button section*/}
                    <div className={"w-[40%] flex justify-end items-center "}>
                        <Link to="/productadd" className={"mr-8  w-[40%] h-[55%]"}>
                            <button className={"w-[100%] h-[100%] rounded-md bg-orange-300 text-amber-50 font-bold"}>
                                <AddIcon/>Add New Product
                            </button>
                        </Link>
                    </div>
                </div>

                {/*table section*/}
                <div className={"h-[80vh] flex justify-center "}>
                    <Card sx={{minWidth: 275}} className={"w-[95%] h-[85%]"}>
                        <CardContent className={"h-full"}>

                            {/*search section*/}
                            <div className={"h-[15%] flex items-center"}>

                                {/*filter icon*/}
                                <div className={"h-[60%] w-[50px] rounded-md bg-orange-300 text-amber-50 flex justify-center items-center"}>
                                    <FilterAltIcon/>
                                </div>

                                {/*text field section*/}
                                <div className={"h-[70%] w-[24%] flex justify-center items-center"}>
                                    <TextField id="outlined-basic" variant="outlined" size="small" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon/>
                                            </InputAdornment>
                                        ),
                                    }}/>
                                </div>
                            </div>

                            {/*table section*/}
                            <div className={"h-[85%] pt-5"}>
                                <CommonTable/>
                            </div>

                        </CardContent>
                    </Card>
                </div>

            </div>
        )
    }
}