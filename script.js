document.addEventListener("DOMContentLoaded", function() {
    fetch('_header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
            } else {
                console.error("Header placeholder element not found!");
            }
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });

    // Optional: Add similar logic for a shared footer if needed
    // fetch('_footer.html')
    //    .then(response => response.text())
    //    .then(data => {
    //        const footerPlaceholder = document.getElementById('footer-placeholder');
    //        if (footerPlaceholder) footerPlaceholder.innerHTML = data;
    //     })
    //    .catch(error => console.error('Error fetching footer:', error));
}); 