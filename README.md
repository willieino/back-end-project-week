# Trello Account for this Project

https://trello.com/b/b8qHU2sU/lambda-notesbackend-william-yturralde

# Heroku Server:

https://frontend-william.herokuapp.com/

# Netlify Front End:

https://admiring-varahamihira-b3efb4.netlify.com/




# API Documentation:
Lambda api notes
this is a student api project written for Lambda School by **William Yturralde, WebPt2**

Access

Table of Contents

# Methods

## Note API:

    get         GET         /api/notes          used to retrieve all notes
    get         GET         /api/notes/{id}     used to retrieve a single note
    delete      DELETE      /api/notes/{id}     used to delete a single note
    create      POST        /api/notes          used to create a new note
    put         UPDATE      /api/notes/{id}     used to update an existing note


## get /api/notes

(apiNotesGet)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is an array of user Notes objects. Each Note contains:

    title: string
    textBody: string
    tags: string
    _id: legacy id numeric
    pictures: string
    pictureDataURLs: string
    user_id: numeric foreign key

**Responses:**

200

## get /api/notes/{id}

(apiNotes1Get)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is a single Note object.

**Responses:**

200

## delete /api/notes/{id}

(apiNotes2Delete)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

**Responses:**

200


## post /api/notes

(apiNotesPost)

**Consumes:**

This API call consumes the following media types via the Content-Type request header:

    application/json

**Request body:**

body body (optional)

Body Parameter —

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

**Responses:**

201


# List API:

    get         GET         /api/lists          used to retrieve all lists
    get         GET         /api/lists/{id}     used to retrieve a single list
    delete      DELETE      /api/lists/{id}     used to delete a single list
    create      POST        /api/lists          used to create a new list
    put         UPDATE      /api/lists/{id}     used to update an existing list


## get /api/lists

(apiListsGet)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is an array of user List objects. Each List contains:

    list: json/string   must be parsed to return to an array containing the id's of the linked Notes
    listTitle: string
    users_id: integer   foreign key linked to the user that created the list
    notes_id: integer   foreign key legacy no longer used
    
**Responses:**

200

## get /api/lists/{id}

(apiLists1Get)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is a single List object.

**Responses:**

200

## delete /api/lists/{id}

(apiLists2Delete)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

**Responses:**

200


## post /api/lists

(apiListsPost)

**Consumes:**

This API call consumes the following media types via the Content-Type request header:

    application/json

**Request body:**

body body (optional)

Body Parameter —

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

**Responses:**

201


# User API:

    get         GET         /api/users              used to retrieve all users
    get         GET         /api/users/{id}         used to retrieve a single user
    delete      DELETE      /api/users/{id}         used to delete a single user
    create      POST        /api/users              used to create a new user
    register    POST        /api/users/register     used to register a new user
    login       POST        /api/users/login        used to login a registered user
    logout      POST        /api/users/logout       used to logout
    put         UPDATE      /api/users/{id}         used to update an existing user


## get /api/users

(apiUsersGet)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

    The return is an array of user  objects. Each user contains:

        email:    string    users email address
        password: string    encrypted password
    
**Responses:**

200

## get /api/users/{id}

(apiUsers1Get)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is a single List object.

**Responses:**

200

## delete /api/users/{id}

(apiUsers2Delete)

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

**Responses:**

200

## post /api/users

(apiUsersPost)

**Consumes:**

This API call consumes the following media types via the Content-Type request header:

    application/json

**Request body:**

body body (optional)

Body Parameter —

**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

**Responses:**

201

## post /api/users/register

**Return type:**

String, JWT Token

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is a single List object.

**Responses:**

201


## post /api/users/login

**Return type:**

String, JWT Token

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is a single List object.

**Responses:**

201

## post /api/users/logout


**Return type:**

String

**Produces:**

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

    application/json; charset=utf-8

The return is a single List object.

**Responses:**

201





# Back End Project Week

This week you will build a backend for a note taking app called "Lambda Notes".

You are to treat this week as if you are working at a company and the instructor is your client. The _Project Managers_ are acting as your company's project managers (duh!) and will be your main support throughout the week.

The main objective of this week is to develop a backend to support the LambdaNotes app you built during the Front End project week, connect the two projects together, and add some additional features. You will use `Node.js`, `Express` and any other technologies you have learned to complete this assignment.

## Git Commits

You are required to showcase progress with at least 4 commits a day. This will let your project manager know where you are and if you need help. This also allows the client to get progress reports from the company in a real world setting. This also protects you from losing your work if your computer fails.

## Trello Set Up

- Use your existing Trello account from the Front End Project, or create a new one.
- Create a new board called "Lambda Notes(Backend) - {Your Name}".
- Create lists titled `Backlog`,`To do`, `Blocked`, `In Progress`, and `Done`.
- Fill in the `To do` list with the MVP features listed below.
- Fill in the `backlog` list with all the extra features listed below.
- Share your board with the project manager that has been assigned to you. If you have not been assigned yet, reach out to your Section Lead for guidance.
- Add your Trello URL to your project's README.md file. Commit the change, push it to your repository & submit a pull request.

## Backend MVP Features:

We recommend that you finish all the MVP features before trying to deploy.

- Add data persistenc using a Relational Database. We suggest you start with `SQLite3`.
- Create a Web API for the React application you built in the front-end project week.
- Build endpoints for each of the following features:
  - Display a list of notes.
  - Create a note with a _title_ and _content_.
  - View an existing note.
  - Edit an existing note.
  - Delete an existing note.
  - Modify your front-end so that it uses your newly created Web API.

Upon your first commit, please submit a Pull Request and add _both_ the **Trello Set Up** and **Backend MVP Features** Task lists to your first Pull Request comment.

---

**Once you have completed the "Minimum Viable Product" requirements, message your project manager for approval**. If approved, you may continue to deploy and work on the Extra Features. Please add the Extra Features you implement to the list you added to the comment on your first PR.

## Deployment

After your PM certifies that all MVP features are complente, it's time to work on deploying it online for the world to see. We recommend you deploy your server to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction), and your front end to [netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). Both services provide free tiers and easy to use interfaces.

Additionally, it is recommended that you keep your front end and backend codebases in separate GitHub repositories. This helps with deploying, since the different parts of your application will be deployed on different platforms.

## Extra Features:

Once your MVP has been approved, you have been given a feature list that the client would love to have completed. Your goal would be to finish MVP as soon as you can and get working the list of extra features.

- Setup Auto-Deploy on Heroku
- Provide documentation for how to interface with your api.
- Add pagination for long lists of notes.
- Create and display tags that can be added to notes and stored in the Database.
- Allow users to clone notes.
- Search functionality.
- Create a Registration Page that allows users to create accounts for your app and sign in with email/password.
- Allow users to sign in with a third party service (google, facebook, github, club penguin, etc...)
- Allow users to create Lists and assign notes to a list.
- Allow users to attach images to notes.
- Allow multiple users to collaborate on notes.
- Add Unit and Integration Tests.

## Super Duper Extra Credit Bonus Features

- Add a payment form integrating with _Stripe_ that allows Users to buy a _"Premium"_ version of Lambda Notes.
- Gate your favorite feature behind the _premium_ paywall

You will notice that this repository does not have any starter code. This is on purpose. You are to start from scratch using any files you have built throughout your time here at Lambda School as reference.

