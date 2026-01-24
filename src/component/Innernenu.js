import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { getMethod } from "../service/api";
import apiService from "../service/serviceUrl";
import { Link } from "react-router-dom";
import art from "../image/newimg/art.png"
import vedio from "../image/newimg/vedio.png"
import music from "../image/newimg/music.png"
import contet from "../image/newimg/contet.png"

function  Innernenu() {
  const [nftcollection, Setnftcollection] = useState([]);

  useEffect(() => {
    nftcatagories();
  }, []);

  const nftcatagories = async () => {
    try {
      var data = {
        apiUrl: apiService.nftCategories,
      };
      var resp = await getMethod(data);
      Setnftcollection(resp.data);
      console.log("=-=-=-=-=", resp.data);

      console.log("=-=-=-=-=", resp);
    } catch (error) {}
  };

  return (
    <>
      <ul class="nav nav-tabs explore-option">
        {/* <li class="active">
          <Button data-toggle="modal" data-target="#addNew">
           View More
          </Button>
        </li> */}
        {nftcollection &&
          nftcollection.map((item, i) => {
            return (
              <>
                <li class="active">
                  <a href={"/explore?category="+item.categories} class="active">
                    {item.categories == "Art" ? (
                      
                      <img
                        src={art}
                        alt=""
                      className=""
                    />
                    ):
                    item.categories == "Fashion" ? (
                      <img
                          src={vedio}
                          alt=""
                      className=""
                    />
                    ) : 
                    item.categories == "Dance" || item.categories == "Architecture" ? (
                      <img
                            src={music}
                            alt=""
                        className=""
                      />
                    ) : (
                      <img
                              src={contet}
                              alt=""
                      className=""
                    />
                    )
                    }
                    {/* <img
                      src={item.icon}
                      className=""
                      width = "20"
                      height = "20"
                    /> */}
                    {item.categories}
                  </a>
                </li>
                {/* <li>
                  <a data-toggle="tab" href="#Gaming">
                    <img
                      src={require("../image/newimg/game.png").default}
                      className=""
                    />
                    {item.categories}
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#Software">
                    <img
                      src={require("../image/newimg/soft.png").default}
                      className=""
                    />
                    {item.categories}
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#Software">
                    <img
                      src={require("../image/newimg/vedio.png").default}
                      className=""
                    />
                    {item.categories}
                  </a>
                </li> */}
                {/* <li>
          <a data-toggle="tab" href="#Software">
            <img
              src={require("../image/newimg/contet.png").default}
              className=""
            />
            Content
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#Software">
            <img
              src={require("../image/newimg/music.png").default}
              className=""
            />
            {/* Music */}
                {/* </a>
        </li> */}
              </>
            );
          })}
      </ul>
    </>
  );
}

export default Innernenu;
