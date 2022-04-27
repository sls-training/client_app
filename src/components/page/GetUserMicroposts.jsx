import React, { useEffect, useState } from "react";
import { getList } from "../../lib/api/users/microposts/get-user-microposts";
import { useParams } from "react-router-dom";

// import ValidUserId from "../microposts/ValidUserId";
// import InvalidUserId from "../microposts/InvalidUserId";

const GetUserMicroposts = () => {
  const params = useParams();
  // 有効なユーザーIDの場合のuseState
  const [userMicroposts, setUserMicroposts] = useState([]);
  // 無効なユーザーIDの場合のuseState
  const [userError, setUserError] = useState([]);
  // 有効/無効で画面を切り替える際のフラグ
  const [isValid, setIsValid] = useState();

  const hundleGetMicroposts = async (params) => {
    try {
      const { data } = await getList(params.userId);
      console.log(data);
      if (isNaN(params.userId) || params.userId >= 101) { // ユーザーIDの型が数値以外か101以上だったらエラー
        setIsValid(false);
        setUserError(data.error);
      } else {
        setIsValid(true);
        setUserMicroposts(data.microposts);
      }
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

  // 有効な場合の表示
  const ValidUserId = () => {
    return userMicroposts.map((mp) => (
      <li key={mp.id}>
        {mp.id}:{mp.content}
      </li>
    ));
  };

  // 無効な場合の表示
  const InvalidUserId = () => {
    return (
      <ol>
        {userError.status}:
        {userError.message}
      </ol>
    );
  };

  return (
    <div>
      <h1>Microposts</h1>
      {/* フラグによって画面切り替え */}
      {isValid === true ?  <ValidUserId /> : <InvalidUserId />}
    </div>
  );
};
export default GetUserMicroposts;
