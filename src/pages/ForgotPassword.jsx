import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [error, setError] = useState("");

  const handlePasswordReset = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const mailtoLink = `mailto:${email}?subject=Reset Password&body=Please reset my password.`;
    window.location.href = mailtoLink;
  };

  return (
    <div >
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <div className="min-h-screen flex justify-center items-center font-lora text-center">
          <Helmet>
            <title>The Career Advisory | Forgot Password</title>
          </Helmet>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-2 md:p-5 lg:p-10 shadow-xl">
            <h2 className="text-2xl font-semibold">Forgot Password</h2>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="form-control mt-3">
                <button
                  type="button"
                  onClick={handlePasswordReset}
                  className="btn bg-navColor rounded-none"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ForgotPassword;
