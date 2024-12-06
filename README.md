# Staff-board

https://steven2k2.github.io/staff-board/


```plaintext
staff-board/
├── src/
│   ├── components/                 # React components
│   │   ├── HomePage.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── utils/                      # Utility functions
│   │   ├── api.js                  # API utility
│   │   └── helpers.js              # Other reusable utilities
│   ├── styles/                     # Optional: CSS or SCSS files
│   │   └── HomePage.css
│   ├── App.jsx                     # Root React component
│   └── index.js                    # Entry point
├── __tests__/                      # Test files (alternatively, colocate tests)
│   ├── HomePage.test.js            # Tests for HomePage component
│   ├── api.test.js                 # Tests for API utility
│   └── helpers.test.js             # Tests for helper functions
├── jest.config.js                  # Jest configuration
├── jest.setup.js                   # Optional Jest setup file for mocks
├── babel.config.json               # Babel configuration
├── package.json                    # Project metadata and dependencies
└── node_modules/                   # Installed dependencies

```

Goals (CD)

1. Build Automation:
- [X] Project builds automatically upon a commit to the main branch.
2. 
3. Deployment Automation:
- [X] The deployment to GitHub Pages is automated, which constitutes the Continuous Deployment (CD) aspect.

3. Source Control Integration:
- [X] GitHub is used for version control, triggering the pipeline based on changes to the main branch.
