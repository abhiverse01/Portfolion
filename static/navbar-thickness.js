// navbar-thickness.js
    $(document).ready(function () {
        var navbarHeight = $("#mainNavbar").height();
        var scrolled = false;

        // Function to adjust the navbar height
        function adjustNavbar() {
            var scrollPosition = $(this).scrollTop();
            if (scrollPosition > 0 && !scrolled) {
                $("#mainNavbar").css("padding", "5px 0");
                $("#mainNavbar .navbar-brand").css("font-size", "20px");
                $("#mainNavbar .nav-link").css("font-size", "16px");
                $("#mainNavbar").css("min-height", "50px"); // Set a minimum height
                scrolled = true;
            } else if (scrollPosition === 0) {
                $("#mainNavbar").css("padding", "20px 0");
                $("#mainNavbar .navbar-brand").css("font-size", "24px");
                $("#mainNavbar .nav-link").css("font-size", "18px");
                $("#mainNavbar").css("min-height", navbarHeight + "px"); // Reset to original height
                scrolled = false;
            }
        }

        // Show modal when the upload button is clicked
        $("#photo-upload").on("change", function () {
            $("#photoModal").modal("show");
        });

        // Save changes when the "Save Changes" button in the modal is clicked
        $("#savePhotoChanges").on("click", function () {
            // Get the photo file and caption
            var photoFile = $("#photo-upload").prop("files")[0];
            var photoCaption = $("#photoCaption").val();

            // Perform actions to save the photo and its options/caption
            // You can use AJAX to send the data to the server for saving.

            // Create a new photo card with the uploaded photo and caption
            var photoCard = '<div class="photo-card">';
            photoCard += '<img src="' + URL.createObjectURL(photoFile) + '" alt="Photo">';
            photoCard += '<div class="photo-caption">' + photoCaption + '</div>';
            photoCard += '</div>';

            // Append the new photo card to the photo gallery
            $(".photo-gallery").append(photoCard);

            // Close the modal
            $("#photoModal").modal("hide");
        });

        // Handle scroll event to adjust the navbar
        $(window).scroll(function () {
            adjustNavbar();
        });

        // Initial adjustment when page loads
        adjustNavbar();
    });
