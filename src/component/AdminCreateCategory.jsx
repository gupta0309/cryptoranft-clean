import React, { useEffect, useState } from 'react'
import Header from "./Headerafterlogin";
import Sidebar from "./Sidebar";
import apiService from "../service/serviceUrl";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import { toast } from 'react-toastify';
import SidebarAdmin from './SidebarAdmin';

const AdminCreateCategory = () => {

    const [CategoryData, setCategoryData] = useState({
        category: "",
        icon: ""
    });
    const [list, setList] = useState([]);
    const [isEditing, setisEditing] = useState(false);
    const [editingId, seteditingId] = useState(null);
 


    const handleInputChangeCategory = (e, fieldName) => {
        setCategoryData({ ...CategoryData, [fieldName]: e.target.value });
    };

  

    const getAllCategoryData = async () => {
        try {
            const data = { apiUrl: apiService.getAllCategory };
            const response = await getMethod(data)
            if (response.status && response.data) {
                console.log(response.data, "All Category fetched-=-=-");
                setList(response.data);
            } else {
                console.error("Failed to fetch Category");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const postDeleteCategory = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Category?");
        if (!isConfirmed) return;
        try {
            const data = { apiUrl: apiService.deleteCategory, payload: { _id: id } }
            const response = await postMethod(data)
            console.log("Deleting Category with ID:", id);
            if (response.status && data) {
                toast.success(response.Message, { position: "top-right" });
                console.log(response.Message, " Category Deleted sucess-=-=-");
                await getAllCategoryData();
            } else {
                console.error("Failed to Deleted Category");
                toast.error("Failed to Deleted Category", { position: "top-right" });
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }

    const postCreateCategory = async () => {
        console.log(CategoryData, "Category  created =--=-=-=-=")
        try {
            const data = { apiUrl: apiService.createCategory, payload: CategoryData }
            const response = await postMethod(data)
            if (response.status && data) {
                console.log(response.Message, "created Category sucess-=-=-");
                toast.success(response.Message, { position: "top-right" });
                setCategoryData({ category: "", icon: "" }); // Reset form
                await getAllCategoryData(); // Fetch updated list
            } else {
                console.error("Failed to create Category");
                toast.error("Failed to create Category", { position: "top-right" });
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(" Catched Error ", { position: "top-right" });
        }
    }

    const postUpdateCategory = async () => {
        try {
            const data = { apiUrl: apiService.updateCategory, payload: { ...CategoryData, _id: editingId } }
            const response = await postMethod(data);
            if (response.status) {
                toast.success(response.Message, { position: "top-right" });
                setCategoryData({ category: "", icon: "" }); 
                setisEditing(false);
                seteditingId(null)
                await getAllCategoryData();
            }
            else {
                console.error("Failed to update Category");
                toast.error("Failed to update Category", { position: "top-right" });
            }
        } catch (error) {
            console.log(error , "catched error updation categeory")
            toast.error(" catched Error ", { position: "top-right" });
        }
    }

    const handleEdit = async (id) => {
        const CategoryToEdit = list.find((item) => item._id  === id);
        
        if (CategoryToEdit) {
            setCategoryData({ category: CategoryToEdit.category, icon: CategoryToEdit.icon })
            seteditingId(id);
            setisEditing(true);
        }

    }


    const handleSubmitCategoryData = async (e) => {
        e.preventDefault();
        if (isEditing) {
           await postUpdateCategory();
        }
        else {
            
           await postCreateCategory();
        }   
    }

    useEffect(() => {
        getAllCategoryData();
    }, []);


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

                    {/* style={{ height: "90vh", overflowY: "scroll" }} */}
                    <div >
                        <div className='d-flex flex-md-nowrap flex-wrap justify-content-around' >



                            {/* Category Creation */}
                            <div style={{ maxWidth: "500px", background: "#212125" }} className="container mx-3  py-4 px-3 rounded-lg mt-4">
                                <h3 className="text-center">
                                    {isEditing ? "Edit Category " : "Create Category"}
                                     
                                </h3>
                                <form onSubmit={handleSubmitCategoryData}>

                                    {/* Name */}
                                    <div className="mb-3">

                                        <input
                                            type="text"
                                            className="form-control rounded-lg  mt-5 "
                                            placeholder='Enter Category Name'
                                            value={CategoryData.category}
                                            onChange={(e) => handleInputChangeCategory(e, "category")}
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center py-3 align-content-center ">
                                            <button type="submit" className=" px-5 btn btn-success">
                                               {isEditing?"Update":"Submit"}  
                                            </button>
                                        </div>
                                    </div>

                                </form>


                                <div>
                                    <div className=" mt-5">
                                        <div className=" " style={{ borderRadius: "8px", color: "white" }}>
                                            <h2 className="text-center mb-4">List with Actions</h2>
                                            <ul className="list-unstyled">
                                                {list.map((item, index) => (
                                                    <li
                                                        key={item._id}
                                                        className="list-item d-flex justify-content-between align-items-center mb-3 p-3"
                                                        style={{
                                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                                            borderRadius: "8px",
                                                        }}
                                                    >
                                                        <div>
                                                            <span className="fw-bold me-2 mr-3">{index + 1}.</span>
                                                            {item.category}
                                                        </div>
                                                        <div className='ml-2 d-flex' >
                                                            <button
                                                                className="btn btn-primary btn-sm  ml-2"
                                                                onClick={() => handleEdit(item._id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-danger btn-sm mx-2"
                                                                onClick={() => postDeleteCategory(item._id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCreateCategory