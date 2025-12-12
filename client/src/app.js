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

// // ---------- from week 3 assignment ---------- //
// //TODO: Create DOM elements for the shop upgrades
// //- create the element

// //- assign the value to its property (textContent)
// //- append it to the DOM (appendChild)

// //- after you complete this task, you should see the upgrades in your shop container!

// // ** Create the function to create each upgrade in the shop **
// // I am selecting the shop container and storing it in a variable
// async function createUpgrades() {
//   const itemData = await getData();
//   const shopContainer = document.getElementById("shop-container");

//   //for each item (upgrade) in the shop, I need the function to create a div + repeat a number of actions (loop):

//   // I need it to create elements for each of its properties
//   for (let i = 0; i < itemData.length; i++) {
//     const shopItems = document.createElement("div");
//     const upgradeName = document.createElement("h3");
//     const upgradeCost = document.createElement("p");
//     const upgradeIncrease = document.createElement("p");
//     const buyButton = document.createElement("button");
//     const itemImage = document.createElement("img");

//     // I need it to update the textContent using the API data
//     upgradeName.textContent = itemData[i].name;
//     upgradeCost.textContent = `Cost: ${itemData[i].cost}`;
//     upgradeIncrease.textContent = `CPS Increase: ${itemData[i].increase}`;
//     buyButton.textContent = `BUY ME`;
//     itemImage.src = images[i];

//     // I need it to assign a class name
//     upgradeName.className = "upgrade-name";
//     upgradeCost.className = "upgrade-cost";
//     upgradeIncrease.className = "upgrade-increase";
//     shopItems.className = "shop-item";
//     buyButton.className = "buy-button";
//     itemImage.className = "item-image";

//     // I need it to append the name, cost and increase to the div in question
//     shopItems.appendChild(upgradeName);
//     shopItems.appendChild(upgradeCost);
//     shopItems.appendChild(upgradeIncrease);
//     shopItems.appendChild(buyButton);
//     shopItems.appendChild(itemImage);

//     // I need to append each shop item container to the shop container for easier styling
//     shopContainer.appendChild(shopItems);

//     console.log(itemData[i]);

//     //BECAUSE I WANT THIS TO HAPPEN ON CLICK OF BUTTON, I NEED AN EVENT LISTENER
//     buyButton.addEventListener("click", function () {
//       buyMe(itemData[i]);
//     });
//   }
// }
// //then I call the function:
// createUpgrades();
