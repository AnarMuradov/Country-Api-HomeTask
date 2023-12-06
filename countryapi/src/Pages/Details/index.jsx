import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
const Details = () => {
  const { name } = useParams();
  const [detapi, setDetapi] = useState([]);

  function getapi() {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setDetapi(data);
      });
  }
  useEffect(() => {
    getapi();
  }, []);

  return (
    <div className="detailPage">
      <div className="pageContent">
        <div className="back">
          <Link to={"/"}>Back</Link>
        </div>
        {detapi.map((x) => {
          return (
            <>
              <div className="box">
                <div className="countryImg">
                  <img src={x.flags.png} alt="" />
                </div>
                <div>
                  <h2 className="common">{x.name.common}</h2>
                  <div className="countryInfo">
                    <b>
                      Native Name: <span>{x.name.common}</span>
                    </b>

                    <b>
                      Region:<span>{x.region}</span>
                    </b>

                    <b>
                      Population:<span>{x.population}</span>
                    </b>

                    <b>
                      Sub Region: <span>{x.subregion}</span>
                    </b>

                    <b>
                      Capital: <span>{x.capital}</span>
                    </b>

                    <b>
                      Top Level Domain: <span>{x.tld}</span>
                    </b>

                    <b>
                      Currency:{" "}
                      <span>
                        {x.currencies[Object.keys(x.currencies)[0]].name}
                      </span>
                    </b>

                    <b>
                      Languages: <span>{x.currencies?.languages}</span>
                    </b>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
