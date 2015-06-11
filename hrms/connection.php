<?php

$hrms = mysqli_connect("127.0.0.1", "root", "test", "hrms");

if (mysqli_connect_errno()) {
  echo "Failed to connect" . mysqli_connect_error();
} else {
  echo "Connection established";
}

?>