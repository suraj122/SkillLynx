# Project Title

**SkillLynx**

- https://skilllynx.vercel.app/

## Description

Welcome to SkillLynx, a powerful course app built with Vite and React. SkillLynx allows users to sign up, log in, explore a wide range of courses, and make purchases. The app also features an admin panel where administrators can log in, sign up, create courses, and publish or keep them unpublished. This README provides essential information to set up, run, and deploy the SkillLynx Course App.

### Installation

1. Clone the repository to your local machine using the following command:

```
  git clone https://github.com/suraj122/SkillLynx.git

```

2. Navigate to the project directory:

```
  cd skilllynx-course-app
```

3. Install the project dependencies using npm or yarn:

```
  npm install
```

or

```
  yarn
```

### Development

To start the development server, run the following command:

```
  npm run dev
```

or

```
  yarn dev
```

The development server will be up and running at http://localhost:5173/. You can now explore the app and its functionalities during development.

### Features

- **User Authentication**: SkillLynx supports user signup and login features, allowing users to create an account and access personalized courses.

- **Course Exploration**: Users can browse through a vast library of courses available on SkillLynx, gaining insights into each course's details and content.

- **Course Purchase**: SkillLynx enables users to buy courses they are interested in, unlocking access to the course materials.

- **Admin Panel**: Administrators can log in, sign up, and access the admin panel. From here, they can create new courses, edit course details, and choose to publish or keep courses unpublished.

### Building for Production

To build the project for production, run the following command:

```
  npm run build
```

or

```
  yarn build
```

The production-ready optimized files will be generated in the dist directory.

### Deployment

After building the project, you can deploy the contents of the dist directory to your web server or hosting platform.

### Folder Structure

Contributors names and contact info

```
skilllynx/
├── public/
│   ├── index.html
│   └── logo.png
├── src/
│   ├── common/
│   ├── components/
│   ├── store/
│   ├── utils.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vite.config.js
├── index.html
└── README.md
```

- **public**: Contains static files like index.html and any other assets that need to be served directly.

- **src**: Contains the main source code for the SkillLynx Course App.
- **src/pages**: Contains user-facing hopme pages
- **src/components**: Contains user and admin related components.
- **vite.config.js**: Configuration file for Vite, where you can customize project settings and plugins.

### Customization

Feel free to customize SkillLynx Course App according to your specific needs. You can add or remove dependencies, update the folder structure, and modify the vite.config.js file to suit your requirements.

### Contributing

If you wish to contribute to this project, please follow the standard guidelines for pull requests and code contributions.

---

Thank you for choosing SkillLynx Course App! If you have any questions or feedback, please don't hesitate to reach out. Happy learning!
