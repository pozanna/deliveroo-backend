import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";
import "./fonts.css";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200/");
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <p>Chargement...</p>
      ) : (
        <div className="appContainer">
          <Header
            restaurantPicture={data.restaurant.picture}
            restaurantName={data.restaurant.name}
            restaurantDescription={data.restaurant.description}
          />
          {data.categories.map((category) => {
            console.log(category.meals);
            return (
              <Category
                key={category.id}
                categoryName={category.name}
                categoryMeals={category.meals}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
