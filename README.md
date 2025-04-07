# Brain Pulse

**Brain Pulse** is a web-based application that allows users to upload MRI scans and receive predictions on brain tumor types using a deep learning model. The model detects and classifies tumors into **Glioma**, **Meningioma**, **Pituitary**, or indicates **No Tumor**.

Built with a React (TypeScript + Tailwind) frontend and a Flask + TensorFlow backend.

---

## Features

- Upload MRI images directly in the browser
- Predict tumor types using a trained CNN model
- Get detailed symptoms and recommended next steps
- Clean UI with animated visuals
- Option to upload and try multiple scans

---

## Tech Stack

### Frontend:
- React + TypeScript
- TailwindCSS
- React Scroll
- Framer Motion

### Backend:
- Python + Flask
- TensorFlow / Keras CNN Model
- RESTful API for prediction

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/brain-pulse.git
cd brain-pulse
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

### 3. Set Up the Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

---

## Project Structure

```
brain-pulse/
├── backend/
│   ├── model/                  # Saved CNN model
│   ├── app.py                  # Flask app for prediction
│   └── ...
├── frontend/
│   ├── components/             # React components
│   ├── pages/                  # FileUpload & UI logic
│   └── ...
```

---

## Tumor Types Detected

| Tumor Type   | Common Symptoms                   | Recommended Actions                         |
|--------------|-----------------------------------|---------------------------------------------|
| Glioma       | Headaches, seizures, memory loss  | MRI, biopsy, surgery, chemo                 |
| Meningioma   | Vision/hearing loss, seizures     | Surgery, observation                        |
| Pituitary    | Hormonal issues, fatigue          | Endocrine eval, medication                  |
| No Tumor     | —                                 | Great news! Stay healthy                    |


---

## Notes

- Avoid committing model files or `.pyd` files over 100MB. Use `.gitignore` or [Git LFS](https://git-lfs.com/) to handle large files.
- Always validate results with a medical professional. This tool is educational and exploratory.
- Ensure proper backend security if exposing online (e.g., input validation, file type checks).

---

## License

This project is licensed under the MIT License.  
Feel free to use, modify, and distribute it as needed.

---

## Acknowledgments

- Medical MRI datasets from Kaggle and public research databases
- TensorFlow and Keras for model training
- React and TailwindCSS for frontend
- Flask for API development
- Contributors and testers who helped validate predictions

