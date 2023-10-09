import { useNavigate } from "react-router-dom";

export const useAuthorization = (allowedRoles) => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");

  if (!userRole || !allowedRoles.includes(parseInt(userRole))) {
    navigate("/");
  }
};
