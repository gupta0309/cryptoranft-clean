import React, { useEffect, useState } from 'react'
import Header from "./Headerafterlogin";
import Sidebar from "./Sidebar";
import apiService from "../service/serviceUrl";
import { getMethod, postMethod } from "../service/api";
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import copy from "../image/copy.png"
import RevenueHead from './RevenueHead';
import "react-dropdown/style.css";
import "react-datetime/css/react-datetime.css";
import "react-phone-number-input/style.css";
import SidebarAdmin from './SidebarAdmin';
import { useParams } from 'react-router-dom';



const AdminRightsDistribution = () => {
  const { movieId, movieName } = useParams()

  const [movieRights, setMovieRights] = useState({
    movies_id: movieId,
    rights: [
      {
        category:"",
        total: 0,
        sub_rights: [{ subcategories:"", total: null }]
      }
    ]
  });

  useEffect(() => {
    getAllRightsdata();
     
  }, []);


  const handleInputChange=(e, index, subindex = null) => {
    const { name, value } = e.target
    setMovieRights((prev) => {
      const updatedRights = [...prev.rights];
      if (subindex != null) {
        updatedRights[index].sub_rights[subindex][name] = value;
        // Recalculate total
        updatedRights[index].total = updatedRights[index].sub_rights.reduce(
          (sum, sub) => sum + Number(sub.total) || 0,
          0
        );
      }
      else {
        updatedRights[index][name] = value;
      }
      return { ...prev, rights: updatedRights};
    })
  }

  const getAllRightsdata = async () => {
    try {
      const data = { apiUrl: apiService.getAllRights(movieId) };
      const response = await getMethod(data);
      console.log(response.data, "get all data rights")
      if (response.status && response.data.length > 0) {
        setMovieRights(prev => ({
          ...prev,
          rights: Array.isArray(response.data[0].rights) ? response.data[0].rights : [] // Ensure it's an array
        }));
      } else {
        console.log("No rights data found, using default state.");
        setMovieRights(prev => ({
          ...prev,
          rights: [
            {
              category: "",
              total: 0,
              sub_rights: [{ subcategories: "", total: null }]
            }
          ] // Set to an empty array to prevent map() errors
        }));
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Catched Error", { position: "top-right" })
    }
  }

  const PostCreateRights = async () => {
    console.log(movieRights);
    try {
      const data = { apiUrl: apiService.createRightsData, payload: movieRights };
      const response = await postMethod(data);
      console.log(response, "create res");
      if (response.status && data) {
        toast.success(response.Message, { position: "top-right" });
        console.log(response.Message, "rights data created  -=-=-");
      } else {
        console.error("Failed to create right ");
        toast.error("Failed to create right", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Catched Error", { position: "top-right" })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(movieRights, " rights data ")
    PostCreateRights();
    
  }


  const addRights = () => {
    setMovieRights((prev) => ({
      ...prev,
      rights: [...prev.rights,
      {
        category: "",
        total: 0,
        sub_rights: [{ subcategories: "", total: null }]
      }
      ]
    }))

  }

  const removeRight = (index) => {
    setMovieRights((prev) => {
      const updatedRights = prev.rights.filter((_, i) => i  != index)
      return { ...prev, rights: updatedRights }


    })

  }

  const addSubRight = (index) => {
    const newField = { subcategories: "", total: null };

    setMovieRights((prev) => ({
      ...prev,
      rights: prev.rights.map((right, i) =>
        i == index
          ? { ...right, sub_rights: [...right.sub_rights, newField] }
          : right
      ),
    }));
  };

  const removeSubRight = (index, subIndex) => {
    setMovieRights((prev) => {
      const updatedRights = [...prev.rights];
      updatedRights[index].sub_rights = updatedRights[index].sub_rights.filter((_, i) => i  != subIndex);
      return { ...prev, rights: updatedRights };
    });
  }



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
            <div className="py-5">
              <h4 className=' text-center' >Rights Distribution</h4>

            </div>

            <div className="d-flex  justify-content-center ">

              <form className='w-100 px-md-3 px-1' onSubmit={handleSubmit} >

                <p style={{ fontSize: "18x" }} >
                  Movie ID:
                  <span style={{ color: "#d4d4d4", fontSize: "14px" }} > {movieId}</span>
                </p>
                <p style={{ fontSize: "18x" }}>
                  Movie Name:
                  <span style={{ color: "#d4d4d4"  }} > {movieName}</span>
                  
                </p>


                {/* rights  */}
                {
                  movieRights.rights.map((right, index) =>
                  (
                    <div style={{
                      position: "relative"
                    }} >

                      <div key={index}
                        className=' w-100  py-2 mt-5 px-0' style={{ position: "relative", backgroundColor: "var(--background-color-gray)", border: "2px solid #323232", borderTop: "2px solid red", borderRadius: "7px" }}
                      >


                        <div className="d-flex flex-wrap ">
                          <div className=" col-12 mb-3 mt-3  ">
                            <label className="form-label">Main Ctegory </label>
                            <input
                              type="text"
                              name="category"
                              // required
                              className="form-control rounded-lg "
                              placeholder="Enter Sub Category name"
                              value={right.category}
                              onChange={(e)=> handleInputChange(e, index)}
                            />
                            <p className='mt-2'>Total Fund Collected : $ {right.total}</p>
                          </div>


                          {/* subrights */}
                          {
                            right.sub_rights.map((sub, subIndex) => (

                              <div key={subIndex} className=" w-100 d-flex flex-wrap">

                                <div className=" col-6 mb-3 mt-3  ">
                                  <label className="form-label">Sub Category </label>
                                  <span type="button  " style={{ fontSize: "12px", }} className="btn p-1 btn-danger ml-3 " onClick={() => removeSubRight(index, subIndex)}  ><i class="bi bi-trash"></i></span>
                                  <input
                                    type="text"
                                    name='subcategories'
                                    className="form-control rounded-lg "
                                    placeholder="Enter Sub Category name"
                                    value={sub.subcategories}
                                    onChange={(e)=>handleInputChange(e,index,subIndex)}

                                  />
                                </div>
                                <div className=" col-6 mb-3 mt-3  ">
                                  <label className="form-label">Amount</label>
                                  <input
                                    type="text"
                                    name='total'
                                    className="form-control rounded-lg "
                                    placeholder="Enter Sub Category Amount"
                                    value={sub.total}
                                    onChange={(e)=> handleInputChange(e,index,subIndex)}

                                  />
                                </div>


                              </div>
                            ))
                          }

                          <button type="button" className="btn btn-sm btn-primary mt-4 ml-3 " onClick={() => addSubRight(index)}  >Add Sub-Right</button>

                        </div>

                      </div>
                      <button type="button" className="btn btn-sm btn-danger mb-5 ml-3 "
                        onClick={() => removeRight(index)}
                        style={{ position: "absolute", top: 0, right: 0 }}
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  ))
                }

                <div className="d-flex justify-content-end  align-content-center py-2">

                  <button type="button" onClick={addRights} className='btn btn-sm btn-primary  '  >Add Right</button>
                </div>

                <div className="d-flex justify-content-center py-3 align-content-center">
                  <button type="submit"  className="px-5 btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>


          </div>


        </div>
      </div>

    </>
  )
}

export default AdminRightsDistribution