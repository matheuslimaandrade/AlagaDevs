from flask import Flask, render_template, request
import tensorflow as tf
import numpy as np

app = Flask(__name__)

model = tf.keras.models.load_model('model/model-alago.h5')

@app.route('/') 
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Obter os dados do formulário
        data = [float(x) for x in request.form.values()]
        
        # Converter a entrada para um formato adequado para o modelo
        input_data = np.array([data])
        
        # Fazer a previsão
        prediction = model.predict(input_data)
        
        # Extrair o resultado
        result = prediction[0][0]
    except Exception as e:
        result = f"Erro ao fazer a previsão: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
