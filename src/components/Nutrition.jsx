import "../styles/Nutrition.css";
export default function Nutrition() {
  return (
    <div className="nutrition">
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div>
        <p>Calories</p>
        <p className="amount">277kcal</p>
      </div>
      <div>
        <p>Carbs</p>
        <p className="amount">0g</p>
      </div>
      <div>
        <p>Protein</p>
        <p className="amount">20g</p>
      </div>
      <div id="fat">
        <p>Fat</p>
        <p className="amount">22g</p>
      </div>
    </div>
  );
}
