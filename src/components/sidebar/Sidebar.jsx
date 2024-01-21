import style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import logoYoga from "./../../assets/yoga-icon.svg";
import logoSwim from "./../../assets/swim-icon.svg";
import logoBike from "./../../assets/biking-icon.svg";
import logoWorkOut from "./../../assets/workout-icon.svg";

function Sidebar() {
  return (
    <aside className="">
      <nav className="second-navbar">
        <ul>
          <li>
            <Link to="#" className={style.link}>
              <img src={logoYoga} alt="logo yoga" />
            </Link>
          </li>
          <li>
            <Link to="#" className={style.link}>
              <img src={logoSwim} alt="logo nage " />
            </Link>
          </li>
          <li>
            <Link to="#" className={style.link}>
              <img src={logoBike} alt="logo vélo " />
            </Link>
          </li>
          <li>
            <Link to="#" className={style.link}>
              <img src={logoWorkOut} alt="logo altère" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
