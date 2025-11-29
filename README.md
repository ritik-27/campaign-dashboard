# Campaign Dashboard

A modern, responsive campaign management dashboard built with React and Material-UI. This application provides an intuitive interface for tracking and analyzing campaign performance metrics.

## Features

- **Interactive Dashboard**: Real-time campaign metrics and performance tracking
- **Data Visualization**: Beautiful charts and graphs powered by Recharts
- **Responsive Design**: Fully responsive UI built with Material-UI components
- **Modern UI/UX**: Clean and intuitive interface with Material Design principles
- **Fast Development**: Lightning-fast HMR (Hot Module Replacement) with Vite
- **Routing**: Smooth navigation between pages with React Router


## Tech Stack

- **React**
- **Vite**
- **Material-UI (MUI)**
- **Recharts**
- **React Router DOM** 

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ritik-27/campaign-dashboard. git
cd campaign-dashboard
```

2. Install dependencies:
```bash
npm install
```

## Getting Started

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will open at `http://localhost:5173` (default Vite port)


### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
campaign-dashboard/
├── public/           
├── src/             
│   ├── assets/styles 
|   |
|   ├── components/ 
|   |   ├── campaign/
|   |   |   |── CampaginChart/
|   |   |   |── CampaignInfo/
|   |   |   |── CampaignTable/
|   |   |   |── Pagination/
|   |   |   |── StatusBadge/
|   |   |   └── WhatsappPreview/
|   |   |
|   │   └── layout/
|   |       |── Header/
|   |       |── MainLayout/
|   |       └── Sidebar/
|   |
|   ├── pages/
|   |   ├── CampaignDetails/
|   |   ├── CampaignList/
|   |   ├── ComingSoon/
|   │   └── Dashboard/
|   |
|   ├── data/
|   │   └── campaignsData.js
|   |
|   ├── routes/
|   │   └── index.js
|   |
|   ├── services/
|   │   └── campaignService.js
|   |
|   ├── utils/
|   │   └── constants.js
|   |
|   ├── App.jsx
|   ├── App.css
|   ├── main.jsx
│   └── index.css
|
├── index.html       
├── package.json   
└── vite.config.js   
```

## UI Components

This project uses Material-UI (MUI) which provides:
- Pre-built React components
- Material Design icons via `@mui/icons-material`
- Responsive grid system


## Data Visualization

Charts and graphs are powered by Recharts, offering:
- Line charts
- Bar charts
- Pie charts
