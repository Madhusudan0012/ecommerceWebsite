const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('results');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;

  // Perform the search logic here
  // Example: Filter a list of items
  const items = [
    'Apple', 'Banana', 'Orange', 'Grapes'
  ];

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Display the results
  resultsContainer.innerHTML = ''; // Clear previous results

  if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
      const resultItem = document.createElement('p');
      resultItem.textContent = item;
      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found.</p>';
  }
});