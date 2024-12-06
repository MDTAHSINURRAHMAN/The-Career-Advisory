import { useState } from "react";
import { Link } from "react-router-dom";

const IndividualDetails = ({ service }) => {
  // State to manage comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div>
      <div className="font-lora bg-btnColor py-5 lg:py-10 px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-center">
          The best way to predict the future is to create it.
        </h2>
      </div>
      <div className="bg-white py-10 px-5 rounded-lg shadow-lg flex flex-col md:flex-row items-center mt-8 gap-8">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-6">
          <img
            src={service?.image}
            alt={service?.serviceName}
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mb-4 space-y-2 mt-6">
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Counselor:</strong> {service?.counselor}
            </p>
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Duration:</strong> {service?.duration}
            </p>
          </div>
        </div>

        {/* Right Side: Service Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
            {service?.serviceName}
          </h2>

          <div className="mb-4">
            <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
              {service?.description}
            </p>
          </div>

          {/* Rest of the Service Details */}
          <div className="mb-4 space-y-2">
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Category:</strong> {service?.category}
            </p>
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Pricing:</strong> {service?.pricing}
            </p>
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Location:</strong> {service?.location}
            </p>
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Language:</strong> {service?.language}
            </p>
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Availability:</strong> {service?.availability}
            </p>
          </div>

          {/* Rating, Testimonial, and Button */}
          <div className="mb-4 space-y-2">
            <span className="text-sm lg:text-base text-yellow-500 font-semibold">
              <strong>Rating:</strong> {service?.rating}
            </span>
            <p className="text-sm lg:text-base text-gray-800">
              <strong>Client Testimonial:</strong> {service?.clientTestimonial}
            </p>
          </div>

          {/* Navigate to All Services Button */}
          <div className="mt-6 text-end">
            <Link
              to="/services"
              className="text-sm lg:text-base px-6 py-2 bg-btnColor text-white rounded-lg hover:bg-navColor hover:text-btnColor transition-colors"
            >
              See All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Comments/Feedback
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your comment here..."
            className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-btnColor"
          />
          <button
            onClick={handleAddComment}
            className="px-6 py-2 bg-btnColor text-white rounded-lg hover:bg-navColor hover:text-btnColor transition-colors"
          >
            Comment/Feedback
          </button>
        </div>

        {/* Display Comments */}
        <div className="mt-6 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg shadow-sm text-gray-800"
              >
                {comment}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualDetails;
