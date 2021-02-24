// create variable to hold db connection
let db;

const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
  // save a reference to the database 
  const db = event.target.result;

  db.createObjectStore('new_budget', { autoIncrement: true });
};

// upon a successful 
request.onsuccess = function(event) {
  
  db = event.target.result;

 
  if (navigator.onLine) {
    
    // uploadBudget();
  }
};

request.onerror = function(event) {
  // log error here
  console.log(event.target.errorCode);
};

// This function will be executed if we attempt to submit a new pizza and there's no internet connection
function saveRecord(record) {
  // open a new transaction with the database with read and write permissions 
  const transaction = db.transaction(['new_budget'], 'readwrite');

  // access the object store for `new_budget`
  const budgetObjectStore = transaction.objectStore('new_budget');

  // add record to your store with add method
  budgetObjectStore.add(record);
}

function uploadBudget() {
  // open a transaction on your db
  const transaction = db.transaction(['new_budget'], 'readwrite');

  // access your object store
  const budgetObjectStore = transaction.objectStore('new_budget');

  // get all records from store and set to a variable
  const getAll = budgetObjectStore.getAll();

}