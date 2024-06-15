 // Get the search input element
 const searchInput = document.getElementById('searchInput');
 const searchIcon = document.querySelector('.search-icon');

 // Add event listener for Enter key press
 searchInput.addEventListener('keypress', function(event) {
     // Check if the Enter key is pressed (keyCode 13)
     if (event.keyCode === 13) {
         performSearch();
     }
 });

 // Add event listener for click on search icon
 searchIcon.addEventListener('click', function() {
     performSearch();
 });

 // Function to perform search operation
 function performSearch() {
     // Get the search query
     const query = searchInput.value;

     // Perform search operation (open Google with search query)
     window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
 }
       
//  mune bar

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    menu.addEventListener('click', function() {
        menu.classList.toggle('active');
        // Toggle white-text class for all anchor elements inside menu
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.classList.toggle('white-text');
        });
    });
});
