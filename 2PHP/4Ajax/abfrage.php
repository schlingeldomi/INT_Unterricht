<?php 

try {
   $dbh = new PDO('mysql:host=localhost;dbname=biblio', 'root', 'root');
  
   // Einträge auslesen 
  $stmt = $dbh->prepare("SELECT `Name` FROM `schueler` WHERE Vorname = :Vorname"); 
  $stmt->execute(["Vorname" => $_GET["Vorname"]]); 
  $results = $stmt->fetchAll(PDO::FETCH_OBJ); 

  // In einem Array speichern 
  foreach ($results as $result) { 
	$arr[] = ['names'=>$result->Name]; 
	} 
	
	$dbh = null;
} catch (PDOException $e) {
   print "Error!: " . $e->getMessage() . "<br/>";
   die();
}
echo json_encode($arr); 
?>