# AdMarki – Mini Marketing 360: Facebook Ad Builder

An interactive Vue.js frontend for creating, previewing, and submitting Facebook-style ad campaigns. Designed for rapid prototyping and a seamless developer experience.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Installation & Setup](#installation--setup)
6. [Configuration](#configuration)
7. [Running the App](#running-the-app)
8. [Project Structure](#project-structure)
9. [Usage](#usage)
10. [Extending & Customization](#extending--customization)
11. [Authors](#authors)

---

## ℹ️ Overview

**AdMarki** is a lightweight, creative web application built with Vue.js that lets marketing teams draft and preview Facebook-style ad campaigns in real time. Its primary goal is to streamline the ad‑creation process, enabling rapid iteration, consistent theming, and easy integration with a FastAPI backend.

## 🚀 Features

- **Campaign Form**: Input sections for Campaign Name, Ad Text, Image URL, Audience targeting (age, gender, location), Budget & Schedule.
- **Real‑time Preview**: Live update of ad content as you type.
- **Responsive Layout**: Mobile‑first design with a fixed header/navbar, scrollable content, and sticky footer.
- **Custom Styling**: Branded blue/orange theme with interactive hover and focus states.
- **API Integration**: Configurable Axios client (`src/api.js`) for submitting form data to a FastAPI endpoint.

## 🛠️ Tech Stack

- **Frontend**: Vue.js (Options API), Vue CLI
- **Styling**: Plain CSS with a global stylesheet (`src/assets/styles.css`)
- **HTTP Client**: Axios
- **Version Control**: Git & GitHub

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)
- Git (for version control)

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ganga-Suren/Ad-Marki-Frontend.git
   cd Ad-Marki-Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env.development` file** in the project root:

   ```bash
   VUE_APP_API_URL=http://localhost:8000   # your FastAPI server URL
   ```

4. **Ensure `.gitignore` excludes**:
   - `node_modules/`
   - `dist/` or build output
   - `.env*` files
   - Editor/OS artifacts (`.DS_Store`, `.vscode/`, etc.)

## 🛠️ Configuration

- **API URL**: Modify `VUE_APP_API_URL` in `.env.development` to point at your FastAPI backend.
- **Port**: Vue CLI defaults to `localhost:8080`; you can change it in `vue.config.js` if needed.

## ▶️ Running the App

```bash
# starts the development server
npm run serve
```

Open your browser at `http://localhost:8080` to view AdMarki.  
Hot‑reload is enabled for rapid development.

## 📁 Project Structure

```
Ad-Marki-Frontend/
├── public/
│   └── index.html          # HTML template & favicon
├── src/
│   ├── assets/
│   │   └── styles.css      # global CSS styles
│   ├── components/         # reusable UI components
│   ├── views/              # page‑level components (e.g. UserForm.vue)
│   ├── api.js              # preconfigured Axios client
│   ├── App.vue             # root component
│   └── main.js             # app bootstrap & global imports
├── .env.development        # environment variables
├── .gitignore              # excludes node_modules, build files, env
├── package.json            # project metadata & scripts
└── README.md               # this documentation
```

## 🧭 Usage

1. Scroll through the **Hero** banner and **Navigation** for context.
2. View **About Us** and **What We Offer** sections.
3. Fill in the **Get Started** form and click **Submit**.
4. Check your FastAPI server logs or browser console to confirm the POSTs.

## ✨ Extending & Customization

- **Add more form fields**: Duplicate the Vue template blocks in `views/UserForm.vue`.
- **Integrate Facebook API**: Replace mock endpoints in `src/api.js` with real SDK calls or HTTP requests.
- **Theming**: Modify CSS variables in `styles.css` (`--brand-blue`, `--brand-orange`).
- **Routing**: Install and configure Vue Router to turn each section into a separate route and dynamic page title.
- **State Management**: Add Pinia or Vuex under `src/store/` to handle form data across components.

## 👤 Authors

- [Ganga Surendra Basva](https://github.com/Ganga-Suren)
- [Friend’s Name](https://github.com/KranthiPedamajji)
