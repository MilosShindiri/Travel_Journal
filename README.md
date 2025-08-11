# 🌏 Travel Journal

A simple React app for showcasing travel destinations, built with [Vite](https://vitejs.dev/) for fast development and hot module replacement.

## Features

- 📍 Displays a list of travel entries with images, country, dates, and descriptions
- 🗺️ Google Maps links for each location
- 🖼️ Responsive and clean UI
- ⚡️ Powered by React 19 and Vite

## Project Structure

Travel_Journal/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Entry.jsx
│   │   └── ... (other reusable components)
│   ├── data/
│   │   └── travelData.js
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   ├── index.jsx
│   └── utils/
│       └── helpers.js
├── .gitignore
├── package.json
├── README.md
└── vite.config.js


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/travel-journal.git
   cd travel-journal
2. **Install dependencies:**
   ```
   npm install
3. **Start the development server:**
  ```
  npm run dev
  ```
4. **Open in your browser:**
     ```
     Visit http://localhost:5173 (or the URL shown in your terminal).

The production-ready files will be in the `dist/` directory.

## Customization

**Add/Edit Entries:**  
Modify `src/data/travelData.js` to add or update travel destinations.

**Images:**  
Place custom images in the `src/assets/images/` folder and update the data accordingly.

## Tech Stack

- React
- Vite
- ESLint (with React Hooks and Refresh plugins)
