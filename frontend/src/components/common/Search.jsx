import React, {useState} from 'react'
import Imgsearch from "../../assets/img/searchicon.png"
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
    const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/places?search=" + search));
  };

    return (
        <form onSubmit={submitAction}
            className="searchbox">
        <input name="search" type="inputbox" onChange={inputSearch} placeholder="Search for best places to Visit in Ethiopia" />
        <img className="searchicon" src={Imgsearch} alt="" />
     </form>
    )
}

export default Search
