<?php

$customer = json_decode(file_get_contents("php://inputs"), true);

var_dump($customer);