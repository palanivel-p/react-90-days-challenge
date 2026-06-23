import GreetingCard from "./components/GreetingCard";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <h1>Day 2 - JSX & Functional Components</h1>

      <GreetingCard />
      <hr />

      <EmployeeCard />
      <hr />

      <ProductCard />
    </div>
  );
}

export default App;