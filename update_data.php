<?php
// Get the modified data from the request
$modifiedData = json_decode(file_get_contents('php://input'), true);

// Read the existing data from data.json
$data = json_decode(file_get_contents('json/data.json'), true);

// Update the data with the modified values
foreach ($modifiedData as $key => $value) {
    if (isset($data[$key])) {
        $data[$key] = $value;
    }
}

// Save the updated data back to data.json
file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));

// Prepare the response data
$response = array('success' => true, 'message' => 'Data updated successfully');

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
