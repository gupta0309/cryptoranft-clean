import React, { useEffect, useState } from 'react'
import Header from "./Headerafterlogin";
import Sidebar from "./Sidebar";
import apiService from "../service/serviceUrl";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import copy from "../image/copy.png"

import RevenueHeadUser from './RevenueHeadUser';
 
// no data componnet 
const NoDataComponent = () => {
    return (
        <div style={{ textAlign: 'center', width: "100%", padding: '20px', color: '#fefefe', backgroundColor: "#212125" }}>
            <h3>No Data Available</h3>
            <p>Please check back later or adjust your filters.</p>
        </div>
    );
};

// popup component 
const WithdrawalBlock = () => {
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState("");
    const [wallet, setWallet] = useState("");
    const [totalAmount, setTotalAmount] = useState(1000); // Example balance

    const handleWithdraw = () => {
        if (!amount || !wallet) {
            alert("Please enter both amount and wallet address.");
            return;
        }

        if (parseFloat(amount) > totalAmount) {
            alert("Insufficient balance.");
            return;
        }

        // Process withdrawal logic
        setTotalAmount((prev) => prev - parseFloat(amount));
        alert(`Withdrawal of $${amount} successful to ${wallet}`);

        setAmount("");
        setWallet("");
        setShowModal(false);
    };

    return (
        <div className="container mt-4">
            {/* Total Amount Display */}
            <div className="card p-4 text-center shadow-lg  mx-auto" style={{ maxWidth: "400px", backgroundColor: "var(--background-color-gray)", border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}>
                <h5>Wallet Balance</h5>
                <div className="d-flex   mt-2 justify-content-center ">

                    <h2 className="text-white mr-1 text-success  ">{totalAmount}  </h2>
                    <small>CSTAR</small>
                </div>
                <button className="btn btn-success mt-2 w-100" onClick={() => setShowModal(true)}>
                    Withdraw
                </button>
            </div>

            {/* Withdrawal Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Withdraw Funds</h5>
                                <span type="button" className="btn-close" onClick={() => setShowModal(false)}>X</span>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Wallet Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter wallet address"
                                        value={wallet}
                                        onChange={(e) => setWallet(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <button className="btn btn-primary" onClick={handleWithdraw}>
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


// main component 
const UserRevenue = () => {

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
            minWidth:"100px"
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
            minWidth:"200px"
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
                </div>
                <div id="page-content-wrapper">
                    <Header />



                    <div>
                        <RevenueHeadUser />
                        <WithdrawalBlock/>

                        <div className='container px-3' style={{ borderRadius: "15px 15px 0px 0px ", padding: "10px 0px" }}  >

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={handleSearch}
                                style={{ backgroundColor: "#373737", color: "#fff", margin: "10px 10px", padding: "10px 10px" }}
                                className="form-control-sm border  "
                            />
                            <div style={{ border: "2px solid #323232", borderRadius: "15px 15px 0px 0px " }} >
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

export default UserRevenue