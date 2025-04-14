# Calculator App Demo

[![Deploy to GitHub Pages](https://github.com/Kawaljeetkaur1313/calculator_app/actions/workflows/deploy.yml/badge.svg)](https://github.com/Kawaljeetkaur1313/calculator_app/actions/workflows/deploy.yml)

A simple working calculator built with React and Vite.

## Development with Docker

This project includes a development environment with hot reload capabilities using Docker.

### Prerequisites

- Docker and Docker Compose installed on your machine
- Git

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Kawaljeetkaur1313/calculator_app.git
   cd calculator_app
   ```
2. Start the development container:
   ```bash
   docker-compose up --build
   ```  
3. Access the application at `http://localhost:5173`

## GitHub Pages Deployment Setup

### Setting up your GitHub Repository

1. Create a new GitHub repository
   - Go to [GitHub](https://github.com) and create a new repository named `calculator_app`
   - Make the repository public for GitHub Pages

2. Update your local repository
   ```bash
   git remote set-url origin https://github.com/Kawaljeetkaur1313/calculator_app.git
   ```

3. Push your code to GitHub
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
### Enabling GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source

### Adding Status Badge to README

1. Replace the `USERNAME` in the badge URL with your GitHub username:
   ```markdown
   [![Deploy to GitHub Pages](https://github.com/Kawaljeetkaur1313/calculator_app/actions/workflows/deploy.yml/badge.svg)](https://github.com/Kawaljeetkaur1313/calculator_app/actions/workflows/deploy.yml)
   ```

   
## Manual Deployment

You can also manually deploy the application:

```bash
npm install
npm run deploy
```