import React, { useEffect, useState } from "react";
import Header from './Headerafterlogin';
import Sidebar from './Sidebar';
import Innernenu from './Innernenu';
import "../styles/Movies.css";
import Pagination from "../myComp/Pagination";

import apiService from "../service/serviceUrl";
import { getMethod, postMethod } from "../service/api";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminMovieList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
    const navigate = useNavigate()

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

    const handleDeleteMovie = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this movie?");
        if (!isConfirmed) return;

        try {
            const data = { apiUrl: apiService.deleteMovie, payload: { _id: id } };
            const response = await postMethod(data);

            if (response.status) {
                toast.success(response.Message, { position: "top-right" });
                await getMovies();
            } else {
                toast.error("Failed to delete movie", { position: "top-right" });
                console.error("Failed to delete movie");
            }
        } catch (error) {
            toast.error("Failed to delete movie", { position: "top-right" });
            console.error("Failed to delete movie", error);
        }
    };

    const handleEditMovie = (id) => {
        navigate(`/AdminUpdateMovie/${id}`)
    }
    useEffect(() => {
        getMovies();
    }, []);

    // Filter movies based on the search query
    const filteredMovies = movies.filter(movie => {
        return (
            movie.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            movie.joner.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredMovies.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <div id="wrapper" className="d-flex">
                <div className="border-end bg-white collapse navbar-collapse" id="sidebar-wrapper">
                    <Sidebar />
                    {/* <SidebarAdmin /> */}
                </div>
                <div id="page-content-wrapper">
                    <Header />

                    <div>
                        <div className="container my-5">
                            <h2 className="text-center mb-4">Movie List</h2>

                            {/* Search Input */}
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Search by name, description"
                                    className="form-control"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                                />
                                <p className="mt-3 text-warning"> Note: Click Images To See Preview</p>
                            </div>

                            {/* Movie Cards */}
                            <div className="row">
                                {currentPosts.map((movie) => (
                                    <div
                                        key={movie.id}
                                        className="custom-a-tag col-md-6 mb-4"
                                    >
                                        <div style={{ position: "relative" }} className="movie-card-contain ">
                                            <a
                                                target="blank"
                                                href={`https://cinestarnft.io/movie/${movie._id}`}
                                                className="  custom-a-tag movieimg-container"
                                            >
                                                <img src={movie.image} alt="" />
                                            </a>
                                            <p style={{ backdropFilter: "blur", borderRadius:"0px 0px 10px 0px", background:"#1e1e1e9f", position: "absolute", fontSize: "12px", top:"0%", left:"0%" }}
                                                className="left-0      p-1 " >{movie.nft_counter.toString()} <span>NFTs</span> </p>

                                            <div className="movie-card">
                                                <h5 className="ap card-title">{movie.Name}</h5>
                                                <p style={{ fontSize: "12px" }} className="ap   card-description">
                                                    {movie.description.split(" ").slice(0, 10).join(" ")}{" "}
                                                    {movie.description.split(" ").length > 10 && "..."}
                                                </p>
                                                {/* <div>
                                                    <p style={{ fontSize: "14px" }} className="ap">
                                                        {movie.category} ({movie.joner})
                                                    </p>
                                                </div> */}
                                                <div className=' relative  d-flex align-item-center ' >
                                                    <div

                                                        style={{ cursor: "pointer", fontSize: "12px", background: "#1e52ff", padding: "3px 8px", borderRadius: "5px" }}
                                                        className="   "
                                                        onClick={() => handleEditMovie(movie._id)}
                                                    >
                                                        Edit
                                                    </div>
                                                    <div
                                                        onClick={() => handleDeleteMovie(movie._id)}
                                                        style={{ cursor: "pointer", fontSize: "12px", background: "#cc0401", padding: "3px 8px", borderRadius: "5px" }}
                                                        className=" mx-2"

                                                    >
                                                        Delete
                                                    </div>
                                                    <Link to={`/AdminRightsDistribution/${movie._id}/${movie.Name}`}
                                                         
                                                        style={{ textDecoration: "none", color: "white", cursor: "pointer", fontSize: "12px", background: "#009908", padding: "3px 8px", borderRadius: "5px" }}
                                                        className=" "

                                                    >
                                                        Rights
                                                    </Link>
                                                     
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <Pagination
                                totalPosts={filteredMovies.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminMovieList;
