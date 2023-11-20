/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    const inputElement = document.getElementById('write-some-text');

    inputElement.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' && inputElement.value.trim() !== '') {
            alert(inputElement.value);
        }
    });
}


/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    const inputElement = document.getElementById('list-input');
    const list = document.getElementById('list');

    const addToList = () => {
        if (inputElement.value.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = inputElement.value;
            list.appendChild(listItem);
            inputElement.value = ''; // Clear the input after adding to the list
        }
    };
    inputElement.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addToList();
        }
    });
    inputElement.addEventListener('blur', addToList);
}
/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  //
}
