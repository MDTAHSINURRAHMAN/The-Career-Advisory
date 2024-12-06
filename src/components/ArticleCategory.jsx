import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCategory } from "../provider/CategoryProvider";

const ArticleCategory = () => {
  const { categories, setCategories } = useCategory();

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories, setCategories]);

  return (
    <div className="flex flex-wrap gap-2 md:gap-4">
      {categories.map((category) => (
        <NavLink
          to={`/articles/${category.id}`}
          key={category.id}
          className="px-4 py-2 bg-gray-100 text-black tracking-widest rounded-none hover:bg-btnColor hover:text-white transition duration-200 uppercase"
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default ArticleCategory;
