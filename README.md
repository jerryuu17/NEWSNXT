# 📢 NEWSnxt – Crowd-Sourced News Platform

### 🌍 Democratizing News with People’s Voices & AI Verification

---

## 📖 Overview

**NEWSnxt** is a next-generation **crowd-sourced news platform** where real people become reporters of their surroundings.
Users can post news happening in their locality, and people within a **5 km radius** can **verify its authenticity** by voting **True** or **False**.

If a news item crosses a **trust threshold**, it gets **published to the platform**.

Alongside crowd-sourced news, **NEWSnxt integrates trusted global news APIs**, making it a **hybrid platform** of professional + community news.

We also use an **AI/ML model** for verification support and provide multilingual accessibility with support for **10+ Indian languages**.

---

## ✨ Features

✅ **Crowd-Sourced Reporting** – Anyone can post local news from their location.
✅ **Radius-Based Verification** – Users within **5 km** can verify news authenticity.
✅ **Voting Mechanism** – If votes cross threshold → news is published.
✅ **Gamification** – Users earn **points & credibility scores** for participation.
✅ **Integrated News API** – Shows latest headlines from trusted sources.
✅ **AI/ML Verification** – Machine Learning helps detect fake/misleading news.
✅ **Multi-Language Support** – News available in **10+ Indian languages**.
✅ **Responsive UI** – Built with **ReactJS + Vite** for fast and modern experience.

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript, ReactJS (Vite)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JWT (JSON Web Tokens) / OAuth (planned)
* **ML Model:** Fake News Detection (Python integration or API based)
* **Deployment:** Netlify / Vercel (Frontend), Render / Railway (Backend)
* **Other Tools:** Git, GitHub, Postman, CORS, dotenv

---

## 📂 Folder Structure

```bash
NEWSnxt/
│── client/             # ReactJS frontend (Vite)
│   ├── public/         # Static assets
│   ├── src/            # Components, Pages, Hooks
│   ├── package.json
│
│── server/             # Node.js + Express backend
│   ├── models/         # MongoDB Schemas
│   ├── routes/         # API Routes
│   ├── controllers/    # Business logic
│   ├── app.js          # Main server file
│   ├── package.json
│
│── .gitignore
│── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/NEWSnxt.git
cd NEWSnxt
```

### 2. Setup Backend

```bash
cd server
npm install
npm start
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

### 4. Environment Variables

Create `.env` files in **client** and **server**.

**Frontend (`client/.env`)**

```
VITE_NEWS_API_KEY=your_api_key_here
```

**Backend (`server/.env`)**

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 📊 Workflow

1. **User posts news** with location data.
2. **Nearby users** (within 5 km) receive a verification request.
3. Votes **True/False** determine credibility.
4. If **threshold reached → published** on main feed.
5. **ML Model** cross-verifies authenticity.
6. Users **earn points** for posting/verifying.
7. **News API integration** ensures hybrid content.

---

## 🤖 Machine Learning (Planned)

* Fake news detection using **NLP techniques**.
* Model trained on datasets of verified vs fake articles.
* Integrated with backend via **Flask API / TensorFlow\.js**.

---

## 🌐 Multi-Language Support

* Hindi 🇮🇳
* English 🇬🇧
* Bengali 🇧🇩
* Tamil 🇮🇳
* Telugu 🇮🇳
* Kannada 🇮🇳
* Marathi 🇮🇳
* Gujarati 🇮🇳
* Malayalam 🇮🇳
* Punjabi 🇮🇳
* * More planned…

---

## 🏆 Gamification

* **+10 points** for posting news.
* **+5 points** for verifying news.
* **+20 points** if posted news is verified as true.
* **Credibility Score**: higher scores = trusted reporter badge.

---

## 📸 Screenshots (to add later)

*(UI previews of posting, verifying, and published news feed)*

---

## 📌 Roadmap

* [ ] Authentication system (Google / OTP login)
* [ ] Mobile App version (React Native / Flutter)
* [ ] Advanced AI verification model
* [ ] Regional news clustering
* [ ] Leaderboards & rewards system

---

## 🤝 Contributing

We welcome contributions! 🎉

* Fork the repo
* Create a new branch (`feature-new`)
* Commit changes
* Open a PR

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Authors

* **Kshitij Sinha** – Developer of NEWSnxt
* Contributions are welcome!
