// var selectLoginButton = document.getElementById("frstbtni");

function RegisterFormShow() {
	var deleteFormMessage = document.getElementById("frstmsgpg");
	deleteFormMessage.style.display = "none";
	var deleteLoginForm = document.getElementById("middlepg2");
	deleteLoginForm.style.display = "none";
	var showLoginForm = document.getElementById("middlepg");
	showLoginForm.style.display = "block";
	var showFormButton = document.getElementById("submitbtn");
	showFormButton.setAttribute("value", "Register");
	showFormButton.style.display = "inline";
}

// var selectSignupButton = document.getElementById("scndbtni");

function LoginFormShow() {
	var showLoginForm = document.getElementById("middlepg");
	showLoginForm.style.display = "none";
	var deleteFormMessage = document.getElementById("frstmsgpg");
	deleteFormMessage.style.display = "none";
	var showLoginForm = document.getElementById("middlepg2");
	showLoginForm.style.display = "block";
	var showFormButton = document.getElementById("submitbtn");
	showFormButton.setAttribute("value", "Login");
	showFormButton.style.display = "inline";
}

// var selectNameInput = document.getElementById("inptname1");
// var selectUsernameInput_1 = document.getElementById("inptuser1");
// var selectEmailInput = document.getElementById("inptemail1");
// var selectUsernameInput_2 = document.getElementById("inptusrlgin");

// selectNameInput.onfocus = function () {
// 	if (selectNameInput.value === "Enter Your Fullname") {
// 		// selectNameInput.setAttribute("value", "OK");
// 		selectNameInput.value === "";
// 	}
// };

// class ClearAndSet_InputValues {
// 	constructor(gettingCommand) {
// 		this.functionToDo = gettingCommand;
// 	}
// 	clickerFunc(gettingElement_1, firstValue_1, secondValue_1) {
// 		var gettingElementInFuncId = document.getElementById(gettingElement_1);
// 		gettingElementInFuncId.this.functionToDo = function () {
// 			if (gettingElementInFuncId.value === firstValue_1) {
// 				gettingElementInFuncId.value = secondValue_1;
// 			}
// 		};
// 	}
// 	unclickerFunc(gettingElement_2, firstValue_2, secondValue_2) {
// 		var gettingElementInFuncId_2 =
// 			document.getElementById(gettingElement_2);
// 		gettingElementInFuncId_2.this.functionToDo = function () {
// 			if (gettingElementInFuncId_2.value === firstValue_2) {
// 				gettingElementInFuncId_2.value = secondValue_2;
// 			}
// 		};
// 	}
// }

function valueCheckerFunc_1(
	gettingElement,
	fisrtValue,
	secondValue,
	valueCommand_1
) {
	var commandGetterValueCommand = valueCommand_1;
	var elementGetter_1 = document.getElementById(gettingElement);
	if (commandGetterValueCommand === 1) {
		elementGetter_1.onclick = function () {
			if (elementGetter_1.value === fisrtValue) {
				elementGetter_1.value = secondValue;
			}
		};
	} else if (commandGetterValueCommand === 2) {
		elementGetter_1.onblur = function () {
			if (elementGetter_1.value === fisrtValue) {
				elementGetter_1.value = secondValue;
			}
		};
	} else {
		console.log("Wrong Command");
	}
}

// function ClearValues() {
// 	var selectNameInput = document.getElementById("inptname1");
// 	var selectUsernameInput_1 = document.getElementById("inptuser1");
// 	var selectEmailInput = document.getElementById("inptemail1");
// 	var selectUsernameInput_2 = document.getElementById("inptusrlgin");
// 	selectNameInput.onclick = function () {
// 		if (selectNameInput.value === "Enter Your Fullname") {
// 			selectNameInput.value = "";
// 		}
// 	};
// 	selectNameInput.onblur = function () {
// 		if (selectNameInput.value === "") {
// 			selectNameInput.value = "Enter Your Fullname";
// 		}
// 	};
// }

window.onload = function () {
	valueCheckerFunc_1("inptname1", "Enter Your Fullname", "", 1);
	valueCheckerFunc_1("inptname1", "", "Enter Your Fullname", 2);
	valueCheckerFunc_1("inptuser1", "Enter Your Username", "", 1);
	valueCheckerFunc_1("inptuser1", "", "Enter Your Username", 2);
	valueCheckerFunc_1("inptemail1", "Enter Your Email", "", 1);
	valueCheckerFunc_1("inptemail1", "", "Enter Your Email", 2);
	valueCheckerFunc_1("inptusrlgin", "Enter Your Username", "", 1);
	valueCheckerFunc_1("inptusrlgin", "", "Enter Your Username", 2);
};
