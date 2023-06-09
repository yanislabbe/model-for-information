<?php
$modifiedData = json_decode(file_get_contents('php://input'), true);

$data = json_decode(file_get_contents('json/data.json'), true);

foreach ($modifiedData as $key => $value) {
    if (isset($data[$key])) {
        $data[$key] = $value;
    }
}

file_put_contents('json/data.json', json_encode($data, JSON_PRETTY_PRINT));

$response = array('success' => true, 'message' => 'Data updated successfully');

header('Content-Type: application/json');
echo json_encode($response);
