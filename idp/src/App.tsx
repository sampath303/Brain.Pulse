import "./App.css";
import { BackgroundLinesDemo } from "./components/ui/hero/starting";
import { TimelineDemo } from "./components/ui/hero/Home";
import { FileUploadDemo } from "./components/ui/hero/file";

function App() {
  return (
    <div>
      <BackgroundLinesDemo />
      <div id="homeSection">
        <TimelineDemo />
      </div>
      <div id="uploadSection">
        <FileUploadDemo />
      </div>
    </div>
  );
}

export default App;
