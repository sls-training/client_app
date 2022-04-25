import React, { useEffect, useState } from "react";
import { getList } from "../lib/api/get";
import { useParams } from "react-router-dom";

const List = (props) => {
  const [data, setData] = useState([]);

  const query = useParams();

  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getList(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Microposts</h1>
    </div>
  );
};
export default List;
