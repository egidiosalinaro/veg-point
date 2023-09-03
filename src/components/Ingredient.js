export default function Ingredient(props) {
  return (
    <div className="ingredient-card">
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`}
        alt={props.name}
      />
      <div>{props.original}</div>
    </div>
  );
}
