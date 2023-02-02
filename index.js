import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const categories = [
  {
    name: "Fashion",
    subcategories: [{ name: "Men" }, { name: "Women" }, { name: "Kids" }],
  },
  {
    name: "Electronics",
    subcategories: [
      { name: "Mobiles" },
      { name: "Laptops" },
      { name: "Accessories" },
    ],
  },
];

function Category({ category, onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p onClick={() => setOpen(!open)}>{category.name}</p>
      {open && (
        <ul>
          {category.subcategories.map((subcategory) => (
            <li onClick={() => onClick(subcategory.name)}>
              {subcategory.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search categories"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      />
      <ul>
        {categories.map((category) => (
          <Category
            key={category.name}
            category={category}
            onClick={setSelectedCategory}
          />
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
