<!DOCTYPE html>
<html lang="en">
	<head>
		{% block meta %}{% endblock %}
		<title>Programmaverse - {% block title %}{% endblock %}</title>
		{% block stylesheets %}{% endblock %}
	</head>

	<body>
		{% include '../partials/topbar.swig' %}

		{% block content %}{% endblock %}
	</body>
</html>
