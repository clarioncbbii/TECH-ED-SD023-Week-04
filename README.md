# REFLECTIONS

## Reflection

Please also provide an assignment reflection in your project README.md file.

### Required:

- What requirements did you achieve?
- Were there any requirements or goals that you were unable to achieve?
- If so, what was it that you found difficult about these tasks?

### Optional:

Feel free to add any other reflections you would like to share about your submission, for example:

- Requesting feedback about a specific part of your submission.
- What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
  I wanted to have a way to reset the page on submission of the form as well as a confirmation - for this I used following websites (and a bit of tinkering):
  https://stackoverflow.com/questions/6515502/javascript-form-submit-confirm-or-cancel-submission-dialog-box#6515632
  https://stackoverflow.com/questions/6666363/is-it-possible-to-clear-a-form-and-reset-reload-the-page-with-one-button#6666770
  https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
  https://www.webdevtutor.net/blog/javascript-button-onclick-confirm-submit-form?

- What errors or bugs did you encounter while completing your assignment? How did you solve them?
  I wanted to create a back to top button which sort of floats and only shows up when you scroll down but I failed about 4 times.
  Eventually stumbled across: https://discourse.devontechnologies.com/t/floating-back-to-top-button-in-markdown-documents/71696
  I implemented it and modified it to work for me and voila - it works

- What went really well and what could have gone better?
  I created a mindmap before I started coding which helped me greatly - and I created a workflow as I went along to ensure I was not leaving steps out AND so when it comes to the next time I need to do this, I can spend less time of figuring out the order of things, and more time on execution.

ASSIGNMENT SEQUENCE:

(1)

- set up Github repo
- set up client (Vite)
- set up server (Express)

(2)

- create database table (Supabase)
- copy SQL queries into a queries.sql file for reference (in server folder)
- set up .env and dbConnection.js
- deploy client and server (Render)

Client deploy should work if setup was done correctly.
If server deploy fails, make sure: port and root route have been set up correctly

(3)
Return to client HTML and setup form to match the database entries and validation
Also code out the general structure & link any favicons/social media icons in the head

(4)
In the server, create GET route (your root route should have already been created pre-deploy)
Test in POSTMAN, in addition to browser
Check console for any issues also

(5)
In the server, create POST route.
To test this in Postman, you have to send a body along with the POST request

POSTMAN - POST route template:
{"formValues": {
"name": "Test data",
"location": "Test data",
"review": "Test data",
"rating": 10
}
}

(6)
Build client app.js to handle form action before sending data through the client

Then setup fetch for POST server route

Fetch POST server route template:

fetch("url", {
method:,
headers: {
},
body: JSON.stringify()
})

(7) To render users’ data on the interface, you need to set up fetch from server GET route using an async function (like you would with an API)

Test this using the client, in case your form is not processing the data properly (see object in Console). Also doublecheck in the database or using the localhost GET route

(8)
Then setup the DOM elements needed to render the reviews as elements the user can interact with them

This entails creating a function e.g. createReviews – in the argument:

- declare two constants; one to get your database data and one to select your review div from HTML
- then, using a loop, create the HTML elements in the DOM, update the textContent and assign className
- append the elements appropriately (elements to div + div to container)
- call the function

(9)
Style the website section by section – use headers to separate your CSS code because there are A LOT of elements at play

...

The final that could have gone better would be if I was able to hit all the stretch requirements, but after the whole thing and a hectic weekend, I was exhausted. So I called it quits while I was ahead. I think this may well be my easiest assignment so far, in execution.

<!-- ================================================================================= -->

## Tips

### Some general wisdom:

- The bigger picture is scary and overwhelming! Divide your project into smaller manageable steps (use the user stories to help you)
- Deploy as soon as possible! As soon as the first setup (template) is done, commit and push to GitHub, then deploy on Render
- Plan! Plan! Plan! PLAN!!!!! We are creating a full-stack application; you cannot just jump in. Channel your enthusiasm with focus. A plan keeps you focused
- The tutors want to see your learning journey. Don't be afraid to submit incomplete or broken code. They want a fair representation on your skills so feedback can be provided

### Also, some tech wisdom:

- For Supabase DB, create a new table within your existing course DB
- Every time we push code to GitHub, Render picks up the changes and redeploys automatically.
- Add the client link (from Render) on your GitHub repo
- When your deployment fails, and at some points it most certainly will...REMEMBER: DO NOT PANIC! READ THE ERROR LOG! USE THE TROUBLESHOOTING GUIDE!
