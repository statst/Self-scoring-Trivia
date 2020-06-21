let questions = [
	{
		question: 'Which language is used for styling web pages?',
		option: ['CSS', 'HTML', 'JQuery', 'XML'],
	},
	{
		question: 'What is HTML?',
		option: [
			'Hyper text Markup Language',
			'Hyper tool Markup Language',
			'Hyper link Manipulation Language',
			'Hyper text Manipulation Language',
		],
	},
	{
		question: 'Which of the following sentence is true about Div tag?',
		option: [
			'A block-level element?',
			'Defines a paragraph',
			'Creates a line break',
			'Styles a web page',
		],
	},
	{
		question:
			' Which of the following property sets the shadow for a box element?',
		option: [
			'box-shadow',
			'set-shadow',
			'canvas-shadow',
			'shadow',
		],
	},
	{
		question:
			'What is the correct HTML for adding a background color of yellow?',
		option: [
			'<body style= "background-color: #FFFF00">',
			'<body style= "background-color: #FFB6C1">',
			'all of the above',
			'none of the above',
		],
	},
	{
		question: 'How to set style of a certain HTML element with id of “quiz”?',
		option: ['#quiz{}', '.quiz{}', '.quiz()', 'Id.quiz{}'],
	},
	{
		question: 'How do you add comments in CSS?',
		option: ['/* comment*/', '<!—comment-->', '// comment', '//comment'],
	},
	{
		question:
			'Given a margin: 10px 20px 5px 15px \n Where does 5px value will assigned?',
		option: ['Bottom', 'Right', 'Left', 'Top'],
	},
	{
		question:
			'Which of the following attributes is used to add link to any element?',
		option: ['href', 'Link', 'ref', 'li'],
	},
	{
		question: 'Why is this keyword not preferred in JavaScript?',
		option: [
			'Functions should not access the global object',
			'Highly memory consuming',
			'Very inefficient to use',
			'Functions should access the global objects',
		],
	},
	{
		question:
			'Which method removes the last element from an array and returns that element?',
		option: ['pop()', 'pop()', 'pop()', 'push()'],
	},
	{
		question: 'The object has three object attributes namely ________',
		option: [
			'Prototype, class, object’s extensible flag',
			' Prototype, class, objects’ parameters',
			' Native object, Classes and Interfaces and Object’s extensible flag',
			'lClass, parameters, object’s extensible flag',
		],
	},
	{
		question: 'JavaScript is interpreted by _________',
		option: ['Client', 'Server', 'Object', 'None of the above'],
	},
	{
		question: 'What is mean by "this" keyword in javascript?',
		option: [
			'It refers current object',
			'It refers previous object',
			'It is variable which contains value',
			'None of the above',
		],
	},
	{
		question: 'A function with no return value is called______',
		option: ['Procedures', 'Method', 'Static function', 'Dynamic function'],
	},
];
console.log(questions[0]);
let index = 0;
let 
function question(){
	//define total time
	let totalTime = 200;
	//set minutes to zero
	let min = 0;
	//set intital second value to zero
	let sec = 0;
	//set initial counter value to zero
	let counter = 0;
	//define timer function and set time interval for 1 seconds interval
	let timer = setInterval(function(){
		counter++;
		//calculate minutes
		min = Math.floor((totalTime - counter)/60);
		//convert minutes to seconds
		sec = totalTime - (min * 60) - counter;
		console.log("min = 60" + min);
		console.log('sec = 80' + sec);
		document.getElementsByClassName('timer').innerText =
			min + ' : ' + sec;
		if(counter == totalTime){
			clearInterval(timer)
		}
	}, 1000);

	//get questions
	getQuestion();
}

//function to get questions
function getquestion(i){
	console.log(questions);
	document.getElementsByClassName(question).innerText(questions[i].question);
	
}
