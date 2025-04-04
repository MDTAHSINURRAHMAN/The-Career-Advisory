import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"; // Import eye icons
import { toast } from "react-toastify";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password:
          "Password Must Have At Least 6 Characters, Including An Uppercase And A Lowercase Letter.",
      }));
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Account successfully created! Welcome aboard! We’re excited to have you with us.")
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((error) => {
        toast.error("Give Valid Credentials");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-lora text-center">
      <Helmet>
        <title>The Career Advisory | Register</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-2 md:p-5 lg:p-10 shadow-xl">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              className="input input-bordered pr-10"
              required
            />
            <div className="relative">
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3.5 text-xl cursor-pointer text-gray-600"
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
            {error.password && (
              <label className="label text-xs text-start text-red-500 mt-2">
                {error.password}
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-navColor rounded-none">Register</button>
          </div>
        </form>
        <p className="text-sm md:text-base text-center font-semibold">
          Already Have An Account?
          <Link
            className="text-sm md:text-base text-blue-500 hover:underline ml-1"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
