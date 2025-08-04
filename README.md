# Online Code Editor by Surykant

A powerful, web-based code editor built with React, Node.js, and the Monaco Editor (the engine that powers VS Code). T
his application allows you to write, compile, and run code in multiple languages directly from your browser, complete with standard input support and a sleek, theme-able interface.

![Project Screenshot](./frontend/public/project_screenshot/project_screenshot.png)
*(Note: You will need to take a screenshot of your finished application and save it as `project_screenshot.png` 
inside the `frontend/public/project_screenshot` folder for the image above to display correctly.)*

## Features

- **Multi-Language Support:** Compiles and runs C, C++, Python, Java, and JavaScript.
- **Side-by-Side Layout:** A clean, responsive interface with the code editor on the left and dedicated panes for input (stdin) and output on the right.
- **Standard Input:** Provides an input box to pass standard input to your programs.
- **Light & Dark Themes:** Easily switch between a light or dark user interface with a theme toggle button.
- **Powered by Monaco Editor:** Enjoy a rich editing experience with syntax highlighting, and other features from the editor that powers VS Code.
- **Live Code Execution:** Uses the Judge0 API for robust and secure code execution on the backend.

## Tech Stack

- **Frontend:**
  - [React.js](https://reactjs.org/) (with Vite)
  - [Monaco Editor](https://microsoft.github.io/monaco-editor/)
  - [Axios](https://axios-http.com/) for API requests
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Dotenv](https://www.npmjs.com/package/dotenv) for environment variables
- **API:**
  - [Judge0 CE API](https://rapidapi.com/judge0-official/api/judge0-ce)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- You must have [Node.js](https://nodejs.org/) installed on your machine.
- You need an API key from the [Judge0 CE API](https://rapidapi.com/judge0-official/api/judge0-ce). Subscribe to the free BASIC plan to get started.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/online-code-editor.git](https://github.com/your-username/online-code-editor.git)
    cd online-code-editor
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    npm install
    ```
    Create a file named `.env` in the `backend` directory and add your API key:
    ```
    RAPIDAPI_KEY=your_rapidapi_key_here
    ```

3.  **Setup the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```

### Usage

You will need to run two servers in two separate terminal windows.

1.  **Run the Backend Server:**
    ```sh
    cd backend
    node index.js
    ```
    *Your backend server will be running on `http://localhost:8000`.*

2.  **Run the Frontend Server:**
    ```sh
    cd frontend
    npm run dev
    ```
    *Open your browser and navigate to `http://localhost:5173`.*

---

Created by **Surykant Bhojane** - Monday, January 4, 2025

