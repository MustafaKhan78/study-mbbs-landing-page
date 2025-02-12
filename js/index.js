document.addEventListener("DOMContentLoaded", function () {
    // Scroll to form function
    function scrollToForm() {
        document.getElementById("leadForm").scrollIntoView({ behavior: "smooth" });
    }

    // Attach event listener to Apply Now button
    document.getElementById("applyNowBtn").addEventListener("click", scrollToForm);

    // Form validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;
        let message = document.getElementById("message").value.trim();

        let errorMessage = "";

        if (!name) {
            errorMessage += "- Full Name is required.\n";
        }
        if (!email || !validateEmail(email)) {
            errorMessage += "- Valid Email is required.\n";
        }
        if (!phone || !validatePhone(phone)) {
            errorMessage += "- Valid Phone number is required.\n";
        }
        if (!country) {
            errorMessage += "- Please select a country.\n";
        }

        if (errorMessage) {
            alert("Please fix the following errors:\n" + errorMessage);
            return;
        }

        alert("Form submitted successfully!");
        this.reset();
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        let re = /^[0-9]{10,15}$/;
        return re.test(phone);
    }
});
