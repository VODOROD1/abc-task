import React from "react";
import styles from './ListRequests.module.scss';

function ListRequests({ requestNumber, date, clientName }) {
  return (
    <div className={styles.wrapper}>
      <table>
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