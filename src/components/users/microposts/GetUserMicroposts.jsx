import React, { useEffect, useState } from "react";
import { getList } from "../../../lib/api/get";
import { useParams } from "react-router-dom";

const GetUserMicroposts = () => {
  const [userMicroposts, setUserMicroposts] = useState([]);

  const params = useParams();

  useEffect(() => {
    handleGetMicroposts(params);
  }, [params]);

  const handleGetMicroposts = async (params) => {
    try {
      const res = await getList(params.userId);
      console.log(res.data);
      setUserMicroposts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Microposts</h1>
      {/* {userMicroposts.map((items, index) => {
        return (
          <div key={index}>
            <li>{items.content}</li>
          </div>
        );
      })} */}
      <ol>
        {userMicroposts.map(mp => <li key={mp.id}>{mp.id}</li>)}
      </ol>
    </div>
  );
};
export default GetUserMicroposts;
