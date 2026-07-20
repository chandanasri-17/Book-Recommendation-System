// Book data
const books = [
    {
        id: 1,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        description: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
        image: "https://C:\Users\jagan\OneDrive\Desktop\Image 2025-05-01 at 20.43.16_98dd6105.jpg",
        genre: "mystery",
        length: "short",
        era: "contemporary",
        mood: "dark",
        level: "casual"
    },
    {
        id: 2,
        title: "Dune",
        author: "Frank Herbert",
        description: "A science fiction masterpiece about politics, religion, and ecology on a desert planet.",
        image: "https://m.media-amazon.com/images/I/41HoDfwIcCL._SY346_.jpg",
        genre: "sci-fi",
        length: "long",
        era: "classic",
        mood: "thoughtful",
        level: "avid"
    },
    {
        id: 3,
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        description: "A magical story about a case worker who is sent to evaluate six dangerous magical children.",
        image: "https://m.media-amazon.com/images/I/51HXRwgorOL._SY346_.jpg",
        genre: "fantasy",
        length: "medium",
        era: "contemporary",
        mood: "uplifting",
        level: "regular"
    },
    {
        id: 4,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description: "A look at how Homo sapiens evolved and became the dominant species on Earth.",
        image: "https://m.media-amazon.com/images/I/41+lolL22gL._SY344_BO1,204,203,200_.jpg",
        genre: "non-fiction",
        length: "medium",
        era: "contemporary",
        mood: "educational",
        level: "regular"
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic romance novel about manners, upbringing, and marriage in early 19th-century England.",
        image: "https://m.media-amazon.com/images/I/41JFqohNarL._SY346_.jpg",
        genre: "fiction",
        length: "medium",
        era: "classic",
        mood: "thoughtful",
        level: "regular"
    },
    {
        id: 6,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "An epic fantasy adventure about a quest to destroy a powerful ring to save Middle-earth.",
        image: "https://m.media-amazon.com/images/I/51r6XIPWmoL._SY346_.jpg",
        genre: "fantasy",
        length: "long",
        era: "classic",
        mood: "adventurous",
        level: "avid"
    },
    {
        id: 7,
        title: "Educated",
        author: "Tara Westover",
        description: "A memoir about overcoming a strict and abusive childhood to pursue education.",
        image: "https://m.media-amazon.com/images/I/41+aN7ZbS9L._SY346_.jpg",
        genre: "non-fiction",
        length: "medium",
        era: "contemporary",
        mood: "thoughtful",
        level: "casual"
    },
    {
        id: 8,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        description: "A group of septuagenarians meet weekly to solve cold cases, until a real murder occurs nearby.",
        image: "https://m.media-amazon.com/images/I/51Lcj7rKfYL._SY346_.jpg",
        genre: "mystery",
        length: "medium",
        era: "contemporary",
        mood: "uplifting",
        level: "casual"
    },
    {
        id: 9,
        title: "Project Hail Mary",
        author: "Andy Weir",
        description: "A lone astronaut must save humanity from extinction in this science fiction thriller.",
        image: "https://m.media-amazon.com/images/I/51b6fvQr-3L._SY346_.jpg",
        genre: "sci-fi",
        length: "medium",
        era: "contemporary",
        mood: "adventurous",
        level: "regular"
    },
    {
        id: 10,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A classic novel exploring themes of decadence, idealism, and the American Dream in the 1920s.",
        image: "https://m.media-amazon.com/images/I/41XMaCHkJ6L._SY346_.jpg",
        genre: "fiction",
        length: "short",
        era: "classic",
        mood: "dark",
        level: "regular"
    },
    {
        id: 11,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy adventure about a hobbit who is swept into an epic quest to reclaim a dwarf kingdom.",
        image: "https://m.media-amazon.com/images/I/51bjoG4K8DL._SY346_.jpg",
        genre: "fantasy",
        length: "medium",
        era: "classic",
        mood: "adventurous",
        level: "casual"
    },
    {
        id: 12,
        title: "Atomic Habits",
        author: "James Clear",
        description: "A practical guide to building good habits and breaking bad ones through small changes.",
        image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY346_.jpg",
        genre: "non-fiction",
        length: "short",
        era: "contemporary",
        mood: "educational",
        level: "casual"
    },
    {
        id: 13,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        description: "A reclusive Hollywood legend reveals the story of her scandalous life to a young journalist.",
        image: "https://m.media-amazon.com/images/I/41FYr12RflL._SY346_.jpg",
        genre: "fiction",
        length: "medium",
        era: "contemporary",
        mood: "thoughtful",
        level: "casual"
    },
    {
        id: 14,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        description: "A landmark book exploring the nature of space and time from the Big Bang to black holes.",
        image: "https://m.media-amazon.com/images/I/51+GySc8ExL._SY346_.jpg",
        genre: "non-fiction",
        length: "medium",
        era: "contemporary",
        mood: "educational",
        level: "avid"
    },
    {
        id: 15,
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        description: "Detective Hercule Poirot investigates a murder on a snowbound luxury train.",
        image: "https://m.media-amazon.com/images/I/51VtYRVPtQL._SY346_.jpg",
        genre: "mystery",
        length: "short",
        era: "classic",
        mood: "dark",
        level: "casual"
    }
];

