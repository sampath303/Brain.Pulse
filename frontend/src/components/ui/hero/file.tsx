"use client";
import _React, { useState } from "react";
import { FileUpload } from "../../../components/ui/hero/file-upload";

const tumorInfo: Record<string, { symptoms: string[]; actions: string[] }> = {
  Glioma: {
    symptoms: [
      "Persistent headaches",
      "Nausea or vomiting",
      "Seizures",
      "Memory loss",
      "Vision problems",
    ],
    actions: [
      "Consult a neurologist or oncologist",
      "Get a biopsy or additional imaging",
      "Discuss surgical options if applicable",
      "Explore chemotherapy or radiation plans",
    ],
  },
  Meningioma: {
    symptoms: [
      "Seizures",
      "Hearing or vision loss",
      "Difficulty concentrating",
      "Weakness in limbs",
      "Personality changes",
    ],
    actions: [
      "Book a consultation with a neurosurgeon",
      "Evaluate surgical removal feasibility",
      "Schedule regular MRI scans",
      "Discuss non-invasive treatment options",
    ],
  },
  Pituitary: {
    symptoms: [
      "Vision disturbances",
      "Hormonal imbalances",
      "Unexplained fatigue",
      "Irregular periods or infertility",
      "Weight fluctuations",
    ],
    actions: [
      "See an endocrinologist or pituitary specialist",
      "Conduct a hormone panel",
      "Review MRI scans for tumor size",
      "Plan treatment: surgery, radiation, or medication",
    ],
  },
  "No Tumor": {
    symptoms: [],
    actions: [],
  },
};

export function FileUploadDemo() {
  const [_files, setFiles] = useState<File[]>([]);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (newFiles: File[]) => {
    if (!newFiles.length) return;
    const file = newFiles[0];

    setFiles([file]);
    setPrediction(null);
    setLoading(true);

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

  const reset = () => {
    setFiles([]);
    setPreviewURL(null);
    setPrediction(null);
    setLoading(false);
  };

  const formatPrediction = (label: string) => {
    return label
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const renderInfo = () => {
    if (!prediction || prediction === "Unknown") return null;

    const formattedPrediction = formatPrediction(prediction.trim());

    if (formattedPrediction === "No Tumor") {
      return (
        <div className="text-white max-w-md text-left space-y-4">
          <h3 className="text-2xl font-bold mb-2">🎉 No Tumor Detected!</h3>
          <p>
            Good news! Your scan looks clear. Still, regular checkups never hurt — and keep living
            your best, brain-healthy life! 🧠✨
          </p>
        </div>
      );
    }

    const info = tumorInfo[formattedPrediction];
    if (!info || !info.symptoms || !info.actions) {
      return (
        <div className="text-white">
          <p>Information not available for this tumor type.</p>
        </div>
      );
    }

    return (
      <div className="text-white max-w-md space-y-6 text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">⚠️ Common Symptoms:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {info.symptoms.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">🧭 Recommended Actions:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {info.actions.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col items-center justify-center space-y-8">
        <p className="text-white text-2xl font-bold text-center">
          Upload or drop your MRI scans here to predict
        </p>

        {!prediction && <FileUpload onChange={handleFileUpload} />}

        {previewURL && (
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={previewURL}
                alt="MRI Preview"
                className="max-w-xs max-h-80 rounded-lg shadow-lg border border-white/20"
              />
              {loading ? (
                <p className="text-white text-lg font-medium animate-pulse">
                  ⏳ Predicting...
                </p>
              ) : (
                prediction && (
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">Predicted Tumor Type:</p>
                    <p
                      className={`text-xl font-bold ${
                        prediction === "Unknown"
                          ? "text-yellow-300"
                          : formatPrediction(prediction) === "No Tumor"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPrediction(prediction)}
                    </p>
                  </div>
                )
              )}
              {!loading && prediction && (
                <button
                  onClick={reset}
                  className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200"
                >
                  Try Another Scan
                </button>
              )}
            </div>

            {!loading && prediction && renderInfo()}
          </div>
        )}
      </div>
    </div>
  );
}
