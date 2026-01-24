import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RevenueHead = () => {
    const [isOpenDD, setIsOpenDD] = useState(false);
    return (
        <>
            <div className="">
                <h2 style={{ margin: "10px ", textAlign: "center" }} >Revenue</h2>
                <div style={{ maxWidth: "20rem" }} className=" position-relative mx-auto   ">



                    <button
                        style={{ width: '100%', margin: "0px" }}
                        className=" btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={() => setIsOpenDD(!isOpenDD)}
                    >
                        Revenue Controls
                    </button>
                    {isOpenDD && (
                        <ul className=" position-absolute w-100 top-0 dropdown-menu show" style={{ display: "block" }}>
                            <li className='border-bottom w-100  '>
                                <Link className=" nav-link  text-white   " to="/AdminDashboard">
                                    Revenue Dashboard
                                </Link>
                                
                            </li>
                            <li className='border-bottom  '>
                               
                                <Link className=" nav-link  text-white   " to="/AdminRevenueAddFund">
                                    Add Fund
                                </Link>
                            </li>
                            

                        </ul>
                    )}


                </div>
            </div>
            <div className="container mt-4 py-4" style={{ backgroundColor: "var(--background-color)", color: "white" }}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                        <div className="card shadow border-0" style={{ backgroundColor: "var(--background-color-gray)" }}>
                            <div className="card-body text-center" style={{ border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}>
                                <h5 className="card-title" style={{ color: "white" }}>Total Revenue</h5>
                                <h3 className=" ">$10,000</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                        <div className="card shadow border-0" style={{ backgroundColor: "var(--background-color-gray)" }}>
                            <div className="card-body text-center" style={{ border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}>
                                <h5 className="card-title" style={{ color: "white" }}>Monthly Revenue</h5>
                                <h3 className=" ">$1,200</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                        <div className="card shadow border-0" style={{ backgroundColor: "var(--background-color-gray)" }}>
                            <div className="card-body text-center" style={{ border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }} >
                                <h5 className="card-title" style={{ color: "white" }}>Weekly Revenue</h5>
                                <h3 className=" ">$300</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                        <div className="card shadow border-0" style={{ backgroundColor: "var(--background-color-gray)" }}>
                            <div className="card-body text-center" style={{ border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}>
                                <h5 className="card-title" style={{ color: "white" }}>Daily Revenue</h5>
                                <h3 className=" ">$50</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default RevenueHead