document
  .getElementById("formIdDropTaxi")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    var showRadioOne = document.getElementById("inlineRadioOneWay");
    var showRadioRound = document.getElementById("inlineRadioRound");

    console.log("called", showRadioOne.checked, showRadioRound.checked);
    // // if (this.checkValidity()) {
    // if (true) {
    //   var formData = new FormData(this);

    //   // Convert form data to JSON
    //   var jsonObject = {};
    //   formData.forEach(function (value, key) {
    //     jsonObject[key] = value;
    //   });
    //   var jsonData = JSON.stringify(jsonObject);
    //   console.log(jsonData);
    // } else {
    //   // If form is not valid, focus on the first invalid input
    //   this.querySelector(":invalid").focus();
    // }

    if (showRadioOne.checked) {
      // Get values from form fields
      var name = document.getElementById("floatingInputName").value;
      var contact = document.getElementById("floatingInputContact").value;
      var pickupOneWay = document.getElementById(
        "floatingInputPickupOne"
      ).value;
      var dropOneWay = document.getElementById("floatingInputDropOne").value;
      var pickupDateOneWay = document.getElementById(
        "floatingInputPickupDateOne"
      ).value;

      var pickupTimeOneWay = document.getElementById(
        "floatingInputPickupTimeOne"
      ).value;

      var time12hr = convertTo12HrFormat(pickupTimeOneWay);

      // Get the value of the pickup location input field
      // var pickupLocation = document.getElementById("pickupLocation").value;

      // Construct the WhatsApp message with the pickup location value
      var oneWayMessage =
        "Hello Venkat 👋,\nI've just 🚖 booked a cab with Shreedrop taxi service.\nName - " +
        name +
        "\nContact Number - " +
        contact +
        "\nPickup location 📍 - " +
        pickupOneWay +
        "\nDrop location 📍 - " +
        dropOneWay +
        "\nPickup date 📅 - " +
        pickupDateOneWay +
        "\nPickup time 🕒 - " +
        time12hr +
        "\nPlease confirm that you've received the booking and let me know when you're on your way?\n----------------\nWe will reach out to you shortly, Thanks for Booking 🙏";

      // Redirect to WhatsApp with the pre-filled message

      function validation() {
        if (name === "") {
          document.getElementById("floatingInputName").style.border =
            "1px solid red";
          return false;
        }
        if (contact === "") {
          document.getElementById("floatingInputContact").style.border =
            "1px solid red";
          return false;
        }
        if (pickupOneWay === "") {
          document.getElementById("floatingInputPickupOne").style.border =
            "1px solid red";
          return false;
        }

        if (dropOneWay === "") {
          document.getElementById("floatingInputDropOne").style.border =
            "1px solid red";
          return false;
        }
        if (pickupDateOneWay === "") {
          document.getElementById("floatingInputPickupDateOne").style.border =
            "1px solid red";
          return false;
        }

        return true;
      }
    }

    if (showRadioRound.checked) {
      // Get values from form fields
      var name = document.getElementById("floatingInputRoundName").value;
      var contact = document.getElementById("floatingInputRoundContact").value;
      var pickupRoundWay = document.getElementById(
        "floatingInputRoundPickup"
      ).value;
      var dropRoundWay = document.getElementById(
        "floatingInputRoundDrop"
      ).value;
      var pickupDateRoundWay = document.getElementById(
        "floatingInputRoundPickupDate"
      ).value;

      var pickupTimeRoundWay = document.getElementById(
        "floatingInputRoundPickupTime"
      ).value;

      var pickupTimeReturnWay = document.getElementById(
        "floatingInputRoundReturnDate"
      ).value;

      var time12hr = convertTo12HrFormat(pickupTimeRoundWay);

      // Get the value of the pickup location input field
      // var pickupLocation = document.getElementById("pickupLocation").value;

      // Construct the WhatsApp message with the pickup location value
      var oneWayMessage =
        "Hello Venkat 👋,\nI've just 🚖 booked a cab with Shreedrop taxi service.\nName - " +
        name +
        "\nContact Number - " +
        contact +
        "\nPickup location 📍 - " +
        pickupRoundWay +
        "\nDrop location 📍 - " +
        dropRoundWay +
        "\nPickup date 📅 - " +
        pickupDateRoundWay +
        "\nPickup time 🕒 - " +
        time12hr +
        "\nReturn date 📅 - " +
        pickupTimeReturnWay +
        "\nPlease confirm that you've received the booking and let me know when you're on your way?\n-------------------\nWe will reach out to you shortly, Thanks of Booking 🙏";

      function validationTwo() {
        if (name === "") {
          document.getElementById("floatingInputRoundName").style.border =
            "1px solid red";
          return false;
        }
        if (contact === "") {
          document.getElementById("floatingInputRoundContact").style.border =
            "1px solid red";
          return false;
        }
        if (pickupRoundWay === "") {
          document.getElementById("floatingInputRoundPickup").style.border =
            "1px solid red";
          return false;
        }

        if (dropRoundWay === "") {
          document.getElementById("floatingInputRoundDrop").style.border =
            "1px solid red";
          return false;
        }
        if (pickupDateRoundWay === "") {
          document.getElementById("floatingInputRoundPickupDate").style.border =
            "1px solid red";
        }

        if (pickupTimeRoundWay === "") {
          document.getElementById("floatingInputRoundPickupTime").style.border =
            "1px solid red";
          return false;
        }

        if (pickupTimeReturnWay === "") {
          document.getElementById("floatingInputRoundReturnDate").style.border =
            "1px solid red";
          return false;
        }

        return true;
      }
    }
    var roundTripMessage = "";
    // Encode the message for use in the WhatsApp link
    var encodedMessage = encodeURIComponent(
      showRadioOne ? oneWayMessage : roundTripMessage
    );

    // Construct the WhatsApp link with the encoded message
    var whatsappLink =
      "whatsapp://send?phone=9363641272&text=" + encodedMessage;

    if (
      (showRadioOne.checked && validation() === true) ||
      (showRadioRound.checked && validationTwo() === true)
    ) {
      if (showRadioOne.checked) {
        document.getElementById("floatingInputName").style.border = "none";
        document.getElementById("floatingInputContact").style.border = "none";
        document.getElementById("floatingInputPickupOne").style.border = "none";
        document.getElementById("floatingInputDropOne").style.border = "none";
        document.getElementById("floatingInputPickupDateOne").style.border =
          "none";
      }

      if (showRadioRound.checked) {
        document.getElementById("floatingInputRoundName").style.border = "none";
        document.getElementById("floatingInputRoundContact").style.border =
          "none";
        document.getElementById("floatingInputRoundPickup").style.border =
          "none";
        document.getElementById("floatingInputRoundDrop").style.border = "none";
        document.getElementById("floatingInputRoundPickupDate").style.border =
          "none";
        document.getElementById("floatingInputRoundPickupTime").style.border =
          "none";
        document.getElementById("floatingInputRoundReturnDate").style.border =
          "none";
      }
      window.location.href = whatsappLink;
    }
  });

function convertTo12HrFormat(time24hr) {
  var splitTime = time24hr.split(":");
  var hours = parseInt(splitTime[0], 10);
  var minutes = splitTime[1];
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var time12hr = hours + ":" + minutes + " " + ampm;
  return time12hr;
}

function toggleElement() {
  var elementToHideOne = document.getElementById("cab-one-way-trip");
  var showRadioOne = document.getElementById("inlineRadioOneWay");
  var showRadioRound = document.getElementById("inlineRadioRound");
  var elementToHideRound = document.getElementById("cab-round-way-trip");

  // If the "Show Element" radio button is checked, display the element
  if (showRadioOne.checked) {
    elementToHideOne.style.display = "block";
    if (elementToHideRound) {
      console.log("one");
      elementToHideRound.parentNode.removeChild(elementToHideRound);
    }
  }

  if (showRadioRound.checked) {
    console.log("round");
    elementToHideRound.style.display = "block";
    if (elementToHideOne) {
      elementToHideOne.parentNode.removeChild(elementToHideOne);
    }
  }
}
