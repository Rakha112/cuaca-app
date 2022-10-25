import React from "react";
import "../css/components/search.css";
import { IconButton } from "@mui/material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
const Search = ({ onSubmit, setLokasi, lokasi }) => {
  return (
    <div className="search">
      <form action="" onSubmit={onSubmit}>
        <IconButton type="submit" onClick={onSubmit}>
          <LocationSearchingIcon />
        </IconButton>
        <input
          type="text"
          placeholder="Cari Kota..."
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
