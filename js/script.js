function enableContinueButton() {

  var continueButton = document.getElementById('firstStepBtnId');
  continueButton.disabled = true;

  var radioButtons = document.getElementsByName('ticket');
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      continueButton.disabled = false;
      continueButton.classList.remove('btn-outline-dark');
      continueButton.classList.add('btn-dark');
      break;
    }
  }
}
function showStep2() {

  var form_Step1 = document.getElementById('form_step_1');
  form_Step1.classList.add('d-none');

  var form_Step2 = document.getElementById('form_step_2');
  form_Step2.classList.remove('d-none');

  // Set initial value of input number based on selected radio button
  var selectedOption = document.querySelector('input[name="ticket"]:checked').value;

  var inputNumber = document.getElementById('selected_ticket_id');
  let inputValue = inputNumber.value = selectedOption;

  let ticket_option = document.getElementsByClassName('btn_ticket_select');
  let total_ticket_option = ticket_option.length;
  let perTicketUnitId = document.getElementById('ticket_unit_id');
  let perTicketPrice = parseFloat(perTicketUnitId.innerHTML);

  // console.log(total_ticket_option,inputValue);
  let total_priceCalc = inputValue * perTicketPrice;
  
  let total_price_id = document.getElementById('total_price_id');
  total_price_id.innerHTML = total_priceCalc;

  const arrow_up = document.querySelector(".arrow_up"),
    arrow_down = document.querySelector(".arrow_down"),
    btn_ticket_select = document.querySelector(".btn_ticket_select");
  let temp = inputNumber.value;
  arrow_up.addEventListener("click", () => {
    temp++;
    temp = (temp < total_ticket_option) ? 0  + temp : temp;
    inputNumber.value = temp;
    total_price_id.innerHTML = perTicketPrice * temp;
  });
  arrow_down.addEventListener("click", () => {
    if (temp > 1) {
      temp--;
      temp = (temp < total_ticket_option) ? 0 + temp : temp;
      inputNumber.value = temp;
      total_price_id.innerHTML = perTicketPrice * temp;

    }
  });




}

function updateInputNumber(selectedOption) {
  var inputNumber = document.getElementById('selected_ticket_id');
  inputNumber.value = selectedOption.value;
}

function enableSubmitButton() {
  var submitButton = document.getElementById('selected_ticket_id');
  submitButton.disabled = false;

}


function checkAnswer(selectedOption) {
  var submitButton = document.getElementById('submit_button');
  var modal = document.getElementById('modal');

  if (selectedOption.id === 'option3') {
    submitButton.disabled = false;
    submitButton.classList.remove('btn-outline-dark');
    submitButton.classList.add('btn-dark');
    modal.classList.add('d_none');
  } else {
    submitButton.disabled = true;
    modal.classList.remove('d_none');
  }
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.classList.add('d-none');
}

function submitForm() {
  // Redirect to another page
  window.location.href = "anotherpage.html";
}