import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

import { logIn } from "../../lib/api/users/auth-api";

const LoginPage = () => {
  // メールアドレス
  const [emailValue, setEmailValue] = useState("");
  // パスワード
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const params = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const res = await logIn(params);
      // Cookieに保存
      Cookies.set("access_token", res.data.success.auth);
      Cookies.set("expiration_at", res.data.success.expirationAt);
      // ローカルストレージに保存
      localStorage.setItem('Flag', true);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {
        !localStorage.getItem("Flag") ?
          <div>
            <h1>Login</h1>
            <label>
              メールアドレスを入力
              <input
                type="email"
                value={emailValue}
                placeholder="emailを入力"
                onKeyPress={handleClick}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </label>

            <label>
              パスワードを入力
              <input
                type="password"
                value={passwordValue}
                placeholder="passwordを入力"
                onKeyPress={handleClick}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </label>

            <button onClick={handleClick}>送信</button>
          </div>

          : <Navigate to="/" />
      }
    </>
  );
};

export default LoginPage;
