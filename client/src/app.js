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
  //TODO: EXTRA - On submit, the user gets a confirmation popup, the form data is cleared and the page is reloaded
  addEventListener("submit", function () {
    alert(`Thank you! Your review has been submitted.`);
  });

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
}

//! ... DO .. NOT .. FORGET...!
//!Once you finish your project, replace your localhost URL with the deployed server URL from Render!

// ==================

//TODO: Render users' data on the interface
//First, fetch the GET route from the server

async function getData(url) {
  const response = await fetch("http://localhost:8080/reviews");
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

//Then, render the data using DOM elements --> one per piece of data
//e.g. 4 columns of data requires 4 DOM elements

//! ---------- from week 3 assignment ----------
// TODO: Create DOM elements for the shop upgrades
//- create the element
//- assign the value to its property (textContent)
//- append it to the DOM (appendChild)
//- after you complete this task, you should see the reviews in your client!

// ** Create the function to create each upgrade in the shop **
// I am selecting the shop container and storing it in a variable
async function createReviews() {
  const reviewData = await getData();
  const reviewContainer = document.getElementById("review-container");

  for (let i = 0; i < reviewData.length; i++) {
    const reviewDiv = document.createElement("div");
    const reviewName = document.createElement("h3");
    const reviewLocation = document.createElement("p");
    const reviewRating = document.createElement("p");
    const reviewText = document.createElement("p");

    //for each item (upgrade) in the shop, I need the function to create a div + repeat a number of actions (loop):

    // I need it to create elements for each of its properties

    // I need it to update the textContent using the API data
    reviewName.textContent = `My name is ${reviewData[i].name}`;
    reviewLocation.textContent = `I am visiting from: ${reviewData[i].location}`;
    reviewRating.textContent = `I rate Chop&Nyam: ${reviewData[i].rating} out of 10`;
    reviewText.textContent = `My review:"${reviewData[i].review}"`;

    //I need it to assign a class name
    reviewDiv.className = "review-div";
    reviewName.className = "review-name";
    reviewLocation.className = "review-location";
    reviewRating.className = "review-rating";
    reviewText.className = "review-text";

    // I need it to append the name, cost and increase to the div in question
    reviewDiv.appendChild(reviewName);
    reviewDiv.appendChild(reviewLocation);
    reviewDiv.appendChild(reviewRating);
    reviewDiv.appendChild(reviewText);

    // I need to append each shop item container to the shop container for easier styling
    reviewContainer.appendChild(reviewDiv);

    console.log(reviewData[i]);
  }
}
//then I call the function:
createReviews();

// ===============================================//

//! CODE GRAVEYARD:
// - did not work -

// function confirmSubmit() {
//   if (confirm(`Are you sure you want to submit the form?`)) {
//     document.getElementById("review-form").submit();
//   }
// }
