# Would-You-Rather...-
react application  that allow predefined users to login , add question , vote on their questions and others and also shows stats ... 

### `installing`


```js
git clone https://github.com/JacemElouaer/My_Reads_React.git
```
```js
install all project dependencies with `npm install`
```
```js
 start the development server with `npm start
```
```js
 Also some needed packege like react-router-dom ,  react-redux ,  redux 
 use `npm install ${pakege-name}`
```
### style installing 
```js
 bootstrab
 npm install react-bootstrap@next bootstrap@5.1.0
```

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Actions  # Actions for the app 
        ├── authedUser.js # authed user actions like set authentification
        ├── questions.js # questions actions (add question).
        ├── shared.js # receives data 
        ├── users.js # users actions
    ├── components # This is the root of your app. Contains static HTML right now.
        ├── AnswerQuestion.js  # view holding the form to answer the question
        ├── App.js # the app organisation and router initialisation
        ├── Home.js # home and holder of answered and unaswered question
        ├── LeaderBoard.js # holds all users and some info ..
        ├── Login.js # login view
        ├── Nav.js # Navigation bar (bootstrap template)
        ├── NewQuestion.js # view hold the form to a new Question
        ├── Question.js # view of a single question
        ├── QuestionAnswered.js # holding all answered questions
        ├── QuestionNav.js # the Nav of answered and unanswered question
        ├── Questions.js  # holder of all questions
        ├── QuestionStats.js  # holder of question statistics
        ├── UserLeaderBoard # single view for a single user info ..
    ├── images
        ├── anonymos.jpg #  image that will show off if the authedUser is missing
        ├── login-image.PNG # image that will show off in the login view
    ├── middlewares
        ├── index.js
        ├── logger.js 
    ├── reducers
        ├── authedUser.js # reducer of authed user 
        ├── index.js 
        ├── question.js # //
        ├── users.js # //
    ├── utils
        ├── _DATA.js
        ├── api.js
    ├── index.js # Global styles. You probably won't need to change anything here.
    ├── index.css # You should not need to modify this file. It is used for DOM rendering only.
    ├── nav.css # nav is a template bar from bootsrap so nav.css contains bootstrap package code .
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`_DATA.js`](src/_DATA.js) contains the methods you will need to perform necessary operations on the backend but we will be using the (src/api.js) :

* [`getInitialData`](#get all questions and users info  )
* [`saveQuestionAnswer`](#save questions answers)
* [`saveQuestion`](#save question)
* [`prepareQuestion`](#prepare question before adding it)


### `getInitialData`

Method Signature:

```js
getInitialData()
```

* Returns a Promise which resolves to a JSON object containing a collection of questions and users objects.
* This collection represents the books currently in questions list and th users list in your app.

### `saveQuestionAnswer`

Method Signature:

```js
saveQuestionAnswer(info)  info :   { authedU, id, answer}
```

* authedU: `<String>` containing the `id` of the current loged in user
* id: `<String>` contains the `id` of the question answered 
* answer : `<String>` the question's answer

### `saveQuestion` 
Method Signature:

```js
saveQuestion(question)  question :   { optionOneText, optionTwoText, author }
```
* optionOneText: `<String>` text of option One . 
* optionTwoText: `<String>` // .  
* author : `<String>` the logged in user.


## Importan
styles are not all used . 
make sure to download bootsrap package. Just for the progressbar.



