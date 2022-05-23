import { Link } from "react-router-dom";
import HeadingSvg from "../assets/svg/HeadingSvg";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4">
        <div className="card-body">
          <div className="mb-5">
            <HeadingSvg size="70" fill="#0d6efd" />
            <p className="mt-4 lead"> John Doe </p>
          </div>
          <div>
            <Link to="/form">
              <button className="btn btn-primary btn-lg">Create new app</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="application-items mt-5">
        <h2>Saved App Items </h2>
        <ul className="list-group">
          <li className="list-group-item p-3 my-1">Commerce tools snipets</li>
          <li className="list-group-item p-3 my-1">Sales force translations</li>
          <li className="list-group-item p-3 my-1">Magento descriptions</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
