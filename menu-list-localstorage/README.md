
# LocalStorage List

A simple web app that demonstrates how to store, display, and persist a dynamic list of items using Local Storage in JavaScript.

Every time you add an item, it’s saved in your browser’s local storage — so even if you refresh or close the tab, your list remains intact.

---

## How It Works

When you type an item name and click “+ Add Item”:

1. The JavaScript reads the text from the input field.
2. It pushes a new object into a list — each object looks like this:

   ```js
   { text: "Item name", selected: false }
   ```
3. The updated list is then stored in the browser’s `localStorage` as a JSON string.
4. The function `loadFromLocalStorage()` is called to re-render the updated list on the page.

When the page reloads, the app automatically:

* Reads the stored list from localStorage.
* Loops through the saved objects.
* Creates and displays checkboxes with labels for each saved item.

---

## Features

* Persistent storage: Items stay even after a page reload or browser restart.
* Dynamic rendering: List items are built entirely in JavaScript.
* Automatic loading: The app restores data every time the page is opened.
* Minimal HTML and CSS structure for easy learning and modification.

---

## Key JavaScript Concepts Used

* Local Storage API — `localStorage.getItem()`, `localStorage.setItem()`
* JSON for serializing/deserializing data (`JSON.stringify`, `JSON.parse`)
* Event listeners for form submission and checkbox changes
* DOM manipulation using `createElement`, `appendChild`, and `innerHTML`
* `DOMContentLoaded` event to ensure the page loads the list automatically

---

## Common Gotchas

* The checkbox state uses `.selected` instead of `.checked` — this needs correction for full functionality.
* The form’s submit event doesn’t use `event.preventDefault()`, which may cause an unwanted page reload in some browsers.
* All checkboxes should have unique IDs (which the code already handles dynamically).

