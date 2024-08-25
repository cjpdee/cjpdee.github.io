
// @ts-check
const TEST_BOOKS = [
`
{
    "id": "tao-te-ching",
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
    "id": "tao-te-ching",
    "translation_id": "someone-else",
    "title": "tao te ching",
    "author": "Lao Tzu",
    "translated_by": "someone else",
    "chapters": [
	{
		"chapter": "1.0",
		"content": "eeby deeby dooby gooby"
	},
	{
		"chapter": "1.0",
		"content": "speepy poopy deepy doopy"
	},
	{
		"chapter": "1.0",
		"content": "meepy moopy stroopy toopy"
	}
    ]
}

`,
`
{
    "id": "meditations-book-2",
    "translation_id": "gregory-hays",
    "title": "Meditations: Book 2",
    "author": "Marcus Aurelius",
    "translated_by": "Gregory Hays",
    "chapters": [
        {
            "chapter": "2.1",
            "content": "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can’t tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own—not of the same blood or birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I feel angry at my relative, or hate him. We were born to work together like feet, hands, and eyes, like the two rows of teeth, upper and lower. To obstruct each other is unnatural. To feel anger at someone, to turn your back on him: these are obstructions."
        },

        {
            "chapter": "2.2",
            "content": "Whatever this is that I am, it is flesh and a little spirit and an intelligence. Throw away your books; stop letting yourself be distracted. That is not allowed. Instead, as if you were dying right now, despise your flesh. A mess of blood, pieces of bone, a woven tangle of nerves, veins, arteries. Consider what the spirit is: air, and never the same air, but vomited out and gulped in again every instant. Finally, the intelligence. Think of it this way: You are an old man. Stop allowing your mind to be a slave, to be jerked about by selfish impulses, to kick against fate and the present, and to mistrust the future."
        },

        {
            "chapter": "2.3",
            "content": "What is divine is full of Providence. Even chance is not divorced from nature, from the inweaving and enfolding of things governed by Providence. Everything proceeds from it. And then there is necessity and the needs of the whole world, of which you are a part. Whatever the nature of the whole does, and whatever serves to maintain it, is good for every part of nature. The world is maintained by change—in the elements and in the things they compose. That should be enough for you; treat it as an axiom. Discard your thirst for books, so that you won’t die in bitterness, but in cheerfulness and truth, grateful to the gods from the bottom of your heart."
        },

        {
            "chapter": "2.4",
            "content": "Remember how long you’ve been putting this off, how many extensions the gods gave you, and you didn’t use them. At some point you have to recognize what world it is that you belong to; what power rules it and from what source you spring; that there is a limit to the time assigned you, and if you don’t use it to free yourself it will be gone and will never return."
        },

        {
            "chapter": "2.5",
            "content": "Concentrate every minute like a Roman-like a man—on doing what’s in front of you with precise and genuine seriousness, tenderly, willingly, with justice. And on freeing yourself from all other distractions. Yes, you can—if you do everything as if it were the last thing you were doing in your life, and stop being aimless, stop letting your emotions override what your mind tells you, stop being hypocritical, self-centered, irritable. You see how few things you have to do to live a satisfying and reverent life? If you can manage this, that’s all even the gods can ask of you."
        },

        {
            "chapter": "2.6",
            "content": "Yes, keep on degrading yourself, soul. But soon your chance at dignity will be gone. Everyone gets one life. Yours is almost used up, and instead of treating yourself with respect, you have entrusted your own happiness to the souls of others."
        },

        {
            "chapter": "2.7",
            "content": "Do external things distract you? Then make time for yourself to learn something worthwhile; stop letting yourself be pulled in all directions. But make sure you guard against the other kind of confusion. People who labor all their lives but have no purpose to direct every thought and impulse toward are wasting their time—even when hard at work."
        },

        {
            "chapter": "2.8",
            "content": "Ignoring what goes on in other people’s souls—no one ever came to grief that way. But if you won’t keep track of what your own soul’s doing, how can you not be unhappy?"
        },

        {
            "chapter": "2.9",
            "content": "Don’t ever forget these things:\n\nThe nature of the world.\nMy nature.\nHow I relate to the world.\nWhat proportion of it I make up.\nThat you are part of nature, and no one can prevent you from speaking and acting in harmony with it, alway"
        },

        {
            "chapter": "2.10",
            "content": "In comparing sins (the way people do) Theophrastus says that the ones committed out of desire are worse than the ones committed out of anger: which is good philosophy. The angry man seems to turn his back on reason out of a kind of pain and inner convulsion. But the man motivated by desire, who is mastered by pleasure, seems somehow more self- indulgent, less manly in his sins. Theophrastus is right, and philosophically sound, to say that the sin committed out of pleasure deserves a harsher rebuke than the one committed out of pain. The angry man is more like a victim of wrongdoing, provoked by pain to anger. The other man rushes into wrongdoing on his own, moved to action by desire."
        },

        {
            "chapter": "2.11",
            "content": "You could leave life right now. Let that determine what you do and say and think. If the gods exist, then to abandon human beings is not frightening; the gods would never subject you to harm. And if they don’t exist, or don’t care what happens to us, what would be the point of living in a world without gods or Providence? But they do exist, they do care what happens to us, and everything a person needs to avoid real harm they have placed within him. If there were anything harmful on the other side of death, they would have made sure that the ability to avoid it was within you. If it doesn’t harm your character, how can it harm your life? Nature would not have overlooked such dangers through failing to recognize them, or because it saw them but was powerless to prevent or correct them. Nor would it ever, through inability or incompetence, make such a mistake as to let good and bad things happen indiscriminately to good and bad alike. But death and life, success and failure, pain and pleasure, wealth and poverty, all these happen to good and bad alike, and they are neither noble nor shameful—and hence neither good nor bad."
        },

        {
            "chapter": "2.12",
            "content": "The speed with which all of them vanish—the objects in the world, and the memory of them in time. And the real nature of the things our senses experience, especially those that entice us with pleasure or frighten us with pain or are loudly trumpeted by pride. To understand those things—how stupid, contemptible, grimy, decaying, and dead they are—that’s what our intellectual powers are for. And to understand what those people really amount to, whose opinions and voices constitute fame. And what dying is—and that if you look at it in the abstract and break down your imaginary ideas of it by logical analysis, you realize that it’s nothing but a process of nature, which only children can be afraid of. (And not only a process of nature but a necessary one.) And how man grasps God, with what part of himself he does so, and how that part is conditioned when he does."
        },

        {
            "chapter": "2.13",
            "content": "Nothing is more pathetic than people who run around in circles, “delving into the things that lie beneath” and conducting investigations into the souls of the people around them, never realizing that all you have to do is to be attentive to the power inside you and worship it sincerely. To worship it is to keep it from being muddied with turmoil and becoming aimless and dissatisfied with nature—divine and human. What is divine deserves our respect because it is good; what is human deserves our affection because it is like us. And our pity too, sometimes, for its inability to tell good from bad—as terrible a blindness as the kind that can’t tell white from black."
        },

        {
            "chapter": "2.14",
            "content": "Even if you’re going to live three thousand more years, or ten times that, remember: you cannot lose another life than the one you’re living now, or live another one than the one you’re losing. The longest amounts to the same as the shortest. The present is the same for everyone; its loss is the same for everyone; and it should be clear that a brief instant is all that is lost. For you can’t lose either the past or the future; how could you lose what you don’t have?\n\nRemember two things:\n\nthat everything has always been the same, and keeps recurring, and it makes no difference whether you see the same things recur in a hundred years or two hundred, or in an infinite period;\nthat the longest-lived and those who will die soonest lose the same thing. The present is all that they can give up, since that is all you have, and what you do not have, you cannot los"
        },

        {
            "chapter": "2.15",
            "content": "“Everything is just an impression.”—Monimus the Cynic. And the response is obvious enough. But the point is a useful one, if you take it for what it’s worth."
        },

        {
            "chapter": "2.16",
            "content": "The human soul degrades itself:\n\nAbove all, when it does its best to become an abscess, a kind of detached growth on the world. To be disgruntled at anything that happens is a kind of secession from Nature, which comprises the nature of all things.\nWhen it turns its back on another person or sets out to do it harm, as the souls of the angry do.\nWhen it is overpowered by pleasure or pain.\nWhen it puts on a mask and does or says something artificial or false.\nWhen it allows its action and impulse to be without a purpose, to be random and disconnected: even the smallest things ought to be directed toward a goal. But the goal of rational beings is to follow the rule and law of the most ancient of communities and states."
        },

        {
            "chapter": "2.17",
            "content": "Human life.\n\nDuration: momentary. Nature: changeable. Perception: dim. Condition of Body: decaying. Soul: spinning around. Fortune: unpredictable. Lasting Fame: uncertain. Sum Up: The body and its parts are a river, the soul a dream and mist, life is warfare and a journey far from home, lasting reputation is oblivion.\n\nThen what can guide us?\n\nOnly philosophy.\n\nWhich means making sure that the power within stays safe and free from assault, superior to pleasure and pain, doing nothing randomly or dishonestly and with imposture, not dependent on anyone else’s doing something or not doing it. And making sure that it accepts what happens and what it is dealt as coming from the same place it came from. And above all, that it accepts death in a cheerful spirit, as nothing but the dissolution of the elements from which each living thing is composed. If it doesn’t hurt the individual elements to change continually into one another, why are people afraid of all of them changing and separating? It’s a natural thing. And nothing natural is evil."
        }

    ]
}
`,
]

