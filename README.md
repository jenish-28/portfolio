# Jenishkumar Patel — Developer Portfolio

> Personal portfolio website for Jenishkumar Patel, a Full-Stack Software Developer based in Germany.

This portfolio showcases professional experience, technical skills, education, selected software projects, and a working contact form.

## 🌐 Portfolio

**Live Portfolio:**  
[https://jenishpatel-portfolio.vercel.app](https://jenishpatel-portfolio.vercel.app)

The application is built as a single-page portfolio with sections for:

- About
- Skills
- Experience
- Projects
- Education
- Contact

---

## ✨ Features

### Portfolio Experience

- Responsive developer portfolio for desktop, tablet, and mobile
- Animated hero section with rotating typewriter taglines
- Smooth section navigation
- Active navigation state based on scroll position
- Animated content sections using Framer Motion
- Dark developer-focused visual design
- Responsive mobile navigation
- Downloadable CV link

### Developer Information

The portfolio presents:

- Full-Stack Software Developer profile
- Technical skills grouped by category
- Professional experience
- Education history
- English and German language information
- Selected projects
- GitHub and LinkedIn links
- Direct email and phone contact

### Contact Form

The portfolio includes a server-side contact API using a Next.js Route Handler and Resend.

The form:

1. Accepts name, email, and message.
2. Validates required fields.
3. Validates the email format.
4. Requires a minimum message length.
5. Sends the message through Resend.
6. Returns success or error responses to the frontend.
7. Uses the visitor's email as the reply-to address.

Endpoint:

~~~text
POST /api/contact
~~~

The Resend API key is read from the server-side `RESEND_API_KEY` environment variable.

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

### Application / Backend

- **Next.js App Router**
- **Next.js Route Handlers**
- **Resend**
- **TypeScript REST-style API endpoint**

### Development & Deployment

- Node.js
- npm
- ESLint
- Git
- GitHub
- Vercel

---

## 🏗️ Application Architecture

~~~text
                    Portfolio Website
                           │
                           ▼
                  Next.js App Router
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
        Portfolio UI              Contact API
              │                         │
       React Components              Resend
              │                         │
              └────────────┬────────────┘
                           ▼
                    Email Delivery
~~~

The application uses the Next.js App Router. Portfolio content is maintained in a central data module, while reusable React components render each section of the page.

---

## 📂 Project Structure

~~~text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout and metadata
│   ├── page.tsx                # Main portfolio page
│   └── icon.tsx                # Dynamic site icon
│
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
│
├── lib/
│   └── data.ts                 # Portfolio content and data
│
├── public/                     # Static assets
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
~~~

---

## 📊 Portfolio Content

The portfolio data is maintained in `lib/data.ts`.

### Skills

The current portfolio groups skills into:

| Category | Technologies |
|---|---|
| Languages | Python, JavaScript, TypeScript, SQL |
| Frontend | React, Next.js, HTML5, CSS, Tailwind CSS |
| Backend | FastAPI, Node.js, Express.js |
| Architecture | RESTful APIs, Clean Architecture, OAuth2, JWT |
| Cloud / DevOps | Azure DevOps, AWS, Docker, CI/CD, Git, GitHub Actions |
| Databases | MySQL, MongoDB, PostgreSQL |

### Experience

The portfolio currently contains experience entries for:

- **AI & IT Engineer — KI-E-RO Swiss**
- **Software Developer — Toshal Infotech**
- **Software Developer — Infinity IT Solution**

### Education

The portfolio currently lists:

- **M.Sc. Applied Computer Science — Hochschule Schmalkalden, Germany**
- **B.E. Computer Engineering — Gujarat Technological University, India**

### Selected Projects

The current project cards include:

- **Finstgram API**
- **Registration System**
- **Analytics Dashboard**

Project descriptions and technology tags are maintained in `lib/data.ts`.

---

## 🚀 Getting Started

### Prerequisites

Install:

- Node.js
- npm

### 1. Clone the repository

~~~bash
git clone https://github.com/jenish-28/portfolio.git
cd portfolio
~~~

### 2. Install dependencies

~~~bash
npm install
~~~

### 3. Configure the contact form

Create a `.env.local` file in the project root:

~~~env
RESEND_API_KEY=your_resend_api_key
~~~

The API key is required by `/api/contact`.

**Never commit `.env.local` or a real API key to Git.**

### 4. Start the development server

~~~bash
npm run dev
~~~

Open:

~~~text
http://localhost:3000
~~~

---

## 🧪 Available Commands

### Development

~~~bash
npm run dev
~~~

Starts the Next.js development server.

### Production build

~~~bash
npm run build
~~~

Creates an optimized production build.

### Production server

~~~bash
npm start
~~~

Starts the production Next.js server after a successful build.

### Lint

~~~bash
npm run lint
~~~

Runs ESLint.

---

## ☁️ Deployment

The project is configured as a Next.js application and is suitable for deployment on Vercel.

Typical deployment flow:

~~~text
Local Development
       │
       ▼
     GitHub
       │
       ▼
     Vercel
       │
       ▼
 Production Website
~~~

For the contact form to work in production, configure:

~~~text
RESEND_API_KEY
~~~

in the deployment environment.

---

## 🔐 Security

The contact API performs server-side validation before sending email:

- Required-field validation
- Email-format validation
- Minimum message-length validation
- Server-side Resend API key usage

The Resend API key is accessed through an environment variable and is not part of the client-side form submission.

Before deployment, make sure production environment variables are configured through the hosting platform rather than committed to the repository.

---

## 🎨 Design & UX

The portfolio uses a dark, developer-oriented visual style with:

- Cyan/teal accent colors
- Monospace typography for technical elements
- Animated section entrances
- Interactive navigation
- Responsive cards
- Mobile navigation
- Typewriter-style hero content
- Smooth scrolling
- Hover interactions
- Accessible form labels and controls

Framer Motion is used for page-section and interaction animations.

---

## 👨‍💻 About

**Jenishkumar Patel** is a Full-Stack Software Developer based in Germany and an M.Sc. Applied Computer Science student.

The portfolio focuses on software development across:

- React and Next.js
- Python and FastAPI
- REST APIs
- Full-stack web applications
- Clean architecture
- Authentication
- Databases
- Cloud and DevOps tooling

---

## 🔗 Links

- **Portfolio:** [https://jenishpatel-portfolio.vercel.app](https://jenishpatel-portfolio.vercel.app)

- **GitHub:** https://github.com/jenish-28
- **LinkedIn:** https://www.linkedin.com/in/jenishkumar-patel-634770394/

---

## 📄 License

No separate license file is currently included in the repository.

© Jenishkumar Patel
