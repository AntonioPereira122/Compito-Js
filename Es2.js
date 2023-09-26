const newForm = document.createElement("form");

const newlabel1 = document.createElement("label");
const newlabel2 = document.createTextNode("Form");
newlabel1.appendChild(newlabel2);
newForm.appendChild(newlabel1);

const newText = document.createElement("textarea");
const newText1 = document.createTextNode("Hello");
newText.appendChild(newText1);
newForm.appendChild(newText);


const newInput = document.createElement("input");
newInput.setAttribute("type", "text");
newForm.appendChild(newInput);

const newlabell1 = document.createElement("label");
const newlabell2 = document.createTextNode("Radio");
newlabell1.appendChild(newlabell2);
newForm.appendChild(newlabell1);

const newInput1 = document.createElement("input");
newInput1.setAttribute("type", "radio");
newForm.appendChild(newInput1);

const newlabelll1 = document.createElement("label");
const newlabelll2 = document.createTextNode("Select");
newlabelll1.appendChild(newlabelll2);
newForm.appendChild(newlabelll1);
//--chat gpt pk non avevo voglia
// Create the select element
const selectElement = document.createElement('select');
selectElement.name = 'cars';
selectElement.id = 'cars';

// Create and append the first option element
const option1 = document.createElement('option');
option1.value = 'volvo';
option1.textContent = 'Volvo';
selectElement.appendChild(option1);

// Create and append the second option element
const option2 = document.createElement('option');
option2.value = 'saab';
option2.textContent = 'Saab';
selectElement.appendChild(option2);

// Create and append the third option element
const option3 = document.createElement('option');
option3.value = 'mercedes';
option3.textContent = 'Mercedes';
selectElement.appendChild(option3);

// Create and append the fourth option element
const option4 = document.createElement('option');
option4.value = 'audi';
option4.textContent = 'Audi';
selectElement.appendChild(option4);

newForm.appendChild(selectElement);
// Append the select element to the body or any other desired container
document.body.appendChild(newForm);


/*<form>
<label for="">Form</label>
<textarea name="" id="" cols="30" rows="10">hello</textarea>
<input type="text">

<label>Radio Button</label>
<input type="radio">

<label>Select</label>
<select name="cars" id="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select>
</form>*/
