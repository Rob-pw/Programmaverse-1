<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">

				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button> <!-- button -->

			<a class="navbar-brand" href="#"><img src="http://cl.ly/image/2a1o430C0j3p/newlogo.png" id="logo" alt="Programmaverse logo" /></a>
		</div> <!-- navbar-header -->

		<div id="navbar" class="navbar-collapse collapse">

			<ul class="nav navbar-nav navbar-right">

				<li class="active"><a href="/hub">Hub</a></li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Programming Languages<span class="caret"></span></a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="#">JavaScript</a></li>
						<li><a href="#">HTML</a></li>
						<li><a href="#">CSS</a></li>
						<li><a href="#">Java</a></li>
						<li><a href="#">C#</a></li>
					</ul> <!-- dropdown-menu -->
				</li> <!-- dropdown -->
				<li><a href="#">Account</a></li>
				{% include 'accountSummary.swig' %}
			</ul> <!-- navbar-nav -->
		</div> <!-- nav-collapse -->
	</div> <!-- container -->
</nav> <!-- navbar -->