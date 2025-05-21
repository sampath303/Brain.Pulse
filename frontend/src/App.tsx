import "./App.css";
import { BackgroundLinesDemo } from "./components/ui/hero/starting";
import { TimelineDemo } from "./components/ui/hero/Home";
import { FileUploadDemo } from "./components/ui/hero/file";
import { InfiniteMovingCardsDemo } from "./components/ui/hero/movingdemo";

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
      <div id="testimonials">
        <InfiniteMovingCardsDemo/>
      </div>
    </div>
  );
}

export default App;
