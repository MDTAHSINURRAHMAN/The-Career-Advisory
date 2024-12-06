import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";
import { Helmet } from "react-helmet-async";

const IndividualArticle = () => {
  const { id } = useParams();
  const {loading} = useContext(AuthContext);
  const [article, setArticle] = useState(null); // Use null to handle single article

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        const foundArticle = data.filter(
          (item) => item.categoryId === parseInt(id)
        ); // Match by id
        setArticle(foundArticle);
      });
  }, [id]);

  if (!article) {
    return <Loading></Loading>;
  }

  return (
    <div className="font-lora w-full my-16">
        <Helmet>
            <title>The Career Advisory | Article {id}</title>
        </Helmet>
      <div className="">
        {article.map((article) => (
          <div
            key={article.id}
            className="flex flex-col xl:flex-row items-center justify-center bg-white hover:shadow-2xl transition"
          >
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full xl:w-1/2 h-44 md:h-64 lg:h-96 xl:h-auto object-cover"
            />
            {/* Article Details */}
            <div className="mt-4 md:mt-8 xl:mt-0 md:ml-6 flex-1">
              <h2 className="text-2xl md:text-4xl font-bold text-btnColor mb-8">
                {article.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">{article.description}</p>
              <button className="mb-4 px-4 py-2 text-sm md:text-base bg-btnColor text-white font-semibold rounded-lg hover:bg-navColor hover:text-btnColor transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualArticle;
