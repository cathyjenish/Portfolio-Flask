# Personal Portfolio Website

A modern, responsive portfolio website built with Flask, HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with animations
- **Contact Form**: Integrated contact form with validation
- **Project Showcase**: Display your projects with descriptions and links
- **Skills Section**: Highlight your technical skills
- **Experience Timeline**: Showcase your professional experience
- **Download Resume**: Direct resume download functionality

## Project Structure

```
portfolio/
├── app.py                 # Main Flask application
├── templates/             # HTML templates
│   ├── base.html         # Base template with navigation and footer
│   └── index.html        # Main portfolio page
├── static/               # Static files (CSS, JS, images)
│   ├── css/
│   │   └── style.css     # Custom styles
│   ├── js/
│   │   └── script.js     # JavaScript functionality
│   ├── images/           # Portfolio images
│   └── files/            # Resume and other files
├── requirements.txt      # Python dependencies
└── README.md            # Project documentation
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application**
   ```bash
   python app.py
   ```

3. **Access the Website**
   Open your browser and navigate to `http://localhost:5000`

## Customization

### Personal Information
Edit the `portfolio_data` dictionary in `app.py` to update:
- Personal details (name, title, contact info)
- Bio and skills
- Projects and experience
- Education background

### Styling
- Modify `static/css/style.css` for custom styling
- Update colors, fonts, and layout as needed

### Images
- Add your profile picture to `static/images/`
- Update image references in templates

### Contact Form
- The contact form is set up to work with Flask's flash messaging
- For production, integrate with email services like SendGrid or AWS SES

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **CSS Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Responsive Design**: Mobile-first approach

## Deployment Options

- **Heroku**: Easy deployment with Git
- **PythonAnywhere**: Free Python hosting
- **AWS**: Scalable cloud deployment
- **DigitalOcean**: VPS hosting

## License

This project is open source and available under the [MIT License](LICENSE).
