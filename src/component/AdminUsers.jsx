import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Headerafterlogin'
import DataTable from 'react-data-table-component';
import { colors } from '@material-ui/core';
import apiService from "../service/serviceUrl";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import copy from "../image/copy.png"
import SidebarAdmin from './SidebarAdmin';

const NoDataComponent = () => {
    return (
        <div style={{ textAlign: 'center', width: "100%", padding: '20px', color: '#fefefe', backgroundColor: "#373737" }}>
            <h3>No Data Available</h3>
            <p>Please check back later or adjust your filters.</p>
        </div>
    );
};



const AdminUsers = () => {

    const [searchText, setSearchText] = useState('');

    const handleCopy = (copyMaterial) => {
        navigator.clipboard.writeText(copyMaterial).then(() => {
            alert("copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy  ", err);
        });
    };
    const [columns, setColumns] = useState([
        {
            name: "Sno",
            selector: (row) => row.index,
            sortable: true,
            width: "100px",
        },
        {
            name: "Username",
            selector: (row) => row.username,
            sortable: true,
            width: "200px",
        },
        {
            name: "Email",
            selector: (row) => (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={copy} alt='copy'
                        onClick={() => handleCopy(row.email)}
                        style={{
                            width: "1rem",
                            cursor: "pointer",
                        }}
                    />
                    <span>{row.email}</span>

                </div>
            ),
            sortable: true,
            width: "250px",
        },
        {
            name: "Wallet Address",
            selector: (row) => (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={copy} alt='copy'
                        onClick={() => handleCopy(row.walletAddress)}
                        style={{
                            width: "1rem", 
                            cursor: "pointer",
                        }}
                    />
                    <span>{row.walletAddress}</span>

                </div>
            ),
            sortable: true,
            width: "300px",
        },
        {
            name: "Datetime",
            selector: (row) => row.datetime,
            sortable: true,
            width: "200px",
        },
    ]);

    const [data, setdata] = useState([]);

    const getAllUsers = async () => {
        try {
            var data = { apiUrl: apiService.getAllUsers };
            var resp = await getMethod(data);
            // console.log(resp.status , resp.data  ," usere data mila ")
            if (resp) {
                const usersWithIndex = resp.allUsers.map((user, idx) => ({
                    ...user,
                    index: idx + 1, // Start the index from 1
                }));

                setdata(usersWithIndex);
                console.log("success")
                console.log(resp, " users get success ")
            }
            else {
                console.log("Failed to fetch  users")
            }

        } catch (error) {
            console.error(error, " users get error ")
        }
    }



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
        item.username.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())

    );

    useEffect(() => {
        getAllUsers()
    }, []);



    return (
        <>
            <div>
                <div id="wrapper" className="d-flex">
                    <div
                        className="border-end bg-white collapse navbar-collapse "
                        id="sidebar-wrapper">
                        <Sidebar />
                        {/* <SidebarAdmin/> */}
                    </div>
                    <div id="page-content-wrapper">
                        <Header />


                        <div className='container' style={{ borderRadius: "15px 15px 0px 0px ", padding: "10px 0px" }}  >
                            <h2 style={{ margin: "10px ", textAlign: "center" }} >Users Data</h2>

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={handleSearch}
                                style={{ backgroundColor: "#373737", color: "#fff", margin: "10px 10px", padding: "10px 10px" }}
                                className="form-control-sm border  "
                            />

                            <DataTable
                                columns={columns}
                                data={filteredData}
                                customStyles={customStyles}
                                pagination
                                noDataComponent={<NoDataComponent />}
                            // paginationComponent={CustomMaterialPagination}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminUsers