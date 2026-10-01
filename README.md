# Jenishkumar Patel — Developer Portfolio

A modern, responsive personal portfolio built with **Next.js, React, TypeScript, and Tailwind CSS**.

The portfolio presents my software development experience, technical skills, education, selected projects, and a contact form for professional opportunities.

## 🌐 Live Portfolio

**[Visit my portfolio](https://jenishpatel-portfolio.vercel.app)**

---

## ✨ Features

- 🎯 Clean, modern developer-focused design
- 📱 Fully responsive across desktop, tablet, and mobile
- 🧑‍💻 Hero section with developer introduction
- 👤 About section
- 🛠️ Technical skills grouped by category
- 💼 Professional experience timeline
- 🚀 Selected projects section
- 🎓 Education section
- 📩 Working contact form
- ✉️ Contact form email delivery with Resend
- 🎨 Smooth UI animations with Framer Motion
- ⚡ Next.js App Router architecture
- 🔎 ESLint and TypeScript support

---

## 🧰 Tech Stack

### Frontend

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

### Backend / Services

- **Next.js Route Handlers**
- **Resend**
- **REST API**

### Development Tools

- **Node.js**
- **npm**
- **ESLint**
- **Git & GitHub**
- **Vercel**

---

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API
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
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jenish-28/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

The API key is used by the contact form to send portfolio messages through Resend.

> **Important:** Never commit `.env.local` or expose your API key publicly.

### 4. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 📩 Contact Form

The portfolio includes a server-side contact endpoint:

```text
POST /api/contact
```

The endpoint:

1. Receives the visitor's name, email, and message.
2. Validates required fields.
3. Validates the email format.
4. Requires a minimum message length.
5. Sends the message using **Resend**.
6. Returns an appropriate success or error response.

The email configuration is kept server-side through the `RESEND_API_KEY` environment variable.

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

Run ESLint:

```bash
npm run lint
```

---

## ☁️ Deployment

This project is designed for deployment on **Vercel**.

Typical deployment flow:

```text
GitHub Repository
       ↓
     Vercel
       ↓
Production Portfolio
```

When deploying, make sure the `RESEND_API_KEY` environment variable is configured in the Vercel project settings.

---

## 👨‍💻 About Me

I'm **Jenishkumar Patel**, a Full-Stack Software Developer based in Germany and an M.Sc. Applied Computer Science student.

My development interests include:

- Full-stack web development
- React and Next.js applications
- Python and FastAPI backends
- REST API development
- AI and automation
- Clean and maintainable software architecture

I'm interested in opportunities where I can build practical software, solve real-world problems, and continue growing as a software developer.

---

## 📬 Connect With Me

- **Portfolio:** [jenishpatel-portfolio.vercel.app](https://jenishpatel-portfolio.vercel.app)
- **GitHub:** [@jenish-28](https://github.com/jenish-28)
- **LinkedIn:** [Jenishkumar Patel](https://www.linkedin.com/in/jenishkumar-patel-634770394/)
- **Email:** 16jenishkumarpatel@gmail.com

---

## 📄 License

This project is a personal portfolio website.

© Jenishkumar Patel
