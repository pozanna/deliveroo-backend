import "./Meal.css";

const Meal = (props) => {
  return (
    <div className="containerMeals">
      <h4>{props.mealName}</h4>
      <p>{props.mealDescription} </p>
    </div>
  );
};

export default Meal;
