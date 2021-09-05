import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import getAPIUrl from "../util/getAPIUrl";
const Results = () => {
  const { state } = useParams();
  const [start, setStart] = useState("2021-03-04");
  const [end, setEnd] = useState("2021-03-04");

  const handelChange = (e, set) => {
    set(e.target.value);
  };
  const url = getAPIUrl(state, start, end);
  const { isLoading, badRequest, hasError, data } = useFetch(url);
  console.log(data);
  return (
    <div className='title'>
      
      <input className ="input" type="date" value={start} onChange={(e) => handelChange(e, setStart)}></input>
      <input  className ="input" type="date" value={end} onChange={(e) => handelChange(e, setEnd)}></input>
      {isLoading &&!hasError&& <p>Loading ...</p>}
      {badRequest && !hasError&&<p>Bad Request ...</p>}
      {hasError && !isLoading&& <p>Ops something went wrong ...</p>}
      {!hasError && !isLoading && data && (
        <h1 className={state === "recovered" ? "green" : "orange"}>{data}</h1>
      )}
    </div>
  );
};

export default Results;
