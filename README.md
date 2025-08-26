# Angular Day 1 Project - Phase 2

A simple Angular application demonstrating basic routing and component structure, built as part of Angular learning journey.

## 🚀 Features

- **Routing**: Navigation between Dashboard, Login, and Bug pages
- **Component Architecture**: Standalone components with separate HTML, CSS, and TypeScript files
- **Modern Angular**: Built with Angular's latest standalone component approach
- **Responsive Design**: Clean and modern UI with hover effects

## 📁 Project Structure

```
src/
├── index.html
├── main.ts
├── styles.css
└── app/
    ├── app.config.ts
    ├── app.css
    ├── app.html
    ├── app.routes.ts
    ├── app.spec.ts
    ├── app.ts
    └── pages/
        ├── bug/
        │   ├── bug.css
        │   ├── bug.html
        │   └── bug.ts
        ├── dashboard/
        │   ├── dashboard.css
        │   ├── dashboard.html
        │   └── dashboard.ts
        └── login/
            ├── login.css
            ├── login.html
            └── login.ts
```

## 🛠️ Technologies Used

- **Angular 17+** - Frontend framework
- **TypeScript** - Programming language
- **CSS3** - Styling
- **Angular Router** - Navigation

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adrin-Bershik-C-J/angular-day1-proj1-phase2.git
   cd angular-day1-proj1-phase1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## 🎯 Available Routes

- `/dashboard` - Main dashboard page (default route)
- `/login` - Login page
- `/bug` - Bug tracking page

## 🔧 Development Commands

- `ng serve` - Start development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests
- `ng lint` - Run linting

## 📝 Components Overview

### AppComponent
- Main application component with navigation
- Uses Angular signals for reactive title management
- Implements router outlet for page navigation

### Dashboard Component
- Welcome page displaying project introduction
- Simple layout with heading and description

### Login Component
- Placeholder login page (to be implemented)

### Bug Component
- Placeholder bug tracking page (to be implemented)

## 🎨 Styling

The application features a modern design with:
- Dark navigation bar with smooth hover transitions
- Centered layout and clean typography
- Active route highlighting
- Consistent color scheme using professional palette

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment with your own features!

## 👨‍💻 Author

**Adrin Bershik C J**
- GitHub: [@Adrin-Bershik-C-J](https://github.com/Adrin-Bershik-C-J)

---

*This project is part of Angular learning series - Day 1, Project 1, Phase 2*
