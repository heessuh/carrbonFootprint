// Add an event listener to the form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault() // Prevent the form from submitting

  // Select all checked radio buttons
  const radioButtons = document.querySelectorAll("input[type=radio]:checked")

  // Check if at least one radio button is checked
  if (radioButtons.length > 0) {
    // Get the value of the selected radio button
    const selectedValue = radioButtons[0].value
    console.log(selectedValue)

    // Store the selected value in local storage
    localStorage.setItem("data", selectedValue)

    // Reset the form
    document.querySelector("form").reset()

    // Define a map to associate values with results
    const resultMap = {
      heavy: "7.19 kg CO2e per day",
      medium: "5.63 kg CO2e per day",
      light: "4.61 kg CO2e per day",
      pescaterian: "3.91 kg CO2e per day",
      vegetarian: "3.81 kg CO2e per day",
      vegan: "2.89 kg CO2e per day",
    }

    // Check if the selected value is in the resultMap
    if (resultMap[selectedValue]) {
      // Display the result to the user
      document.querySelector("#result").value = resultMap[selectedValue]
    }
  }
})
/* Event Listener: Added an event listener to the form submission to handle the form submission.

Prevent Form Submission: Used e.preventDefault() to prevent the form from submitting, ensuring that the page doesn't refresh.

Select All Checked Radio Buttons: Used document.querySelectorAll to select all checked radio buttons. This avoids repetitive code for each option.

Check If Radio Buttons Are Checked: Checked if at least one radio button is checked to proceed.

Get Selected Value: Stored the value of the selected radio button in the selectedValue variable.

LocalStorage Storage: Stored the selected value in local storage using localStorage.setItem.

Form Reset: Reset the form after the value is stored.

Result Mapping: Defined a resultMap object to associate selected values with results, making the code more readable and maintainable.

Check If Value Exists in resultMap: Checked if the selected value exists in the resultMap.

Display Result: If the selected value is found in the resultMap, displayed the corresponding result to the user. */
