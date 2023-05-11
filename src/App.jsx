import "./App.css";
import "/node_modules/primeflex/primeflex.css";
import CardForm from "./components/CardForm";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <main>
      <CardDetails />
      <CardForm />
    </main>
  );
}

export default App;
