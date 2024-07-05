from flask import Flask, render_template, request
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet import preprocess_input, decode_predictions
import numpy as np
import tensorflow as tf
import io

app = Flask(__name__)

# Carregar seu modelo treinado (substitua pelo caminho correto e método de carregamento correto)
model_path = 'model/model-alago.h5'
model = tf.keras.models.load_model(model_path)

# Definir as classes esperadas
classes = ['Alagado', 'Seco']

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Verificar se um arquivo foi enviado
    if 'file' not in request.files:
        return render_template('index.html', prediction='Nenhuma imagem enviada.')

    file = request.files['file']

    # Verificar se o nome do arquivo está vazio
    if file.filename == '':
        return render_template('index.html', prediction='Nome do arquivo vazio.')

    if file.filename.endswith(('.png', '.jpg', '.jpeg')):
        # Carregar a imagem usando io.BytesIO
        img = image.load_img(io.BytesIO(file.read()), target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)  # Adicionar dimensão extra para batch

        # Pré-processamento da imagem
        img_array = preprocess_input(img_array)

        # Realizar a predição
        prediction = model.predict(img_array)
        predicted_class_index = np.argmax(prediction)
        predicted_class = classes[predicted_class_index]

        # Preparar dados para exibição na página HTML
        prediction_result = f'{predicted_class}'

        # Exibir a predição na página HTML
        return render_template('index.html', prediction=prediction_result)

    else:
        return render_template('index.html', prediction='Formato de arquivo não suportado.')

if __name__ == '__main__':
    app.run(debug=True)
