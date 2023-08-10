document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", function () {
    const searchTerm = document.getElementById("search-input").value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "search", term: searchTerm });
    });
  });
});
