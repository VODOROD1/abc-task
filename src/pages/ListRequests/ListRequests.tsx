import React from "react";
import styles from './ListRequests.module.scss';
import { useNavigate } from "react-router-dom";

// @ts-ignore
function ListRequests({ requestNumber, date, clientName, editRequest }) {
  let navigate = useNavigate();

  const onEditRequest = (requestNumber: number) => {
    debugger;
    editRequest(requestNumber);
    navigate("/request-form");
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table} onClick={() => onEditRequest(requestNumber)}>
        <thead>
          <tr>
            <th>Номер заявки</th>
            <th>Дата и время создания/изменения статуса</th>
            <th>Имя клиента</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{requestNumber}</td>
            <td>{date}</td>
            <td>{clientName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListRequests;