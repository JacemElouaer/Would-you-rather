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
        ├── AnswerQuestion.js 
        ├── App.js 
        ├── Home.js 
        ├── LeaderBoard.js
        ├── Login.js
        ├── Nav.js
        ├── NewQuestion.js
        ├── Question.js
        ├── QuestionAnswered.js
        ├── QuestionNav.js
        ├── Questions.js
        ├── QuestionStats.js
        ├── UserLeaderBoard
    ├── images
        ├── anonymos.jpg
        ├── login-image.PNG
    ├── middlewares
        ├── index.js
        ├── logger.js
    ├── reducers
        ├── authedUser.js
        ├── index.js
        ├── question.js
        ├── users.js
    ├── utils
        ├── _DATA.js
        ├── api.js
    ├── index.js # Global styles. You probably won't need to change anything here.
    ├── index.css # You should not need to modify this file. It is used for DOM rendering only.
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
make sure to download bootsrap package.



