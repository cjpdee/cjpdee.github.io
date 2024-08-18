
// @ts-check
const TEST_BOOKS = [
`
{
    "book_id": "tao-te-ching",
    "translation_id": "gia-fu-feng-jane-english",
    "title": "tao te ching",
    "author": "Lao Tzu",
    "translated_by": "Gia-Fu Feng & Jane English",
    "chapters": [
        "yo dawg this is marcus aurelius",
        "life shouldnt be easy and shit man",
        "get your shit together"
    ]
}

`,
`
{
    "book_id": "tao-te-ching",
    "translation_id": "some-else",
    "title": "tao te ching",
    "author": "Lao Tzu",
    "translated_by": "someone else",
    "chapters": [
        "yo dawg this is marcus aurelius",
        "life shouldnt be easy and shit man",
        "get your shit together"
    ]
}

`,
`
{
    "book_id": "meditations",
    "translation_id": "fuck-knows-yet",
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

const BOOKS_AVAILABLE = [
	{
		book_id: 'tao-te-ching',
		translation_id: 'gia-fu-feng-jane-english',
		title: 'Tao Te Ching 道德經',
		translated_by: 'Gia-Fu Feng & Jane English',
	},
	{
		book_id: 'tao-te-ching',
		translation_id: 'someone-else',
		title: 'Tao Te Ching 道德經',
		translated_by: 'Someone Else',
	},
	{
		book_id: 'meditations',
		translation_id: 'steve',
		title: 'Meditations',
		translated_by: 'Steve',
	},
]

/*
 * @param arr {any[]} The array to group items from
 * @param criteria {string | () => boolean} The criteria to group by
 * @return {Object} The grouped object
 */
var groupBy = function (arr, criteria) {
	return arr.reduce(function (obj, item) {

		// Check if the criteria is a function to run on the item or a property of it
		var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

		// If the key doesn't exist yet, create it
		if (!obj.hasOwnProperty(key)) {
			obj[key] = [];
		}

		// Push the value to the object
		obj[key].push(item);

		// Return the object to the next item in the loop
		return obj;

	}, {});
};

/**
 * Settings in local storage
 */
const ReadingList = (() => ({
	get: () => {
		const localSettings = localStorage.getItem('reading-list')
		if (Array.isArray(localSettings) && localSettings.length === 0) {
			return BOOKS_AVAILABLE
		}
		try {
			return localSettings ? JSON.parse(localSettings) : BOOKS_AVAILABLE
		} catch (error) {
			return BOOKS_AVAILABLE
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
	console.log('fetching', books, TEST_BOOKS.map((book) => JSON.parse(book)).filter((_book) => ReadingList.get().find(__book => __book.id === _book.id)))
	return TEST_BOOKS.map((book) => JSON.parse(book)).filter((_book) => ReadingList.get().find(__book => __book.id === _book.id));
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
const getBook = (bookId) => books.find((b) => b.book_id === bookId)

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
	console.log('books', books, book)
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


	// reduce books into groups, grouped by translations
	
	const groupedBooks = groupBy(ReadingList.get(), (book) => BOOKS_AVAILABLE.find(_book => _book.id === book.id))
	console.log('groupedBooks', groupedBooks)

	
	const uniqueBooks = new Set(ReadingList.get().map((book) => book.book_id))
	console.log('uniqueBooks', uniqueBooks)
	
	$bookSelect.innerHTML = [...uniqueBooks].map((bookId, i) => {
		console.log('bewk', bookId,BOOKS_AVAILABLE.find(_book => _book.book_id === bookId));
		console.log('ccurentbook', currentBook)
		if (!BOOKS_AVAILABLE.find(_book => _book.book_id === bookId)) return;
		return`
		<option 
			value="${bookId}" 
			${currentBook.book_id === bookId ? 'selected' : ''}
		>
			${BOOKS_AVAILABLE.find(_book => _book.book_id === bookId)?.title}
		</option>
		`
	}).join('')

	const $chapterSelect = document.getElementById('chapter-select')
	$chapterSelect.innerHTML = book.chapters.map((_, i) => `
		<option value="${i}" ${i === chapter ? 'selected' : ''}>Chapter ${i + 1}</option>
	`).join('')

	const $author = document.getElementById('author')
	$author.textContent = book.author

	const $translationSelect = document.getElementById('translation-select')
	$translationSelect.innerHTML = Object.values(groupedBooks).filter(book => book.title === currentBook.title).map((book) => {
		if (!BOOKS_AVAILABLE.find(_book => _book.book_id === book.id)) return;
		return `
		<option value="${book.id}" ${currentBook.id === book.id ? 'selected' : ''}>
			${BOOKS_AVAILABLE.find(_book => _book.id === book.id)?.translated_by}
		</option>
		`
	})

	const $readingList = document.getElementById('reading-list')
	$readingList.innerHTML = BOOKS_AVAILABLE.map((book) => `
		<li>
			<label>
				<input type="checkbox" ${ReadingList.get().find(_book => _book.book_id === book.id) ? 'checked' : ''} 
					onchange="(() => {
						const addBook = () => [...ReadingList.get(), '${book.book_id}']
						const removeBook = () => ReadingList.get().filter((b) => b !== '${book.book_id}')
						if (this.checked) {
							ReadingList.set(addBook())
						} else {
							ReadingList.set(removeBook())
						}
					})()"
				/>
				${book.title}
			</label>
		</li>
	`).join('')
}

let books;
let currentBook;
let currentChapter;
(async () => {
	books = await fetchBooks(ReadingList.get())
	currentBook = books[getRandom(books)];
	console.log('current', currentBook, books)
	if (!currentBook) {
		throw new Error('No books found')
	}
	currentChapter = getRandom(currentBook.chapters);
	update()
})()


