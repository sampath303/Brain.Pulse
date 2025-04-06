"use client";
import React, { useState } from "react";
import { FileUpload } from "../../../components/ui/hero/file-upload";

export function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (newFiles: File[]) => {
    if (!newFiles.length) return;
    const file = newFiles[0];

    setFiles([file]);
    setPrediction(null);
    setLoading(true);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewURL(url);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({ prediction: "Unknown" }));

      if (res.ok && data.prediction) {
        setPrediction(data.prediction);
      } else {
        setPrediction("Failed to get a valid prediction");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setPrediction("Failed to get prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-96 space-y-8 px-4">
      <p className="text-white text-2xl font-bold mb-4 text-center">
        Upload or drop your MRI scans here to predict
      </p>

      <FileUpload onChange={handleFileUpload} />

      {previewURL && (
        <div className="mt-6 flex flex-col items-center space-y-4">
          <img
            src={previewURL}
            alt="MRI Preview"
            className="max-w-xs max-h-80 rounded-lg shadow-lg border border-white/20"
          />

          {loading ? (
            <p className="text-white text-lg font-medium animate-pulse">
              ⏳ Predicting...
            </p>
          ) : prediction && (
            <div className="text-center text-white">
              <p className="text-lg font-semibold">Predicted Tumor Type:</p>
              <p
                className={`text-xl font-bold ${
                  prediction === "Unknown" ? "text-yellow-300" : "text-green-300"
                }`}
              >
                {prediction}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
