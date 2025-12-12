//TODO: Collect user' data and send to server

//submit event to collect user's data
console.log("HAWAIYU!");

//TODO: When setting up forms, without preventing the default behaviour, our data would be stored in the URL as a string of key value pairs
//We must avoid this!

//FORMS AND VALIDATION

//TODO: in our JS, we are going to collect the data from our form
//We need two things to collect our data:
//- an event
//- FormData object

//TODO: the event --> submit
//(1) event listener --> attached to the form
const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", handleSubmit);

//(2) event handler --> collect the form's data when the user submits the form
function handleSubmit(submitEvent) {
  //we want to prevent the form's default behaviour
  //the submitEvent parameter uses the type of event as its argument
  submitEvent.preventDefault();

  //create a template object to store our user's data
  //formData is default to JS; hence we need to make copy of the object using the 'new' keyword
  const formData = new FormData(userForm);
  console.log(formData);

  //this is what the new formData creates for us; but the values are missing

  //   {
  //     username: "",
  //     email: "",
  //     password: "",
  //     jobRole: "",
  //     contractType:""
  //   }

  //We have to make the info in the formData more readable for us; we cannot use it in its raw form
  //So we need to convert (= parse) our FormData into an object shape
  //in my formData object; I want to extract the data FROM the entries, hence .fromEntries
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  //Note: In the key:value pairs: the key is the 'name' attribute we set in HTML and the value is what the user gave us
  //now the formData contains the values

  //   {
  //     username: "manny",
  //     email: "jfhf@bfbfb.com",
  //     password: "nsjfbksbfsf",
  //     jobRole: "instructor",
  //     contractType:"S346454T"
  //   }

  //  -------------------------------------- //

  //We can now use the formValues in different ways:

  //e.g. store the formValues in:
  //- a database
  //- the local storage
  //
  //e.g. render (display) the values on the screen
  //
  //e.g. use for login
}

//fetch the POST server route

// fetch("url", {
//     method:,
//     headers: {

//     },
//     body: JSON.stringify()
// })

//! ... DO .. NOT .. FORGET...!
//!Once you finish your project, replace your localhost URL with the deployed server URL from Render!

// ==================

//TODO: Render users' data on the interface

// fetch the GET route from the server

//render the data using DOM elements --> one per piece of data
//e.g. 4 columns of data requires 4 DOM elements
