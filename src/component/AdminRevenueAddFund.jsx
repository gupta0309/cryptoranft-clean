
import React, { useEffect, useState } from 'react'
import Header from "./Headerafterlogin";
import Sidebar from "./Sidebar";
import apiService from "../service/serviceUrl";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import copy from "../image/copy.png"
import RevenueHead from './RevenueHead';
import SidebarAdmin from './SidebarAdmin';


const NoDataComponent = () => {
    return (
        <div style={{ textAlign: 'center', width: "100%", padding: '20px', color: '#fefefe', backgroundColor: "#212125" }}>
            <h3>No Data Available</h3>
            <p>Please check back later or adjust your filters.</p>
        </div>
    );
};

const AdminRevenueAddFund = () => {

    const [searchText, setSearchText] = useState('');
    const [data, setdata] = useState([
        { amount: "500", creditDate: "2025-02-08", type: "Credited" },
        { amount: "300", creditDate: "2025-02-07", type: "Credited" },
        { amount: "70sdfsdf0", creditDate: "2025-02-06", type: "Credited" },
        { amount: "150", creditDate: "2025-02-05", type: "Credited" },
        { amount: "450", creditDate: "2025-02-04", type: "Credited" },
    ]);


    const [columns, setColumns] = useState([
        {
            name: "Sno",
            selector: (row, index) => index + 1,
            sortable: true,
            minWidth: "100px"
            // width: "100px",
        },
        {
            name: "Amount",
            selector: (row) => (
                <>
                    <span>{row.amount} CSTAR</span>
                </>
            ),
            sortable: true,
            minWidth: "200px"
            // width: "200px",
        },
        {
            name: "Date",
            selector: (row) =>
            (
                <>
                    <span className=' w-100 ' >{row.creditDate} </span>
                </>
            ),

            sortable: true,
            minWidth: "200px"

        },
        {
            name: "Type",
            selector: (row) => row.type,
            sortable: true,
            minWidth: "200px"
            // width: "300px",
        },

    ]);



    const customStyles = {

        rows: {
            style: {
                minHeight: '48px',

                backgroundColor: '#1c1c1c',
                color: "#FFFFFF",
                '&:hover': {
                    backgroundColor: '#373737',
                    color: "#FFFFFF",
                }
            }
        },

        headRow: {
            style: {

                backgroundColor: "#373737",
                color: "#FFFFFF"
            }
        },
        table: {
            style: {
                backgroundColor: '#000',
            }
        },
        pagination: {
            style: {
                backgroundColor: "#373737",
                color: "#FFFFFF",

            },
            pageButtonsStyle: {
                borderRadius: '50%',
                height: '40px',
                width: '40px',
                padding: '8px',
                margin: 'px',
                cursor: 'pointer',
                transition: '0.4s',
                color: "#FFFFFF",
                fill: "#FFFFFF",
                backgroundColor: 'transparent',
                '&:disabled': {
                    cursor: 'unset',
                    color: "#727272",
                    fill: "#777777",
                },
                '&:hover:not(:disabled)': {
                    backgroundColor: "#5e5d5d",
                },
                '&:focus': {
                    outline: 'none',
                    backgroundColor: "#494949",
                },
            },
        },
    }


    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.amount.toLowerCase().includes(searchText.toLowerCase()) ||
        item.creditDate.toLowerCase().includes(searchText.toLowerCase()) ||
        item.type.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <>
            <div id="wrapper" className="d-flex">
                {/* <div className='border-end bg-white' id="sidebar-wrapper"> */}
                <div
                    className="border-end bg-white collapse navbar-collapse "
                    id="sidebar-wrapper"
                >
                    <Sidebar />
                    {/* <SidebarAdmin /> */}
                </div>
                <div id="page-content-wrapper">
                    <Header />



                    <div>
                        <RevenueHead />

                        <h3 className=' text-center '> Add Fund</h3>
                        <div className="d-flex  justify-content-center ">

                            <form className=' w-100  p-2 mx-sm-5 mx-3 ' style={{ backgroundColor: "var(--background-color-gray)", border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}  >
                                <div className="mb-3 mt-4  ">
                                    <label htmlFor=""> Add fund to wallet  </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-lg "
                                        placeholder="Enter Amount"
                                        value=""
                                    />
                                </div>
                                <div className="d-flex justify-content-center py-3 align-content-center">
                                    <button type="submit" className="px-5 btn btn-success">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className='container px-3 mt-5 ' style={{ borderRadius: "15px 15px 0px 0px ", padding: "10px 0px" }}  >

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={handleSearch}
                                style={{ backgroundColor: "#373737", color: "#fff", margin: "10px 10px", padding: "10px 10px" }}
                                className="form-control-sm border  "
                            />




                            <div className='w-100  ' style={{ border: "2px solid #323232", borderRadius: "15px 15px 0px 0px " }} >
                                <DataTable
                                    columns={columns}
                                    data={filteredData}
                                    customStyles={customStyles}
                                    pagination
                                    noDataComponent={<NoDataComponent />}
                                />
                            </div>


                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default AdminRevenueAddFund