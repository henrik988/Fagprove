<?php
	include_once('templ/inc/header.html');

	if($_GET['page'] != '' && file_exists('templ/' . $_GET['page'] . '.html')){
		include_once('pages/' . $_GET['page'] . '.html');
	} else {
		include_once('templ/index.html');
	}

	include_once('templ/inc/footer.html');
?>