import tensorflow as tf
import cv2
import numpy as np

model = tf.keras.applications.MobileNetV2(weights='imagenet')
decode_predictions = tf.keras.applications.mobilenet_v2.decode_predictions
preprocess_input = tf.keras.applications.mobilenet_v2.preprocess_input

def classify_object(image: np.ndarray):
    image_resized = cv2.resize(image, (224, 224))
    image_preprocessed = preprocess_input(image_resized)
    image_batch = np.expand_dims(image_preprocessed, axis=0)
    
    predictions = model.predict(image_batch)
    labels = decode_predictions(predictions)
    
    return labels[0][0][1]

def detect_object_and_color(image_path: str):
    image = cv2.imread(image_path)

    object_label = classify_object(image)    
    avg_color_bgr = cv2.mean(image)[:3]
    avg_color_rgb = avg_color_bgr[::-1]

    return {
        'object': object_label,
        'color': list(map(int, avg_color_rgb))
    }
