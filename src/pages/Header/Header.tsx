import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = (props: any) => {
  let navigate = useNavigate();

  const goToForm = () => {
    navigate("/request-form");
  };

  return (
    <div>
      <h3>{props.managerName}</h3>
      <p>
        <button className={styles.addButton} onClick={goToForm}>
          Добавить новую заявку
        </button>
      </p>
      <div>
        <table className={styles.statusesTable}>
          <thead>
            <tr>
              <th>новая</th>
              <th>в обработке</th>
              <th>в работе</th>
              <th>закрыто</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.amountOfStatuses.new}</td>
              <td>{props.amountOfStatuses.inDevelop}</td>
              <td>{props.amountOfStatuses.inWorking}</td>
              <td>{props.amountOfStatuses.closed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Header;
