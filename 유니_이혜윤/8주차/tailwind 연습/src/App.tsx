import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";

function App() {
  return (
    <div>
      <Button variant="secondary">
        <div>헤윤</div>
      </Button>
      <Button variant="error">
        <div>헤윤</div>
      </Button>
      <Button variant="primary">
        <div>콩콩</div>
      </Button>
      <Button2 size={"sm"} variant={"error"} className="text-200">
        123
      </Button2>
    </div>
  );
}

export default App;
