import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import "./style.css";
const Home = () => {
  const [api, setApi] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  function getapi() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
      });
  }
  useEffect(() => {
    getapi();
  }, []);

  return (
    <div className="home">
      <div className="filter">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country…"
        />
        <select value={region}
        onChange={e => setRegion(e.target.value)}>
          <option value="" selected disabled hidden>
            Filter by Region
          </option>
          <option value="" >
            All
          </option>
          <option onChange={() => setRegion("Africa")}>Africa</option>
          <option onChange={() => setRegion("America")}>America</option>
          <option onChange={() => setRegion("Asia")}>Asia</option>
          <option onChange={() => setRegion("Europe")}>Europe</option>
          <option onChange={() => setRegion("Oceania")}>Oceania</option>
        </select>
      </div>
      <div className="coutrycont">
        {api
          .filter(
            (x) =>
              x.name.common.toLowerCase().includes(search.toLowerCase()) &&
              x.region.toLowerCase().includes(region.toLowerCase())
          )
          .map((x) => {
            if (x.name.common === "Israel") {
              return (
                <div className="plstn">
                  <img
                    src="https://www.jewishvoiceforpeace.org/wp-content/uploads/2023/10/free-palestine-e1698086048530.jpeg"
                    alt=""
                  />
                </div>
              );
            } else {
              return (
                <div className="country">
           
                  <Link to={`/Details/${x.name.common}` }><img src={x.flags.png} alt="" /></Link>
                  <div className="info">
                    <h2>{x.name.common}</h2>
                    <div className="countryinfo">
                      <strong>Capital:</strong> <span>{x.capital}</span>
                      <br />
                      <strong>Region:</strong> <span>{x.region}</span>
                      <br />
                      <strong>Population:</strong> <span>{x.population}</span>
                      <br />
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Home;
