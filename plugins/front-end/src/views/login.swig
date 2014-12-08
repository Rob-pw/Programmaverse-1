{% extends '../layouts/main.swig' %}

{% block content %}
<form class="form-signin" action="/auth" method="post">
	<h2 class="form-signin-heading">Sign in using Mozilla Persona</h2>
	
	<input class="btn btn-lg btn-primary btn-block login_button" type="submit" value="Sign in">
</form>
{% endblock %}

{% block scripts %}
<script src="https://login.persona.org/include.js"></script>
<script>
    navigator.id.watch({
      onlogin: function(assertion) {
        $.ajax({
          url: '/auth', method: 'post', type: 'json',
          data: { assertion: assertion },
          success: function (data) {
            alert("Hello, " + data.email);
          }
        });
      }
    });
    $(".login_button").on('click', function() { navigator.id.request(); });
  </script>
{% endblock %}