import React, { useEffect, useState } from "react";
import { getList } from "../../lib/api/get";
import { useParams } from "react-router-dom";

const GetUserMicroposts = () => {
  const params = useParams();
  const [userMicroposts, setUserMicroposts] = useState([]);

  const hundleGetMicroposts = async (params) => {
    try {
      const { data } = await getList(params.userId);
      console.log(data);
      setUserMicroposts(data.microposts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchMicroposts = async () => {
      await hundleGetMicroposts(params);
    };
    fetchMicroposts();
  }, [params]);

  return (
    <div>
      <h1>Microposts</h1>
      <ol>
        {userMicroposts.map((mp) => (
          <li key={mp.id}>{mp.content}</li>
        ))}
      </ol>
    </div>
  );
};
export default GetUserMicroposts;
