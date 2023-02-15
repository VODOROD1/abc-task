import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = (props: any) => {
    let navigate = useNavigate();

    const goToForm = () => {
        navigate("/request-form");
    }

  return (
    <div>
      <h3>{props.managerName}</h3>
      <p>
        <button className={styles.addButton} onClick={goToForm}>
          Добавить новую заявку
        </button>
      </p>
    </div>
  );
};

export default Header;
