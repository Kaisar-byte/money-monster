function getValueFromInputId(elementId) {
    const elementIdField = document.getElementById(elementId);
    const elementValueString = elementIdField.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setValueToInnerText(elemId, value) {
    const elementIdField = document.getElementById(elemId);
    elementIdField.innerText = value;
}