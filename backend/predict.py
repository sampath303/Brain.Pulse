import cv2
import numpy as np
from tensorflow.keras.models import load_model

# Load the model once (important: do not reload on every request)
model = load_model('braintumor.h5')

# Ensure class order matches your training dataset
class_names = ['Glioma', 'Meningioma', 'No tumor', 'Pituitary']

def predict_tumor_type(image_path):
    """
    Predicts the brain tumor type from an MRI image.

    Args:
        image_path (str): Path to the uploaded MRI image.

    Returns:
        str: Predicted tumor type name (e.g., 'Glioma', 'No tumor', etc.)
    """
    try:
        # Load and preprocess the image
        img = cv2.imread(image_path)
        img = cv2.resize(img, (150, 150))
        img_array = np.array(img).reshape(1, 150, 150, 3)

        # Predict with model
        prediction = model.predict(img_array)
        predicted_index = prediction.argmax()

        # Return the tumor name
        return class_names[predicted_index]

    except Exception as e:
        print(f"[ERROR] Prediction failed: {e}")
        return "Prediction Failed"