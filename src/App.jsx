import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(URL);
      const respons = await result.json();
      setImages(respons.categories);
    };
    getData();
  }, []);

  return (
      <div className="App">
        <Header />
        <div className="title">
          <h1>Welcome to Api's Restaurant!</h1>
          <h2>The best food in town, please take a look in the menu!</h2>
        </div>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <Card
              key={index}
              source={image.strCategoryThumb}
              title={image.strCategory}
              description={image.strCategoryDescription}
            />
          );
        })}
        </div> 
        <Footer />
      </div>
  );
}

export default App;
