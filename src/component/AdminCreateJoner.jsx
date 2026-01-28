import React, { useEffect, useState } from "react";
import Header from "./Headerafterlogin";
import Sidebar from "./Sidebar";
import apiService from "../service/serviceUrl";
import { postMethod } from "../service/api";
import { getMethod } from "../service/api";
import { toast } from "react-toastify";
import SidebarAdmin from "./SidebarAdmin";

const AdminCreateJonerCatogeory = () => {
  const [JonerData, setJonerData] = useState({
    joner: "",
    icon: "",
  });
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Tracks editing mode
  const [editingId, setEditingId] = useState(null); // Tracks the ID being edited

  const handleInputChangeJoner = (e, fieldName) => {
    setJonerData({ ...JonerData, [fieldName]: e.target.value });
  };

  const postCreateJoner = async () => {
    try {
      const data = { apiUrl: apiService.createJoner, payload: JonerData };
      const response = await postMethod(data);
      if (response.status) {
        toast.success(response.Message, { position: "top-right" });
        setJonerData({ joner: "", icon: "" });
        await getAllJoners();
      } else {
        toast.error("Failed to create Joner", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error occurred while creating Joner", { position: "top-right" });
    }
  };

  const postUpdateJoner = async () => {
    try {
      const data = { apiUrl: apiService.updateJoner, payload: { ...JonerData, _id: editingId } };
      const response = await postMethod(data);
      if (response.status) {
        toast.success(response.Message, { position: "top-right" });
        setJonerData({ joner: "", icon: "" });
        setIsEditing(false);
        setEditingId(null);
        await getAllJoners();
      } else {
        toast.error("Failed to update Joner", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error occurred while updating Joner", { position: "top-right" });
    }
  };



  const postDeleteJoner = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this joner?");
    if (!isConfirmed) return;
    try {
      const data = { apiUrl: apiService.deleteJoner, payload: { _id: id } };
      const response = await postMethod(data);
      if (response.status) {
        toast.success(response.Message, { position: "top-right" });
        await getAllJoners();
      } else {
        toast.error("Failed to delete Joner", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Error occurred while deleting Joner", { position: "top-right" });
    }
  };

  const handleEdit = (id) => {
    const jonerToEdit = list.find((item) => item._id  === id);
    if (jonerToEdit) {
      setJonerData({ joner: jonerToEdit.joner, icon: jonerToEdit.icon });
      setIsEditing(true);
      setEditingId(id);
    }
  };

  const getAllJoners = async () => {
    try {
      const data = { apiUrl: apiService.getAllJoner };
      const response = await getMethod(data);
      if (response.status) {
        setList(response.data);
      } else {
        console.error("Failed to fetch Joner");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitJoner = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await postUpdateJoner();
    } else {
      await postCreateJoner();
    }
  };

  useEffect(() => {
    getAllJoners();
  }, []);

  return (
    <>
      <div id="wrapper" className="d-flex">
        <div className="border-end bg-white collapse navbar-collapse" id="sidebar-wrapper">
          {/* <Sidebar /> */}
          <Sidebar />
          {/* <SidebarAdmin/> */}
        </div>
        <div id="page-content-wrapper">
          <Header />
          <div>
            <div className="d-flex flex-md-nowrap flex-wrap justify-content-around">
              <div
                style={{ maxWidth: "500px", background: "#212125" }}
                className="container-sm mx-3 py-4 px-3 rounded-lg mt-4"
              >
                <h3 className="text-center">
                  {isEditing ? "Edit Joner Form" : "Create Joner Form"}
                </h3>
                <form onSubmit={handleSubmitJoner}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-lg mt-5"
                      placeholder="Enter Joner Name"
                      value={JonerData.joner}
                      onChange={(e) => handleInputChangeJoner(e, "joner")}
                    />
                  </div>
                  <div className="d-flex justify-content-center py-3 align-content-center">
                    <button type="submit" className="px-5 btn btn-success">
                      {isEditing ? "Update" : "Submit"}
                    </button>
                  </div>
                </form>
                <div>
                  <div className="mt-5">
                    <div className="" style={{ borderRadius: "8px", color: "white" }}>
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
                              <span className="fw-bold me-2">{index + 1}.</span>
                              {item.joner}
                            </div>
                            <div className="ml-2 d-flex">
                              <button
                                className="btn btn-primary btn-sm ml-2"
                                onClick={() => handleEdit(item._id)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-danger btn-sm mx-2"
                                onClick={() => postDeleteJoner(item._id)}
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
  );
};

export default AdminCreateJonerCatogeory;
