import "./Category.css";
import Meal from "../components/Meal";

const Category = ({ categoryName, categoryMeals }) => {
  return (
    <div className="categoryContainer">
      <h3>{categoryName}</h3>
      {categoryMeals.map((meal) => {
        <Meal
          key={meal.id}
          mealName={meal.title}
          mealDescription={meal.description}
          mealPrice={meal.price}
          mealPicture={meal.picture}
        />;
      })}
    </div>
  );
};

export default Category;
