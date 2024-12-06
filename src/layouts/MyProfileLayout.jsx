import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Navbar from "../components/Navbar";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyProfileLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSaveChanges = async () => {

    try {
      setLoading(true);
      await updateProfile(user, { displayName: name, photoURL: photoURL });
      toast.success("Your profile has been updated successfully!.")
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError((prevError) => ({
        ...prevError,
        save: "Failed to save changes. Please try again.",
      }));
    }
  };

  const handleLogout = () => {
    logOut();
  };

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="">
      <Helmet><title>The Career Advisory | Profile</title></Helmet>
      <Navbar />
      <div className="w-11/12 mx-auto p-4 font-lora min-h-screen flex items-center justify-center">
        <div className="w-full sm:w-[500px] bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">My Profile</h2>

          {/* Display user profile information */}
          <div className="mb-2 lg:mb-4 flex justify-center">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-16 lg:w-32 h-16 lg:h-32 rounded-full mb-4"
            />
          </div>
          <p className="text-sm md:text-base font-semibold text-center mb-2">
            Name: {user.displayName}
          </p>
          <p className="text-sm md:text-base font-semibold text-center mb-4">
            Email: {user.email}
          </p>

          {/* Form to edit name and photo URL */}
          <div className="mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-sm font-medium mb-2">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                onChange={(e) => setPhotoURL(e.target.value)}
                className={`w-full p-2 border rounded-md ${
                  error.photo ? "border-red-500" : "border-gray-300"
                }`}
              />
              {error.photo && (
                <p className="text-xs text-red-500 mt-1">{error.photo}</p>
              )}
            </div>

            <button
              onClick={handleSaveChanges}
              disabled={loading}
              className="w-full px-4 py-2 bg-btnColor text-white rounded-md hover:bg-navColor hover:text-btnColor"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
            {error.save && (
              <p className="text-xs text-red-500 mt-2 text-center">
                {error.save}
              </p>
            )}
          </div>

          {/* Logout Button */}
          <div className="mt-4 text-center">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfileLayout;
