from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', data =[{
        'description': 'Check my Mail',
        'description': 'Repy Whatsapp message',
        'description': 'Call my Mum',
    }])


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)