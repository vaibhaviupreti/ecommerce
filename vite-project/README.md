This is a complete e-commerce project
It demonstrates All the important functionalities for an E commerce web-application.

<b>Technologies used for this project are:</b>
Front-end: React JS,
Styling: TailWind and Tailwind MaterialUI,
Backend: Firebase(& its Features like: authentication, and firestore),
Data Managagement: Redux,
Context API,
Payment Gateway: Razorpay
<b>
STEP 1: Complete Project setup: Create a new react project using vite js(create a file and open in VS Code/text-editor)
</b>
    - npm create vite@latest

    - npm i (Install NPM)

    - npm install -D tailwindcss postcss autoprefixer (Install tailwind Css)

    - npx tailwindcss init -p

    - Add the paths to all of your template files in your tailwind.config.js file.
    /** @type {import('tailwindcss').Config} \*/
    export default {
    content: [
    "./index.html",
    "./src/**/\*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

    - Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    - npm run dev

<b>
Step 2: Creating important Folders
</b>

- src
  - components
  - context
  - pages
  - redux
  - firebase

Create Navbar Folder

- components
  - navbar
    - Navbar.jsx (write RFC)

Create Footer Folder

- components
  - footer
    - Footer.jsx

Create Layout Folder

- components

  - layout

    - Layout.jsx

    import React from 'react' <br>
    import Footer from '../footer/Footer' <br>
    import Navbar from '../navbar/TopNvbar' <br>

    function Layout({ children }) { <br>
    return ( <br>
    <div> <br>
    <Navbar /> <br>
    <div className="content"> <br>
    {children} <br>
    </div> <br>
    <Footer / > <br>
    </div> <br>
    ) <br>
    }

export default Layout
<b>NOTE:</b> The Layout component is like a blueprint for web pages. It ensures that all pages in a website look similar by organizing the header (with navigation), main content (where different stuff goes on each page), and footer in a consistent way. This blueprint makes it easier to build, update, and manage the website, keeping everything neat and tidy.

 Create Pages 
- pages
  - home
    - Home.jsx
  - allproducts
    - AllProducts.jsx
  - Order
    - Order.jsx
  - cart
    - Cart.jsx
  - admin
    - dashboard
      - Dashboard.jsx
  - nopage
    - NoPage.jsx

Example: Importing Layout in Home.jsx

import React from 'react'
import Layout from '../../components/layout/Layout' (...1)

function Home() {
  return (
    <Layout>Home</Layout> (...2)
  )
}

export default Home

<b>Creating routes for all the pages</b>

npm i react-router-dom
<Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        .....
        </Routes>
    </Router>

<b>Use of Context api:</b>
context
  data
      myContext.jsx (boiler_code:rafc) : In this file context is imported from react then stored in a variable and exported for further use.
      myState.jsx



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
