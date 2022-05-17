import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseridFrom = () => {
  // ユーザーID
  const [useridValue, setUseridValue] = useState("");
  // ページ数
  const [pageNumberValue, setPageNumberValue] = useState("");
  // マイクロポスト表示数
  const [postValue, setPostValue] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    // ユーザーIDが入力されていて、空欄でない場合
    if (useridValue && useridValue.match(/\S/g)) {
      // ページ数と表示個数が空欄だった場合
      if (pageNumberValue === "" && postValue === "") {
        navigate(`/users/${useridValue}/microposts/page/1/per_page/30`);
        // ページ数のみ空欄だった場合
      } else if (pageNumberValue === "") {
        navigate(
          `/users/${useridValue}/microposts/page/1/per_page/${postValue}`
        );
        // 表示個数のみ空欄だった場合
      } else if (postValue === "") {
        navigate(
          `/users/${useridValue}/microposts/page/${pageNumberValue}/per_page/30`
        );
        // どちらも入力があった場合
      } else {
        navigate(
          `/users/${useridValue}/microposts/page/${pageNumberValue}/per_page/${postValue}`
        );
      }
    }
  };

  const pressEnter = (e) => {
    // Enterキーを押す&ユーザーIDが入力されていて、空欄でない場合
    if (
      e.key === "Enter" &&
      (useridValue && useridValue.match(/\S/g))
    ) {
      // ページ数と表示個数が空欄だった場合
      if (pageNumberValue === "" && postValue === "") {
        navigate(`/users/${useridValue}/microposts/page/1/per_page/30`);
        // ページ数のみ空欄だった場合
      } else if (pageNumberValue === "") {
        navigate(
          `/users/${useridValue}/microposts/page/1/per_page/${postValue}`
        );
        // 表示個数のみ空欄だった場合
      } else if (postValue === "") {
        navigate(
          `/users/${useridValue}/microposts/page/${pageNumberValue}/per_page/30`
        );
        // どちらも入力があった場合
      } else {
        navigate(
          `/users/${useridValue}/microposts/page/${pageNumberValue}/per_page/${postValue}`
        );
      }
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
          value={postValue}
          placeholder="per_pageを入力(半角数値)"
          onKeyPress={pressEnter}
          onChange={(event) => setPostValue(event.target.value)}
        />
      </label>

      <button onClick={handleClick}>送信</button>
    </div>
  );
};

export default UseridFrom;
