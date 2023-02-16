import React from "react";
import styles from './ListRequests.module.scss';
import { useNavigate } from "react-router-dom";
// @ts-ignore
import ChangeStatus from "./ChangeStatusForm.tsx";

// @ts-ignore
function ListRequests({ requestNumber, date, clientName, editRequest, status, changeStatus }) {
  let navigate = useNavigate();

  const onEditRequest = (e: any) => {
    if(e.target.getAttribute("class") === "statusList") {
      return false;
    }
    editRequest(requestNumber);
    navigate("/request-form");
  }

  const onChangeStatus = (newStatus: string) => {
    changeStatus({
      requestNumber: requestNumber,
      requestStatus: newStatus
    });
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table} onClick={onEditRequest}>
        <thead>
          <tr>
            <th>Номер заявки</th>
            <th>Статус</th>
            <th>Дата и время создания/изменения статуса</th>
            <th>Имя клиента</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{requestNumber}</td>
            {/* @ts-ignore */}
            <td><ChangeStatus status={status} onChangeStatus={onChangeStatus}/></td>
            <td>{date}</td>
            <td>{clientName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(ListRequests);