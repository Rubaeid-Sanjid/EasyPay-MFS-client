import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../Component/Hooks/useAuth";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOutUser } = useAuth();
const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-out successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex justify-between">
            {/* Sidebar content here */}
            <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-3">EasyPay</h2>
                <h3 className="text-lg font-medium">
                  Account Holder:{user?.displayName}
                </h3>
              <li>
                <NavLink to={"transactions"}>Transactions</NavLink>
              </li>
              <li>
                <a></a>
              </li>
            </div>
            <div>
              <li>
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
