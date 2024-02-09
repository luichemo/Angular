var links = document.querySelectorAll('.d-flex.routing li a');

    // Add click event listener to each link
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            links.forEach(function(otherLink) {
                otherLink.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
