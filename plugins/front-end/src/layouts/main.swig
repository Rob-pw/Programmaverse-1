<!DOCTYPE html>
<html lang="en">
	<head>
		{% block meta %}{% endblock %}
		<title>Programmaverse - {% block title %}{% endblock %}</title>
		
		<link rel="stylesheet" href="../styles/bootstrap.css">
		<link rel="stylesheet" href="../styles/style.css">
		{% block stylesheets %}{% endblock %}
	</head>

	<body>
		{% include '../partials/topbar.swig' %}

		{% block content %}{% endblock %}
	</body>

	<script src="../../js/vendor/jquery.js"></script>
	<script src="../../js/vendor/bootstrap.js"></script>
	{% block scripts %}{% endblock %}
</html>
