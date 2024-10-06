import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import OrganizationDashboard from "./pages/organization-dashboard";
import OrganizationDeposit from "./pages/organization-deposit";
import OrganizationPaymentHistory from "./pages/organization-payment-history";
import OrganizationPayroll from "./pages/organization-payroll";
import OrganizationPayrollList from "./pages/organization-payroll-list";
import OrganizationProfile from "./pages/organization-profile";
import OrganizationSignIn from "./pages/organization-signin";
import OrganizationUp from "./pages/organization-signup";
import OrganizationUsers from "./pages/organization-users";
import UserDashboard from "./pages/user-dashboard";
import UserPaymentHistory from "./pages/user-payment-history";
import UserProfile from "./pages/user-profile";
import UserSignIn from "./pages/user-signin";
import UserSignUp from "./pages/user-signup";
import UserOrganizations from "./pages/users-organizations";
import AddUser from "./pages/add-user";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/organization-dashboard"
            element={<OrganizationDashboard />}
          />
          <Route
            path="/organization-deposit"
            element={<OrganizationDeposit />}
          />
          <Route
            path="/organization-payment-history"
            element={<OrganizationPaymentHistory />}
          />
          <Route
            path="/organization-payroll"
            element={<OrganizationPayroll />}
          />
          <Route
            path="/organization-payroll-list"
            element={<OrganizationPayrollList />}
          />{" "}
          <Route path="/organization-signin" element={<OrganizationSignIn />} />{" "}
          <Route path="/organization-signup" element={<OrganizationUp />} />{" "}
          <Route path="/organization-users" element={<OrganizationUsers />} />{" "}
          <Route
            path="/organization-profile"
            element={<OrganizationProfile />}
          />{" "}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route
            path="/user-payment-history"
            element={<UserPaymentHistory />}
          />
          <Route path="/user-profile" element={<UserProfile />} />{" "}
          <Route path="/user-signin" element={<UserSignIn />} />{" "}
          <Route path="/user-signup" element={<UserSignUp />} />{" "}
          <Route path="/users-organizations" element={<UserOrganizations />} />{" "}
          <Route path="/add-users" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
