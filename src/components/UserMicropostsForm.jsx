import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserMicropostsForm = () => {
  // ユーザーID
  const [useridValue, setUseridValue] = useState("");
  // ページ数
  const [pageNumberValue, setPageNumberValue] = useState("");
  // マイクロポスト表示数
  const [micropostsValue, setmicropostsValue] = useState("");

  const navigate = useNavigate();

  // 値が送信された時のURLの分岐
  const NavigateUrl = (userid, pageNumber, micropostsNumber) => {
    // ページが入力されていなかったら「1」、入力されていたらその値を入れる
    pageNumber = pageNumber === "" ? "1" : pageNumber;
    // 表示マイクロポスト数が入力されていなかったら「30」、入力されていたらその値を入れる
    micropostsNumber = micropostsNumber === "" ? "30" : micropostsNumber;

    return navigate(
      `/users/${userid}/microposts/page/${pageNumber}/per_page/${micropostsNumber}`
    );
  };

  const handleClick = () => {
    // ユーザーIDが入力されていて、空欄でない場合
    if (useridValue && useridValue.match(/\S/g)) {
      NavigateUrl(useridValue, pageNumberValue, micropostsValue);
    }
  };

  const pressEnter = (e) => {
    // Enterキーを押す&ユーザーIDが入力されていて、空欄でない場合
    if (e.key === "Enter" && useridValue && useridValue.match(/\S/g)) {
      NavigateUrl(useridValue, pageNumberValue, micropostsValue);
    }
  };

  return (
    <div>
      <label>
        ユーザーIDを入力
        <input
          type="text"
          value={useridValue}
          placeholder="userIDを入力(半角数値)"
          onKeyPress={pressEnter}
          onChange={(event) => setUseridValue(event.target.value)}
        />
      </label>

      <label>
        ページ数を入力
        <input
          type="text"
          value={pageNumberValue}
          placeholder="pageを入力(半角数値)"
          onKeyPress={pressEnter}
          onChange={(event) => setPageNumberValue(event.target.value)}
        />
      </label>

      <label>
        表示する個数を入力
        <input
          type="text"
          value={micropostsValue}
          placeholder="per_pageを入力(半角数値)"
          onKeyPress={pressEnter}
          onChange={(event) => setmicropostsValue(event.target.value)}
        />
      </label>

      <button onClick={handleClick}>送信</button>
    </div>
  );
};

export default UserMicropostsForm;
