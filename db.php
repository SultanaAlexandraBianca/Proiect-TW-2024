<?php
$host = 'localhost';
$db_name = 'game_tournaments';
$username = 'root'; // Default pentru XAMPP
$password = ''; // Default pentru XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
