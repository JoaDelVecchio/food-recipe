import { Recipe as RecipeType } from "../context/SearchContext";

const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  return (
    <div>
      <li>{recipe.publisher}</li>
      <img src={recipe.image_url} alt="" />
    </div>
  );
};

export default Recipe;
