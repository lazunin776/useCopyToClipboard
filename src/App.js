import "./styles.css";
import useCopyToClipboard from "./useCopyToClipboard";

export default function App() {
  const { copy, isCopied } = useCopyToClipboard();
  return (
    <div className="App">
      <div>Creator by Andriy Lazunin</div>
      <h1>useCopyToClipboard</h1>
      <button onClick={() => copy("A")}>Click for copy</button>
      <h2>{isCopied ? "Copy!!!" : "No Copy"}</h2>
    </div>
  );
}
