import Button from "@mui/material/Button";
import { format } from "timeago.js";
import "./widgetLg.css";

export default function WidgetLg(props) {
  const { users } = props;
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(order => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser" key={order._id}>
                <span className="widgetLgName">{order.name}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">${20}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
