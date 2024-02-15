import { useEffect } from "react";
import "./loader.scss";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

function LoaderInTo404() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/NotFound");
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function Loader({ extraClass }) {
  return (
    <div className={`lds-ellipsis variation ${extraClass}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
Loader.propTypes = {
  extraClass: propTypes.string,
};
export { LoaderInTo404, Loader };
