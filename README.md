
📁 Final Code Structure

KeshavSoft-Task2/
├── dist/                          # Compiled HTML, CSS, JS (Final Output)
│   ├── assets/
│   │   ├── style.css
│   │   └── script.js
│   ├── index.html                 # Rendered Nunjucks
│   ├── about.html                 # Rendered Nunjucks
│   └── contact.html               # Rendered Nunjucks
├── scripts/
│   ├── copy-assets.js             # Node script to copy assets to dist/
│   └── render-nunjucks.js         # Node script to compile .njk files to .html
├── src/
│   ├── assets/                    # Source location for all static assets
│   │   ├── style.css
│   │   └── script.js
│   └── templates/                 # Nunjucks source files
│       ├── base.njk               # Master layout (includes dependencies, navbar, footer, modals)
│       ├── index.njk              # Homepage content
│       ├── about.njk              # About page content
│       ├── contact.njk            # Contact page content
│       └── partials/
│           ├── navbar.njk         # Full Bootstrap Navbar component
│           ├── footer.njk         # Full Footer component
│           └── modals.njk         # All modal definitions (Login, Signup, Demo, Services)
├── .gitignore
├── package.json                   # Defines dependencies and build scripts
├── README.md                      # Project documentation
└── vite.config.js                 # Vite configuration for dev server and build paths
🚀 TechFlow: Digital Transformation Solutions (Nunjucks + Vite)
This project is a recreation of the TechFlow business website (originally built in Task 1 as static HTML/CSS/JS) using a modern static site architecture. It demonstrates proficiency in templating, asset management, and modular front-end development, fulfilling the requirements of Internship Task 2.


💻 Stack
Category	Technology	Purpose
Templating Engine	Nunjucks	
For building reusable components, layout inheritance, and dynamic page generation.

Bundler / Task Runner	Vite	
For running a fast development server and bundling assets.

Framework & Styling	Bootstrap 5.3.3	For responsive design, components, and utility classes.

EXPORT TO SHEETS
✨ Site Features
The TechFlow website is a fully responsive, multi-page site, maintaining exact parity with the Task 1 deliverables.

Modular Layout: The entire site structure (navigation, loader, back-to-top, footer, and modals) is managed centrally in base.njk using Nunjucks includes, ensuring a single source of truth for the UI.

Dynamic Data & Interactivity: Includes custom counter and progress bar animations for statistics (Features and Services sections) driven by JavaScript and the IntersectionObserver.

Complete Forms & Modals: Features functional Bootstrap modals for Login, Get Started (Signup), Demo Video (Rickroll), and detailed Service information. Client-side validation is included for forms.

UI/UX: Utilizes AOS for scroll animations and implements the custom gradient color scheme defined in style.css.

🛠️ Setup and Development
This guide assumes you have Node.js and npm installed.

Install Dependencies:

Bash

npm install
Development Server: Runs the Vite dev server, primarily for live-reloading CSS/JS assets within src/assets/.

Bash

npm run dev

Build Project: Compiles the final static files into the dist/ directory. This script runs in three stages:

vite build (Handles JS/CSS minification and copying)

node scripts/copy-assets.js (Ensures all source assets are moved)

node scripts/render-nunjucks.js (Compiles all .njk templates into .html)

Bash

npm run build
🧠 Task Reflection: Labor and Learning
This task successfully recreated a complex front-end UI/UX using a robust templating workflow.

👷 My Labor and Contribution
Build Pipeline Integration: My primary labor involved engineering the custom Node.js build pipeline (copy-assets.js and render-nunjucks.js) to ensure Nunjucks compilation executed correctly alongside Vite's asset handling.

Templating and Structure: I manually translated the original complex static HTML of all pages into the highly modular Nunjucks structure, focusing on componentizing the Navbar, Footer, and Modals to enforce the DRY principle.

Feature Integrity: I was responsible for verifying that all complex JavaScript functionality (counters, progress bars, form validation) maintained perfect working order after migration to the templated environment.

🤖 Assistance from AI
Dependency Identification: The AI assistant was critical in reviewing the initial base.njk and accurately listing the 20+ missing external CDN links (Bootstrap, AOS, Fonts) required for the UI to match Task 1's aesthetics and functionality, saving significant debugging time.

Structural Review: The AI provided the final, clean structure for the partials (Navbar, Footer, Modals), ensuring all necessary Bootstrap classes and links were correctly included in the right Nunjucks files.

📈 Key Learnings
Nunjucks Modularity: I gained deep practical experience using {% extends %}, {% block %}, and {% include %} to create highly maintainable and scalable front-end code, proving that templating vastly improves efficiency over static HTML.

Vite Customization: I learned how to move beyond basic bundling by integrating custom Node scripts into the Vite lifecycle, which is essential for working with static site generators like Nunjucks that require pre-rendering steps.


Front-End Architecture: This task solidified the Jamstack approach, where the separation of concerns between templating (Nunjucks for content/structure), styling (CSS/Bootstrap), and data/logic (JS/Vite) leads to faster development and deployment.