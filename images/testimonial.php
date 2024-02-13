<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $author = $_POST["author"];
    $message = $_POST["message"];

    // Validate and sanitize the data (add more validation as needed)
    if (empty($author) || empty($message)) {
        echo "Please fill out all fields.";
    } else {
        // Store the testimonial in a file
        $testimonial = "Author: " . htmlspecialchars($author) . "\nMessage: " . htmlspecialchars($message) . "\n\n";
        file_put_contents("./testimonials.txt", $testimonial, FILE_APPEND);

        echo "Testimonial submitted successfully!";
    }
}
?>
