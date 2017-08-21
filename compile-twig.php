<?php

require_once 'vendor/autoload.php';

$loader = new Twig_Loader_Filesystem( "src" );
$twig = new Twig_Environment( $loader );

$paths = glob('src/*.html');
foreach ( $paths as $path) {
	$basename = basename($path);
	file_put_contents(
		"dist/$basename",
		$twig->render( $basename )
	);
}