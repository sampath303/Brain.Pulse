
import { BackgroundLines } from "../../../components/ui/hero/background-lines";
import { Link as ScrollLink } from "react-scroll"; 
export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="relative flex items-center justify-center w-full flex-col px-4">
      <div className="absolute top-4 right-4 flex gap-4">

        <ScrollLink to="homeSection" smooth={true} duration={800}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="text-neutral-700 text-white mr-10"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
        </ScrollLink>

        <ScrollLink to="uploadSection" smooth={true} duration={800}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="text-neutral-700 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>
        </ScrollLink>
      </div>

      <h2 className="text-white bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Brain Tumor <br /> Detection
      </h2>
      <p className="max-w-xl mx-auto text-white md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Brain tumor detection using machine learning involves training models on medical imaging data (such as MRI scans) to automatically identify and classify tumors, improving diagnostic accuracy and speed.
      </p>
    </BackgroundLines>
  );
}
