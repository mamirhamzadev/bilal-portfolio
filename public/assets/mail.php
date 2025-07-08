<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get and sanitize input
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(["\r", "\n"], [" ", " "], $name);

    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $project_type = trim($_POST["project_type"]);
    $timeline = trim($_POST["timeline"]);
    $project_budget = trim($_POST["project_budget"]);
    $contact_method = trim($_POST["contact_method"]);
    $project_details = trim($_POST["project_details"]);
    $consent = isset($_POST["consent"]) ? "Yes" : "No";

    // Validate required fields
    if (
        empty($name) ||
        empty($email) ||
        empty($project_type) ||
        empty($project_budget) ||
        empty($project_details) ||
        !filter_var($email, FILTER_VALIDATE_EMAIL)
    ) {
        http_response_code(400);
        echo "Please complete all required fields and try again.";
        exit;
    }

    // Recipient
    $recipient = "bilal16.work@gmail.com"; // 🔧 Replace with your email address

    // Subject
    $subject = "New Contact Form Submission from $name";

    // Email content
    $email_content  = "You have a new project inquiry:\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Project Type: $project_type\n";
    $email_content .= "Timeline: $timeline\n";
    $email_content .= "Budget: $project_budget\n";
    $email_content .= "Preferred Contact Method: $contact_method\n";
    $email_content .= "Project Details:\n$project_details\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "Invalid request method.";
}
?>