// App variables
let currentQuestion = 1;
const totalQuestions = 5;
const userPreferences = {};
let wishlist = [];

// Initialize the app once DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    // Verify that all needed DOM elements exist
    const requiredElements = [
        'next-btn', 'progress', 'recommendations', 'wishlist', 
        'empty-wishlist', 'back-to-quiz', 'view-wishlist', 
        'back-to-results', 'notification'
    ];
    
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    if (missingElements.length > 0) {
        console.error('Missing DOM elements:', missingElements);
        return; // Exit if elements are missing
    }

    // DOM elements
    const nextButton = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress');
    const quizContainer = document.querySelector('.quiz-container');
    const resultsContainer = document.querySelector('.results-container');
    const wishlistContainer = document.querySelector('.wishlist-container');
    const recommendationsGrid = document.getElementById('recommendations');
    const wishlistGrid = document.getElementById('wishlist');
    const emptyWishlistMessage = document.getElementById('empty-wishlist');
    const backToQuizButton = document.getElementById('back-to-quiz');
    const viewWishlistButton = document.getElementById('view-wishlist');
    const backToResultsButton = document.getElementById('back-to-results');
    const notification = document.getElementById('notification');

    // Initialize progress bar to 0%
    progressBar.style.width = '0%';
    
    // Hide results and wishlist containers initially
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (wishlistContainer) wishlistContainer.style.display = 'none';
    
    // Event listeners
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });
    
    if (nextButton) nextButton.addEventListener('click', nextQuestion);
    if (backToQuizButton) backToQuizButton.addEventListener('click', backToQuiz);
    if (viewWishlistButton) viewWishlistButton.addEventListener('click', viewWishlist);
    if (backToResultsButton) backToResultsButton.addEventListener('click', backToResults);
    
    // Show first question
    const firstQuestion = document.getElementById(`question-1`);
    if (firstQuestion) {
        firstQuestion.style.display = 'block';
    } else {
        console.error('First question element not found');
        return;
    }
    
    // Functions
    function selectOption(e) {
        // Clear previous selections in the same question
        const questionDiv = e.target.closest('.question');
        if (!questionDiv) {
            console.error('Question div not found');
            return;
        }
        
        questionDiv.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Mark the clicked option as selected
        e.target.classList.add('selected');
    }
    
    function nextQuestion() {
        // Get the current question's selection
        const currentQuestionDiv = document.getElementById(`question-${currentQuestion}`);
        if (!currentQuestionDiv) {
            console.error(`Question ${currentQuestion} not found`);
            return;
        }
        
        const selectedOption = currentQuestionDiv.querySelector('.option.selected');
        
        if (!selectedOption) {
            showNotification('Please select an option to continue');
            return;
        }
        
        // Save the answer
        const questionH3 = currentQuestionDiv.querySelector('h3');
        if (!questionH3) {
            console.error('Question heading not found');
            return;
        }
        
        const questionText = questionH3.textContent.toLowerCase();
        const questionWords = questionText.split(' ');
        if (questionWords.length < 2) {
            console.error('Question heading format unexpected:', questionText);
            return;
        }
        
        const questionKey = questionWords[1]; // Assuming format "Your genre" -> "genre"
        userPreferences[questionKey] = selectedOption.getAttribute('data-value');
        
        // Hide current question
        currentQuestionDiv.style.display = 'none';
        
        if (currentQuestion < totalQuestions) {
            // Show next question
            currentQuestion++;
            const nextQuestionDiv = document.getElementById(`question-${currentQuestion}`);
            if (!nextQuestionDiv) {
                console.error(`Next question ${currentQuestion} not found`);
                return;
            }
            nextQuestionDiv.style.display = 'block';
            
            // Update progress bar - Fixed calculation
            const progressPercentage = (currentQuestion / totalQuestions) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        } else {
            // We're at the last question - set progress to 100%
            progressBar.style.width = '100%';
            // Show results
            showResults();
        }
    }
    
    function showResults() {
        if (!quizContainer || !resultsContainer) {
            console.error('Quiz or results container not found');
            return;
        }
        
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Get recommended books based on preferences
        const recommendations = getRecommendedBooks();
        
        // Display recommendations
        if (!recommendationsGrid) {
            console.error('Recommendations grid not found');
            return;
        }
        
        recommendationsGrid.innerHTML = '';
        
        if (recommendations.length === 0) {
            // Handle case of no recommendations
            recommendationsGrid.innerHTML = '<div class="no-results">No books match your preferences. Try adjusting your choices.</div>';
        } else {
            recommendations.forEach(book => {
                const inWishlist = wishlist.some(item => item.id === book.id);
                recommendationsGrid.appendChild(createBookCard(book, inWishlist));
            });
    
            // Add event listeners to wishlist buttons
            document.querySelectorAll('.add-to-wishlist').forEach(button => {
                // Remove any existing event listeners first to prevent duplicates
                button.removeEventListener('click', toggleWishlist);
                button.addEventListener('click', toggleWishlist);
            });
        }
    }
    
    function getRecommendedBooks() {
        // Filter books based on user preferences
        let filteredBooks = [...books]; // Make a copy to avoid modifying the original
        
        // Filter by genre if selected
        if (userPreferences.genre && userPreferences.genre !== 'any') {
            filteredBooks = filteredBooks.filter(book => book.genre === userPreferences.genre);
            
            // If genre filter results in no books, don't apply it
            if (filteredBooks.length === 0) {
                filteredBooks = [...books];
            }
        }
        
        // Apply additional filters if we have enough books
        if (filteredBooks.length > 4) {
            // Apply additional preferences
            const priorityBooks = filteredBooks.filter(book => 
                (userPreferences.time && book.length === userPreferences.time) || 
                (userPreferences.prefer && book.era === userPreferences.prefer) || 
                (userPreferences.mood && book.mood === userPreferences.mood)
            );
            
            // If we have enough priority books, use those
            if (priorityBooks.length >= 3) {
                filteredBooks = priorityBooks;
            }
        } else if (filteredBooks.length < 3) {
            // Not enough books after filtering, add more based on other criteria
            const additionalBooks = books.filter(book => 
                !filteredBooks.some(b => b.id === book.id) && (
                    (userPreferences.time && book.length === userPreferences.time) || 
                    (userPreferences.prefer && book.era === userPreferences.prefer) || 
                    (userPreferences.mood && book.mood === userPreferences.mood)
                )
            );
            
            // Add unique books
            additionalBooks.forEach(book => {
                filteredBooks.push(book);
            });
        }
        
        // Limit to 6 books, but make sure we have at least some recommendations
        return filteredBooks.slice(0, 6);
    }
    
    function createBookCard(book, inWishlist) {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.dataset.id = book.id;
        
        // Add error handling for image loading
        const imageUrl = book.image || 'https://via.placeholder.com/240x320?text=Cover+Not+Available';
        
        card.innerHTML = `
            <div class="book-image">
                <img src="${imageUrl}" alt="${book.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/240x320?text=Cover+Not+Available';">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-actions">
                    <button class="add-to-wishlist ${inWishlist ? 'added' : ''}" data-id="${book.id}">
                        ${inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }
    
    function toggleWishlist(e) {
        const button = e.target;
        const bookId = parseInt(button.getAttribute('data-id'));
        const book = books.find(b => b.id === bookId);
        
        if (!book) {
            console.error('Book not found:', bookId);
            return;
        }
        
        if (button.classList.contains('added')) {
            // Remove from wishlist
            wishlist = wishlist.filter(item => item.id !== bookId);
            button.classList.remove('added');
            button.textContent = 'Add to Wishlist';
            showNotification('Book removed from wishlist');
        } else {
            // Add to wishlist
            if (!wishlist.some(item => item.id === bookId)) {
                wishlist.push(book);
            }
            button.classList.add('added');
            button.textContent = 'Remove from Wishlist';
            showNotification('Book added to wishlist');
        }
        
        // Update wishlist view if visible
        if (wishlistContainer && wishlistContainer.style.display === 'block') {
            updateWishlistView();
        }
        
        // Also update any other buttons for this book that might be visible
        document.querySelectorAll(`.add-to-wishlist[data-id="${bookId}"]`).forEach(btn => {
            if (btn !== button) {
                if (button.classList.contains('added')) {
                    btn.classList.add('added');
                    btn.textContent = 'Remove from Wishlist';
                } else {
                    btn.classList.remove('added');
                    btn.textContent = 'Add to Wishlist';
                }
            }
        });
    }
    
    function viewWishlist() {
        if (!resultsContainer || !wishlistContainer) {
            console.error('Results or wishlist container not found');
            return;
        }
        
        resultsContainer.style.display = 'none';
        wishlistContainer.style.display = 'block';
        updateWishlistView();
    }
    
    function updateWishlistView() {
        if (!wishlistGrid || !emptyWishlistMessage) {
            console.error('Wishlist grid or empty message not found');
            return;
        }
        
        wishlistGrid.innerHTML = '';
        
        if (wishlist.length === 0) {
            emptyWishlistMessage.style.display = 'block';
        } else {
            emptyWishlistMessage.style.display = 'none';
            
            wishlist.forEach(book => {
                wishlistGrid.appendChild(createBookCard(book, true));
            });
            
            // Remove existing listeners before adding new ones to prevent duplicates
            wishlistGrid.querySelectorAll('.add-to-wishlist').forEach(button => {
                button.removeEventListener('click', toggleWishlist);
                button.addEventListener('click', toggleWishlist);
            });
        }
    }
    
    function backToResults() {
        if (!wishlistContainer || !resultsContainer) {
            console.error('Wishlist or results container not found');
            return;
        }
        
        wishlistContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
    }
    
    function backToQuiz() {
        if (!resultsContainer || !quizContainer) {
            console.error('Results or quiz container not found');
            return;
        }
        
        resultsContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        currentQuestion = 1;
        
        // Reset questions
        for (let i = 1; i <= totalQuestions; i++) {
            const questionDiv = document.getElementById(`question-${i}`);
            if (!questionDiv) {
                console.error(`Question ${i} not found during reset`);
                continue;
            }
            
            if (i === 1) {
                questionDiv.style.display = 'block';
            } else {
                questionDiv.style.display = 'none';
            }
            
            // Clear selections
            questionDiv.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
        }
        
        // Reset progress bar
        progressBar.style.width = '0%';
    }
    
    function showNotification(message) {
        if (!notification) {
            console.error('Notification element not found');
            return;
        }
        
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}
