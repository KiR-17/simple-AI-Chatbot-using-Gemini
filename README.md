# 🤖 simple AI Chatbot using Gemini

---

A high-performance, full-stack chatbot application leverages the Gemini 2.5 Flash model. This project features stateful conversation persistence (memory) and high-fidelity Markdown rendering for AI responses.

---

## ✨ 2026 Key Features

-   **Ultra-Fast Backend:** Built with FastAPI and managed by astral-sh/uv.
-   **Modern UI:** Responsive chat bubbles with real-time "thinking" indicators.
-   **Real-time Interaction:** A chat interface with "typing" indicators.
-   **Gemini 2.5 Integration:** Uses the latest Flash model for low-latency, high-accuracy responses.
-   **Asynchronous Backend:** Built with FastAPI to handle multiple concurrent requests efficiently.

---

## 🛠️ Tech Stack

-   **Frontend:** [React](https://react.dev) + [Vite](https://vitejs.dev)
-   **Backend:** [FastAPI](https://fastapi.tiangolo.com) + [Google GenAI SDK](https://ai.google.dev)
-   **Dependency Manager:** ([Astral-sh/UV](https://pypi.org/project/uv/) (Python) & [NPM](https://www.npmjs.com) (Node)

---

## 🚀 Quick Start

### 1. Prerequisites

Ensure the latest versions of uv and Node.js are installed.

-   **Install uv:** `curl -LsSf https://astral.sh | sh`

### 2. Backend Setup

1.  Create a `.env` file in the root:

    ```env
    GEMINI_API_KEY=your_api_key_here
    ```
2.  Install dependencies and start the server:

    ```bash
    uv sync
    uv run fastapi dev main.py
    ```

    *The backend will run at `http://localhost:8000`.*

### 3. Frontend Setup

1.  Navigate to the frontend directory:

    ```bash
    npm install
    npm run dev
    ```

    *The frontend will run at `http://localhost:5173`.*

---

## 🔧 Code Improvements
Have to make changes-

1. 💬 Conversation Persistence

  The backend now utilizes `client.chats.create()` instead of one-off content generation. This allows the model to remember previous questions within a session.

2. 📝 Markdown Formatting

  The React frontend uses a specialized renderer to handle the model's output:

```jsx
<ReactMarkdown>{message.text}</ReactMarkdown>
