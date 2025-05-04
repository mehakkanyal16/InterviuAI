# 🎤 **InterviuAI**

**InterviuAI** is an AI-powered platform that simulates real interview experiences, assesses your responses in real-time, and delivers tailored feedback — helping you get job-ready with confidence.
![InterviuAI Demo](/public/landingpage.png)
---

## 🔧 **Tech Stack**

| Layer             | Technology                                  |
|-------------------|---------------------------------------------|
| **Framework**      | Next.js 14                                  |
| **Authentication** | Clerk                                       |
| **Database ORM**   | Drizzle ORM                                 |
| **Database**       | PostgreSQL (Neon.tech cloud DB)             |
| **AI Services**    | Gemini AI API                               |
| **Styling**        | Tailwind CSS                                |
| **Deployment**     | Vercel (recommended)                        |

---

## 🚀 **Features**

- 🎙️ **AI-generated mock interviews**
- 📹 **Web-based interface with video + audio input**
- 🧠 **Real-time response evaluation using Gemini API**
- 📊 **Instant feedback & correct answer comparison**
- 🔒 **Secure auth system with Clerk**
- 🗂️ **Scalable PostgreSQL database with Drizzle ORM**

---


## 🛠️ Getting Started with InterviuAI

Follow these steps to get your project up and running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/interviuAI.git
2. Navigate to the project folder:

   ```bash
   cd interviuAI
3. Install dependencies:

   ```bash
    npm install
4. Set up environment variables:

- Create a `.env.local` file in the root directory.
- Paste the following environment variables inside it:

   ```bash

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
    CLERK_SECRET_KEY=your-secret-key
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_DRIZZLE_DB_URL=your-database-url
    NEXT_PUBLIC_GEMINI_API_KEY=your-api-key

5. Set up the database:

- Make sure your PostgreSQL database is correctly connected and accessible via the NEXT_PUBLIC_DRIZZLE_DB_URL.
- Run the following command to set up the database:

   ```bash

    npx drizzle-kit push
6. Run the development server:
    ```bash
    npm run dev
- Access your app at: http://localhost:3000

---

## 💡 Usage Notes

- 🔐 **Clerk** handles user auth and route protection.
- 🧠 **Gemini API** generates questions and evaluates answers.
- 🎤 **AI interviews** simulate realistic behavioral and technical Q&A sessions.
- 📊 At the end of each session, a **detailed report** is shown.
- ✅ Answers are **not stored or recorded**.

---


