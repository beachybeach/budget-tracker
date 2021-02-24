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