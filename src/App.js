import "./styles/styles.css";
import  OBJViewer  from "./components/objViewer";

export default function App() {
  return (
    <div className="App">
      <input type="file" accept=".obj"></input>
      <OBJViewer className={"OBJ"} />
    </div>
  );
}
