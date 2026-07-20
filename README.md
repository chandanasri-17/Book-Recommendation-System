# 📚 Book Recommendation System

A simple web-based **Book Recommendation System** that helps users discover books based on their reading preferences. The application uses a short interactive quiz to understand user interests and recommends books from a built-in collection. Users can also save their favorite books in a wishlist.

---

## 📖 Project Overview

Choosing the right book can be overwhelming due to the vast number of options available. This Book Recommendation System simplifies the process by asking users five preference-based questions and suggesting books that best match their interests.

The project is built entirely using **HTML, CSS, and JavaScript**, making it lightweight, fast, and easy to run in any modern web browser without requiring a backend or database.

---

## ✨ Features

- 📚 Interactive 5-question recommendation quiz
- 🎯 Personalized book recommendations
- 📈 Animated quiz progress bar
- ❤️ Add and remove books from a wishlist
- 🔄 Retake the quiz anytime
- 📱 Responsive design for desktop, tablet, and mobile
- ⚡ Instant recommendations without page reload
- 📖 Built-in catalog of books

---

## 📝 Recommendation Criteria

The system recommends books based on the user's preferences for:

- Genre
- Reading Length
- Book Era (Classic or Contemporary)
- Reading Mood
- Reading Experience Level

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```text
Book_rs/
│
├── Book Data Module/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
└── README.md

## ⚙️ How It Works

### 1. User Quiz

The user answers five questions related to their reading preferences.

### 2. Preference Analysis

The selected answers are temporarily stored using JavaScript objects.

### 3. Recommendation Engine

The application filters the available book collection according to the user's preferences. If very few books match, the filtering conditions are relaxed to provide suitable recommendations.

### 4. Wishlist

Users can save or remove recommended books from their wishlist during the current session.

---

## 🚀 How to Run the Project

### Method 1

Simply open the following file in your browser:

```text
index.html
```

### Method 2

Run a local server:

```bash
python3 -m http.server 8000
```

Then visit:

```
http://localhost:8000
```

---

## 📸 Application Screens

- 🏠 Home Page
- 📝 Preference Quiz
- 📚 Recommended Books
- ❤️ Wishlist

*(Add screenshots here if available.)*

---

## ⚠️ Known Issues

- The cover image for **The Silent Patient** uses a local Windows file path and should be replaced with a valid online image URL.
- Quiz preference keys are generated from question headings, so changing the question text may affect recommendation logic.
- Wishlist and quiz progress are stored only in memory and are reset when the page is refreshed.

---

## 🚀 Future Enhancements

- Store wishlist using Local Storage
- User authentication and profiles
- Search books by title or author
- Book ratings and reviews
- Integration with Google Books API
- AI/ML-based recommendation engine
- Dark mode support
- Personalized reading history

---

## 🎯 Learning Outcomes

This project helped in understanding:

- HTML page structure
- CSS styling and responsive design
- JavaScript DOM manipulation
- Event handling
- Array filtering and recommendation logic
- Client-side state management
- Dynamic content rendering

---

## 📄 License

This project is developed for educational and learning purposes.

---

## 👨‍💻 Author

**Book Recommendation System**  
Developed as a front-end web application using HTML, CSS, and JavaScript.
