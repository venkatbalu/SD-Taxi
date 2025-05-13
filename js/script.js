window.onload = function () {
  var today = new Date().toISOString().split("T")[0];
  document
    .getElementById("floatingInputPickupDateOne")
    .setAttribute("min", today);
  document
    .getElementById("floatingInputRoundPickupDate")
    .setAttribute("min", today);
  document
    .getElementById("floatingInputRoundReturnDate")
    .setAttribute("min", today);
};

document
  .getElementById("formIdDropTaxi")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var showRadioOne = document.getElementById("inlineRadioOneWay");
    var showRadioRound = document.getElementById("inlineRadioRound");

    // // if (this.checkValidity()) {
    // if (true) {
    //   var formData = new FormData(this);

    //   // Convert form data to JSON
    //   var jsonObject = {};
    //   formData.forEach(function (value, key) {
    //     jsonObject[key] = value;
    //   });
    //   var jsonData = JSON.stringify(jsonObject);
    // } else {
    //   // If form is not valid, focus on the first invalid input
    //   this.querySelector(":invalid").focus();
    // }

    if (showRadioOne.checked) {
      // Get values from form fields
      var nameone = document.getElementById("floatingInputName").value;
      var contactone = document.getElementById("floatingInputContact").value;
      var pickupOneWayone = document.getElementById(
        "floatingInputPickupOne"
      ).value;
      var dropOneWayone = document.getElementById("floatingInputDropOne").value;
      var pickupDateOneWayone = document.getElementById(
        "floatingInputPickupDateOne"
      ).value;

      var pickupTimeOneWayone = document.getElementById(
        "floatingInputPickupTimeOne"
      ).value;

      var time12hrone = convertTo12HrFormat(pickupTimeOneWayone);
      // Get the value of the pickup location input field
      // var pickupLocation = document.getElementById("pickupLocation").value;

      // Construct the WhatsApp message with the pickup location value
      var oneWayMessage =
        "Hello Venkat 👋,\nI've just 🚖 booked a cab with Shreedrop taxi service.\nName - " +
        nameone +
        "\nContact Number - " +
        contactone +
        "\nPickup location 📍 - " +
        pickupOneWayone +
        "\nDrop location 📍 - " +
        dropOneWayone +
        "\nPickup date 📅 - " +
        pickupDateOneWayone +
        "\nPickup time 🕒 - " +
        time12hrone +
        "\nPlease confirm that you've received the booking and let me know when you're on your way?\n----------------\nWe will reach out to you shortly, Thanks for Booking 🙏";

      // Redirect to WhatsApp with the pre-filled message

      function validation() {
        if (nameone === "") {
          document.getElementById("floatingInputName").style.border =
            "1px solid red";
          return false;
        }
        if (contactone === "") {
          document.getElementById("floatingInputContact").style.border =
            "1px solid red";
          return false;
        }
        if (pickupOneWayone === "") {
          document.getElementById("floatingInputPickupOne").style.border =
            "1px solid red";
          return false;
        }

        if (dropOneWayone === "") {
          document.getElementById("floatingInputDropOne").style.border =
            "1px solid red";
          return false;
        }
        if (pickupDateOneWayone === "") {
          document.getElementById("floatingInputPickupDateOne").style.border =
            "1px solid red";
          return false;
        }

        return true;
      }
    }

    if (showRadioRound.checked) {
      // Get values from form fields
      var nametwo = document.getElementById("floatingInputRoundName").value;
      var contacttwo = document.getElementById(
        "floatingInputRoundContact"
      ).value;
      var pickupRoundWaytwo = document.getElementById(
        "floatingInputRoundPickup"
      ).value;
      var dropRoundWaytwo = document.getElementById(
        "floatingInputRoundDrop"
      ).value;
      var pickupDateRoundWaytwo = document.getElementById(
        "floatingInputRoundPickupDate"
      ).value;

      var pickupTimeRoundWaytwo = document.getElementById(
        "floatingInputRoundPickupTime"
      ).value;

      var pickupTimeReturnWaytwo = document.getElementById(
        "floatingInputRoundReturnDate"
      ).value;

      var time12hrtwo = convertTo12HrFormat(pickupTimeRoundWaytwo);
      // Construct the WhatsApp message with the pickup location value
      var oneWayMessage =
        "Hello Venkat 👋,\nI've just 🚖 booked a cab with Shreedrop taxi service.\nName - " +
        nametwo +
        "\nContact Number - " +
        contacttwo +
        "\nPickup location 📍 - " +
        pickupRoundWaytwo +
        "\nDrop location 📍 - " +
        dropRoundWaytwo +
        "\nPickup date 📅 - " +
        pickupDateRoundWaytwo +
        "\nPickup time 🕒 - " +
        time12hrtwo +
        "\nReturn date 📅 - " +
        pickupTimeReturnWaytwo +
        "\nPlease confirm that you've received the booking and let me know when you're on your way?\n-------------------\nWe will reach out to you shortly, Thanks of Booking 🙏";

      function validationTwo() {
        if (nametwo === "") {
          document.getElementById("floatingInputRoundName").style.border =
            "1px solid red";
          return false;
        }
        if (contacttwo === "") {
          document.getElementById("floatingInputRoundContact").style.border =
            "1px solid red";
          return false;
        }
        if (pickupRoundWaytwo === "") {
          document.getElementById("floatingInputRoundPickup").style.border =
            "1px solid red";
          return false;
        }

        if (dropRoundWaytwo === "") {
          document.getElementById("floatingInputRoundDrop").style.border =
            "1px solid red";
          return false;
        }
        if (pickupDateRoundWaytwo === "") {
          document.getElementById("floatingInputRoundPickupDate").style.border =
            "1px solid red";
        }

        if (pickupTimeRoundWaytwo === "") {
          document.getElementById("floatingInputRoundPickupTime").style.border =
            "1px solid red";
          return false;
        }

        if (pickupTimeReturnWaytwo === "") {
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
      "whatsapp://send?phone=9894950767&text=" + encodedMessage;

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

        showConfirmation();
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
        showConfirmation();
      }
      // window.location.href = whatsappLink;
    }
  });

