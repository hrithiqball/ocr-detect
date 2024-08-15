from flask import Flask, request, jsonify
from flask_cors import CORS

from services.detect import detect_object_and_color
from services.ocr import process_image

app = Flask(__name__)
CORS(app)

@app.route('/upload/detect', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"message": "No file part in the request"}), 400

    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400
    
    temp_path = f'./target/obj-color/{file.filename}'
    file.save(temp_path)

    detection_result = detect_object_and_color(temp_path)

    return jsonify(detection_result), 200

@app.route('/upload/ocr', methods=['POST'])
def upload_ocr_file():
    if 'file' not in request.files:
        return jsonify({"message": "No file part in the request"}), 400

    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400
    
    temp_path = f'./target/ocr/{file.filename}'
    file.save(temp_path)

    text = process_image(temp_path)

    return jsonify({"text": text}), 200

if __name__ == '__main__':
    app.run(debug=True)
