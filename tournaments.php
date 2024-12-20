<?php
require 'db.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM tournaments");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare("INSERT INTO tournaments (name, date, location) VALUES (?, ?, ?)");
        $stmt->execute([$data['name'], $data['date'], $data['location']]);
        echo json_encode(['message' => 'Tournament added']);
        break;

    case 'PUT':
        parse_str(file_get_contents('php://input'), $data);
        $stmt = $pdo->prepare("UPDATE tournaments SET name=?, date=?, location=? WHERE id=?");
        $stmt->execute([$data['name'], $data['date'], $data['location'], $data['id']]);
        echo json_encode(['message' => 'Tournament updated']);
        break;

    case 'DELETE':
        parse_str(file_get_contents('php://input'), $data);
        $stmt = $pdo->prepare("DELETE FROM tournaments WHERE id=?");
        $stmt->execute([$data['id']]);
        echo json_encode(['message' => 'Tournament deleted']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['message' => 'Method not allowed']);
        break;
}
?>
