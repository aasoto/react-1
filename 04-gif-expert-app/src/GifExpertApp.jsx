import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={setCategories}/>
      <button onClick={onAddCategory}>Agregar categoría</button>
      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  );
}