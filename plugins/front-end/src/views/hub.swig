{% extends '../layouts/main.swig' %}

{% block title %}Hub{% endblock %}

{% block content %}
<div class="container">
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-body">
					<h4><strong>Experience</strong></h4>
					<div class="progress">
						<div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
					    	<span class="sr-only">60% Complete</span>
						</div> <!-- progress-bar -->
					</div> <!-- progress -->
					
					<h4><strong>Your Challenge</strong></h4>
					<div class="progress">
						<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
					    	<span class="sr-only">20% Complete</span>
						</div> <!-- progress-bar -->
					</div> <!-- progress -->

				</div> <!-- panel-body -->
			</div> <!-- panel -->
		</div> <!-- col-lg-12 -->
	</div> <!-- row -->

	<div class="row">
		<div class="col-lg-9">
			<div class="panel panel-default">
				<div class="panel-body">
					<h4><strong>Challenges</strong></h4>
					<hr/>
					
					<div class="row">
						<div class="col-lg-4">
							<div class="panel panel-default">
								<div class="panel-body">
									<a href="/challenge"><h4><strong>Challenge name</strong></h4></a>
									<img src="http://placehold.it/220x160">
									<p class="small">Short Description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

									<span class="label label-primary">HTML</span>
									<span class="label label-success">Beginner</span>
									<span class="label label-info">Attributes</span>
								</div> <!-- panel-body -->
							</div> <!-- panel -->
						</div> <!-- col-lg-4 -->

					</div> <!-- row -->

				</div> <!-- panel-body -->
			</div> <!-- panel -->
		</div> <!-- col-lg-9 -->
		<div class="col-lg-3">
			<div class="panel panel-default">
				<div class="panel-body">
					<h4><strong>Filters</strong></h4>
					<hr/>
					<div class="input-group">
				      	<input type="text" class="form-control" placeholder="Search">
				      	<span class="input-group-btn">
				        	<button class="btn btn-primary" type="button">Search</button>
				    	</span> <!-- input-group-btn -->
				    </div> <!-- /input-group -->
					<div class="filter-divider"></div>
					
					<div class="btn-group" role="group">
						<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
							Diffuculty
								<span class="caret"></span>
						</button> <!-- button -->
				    	<ul class="dropdown-menu" role="menu">
				      		<li><a href="#">All</a></li>
				      		<li><a href="#">Beginner</a></li>
				      		<li><a href="#">Intermediate</a></li>
				      		<li><a href="#">Advanced</a></li>
				    	</ul> <!-- dropdown-menu -->
				  	</div> <!-- btn-group -->
					<div class="filter-divider"></div>

				  	<div class="btn-group" role="group">
						<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
							Language
								<span class="caret"></span>
						</button> <!-- button -->
				    	<ul class="dropdown-menu" role="menu">
				      		<li><a href="#">HTML</a></li>
				      		<li><a href="#">CSS</a></li>
				      		<li><a href="#">JavaScript</a></li>
				      		<li><a href="#">C#</a></li>
				      		<li><a href="#">Java</a></li>
				    	</ul> <!-- dropdown-menu -->
				  	</div> <!-- btn-group -->
					<div class="filter-divider"></div>
					
				</div> <!-- panel-body -->
			</div> <!-- panel -->
		</div> <!-- col-lg-3 -->
	</div> <!-- row -->
</div> <!-- container -->
{% endblock %}