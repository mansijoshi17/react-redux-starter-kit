import React, { useState } from "react";
import axios from "axios";
import Suggestion from "./Suggetion";
import Button from "./NewArrivalButton";

const API_KEY = "AIzaSyBpTzkAm_FVgKLVGST2aYgjKP2LSu3B8Yk";
const BASE_URL = "http://studentdesk.in/api/v1/text-search"; //Defined Api key  and Base url for Api call.

function Home(props) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const getInfo = async (queryVal) => {
    await axios
      .get(`${BASE_URL}?api_key=${API_KEY}?apiname=textSearch&text=${queryVal}`)
      .then(({ data }) => {
        setResult(data.data); //set state result as response data and in data there is one object data which contain all names of book.
      });
  };

  function handlesubmit(event) {
    setQuery(event.target.value);
    getInfo(event.target.value); //Call getinfo  function for call api and get data from it when user something type on search box.
  }

  return (
    <div class="banner-bx">
      <div className="text-center">
        <h1>I want to Buy/Sell/Exchange used Book in my</h1>
        <div class="btn-box">
          <a
            class="btn button cit-search-bt"
            data-toggle="modal"
            ng-click="cityModelOpen('small')"
          >
            <i class="fa fa-building city"></i>City
          </a>
          <a
            href="#"
            class="btn button cit-search-bt"
            ng-click="collegeModelOpen('small')"
          >
            <i class="fa fa-university"></i>Institute
          </a>
        </div>
        <h5>
          Books in popular cities:{" "}
          <a
            class="popularcity"
            href="http://studentdesk.in/city/delhi/141/#?city_id=141"
          >
            Delhi,
          </a>
          <a
            class="popularcity"
            href="http://studentdesk.in/city/pune/538/#?city_id=538"
          >
            Pune,
          </a>
          <a
            class="popularcity"
            href="http://studentdesk.in/city/bangalore/522/#?city_id=522"
          >
            Bangalore,
          </a>
          <a
            class="popularcity"
            href="http://studentdesk.in/city/ahmedabad/145/#?city_id=145"
          >
            Ahmedabad
          </a>
        </h5>
        <span>- OR -</span>
        <div className="form-container">
          <div className="search-box">
            <form className="search" onSubmit={(e) => handlesubmit(e)}>
              <input
                type="text"
                class="searchTerm"
                placeholder="Search by author, book name"
  
                onChange={(e) => handlesubmit(e)}
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </form>
            {query ? ( //If input text has value or state has value than suggestion commponent is render otherwise return null.
              <Suggestion result={result} />
            ) : null}

            <div className="search-text">
              <span>
                <a
                  href="http://studentdesk.in/books#?item_type=1"
                  class="searchletter"
                >
                  Books{" "}
                </a>{" "}
                |
                <a
                  href="http://studentdesk.in/textbook-note-study-material#?item_type=3"
                  class="searchletter"
                >
                  Textbook / Study notes
                </a>{" "}
                |
                <a
                  href="http://studentdesk.in/magazines#?item_type=2"
                  class="searchletter"
                >
                  Magazines
                </a>{" "}
                |
                <a
                  href="http://studentdesk.in/book-set#?item_type=4"
                  class="searchletter"
                >
                  Book set
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="google-img">
          <img
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            alt="google"
            className="google-img"
          ></img>
        </div>
        <div
          className="Arival"
          style={{
            justifyContent: "center",
            display: "flex",
            cursor: "pointer",
            marginTop: "5px",
          }}
        >
          <Button />
        </div>
        {/* Button for new Arrivals */}
      </div>
    </div>
  );
}

export default Home;
