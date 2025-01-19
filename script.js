// Handle form submission and display pop-up message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Display the pop-up message
    document.getElementById('popupMessage').style.display = 'block';

    // Hide the pop-up message after 3 seconds
    setTimeout(function() {
        document.getElementById('popupMessage').style.display = 'none';
    }, 3000);
});

// Display current date and time dynamically
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    
    // Create a new Date object
    const currentDate = new Date();
    
    // Format the date 
    const dateString = currentDate.toLocaleDateString('en-US', {
        weekday: 'long', // Day of the week (e.g., Monday)
        year: 'numeric', // Full year (e.g., 2025)
        month: 'long', // Month name (e.g., January)
        day: 'numeric', // Day of the month (e.g., 18)
    });

    // Format the time 
    const timeString = currentDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // 12-hour format (AM/PM)
    });

    // Set the content of the date and time elements
    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Run the function once on page load to show initial date and time
updateDateTime();