/**
 * @typedef Book
 * @type {Object}
 * @property {string} id
 * @property {string} translation_id
 * @property {string} title
 * @property {string} translated_by
 */
const BOOKS_AVAILABLE = [
	{
		id: 'tao-te-ching',
		translation_id: 'gia-fu-feng-jane-english',
		title: 'Tao Te Ching 道德經',
		translated_by: 'Gia-Fu Feng & Jane English',
	},
	{
		id: 'tao-te-ching',
		translation_id: 'someone-else',
		title: 'Tao Te Ching 道德經',
		translated_by: 'Someone Else',
	},
	// {
	// 	id: 'meditations-book-1',
	// 	translation_id: 'gregory-hays',
	// 	title: 'Meditations',
	// 	translated_by: 'Gregory Hays',
	// },
	{
		id: 'meditations-book-2',
		translation_id: 'gregory-hays',
		title: 'Meditations',
		translated_by: 'Gregory Hays',
	}
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
			const parsed = localSettings ? JSON.parse(localSettings) : []
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
 * @param books {Book[]}
 * Books to be displayed in the reading list
 */
const fetchBooks = async (books) => {
	return TEST_BOOKS.map((book) => JSON.parse(book)).filter((_book) => ReadingList.get().find(__book => __book.id === _book.id));
	const data = await Promise.all(books.map(async (book) => {
		console.log('heeeere',`./books/${book.id}|${book.translation_id}.json`)
		console.log('fetching', book)
		const response = await fetch(`./books/${book.id}_${book.translation_id}.json`)
		if (!response.ok) {
			throw new Error(`Failed to fetch ${book.id}_${book.translation_id}.json: ${response.status} ${response.statusText}`)
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
 * @param translationId {string}
 * @returns {Object}
 */
const getBook = (bookId, translationId) => books.find((b) => b.id === bookId) && books.find((b) => b.translation_id === translationId)

/**
 * @param bookId {string}
 * @param translationId {string}
 */
const setBook = (bookId, translationId) => {
	const book = getBook(bookId, translationId)
	console.log('books', books, book)
	if (!book) {
		throw new Error(`Book ${bookId} not found`)
	}

	currentBook = book
	currentChapter = getRandom(book.chapters)
	console.log('current', currentBook, currentChapter)

	update()
}

/**
 * @param bookId {string}
 * @param translationId {string}
 * @param chapter {number}
 */
const setChapter = (bookId, translationId, chapter) => {
	const book = getBook(bookId, translationId)
	console.log('books', books, book)
	if (!book) {
		throw new Error(`Book ${bookId} translated by ${translationId} not found`)
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

	// const $chapterTitle = document.getElementById('chapter-title')
	// $chapterTitle.textContent = `${chapter + 1}`

	const $chapterContent = document.getElementById('chapter-container')
	if ($chapterContent) {
		$chapterContent.textContent = book.chapters[chapter].content
	}

	const $bookTitle = document.getElementById('nav-toggle')
	if ($bookTitle) {
		$bookTitle.textContent = book.title
	}

	const $bookSelect = document.getElementById('book-select')
	console.log(currentBook)

	// group by ids
	const groupedBooks = groupBy(ReadingList.get(), (book) => BOOKS_AVAILABLE.find((_book) => _book.id === book.id)?.id)
	console.log('groupedBooks', groupedBooks)

	
	const uniqueBooks = new Set(ReadingList.get().map((book) => book.id))
	console.log('uniqueBooks', uniqueBooks)
	
	$bookSelect.innerHTML = [...uniqueBooks].map((bookId, i) => {
		console.log('bewk', bookId,BOOKS_AVAILABLE.find(_book => _book.id === bookId));
		console.log('ccurentbook', currentBook)
		if (!BOOKS_AVAILABLE.find(_book => _book.id === bookId)) return;
		return`
		<option 
			value="${bookId}" 
			data-translation="${BOOKS_AVAILABLE.find(_book => _book.id === bookId)?.translation_id}"
			${currentBook.id === bookId ? 'selected' : ''}
		>
			${BOOKS_AVAILABLE.find(_book => _book.id === bookId)?.title}
		</option>
		`
	}).join('')

	const $chapterSelects = [...document.querySelectorAll('#chapter-select')]
	$chapterSelects.forEach(($chapterSelect) => {
		$chapterSelect.innerHTML = book.chapters.map((_, i) => `
			<option value="${_.chapter}" ${_.chapter === chapter ? 'selected' : ''}>${_.chapter}</option>
		`).join('')
	})

	const $author = document.getElementById('author')
	if ($author) {
		$author.textContent = book.author
	}

	const $translationSelect = document.getElementById('translation-select')?.querySelector('optgroup')

	// console.log('translation selecta', groupedBooks[currentBook.id],Object.values(groupedBooks)[currentBook.id])
	if ($translationSelect) {
		$translationSelect.innerHTML = groupedBooks[currentBook.id].map((book) => {
			return `
			<option value="${book.translation_id}" ${currentBook.translation_id === book.translation_id ? 'selected' : ''}>
				${book.translated_by}
			</option>
			`
		
		})
	}

	const $readingList = document.getElementById('reading-list')
	if ($readingList) {
		$readingList.innerHTML = BOOKS_AVAILABLE.map((book) => `
			<li>
				<label>
					<input type="checkbox" ${ReadingList.get().find(_book => _book.id === book.id && _book.translation_id === book.translation_id) ? 'checked' : ''} 
						onchange="(() => {
							const addBook = () => [
								...ReadingList.get(),
								BOOKS_AVAILABLE.find(b =>
									b.id === '${book.id}'
									&& b.translation_id === '${book.translation_id}'
								)
							]
							const removeBook = () =>
								ReadingList.get()
									.filter((b) =>
										b.id !== '${book.id}' 
										|| b.translation_id !== '${book.translation_id}'
									)
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


