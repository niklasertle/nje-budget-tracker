// Used to save interaction with database
let db;

// Opens a request for "BudgetDB" database
const request = indexedDB.open("BudgetDB", 1);

// On version update for the database create a new object store
request.onupgradeneeded = function (event) {
  db = event.target.result;

  const offlineStore = db.createObjectStore("offline-transaction", {
    autoIncrement: true,
  });
};

// When the user goes online, or when the request is successful on page load
// Check the database for data to upload to main
function checkDatabase() {
  const transaction = db.transaction(["offline-transaction"], "readwrite");
  const offlineStore = transaction.objectStore("offline-transaction");

  const getAll = offlineStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          const deleteTransaction = db.transaction(["offline-transaction"],"readwrite");
          const offlineDelete = deleteTransaction.objectStore("offline-transaction");

          offlineDelete.clear();
        });
    }
  };
}

// If the request is made succesfully and the user is online, then check the database for entries to push to the main database
request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.online) {
    checkDatabase();
  }
};

// If there is an error, log it in the console
request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// Called on fetch request fail, to send the data to the IndexDB
function saveRecord(record) {
  db = request.result;

  const transaction = db.transaction(["offline-transaction"], "readwrite");
  const offlineStore = transaction.objectStore("offline-transaction");

  offlineStore.add(record);
}

// Listens for the app to come online
window.addEventListener("online", checkDatabase);
