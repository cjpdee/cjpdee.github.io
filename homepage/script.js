
// @ts-check
const TEST_BOOKS = [
`
{
    "id": "meditations",
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "translated_by": "Fuck knows yet",
    "chapters": [
        "yo dawg this is marcus aurelius",
        "life shouldnt be easy and shit man",
        "get your shit together"
    ]
}

`,
`
{
    "id": "art-of-war",
    "title": "Art of War",
    "author": "sun zoo",
    "translated_by": "Sun zoo knows yet",
    "chapters": [
        "fight them off",
        "patience adn that",
        "kill"
    ]
}

`
]
const BOOKS_AVAILABLE = {
	'tao-te-ching': 'Tao Te Ching 道德經',
	'meditations': 'Meditations',
	'art-of-war': 'Art of War'
	/*
	'Analects',
	'On the Shortness of Life',
	'Letters from a Stoic',
	'The Prince',
	'The Republic',
	'Nicomachean Ethics',
	'Confessions',
	'Leviathan',
	'Critique of Pure Reason',
	'Groundwork of the Metaphysics of Morals',
	'Phenomenology of Spirit',
	'Being and Time',
	*/
}

/**
 * Settings in local storage
 */
const ReadingList = (() => ({
	get: () => {
		const localSettings = localStorage.getItem('reading-list')
		try {
			return localSettings ? JSON.parse(localSettings) : Object.keys(BOOKS_AVAILABLE)
		} catch (error) {
			return Object.keys(BOOKS_AVAILABLE)
		}
	},

	/**
	 * @param list {string[]}
	 * List of book ids to be set in local storage
	 */
	set: (list) => {
		localStorage.setItem('reading-list', JSON.stringify(list))
	}
}))()

/**
 * @param books {string[]}
 * Books to be displayed in the reading list
 */
const fetchBooks = async (books) => {
	return TEST_BOOKS.map((book) => JSON.parse(book));
	const data = await Promise.all(books.map(async (book) => {
		console.log('fetching', book)
		const response = await fetch(`./books/${book}.json`)
		if (!response.ok) {
			throw new Error(`Failed to fetch ${book}`)
		}
		const text = await response.text()
		console.log('fetched', book)
		return JSON.parse(text)
	}))
	console.log('fetching', data)
	return data
}

/**
 * @param arr {any[]}
 */
const getRandom = (arr) => {
	return Math.floor(Math.random() * arr.length)
}

/**
 * @param bookId {string}
 * @returns {Object}
 */
const getBook = (bookId) => books.find((b) => b.id === bookId)

/**
 * @param bookId {string}
 */
const setBook = (bookId) => {
	const book = getBook(bookId)
	console.log('books', books, book)
	if (!book) {
		throw new Error(`Book ${bookId} not found`)
	}

	currentBook = book
	currentChapter = getRandom(book.chapters)

	update()
}

/**
 * @param bookId {string}
 * @param chapter {number}
 */
const setChapter = (bookId, chapter) => {
	const book = getBook(bookId)
	if (!book) {
		throw new Error(`Book ${bookId} not found`)
	}

	if (chapter >= 0 && chapter < book.chapters.length) {
		currentChapter = chapter;
	} else {
		currentChapter = 0
	}
	update()
} 
/**
 * @param book {string}
 * @param chapter {number}
 */ 
 const update = () => {
	const book = currentBook
	const chapter = currentChapter
	console.log(currentBook)

	const $chapterTitle = document.getElementById('chapter-title')
	$chapterTitle.textContent = `${chapter + 1}`

	const $chapterContent = document.getElementById('chapter-container')
	$chapterContent.textContent = book.chapters[chapter]

	const $bookTitle = document.getElementById('nav-toggle')
	$bookTitle.textContent = book.title

	const $bookSelect = document.getElementById('book-select')
	console.log(currentBook)
	$bookSelect.innerHTML = Object.keys(BOOKS_AVAILABLE).map((bookId, i) => `
		<option value="${bookId}" ${currentBook.id === bookId ? 'selected' : ''}>${BOOKS_AVAILABLE[bookId]}</option>
	`).join('')

	const $chapterSelect = document.getElementById('chapter-select')
	$chapterSelect.innerHTML = book.chapters.map((_, i) => `
		<option value="${i}" ${i === chapter ? 'selected' : ''}>Chapter ${i + 1}</option>
	`).join('')

	const $author = document.getElementById('author')
	$author.textContent = book.author

	const $translation = document.getElementById('translation')
	$translation.textContent = `Translated by ${book.translated_by}`
}

let books;
let currentBook;
let currentChapter;
(async () => {
	books = await fetchBooks(ReadingList.get())
	currentBook = books[getRandom(books)];
	currentChapter = getRandom(currentBook.chapters);
	update()
})()


