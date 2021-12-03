import React from "react";
import s from "./Filter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { filterContact } from "../../redux/actions";

function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.filterInputLabel}>Find contacts by name</label>
      <br />
      <input
        className={s.filteredInput}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(filterContact(e.target.value))}
        placeholder="Contact"
      />
    </>
  );
}

export default Filter;
