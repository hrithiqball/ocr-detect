from PIL import Image
import pytesseract

def process_image(image_path):
    try:
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return ""