function showConfirmation() {
  document.getElementById("confirmModal").style.display = "block";
}

function closeModal() {
  document.getElementById("confirmModal").style.display = "none";
  document.getElementById("successModal").style.display = "none";
}

function confirmBooking() {
  var showRadioOne = document.getElementById("inlineRadioOneWay");
  var showRadioRound = document.getElementById("inlineRadioRound");
  if (showRadioOne.checked) {
    const nameone = document.getElementById("floatingInputName").value;
    const contactone = document.getElementById("floatingInputContact").value;
    const pickupOneWayone = document.getElementById(
      "floatingInputPickupOne"
    ).value;
    const dropOneWayone = document.getElementById("floatingInputDropOne").value;
    const pickupDateOneWayone = document.getElementById(
      "floatingInputPickupDateOne"
    ).value;

    const pickupTimeOneWayone = document.getElementById(
      "floatingInputPickupTimeOne"
    ).value;
    sendEmail(
      nameone,
      contactone,
      pickupDateOneWayone,
      pickupTimeOneWayone,
      pickupOneWayone,
      dropOneWayone,
      ""
    );
  }

  if (showRadioRound.checked) {
    const nametwo = document.getElementById("floatingInputRoundName").value;
    var contacttwo = document.getElementById("floatingInputRoundContact").value;
    const pickupRoundWaytwo = document.getElementById(
      "floatingInputRoundPickup"
    ).value;
    const dropRoundWaytwo = document.getElementById(
      "floatingInputRoundDrop"
    ).value;
    const pickupDateRoundWaytwo = document.getElementById(
      "floatingInputRoundPickupDate"
    ).value;

    const pickupTimeRoundWaytwo = document.getElementById(
      "floatingInputRoundPickupTime"
    ).value;

    const pickupTimeReturnWaytwo = document.getElementById(
      "floatingInputRoundReturnDate"
    ).value;

    sendEmail(
      nametwo,
      contacttwo,
      pickupDateRoundWaytwo,
      pickupTimeRoundWaytwo,
      pickupRoundWaytwo,
      dropRoundWaytwo,
      pickupTimeReturnWaytwo
    );
  }
}

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
      elementToHideRound.parentNode.removeChild(elementToHideRound);
    }
  }

  if (showRadioRound.checked) {
    elementToHideRound.style.display = "block";
    if (elementToHideOne) {
      elementToHideOne.parentNode.removeChild(elementToHideOne);
    }
  }
}

function sendEmail(
  cusname,
  cuscontact,
  pickupdate,
  pickuptime,
  pickuplocation,
  droplocation,
  returndate
) {
  const tim = new Date().toLocaleString();
  emailjs
    .send("service_7svzxmn", "template_t2xsuot", {
      // name: "Mathan Doe",
      // email: email,
      time: "30-05-2025",
      cusname: cusname,
      cuscontact: cuscontact,
      pickupdate: pickupdate,
      pickuptime: pickuptime,
      pickuplocation: pickuplocation,
      droplocation: droplocation,
      returndate: returndate ? returndate : "",
      returntime: "",
    })
    .then(
      function (response) {
        // alert("Email sent successfully!");
        document.getElementById("formIdDropTaxi").reset();

        // Show success popup
        document.getElementById("confirmModal").style.display = "none";
        document.getElementById("successModal").style.display = "block";
      },
      function (error) {
        console.error("Failed to send email:", error);
        alert("❌ Failed to send booking. Please try again.\n" + error.text);
      }
    );
}
