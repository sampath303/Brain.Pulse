import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

// Define props type
interface FileUploadProps {
  onChange?: (files: File[]) => void; // onChange is now a prop
}

const mainVariant = {
  initial: { x: 0, y: 0 },
  animate: { x: 15, y: -15, opacity: 0.9 },
};

export const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (newFiles: File[]) => {
    if (!newFiles.length) return;
    const file = newFiles[0];
    setFiles([file]);
    setPrediction(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error uploading file:", error);
      setPrediction("Failed to get prediction");
    } finally {
      setLoading(false);
    }

    // Call the onChange prop if it's provided
    if (onChange) {
      onChange(newFiles);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div {...getRootProps()} className="flex items-center justify-center">
        <motion.div
          onClick={handleClick}
          whileHover="animate"
          variants={mainVariant}
          transition={{ type: "spring", stiffness: 100, damping: 15 }} // Faster animation
          className="relative cursor-pointer flex items-center justify-center 
            h-32 w-32 rounded-lg hover:scale-90  duration-150
            bg-white/10 backdrop-blur-md shadow-lg border border-white/20"
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          />
          {isDragActive ? (
            <p className="text-white flex flex-col items-center">
              Drop it
              <IconUpload className="h-6 w-6 text-white" />
            </p>
          ) : (
            <IconUpload className="h-6 w-6 text-white" />
          )}
        </motion.div>
      </div>

      {loading && <p className="text-white animate-pulse">Predicting...</p>}

      
    </div>
  );
};
