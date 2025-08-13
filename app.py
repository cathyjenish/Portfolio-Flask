from flask import Flask, render_template, request, redirect, url_for, flash
import os
from datetime import datetime

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'your-secret-key-here')

# Sample portfolio data
portfolio_data = {
    'name': 'Catherine Jenishtha J',
    'title': 'Python Developer',
    'email': 'catherinejenishtha02@gmail.com',
    'phone': '+91-9791134246',
    'location': 'Chennai, India',
    'bio': 'Python developer skilled in Django, machine learning, and image processing, with a knack for building scalable, efficient, and visually appealing applications.',
    'about':'I’m a dedicated Python developer with a strong foundation in computer science and a passion for transforming ideas into functional, user-focused software.My expertise covers Python, Django, and machine learning, with hands-on experience in image processing, automation systems, and AI-powered applications. I’ve worked on diverse projects, from drone automation to e-commerce platforms, blending problem-solving skills with creativity to deliver innovative solutions.Beyond coding, I bring an artistic edge to my work, leveraging my background in painting and design to craft visually engaging user experiences. I thrive in collaborative environments, adapt quickly to new challenges, and am constantly exploring emerging technologies to stay ahead in the ever-evolving tech landscape.',
    'skills': [
        'Python', 'Flask', 'JavaScript', 'React', 'Node.js','Django',
        'HTML/CSS', 'SQL', 'Git', 'Docker', 'AWS', 'Azure','Image processing'
    ],
    'projects': [
        {
            'title': 'Shortest Path   Planning',
            'description': '(PRM) Probabilistic Roadmaps is a path planning algorithm used in Robotics.',
            'technologies': [ "Python", "matplotlib","numpy"],
            'github': 'https://github.com/cathyjenish/Shortest-path-planning',
            'demo': 'static/images/image.png'
        },
        {
            'title': 'Network Traffic Prediction',
            'description': 'This code predicts network traffic from PCAP files using machine learning, detects anomalies, and suggests capacity planning, all presented via a Tkinter-based GUI.',
            'technologies': ['Python', 'Tkinter'],
            'github': 'https://github.com/cathyjenish/Network-traffic-prediction.git',
            'demo': 'static/images/image2.png'
        },
        {
            'title': 'Live video streamer GUI',
            'description': 'Real-time Video tracking with controls and forecasts using mesh network',
            'technologies': [ 'Python', 'Tkinter', 'mesh'],
            'github': 'https://github.com/cathyjenish/video-streaming-gui.git',
            'demo': 'static/images/image3.png'
        }
    ],
    'experience': [
        {
            'title': 'Project assistant Software developer',
            'company': 'Mspace Drone Technology private limited',
            'period': '2023 - 2024',
            'description': 'Lead development of microservices architecture and RESTful APIs',
            'img':'Expirence-1.png'
        },
        {
            'title': 'Python Developer Internship',
            'company': 'Elevate Labs',
            'period': '2025 - Present ',
            'description': 'Gained hands-on experience in building, testing, and optimizing Python-based applications and automation scripts.',
            'img':'Expirence-2.png'
        }
    ],
    'education': [
        {
            'degree': 'B.E Computer science and Engineering',
            'school': 'S A Engineering college',
            'period': '2020 - 2024',
            'description': 'Specialized in Software Engineering and Artificial Intelligence'
        }
    ],
    'Certification': [
        {
            'degree': 'Python Programming' ,
            'school': 'Azure Skynet Solutions',
            'period': '2023',
            'description': 'Completed a Summer Internship in Python Programming from June 19, 2023, to August 2, 2023, organized byCosmic Skills in collaboration with Azure Skynet Solutions Pvt. Ltd. Gained hands-on experience in Python development and problem-solving techniques.'
        },
        {
            'degree': 'Cloud computing Fundamental',
            'school': 'IBM Skill Build',
            'period': '2025',
            'description': 'The IBM SkillsBuild Cloud Computing Fundamentals certification validates foundational knowledge of cloud services, deployment models, virtualization, orchestration, and cloud security, along with awareness of cloud benefits and practical skills like deploying web apps and analyzing security in simulated environments.'

        }

        
    ]
}

@app.route('/')
def index():
    return render_template('index.html', data=portfolio_data)

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        

        flash(f'Thank you {name}! Your message has been received.', 'success')
        
        return redirect(url_for('index'))

@app.route('/download-resume')
def download_resume():
    # Path to resume file
    resume_path = 'static/files/resume.pdf'
    return redirect(url_for('static', filename='files/resume.pdf'))

if __name__ == '__main__':
    app.run(debug=True)
