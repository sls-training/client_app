import React, { useEffect, useState } from "react";
import { getList } from "../../lib/api/users/microposts/get-user-microposts";
import { useParams, Navigate } from "react-router-dom";

const VuewUserMicropostsPage = () => {
  const params = useParams();
  // 有効なユーザーIDの場合のuseState
  const [userMicroposts, setUserMicroposts] = useState([]);
  // 無効なユーザーIDの場合のuseState
  const [userMicropostsError, setUserMicropostsError] = useState({});
  // 有効/無効で画面を切り替える際のフラグ
  const [isValid, setIsValid] = useState(false);

  const handleGetMicroposts = async (params) => {

  let { data } = "";
  // userIdが入力されたかどうか
  if (params.userId && params.userId.match(/\S/g)) {
      try {
        // api呼び出し
        ({ data } = await getList(
          params.userId,
          params.pageNumber,
          params.perPage
        ));

        // data.micropostsが存在したら
        if (data.microposts) {
          setUserMicroposts(data.microposts);
          setIsValid(true);
        } else {
          setUserMicropostsError(data.error);
          console.log("ユーザーが存在しません");
        }
      } catch (e) {
        console.log(e.message);
      }
    // userIdが未入力ならエラー
  } else {
    setIsValid();
    console.log("ユーザーIDが未入力です");
  }
};

  useEffect(() => {
    const fetchMicroposts = async () => {
      await handleGetMicroposts(params);
    };
    fetchMicroposts();
  }, [params]);

  // 有効な場合の表示
  const ViewUserMicroposts = () => {
    return (
      <div>
        <h1>Microposts</h1>
        {userMicroposts.map((mp) => (
          <ul key={mp.id}>
            <li>
              {mp.id}:{mp.content}
            </li>
          </ul>
        ))}
        {/* 表示されるマイクロポストが空かどうかで切り替え */}
        {userMicroposts.length === 0 && params.pageNumber !== "1"
          ? "このページには表示するマイクロポストがありません"
          : userMicroposts.length === 0 && params.pageNumber === "1"
          ? "マイクロポストが投稿されていません"
          : ""}
      </div>
    );
  };

  // 無効な場合の表示
  const MicropostsErrorPage = () => {
    return (
      <div>
        <h1>Error</h1>
        <ul>
          <li>
            {userMicropostsError.status + ":" + userMicropostsError.message}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      {/* フラグによって画面切り替え */}
      {isValid === true ? (
        <ViewUserMicroposts />
      ) : isValid === false ? (
        <MicropostsErrorPage />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};
export default VuewUserMicropostsPage;
