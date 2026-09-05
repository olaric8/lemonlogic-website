import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import AcceptInvitation from "./pages/AcceptInvitation";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UserManagement from "./pages/UserManagement";
import Home from "./Home";
import Contact from "./Contact";
import GSCA from "./GSCA";
import LAAutoworks from "./LAAutoworks";
import InvoiceAutomation from "./InvoiceAutomation";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";

import Assessment from "./Assessment";

import Dashboard from "./pages/Dashboard";
import Advisor from "./pages/Advisor";
import BoardReport from "./pages/BoardReport";
import ExecutiveWorkspace from "./pages/ExecutiveWorkspace";
import Login from "./pages/Login";
import BusinessProcessAutomation from "./BusinessProcessAutomation";
import ExecutiveDashboards from "./ExecutiveDashboards";
import CustomBusinessSystems from "./CustomBusinessSystems";
import AISolutions from "./AISolutions";
import WebsiteDevelopment from "./WebsiteDevelopment";

import BackToTop from "./components/BackToTop";

import ExecutiveProvider from "./providers/ExecutiveProvider";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>

      <AuthProvider>

        <ExecutiveProvider>

          <Routes>

            {/* Public */}

            <Route path="/" element={<Home />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/cookie-policy"
              element={<CookiePolicy />}
            />

            <Route
              path="/terms-of-use"
              element={<TermsOfUse />}
            />

            {/* Portfolio */}

            <Route
              path="/portfolio/gsca"
              element={<GSCA />}
            />

            <Route
              path="/portfolio/la-autoworks"
              element={<LAAutoworks />}
            />

            <Route
              path="/portfolio/invoice-automation"
              element={<InvoiceAutomation />}
            />

            {/* Blog */}

            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route
              path="/blog/:slug"
              element={<BlogPost />}
            />

            {/* Services */}

            <Route
              path="/services/business-process-automation"
              element={<BusinessProcessAutomation />}
            />

            <Route
              path="/services/executive-dashboards"
              element={<ExecutiveDashboards />}
            />

            <Route
              path="/services/custom-business-systems"
              element={<CustomBusinessSystems />}
            />

            <Route
              path="/services/ai-solutions"
              element={<AISolutions />}
            />

            <Route
              path="/services/website-development"
              element={<WebsiteDevelopment />}
            />
<Route path="/settings" element={<Settings />} />
           {/* ================================================= */}
{/* Executive Platform */}
{/* ================================================= */}

{/* Public Authentication */}

<Route
  path="/login"
  element={<Login />}
/>
<Route path="/accept-invitation" element={<AcceptInvitation />} />
<Route path="/verify-email" element={<VerifyEmail />} />
<Route path="/assessment" element={<Assessment />} />
<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

{/* Protected Executive Routes */}

<Route
  element={<ProtectedRoute />}
>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
<Route path="/users" element={<UserManagement />} />
              <Route
                path="/advisor"
                element={<Advisor />}
              />

              <Route
                path="/board-report"
                element={<BoardReport />}
              />

              <Route
                path="/workspace"
                element={<ExecutiveWorkspace />}
              />

            </Route>

            {/* 404 */}

            <Route
              path="*"
              element={<div>Page Not Found</div>}
            />

          </Routes>

          <BackToTop />

        </ExecutiveProvider>

      </AuthProvider>

    </BrowserRouter>
  );
}