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
import "react-dropdown/style.css";
import "react-datetime/css/react-datetime.css";
import "react-phone-number-input/style.css";
import SidebarAdmin from './SidebarAdmin';


const NoDataComponent = () => {
    return (
        <div style={{ textAlign: 'center', width: "100%", padding: '20px', color: '#fefefe', backgroundColor: "#212125" }}>
            <h3>No Data Available</h3>
            <p>Please check back later or adjust your filters.</p>
        </div>
    );
};


const AdminDashboard = () => {

    const [searchText, setSearchText] = useState('');
    const [tabledata, settabledata] = useState([
        { amount: "500", creditDate: "2025-02-08", type: "Credited" },
        { amount: "300", creditDate: "2025-02-07", type: "Credited" },
        { amount: "70sdfsdf0", creditDate: "2025-02-06", type: "Credited" },
        { amount: "150", creditDate: "2025-02-05", type: "Credited" },
        { amount: "450", creditDate: "2025-02-04", type: "Credited" },
    ]);

    const [FormData, setFormData] = useState({ 
        amount: "",
        movie_id: "",
        movieName:"",
    })

    const handleInputChange = (e, fieldName) => {
        setFormData({ ...FormData, [fieldName]: e.target.value });
    };


    // mdd serch 

    const [searchMovie, setsearchMovie] = useState("");
    const [isOpenMd, setisOpenMd] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    // const [selectedMovieId, setSelectedMovieId] = useState(null);
    // const [selectedMovieName, setSelectedMovieName] = useState("");

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const data = { apiUrl: apiService.getAllMovie };
            const response = await getMethod(data);
            if (response.status && response.data) {
                setMovies(response.data);
                console.log(response.Message, "get all movies");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

     

    const handleSelectMovie = (movie) => {
        // setSelectedMovieId(movie._id);
        // setSelectedMovieName(movie.Name);

        setFormData(prev => ({
            ...prev,
            movie_id: movie._id,
            movieName: movie.Name
        }));
    };

    // Filter movies based on search input
    const filteredMovies = movies.filter((movie) =>
        movie.Name.toLowerCase().includes(searchMovie.toLowerCase())
    );
    
    // mdd serch


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(FormData , " form data  =====")
        
    };
    


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

    const filteredData = tabledata.filter(item =>
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
                    {/* <SidebarAdmin/> */}
                    
                </div>
                <div id="page-content-wrapper">
                    <Header />



                    <div>
                        <RevenueHead />

                        <h3 className=' text-center '> Fund Distribution</h3>
                        <div className="d-flex  justify-content-center ">

                            <form onSubmit={handleSubmit}
                                className=' w-100  p-2 mx-sm-5 mx-3  ' style={{   backgroundColor: "var(--background-color-gray)", border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}  >
                                <div className="mb-3 mt-3  ">
                                    <label className="form-label">Amount</label>
                                    <input
                                        type="text"
                                        required
                                        className="form-control rounded-lg "
                                        placeholder="Enter Amount"
                                        value={FormData.amount}
                                        onChange={(e) => { handleInputChange (e,"amount")}}
                                    />
                                </div>
                                {/* <div class="form-group ">

                                    <div class=""> */}


                                <div id="mdd" className="dropdown mb-2">
                                    <label className="form-label">Movie</label>
                                    <button
                                        className="btn w-100  dropdown-toggle"
                                        type="button"
                                        
                                        style={{ backgroundColor: "var(--background-color-gray)", color: "white", border: "1px solid #d5d4d4", textAlign: "left" }}
                                        onClick={() => setisOpenMd(!isOpenMd)}
                                    >
                                        {selectedMovie ? selectedMovie.Name : "Select a Movie"}
                                    </button>

                                    {isOpenMd && (
                                        <div
                                            className="dropdown-menu show px-2"
                                            style={{ maxHeight: "200px", overflowY: "auto", width: "100%", }}
                                        >
                                            {/* Search Input */}
                                            <input
                                                type="text"
                                                className="form-control mb-2  "
                                                placeholder="Search..."
                                                value={searchMovie}
                                                onChange={(e) => setsearchMovie(e.target.value)}
                                            />

                                            {/* Dropdown Options */}
                                            {filteredMovies.length > 0 ? (
                                                filteredMovies.map((movie) => (
                                                    <button
                                                        key={movie.id}
                                                        className="dropdown-item text-wrap border-bottom py-2  "
                                                        onClick={() => {
                                                            setSelectedMovie(movie);
                                                            setisOpenMd(false);
                                                            handleSelectMovie(movie)
                                                        }}
                                                    >
                                                        {movie.Name}
                                                    </button>
                                                ))
                                            ) : (
                                                <p className="dropdown-item text-muted">No results found</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* </div>
                                </div> */}


                                <div className="d-flex justify-content-center py-3 align-content-center">
                                    <button type="submit" disabled={!selectedMovie } className="px-5 btn btn-success">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className='container px-3' style={{ borderRadius: "15px 15px 0px 0px ", padding: "10px 0px" }}  >

                            <input
                                type="text"
                                placeholder="Search"
                                value={searchText}
                                onChange={handleSearch}
                                style={{ backgroundColor: "#373737", color: "#fff", margin: "10px 10px", padding: "10px 10px" }}
                                className="form-control-sm border  "
                            />




                            <div className='w-100' style={{ border: "2px solid #323232", borderRadius: "15px 15px 0px 0px " }} >
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

export default AdminDashboard