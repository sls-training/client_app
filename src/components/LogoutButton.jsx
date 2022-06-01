import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const LogoutButton = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Cookie削除
    Cookies.remove("access_token");
    Cookies.remove("expiration_at");
    Cookies.remove("login_flag");
    navigate("/login");
  };

  return (
    <button onClick={handleClick}>ログアウト</button>
  )
}

export default LogoutButton;
