
// delete books

const ulBookListNode = document.querySelector('#book-list ul');

ulBookListNode.addEventListener('click', function(event) {
	if (event.target.className === 'delete') {
		const li = event.target.parentElement;
		li.parentElement.removeChild(li);
	}
});

// add books

const formAddBookNode = document.forms['add-book'];

formAddBookNode.addEventListener('submit', function(event) {
	event.preventDefault();
	const inputTextNode = formAddBookNode.querySelector('input[type="text"]');
	const inputTextNodeValue = inputTextNode.value;
	
	const liNode = document.createElement('li');
	
	const spanNameNode = document.createElement('span');
	const spanDeleteNode = document.createElement('span');
	
	spanNameNode.setAttribute('class', 'name');
	spanDeleteNode.setAttribute('class', 'delete');

	spanNameNode.innerText = inputTextNodeValue;
	spanDeleteNode.innerText = 'delete';

	liNode.appendChild(spanNameNode);
	liNode.appendChild(spanDeleteNode);

	ulBookListNode.appendChild(liNode);
	inputTextNode.value = '';
});

// hide books

const inputHideBooksNode = document.querySelector('#hide');

inputHideBooksNode.addEventListener('change', function(event) {
	if (inputHideBooksNode.checked) {
		ulBookListNode.style.display = 'none';
	} else {
		ulBookListNode.style.display = 'initial';
		console.dir(ulBookListNode);
	}
});

// filter books

const formSearchBooksNode = document.forms['search-books'];
const inputSearchBooksNode = formSearchBooksNode.querySelector('input[type="text"]');

inputSearchBooksNode.addEventListener('keyup', function(event) {
	const request = event.target.value.toLowerCase();
	let booksDataList = [];

	ulBookListNode.querySelectorAll('.name').forEach(function(spanNameNode) {
		booksDataList.push(spanNameNode.textContent.toLowerCase());
	});

	if (!request == '') {
		ulBookListNode.querySelectorAll('.name').forEach(function(spanNameNode) {
			let bookTitle = spanNameNode.textContent.toLowerCase();
			if (bookTitle.includes(request)) {
				spanNameNode.parentElement.style.display = 'block';
			} else {
				spanNameNode.parentElement.style.display = 'none';
			} 
		});
	} else { 
		// the sequence is built this way because of a case, 
		// when you remove all the text and expect 
		// to get the full list of the books, 
		// you get empty list 
		ulBookListNode.querySelectorAll('.name').forEach(function(spanNameNode) {
			spanNameNode.parentElement.style.display = 'block';
		});
	}

});

// tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function(e) {
	if (e.target.tagName == 'LI') {
		const targetPanel = document.querySelector(e.target.dataset.target);
		panels.forEach( function(panel) {
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		});
	}
})