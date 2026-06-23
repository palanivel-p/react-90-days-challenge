import MenuItem from "./components/MenuItems";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  return (
    <div>

      <h1>Day 3 - Props</h1>

      <h2>User Profile Card</h2>
      <UserProfileCard name ="Ajith" role= "Software Developer" experience = "3 Years" />
      <hr />

      <h2>Restaurant Menu</h2>
      <MenuItem itemName ="shirt" price="14" category ="Dress" />

      <MenuItem
        itemName="Paneer Butter Masala"
        price="180"
        category="Veg Curry"
      />

      <MenuItem
        itemName="Cold Coffee"
        price="120"
        category="Beverage"
      />
      <hr />

    </div>
  );
}

export default App;