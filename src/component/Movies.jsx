import React, { useEffect, useState } from "react";
import Header from './Headerafterlogin';
import Sidebar from './Sidebar';
import Innernenu from './Innernenu';
import "../styles/Movies.css";
import Pagination from "../myComp/Pagination";

import apiService from "../service/serviceUrl";
import { getMethod } from "../service/api";

const Movies = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
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
                                    placeholder="Search by name, description, category, or genre..."
                                    className="form-control"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                                />
                            </div>

                            {/* Movie Cards */}
                            <div className="row">
                                {currentPosts.map((movie) => (
                                    <a
                                        target="blank"
                                        href={`https://cinestarnft.io/movie/${movie._id}`}
                                        key={movie.id}
                                        className="custom-a-tag col-md-6 mb-4"
                                    >
                                        <div style={{ position: "relative" }} className="movie-card-contain">
                                            <div className="movieimg-container">
                                                <img src={movie.image} alt="" />
                                            </div>
                                            <p style={{ backdropFilter: "blur", borderRadius: "0px 0px 10px 0px", background: "#1e1e1e9f", position: "absolute", fontSize: "12px", top: "0%", left: "0%" }}
                                                className="left-0      p-1 " >{movie.nft_counter.toString()} <span>NFTs</span> </p>
                                            
                                            <div className="movie-card">
                                                <h4 className="ap card-title">{movie.Name}</h4>
                                                <p className="ap card-description">
                                                    {movie.description.split(" ").slice(0, 10).join(" ")}{" "}
                                                    {movie.description.split(" ").length > 15 && "..."}
                                                </p>
                                                <div>
                                                    <p className="ap">
                                                        {movie.category} ({movie.joner})
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
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

export default Movies;
