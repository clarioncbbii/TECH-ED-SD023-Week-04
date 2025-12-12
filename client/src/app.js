//submit event to collect user's data
console.log("HAWAIYU!");

//TODO: Collect user' data and send to server
//(1) event listener --> attached to the form
const userForm = document.getElementById("review-form");
userForm.addEventListener("submit", handleSubmit);
//(2) event handler --> collect the form's data when the user submits the form
function handleSubmit(submitEvent) {
  submitEvent.preventDefault();
  const formData = new FormData(userForm);
  console.log(formData);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  //Note: In the key:value pairs - the key is the 'name' attribute we set in HTML and the value is what the user gave us
  //now the formData contains the values
  //   {
  //     name: "Test user",
  //     location: "Test location",
  //     review: "Test review",
  //     rating: 10,
  //   }

  //TODO: Fetch the POST server route
  // fetch("url", {
  //     method:POST,
  //     headers: {
  //     },
  //     body: JSON.stringify()
  // })

  fetch("http://localhost:8080/reviews", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formValues }),
  });

  //! ... DO .. NOT .. FORGET...!
  //!Once you finish your project, replace your localhost URL with the deployed server URL from Render!

  // ==================

  //TODO: Render users' data on the interface

  //First, fetch the GET route from the server
  async function getData(url) {
    const response = await fetch("https://localhost:8080/reviews");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  }
}

//Then, render the data using DOM elements --> one per piece of data
//e.g. 4 columns of data requires 4 DOM elements
