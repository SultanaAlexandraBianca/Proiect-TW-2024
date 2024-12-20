<?php
require 'db.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM participants");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare("INSERT INTO participants (name, tournament_id) VALUES (?, ?)");
        $stmt->execute([$data['name'], $data['tournament_id']]);
        echo json_encode(['message' => 'Participant added']);
        break;

    case 'PUT':
        parse_str(file_get_contents('php://input'), $data);
        $stmt = $pdo->prepare("UPDATE participants SET name=?, tournament_id=? WHERE id=?");
        $stmt->execute([$data['name'], $data['tournament_id'], $data['id']]);
        echo json_encode(['message' => 'Participant updated']);
        break;

    case 'DELETE':
        parse_str(file_get_contents('php://input'), $data);
        $stmt = $pdo->prepare("DELETE FROM participants WHERE id=?");
        $stmt->execute([$data['id']]);
        echo json_encode(['message' => 'Participant deleted']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['message' => 'Method not allowed']);
        break;
}
?>
