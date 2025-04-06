import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

from flask import Flask, request, jsonify
from predict import predict_tumor_type
from flask_cors import CORS

app = Flask(__name__)  # ✅ FIXED: use __name__
CORS(app)  # Enable CORS for frontend-backend connection

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)

    tumor_type = predict_tumor_type(filepath)
    return jsonify({'prediction': tumor_type})

if __name__ == '__main__':  # ✅ FIXED: use __name__
    print("✅ Flask backend starting at ")
    app.run(debug=True)
