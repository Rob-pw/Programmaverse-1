{% extends '../layouts/main.swig' %}

{% block title %}Challenge{% endblock %}

{% block content %}
<div class="container">
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-body">
					<h4><strong>Challenge name</strong></h4>
					<span class="label label-primary">HTML</span>
					<span class="label label-success">Beginner</span>
					<span class="label label-info">Attributes</span>
					<hr/>
					<h4>Overview</h4>
					<div class="panel panel-default">
						<div class="panel-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur maiores rem vitae iste nemo quos amet, autem blanditiis odio, tempora possimus esse alias accusantium provident excepturi incidunt saepe dignissimos.</p>
						</div> <!-- panel-body -->
					</div> <!-- panel -->

					<div class="row row-eq-height">
						<div class="col-lg-6">
							<h4>Test Requirements</h4>
							<div class="list-group">
								<li class="list-group-item list-group-item-success">
									Test Requirements #1&nbsp;&nbsp;&nbsp;
									<span class="label label-success"><span class="glyphicon glyphicon-ok"></span></span>
								</li> <!-- list-group-item -->

								<li class="list-group-item">
									Test Requirements #2&nbsp;&nbsp;&nbsp;
									<span class="label label-default"><span class="glyphicon glyphicon-remove"></span></span>
								</li> <!-- list-group-item -->

								<li class="list-group-item">
									Test Requirements #3&nbsp;&nbsp;&nbsp;
									<span class="label label-default"><span class="glyphicon glyphicon-remove"></span></span>
								</li> <!-- list-group-item -->

								<li class="list-group-item list-group-item-success">
									Test Requirements #4&nbsp;&nbsp;&nbsp;
									<span class="label label-success"><span class="glyphicon glyphicon-ok"></span></span>
								</li> <!-- list-group-item -->

								<li class="list-group-item list-group-item-success">
									Test Requirements #5&nbsp;&nbsp;&nbsp;
									<span class="label label-success"><span class="glyphicon glyphicon-ok"></span></span>
								</li> <!-- list-group-item -->
							</div> <!-- list-group -->
						</div>
						<div class="col-lg-6">
							<h4>Test Description</h4>
							<div class="panel panel-default">
								<div class="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur maiores rem vitae iste nemo quos amet, autem blanditiis odio, tempora possimus esse alias accusantium provident excepturi incidunt saepe dignissimos.</p>
								</div> <!-- panel-body -->
							</div> <!-- panel -->
						</div>
					</div> <!-- row -->

					<div class="row">
						<div class="col-lg-6">
							<h4>Chat</h4>
							<div class="panel-chat panel-default">
								<div class="panel-heading">
									<span class="glyphicon glyphicon-comment"></span> Users currently attempting this challenge
								</div> <!-- panel-heading -->

								<div class="panel-body-chat">
									<ul class="chat">
										<li class="left clearfix">
											<span class="chat-img pull-left">
												<img src="http://placehold.it/50/55C1E7/fff&amp;text=R" alt="User Avatar" class="img-rounded">
												<p class="text-center chat-name">Ruby</p>
											</span> <!-- chat-img -->
											<div class="chat-body clearfix">
												<p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
											</div> <!-- chat-body -->
										</li> <!-- right -->

										<li class="right clearfix">
											<span class="chat-img pull-right">
												<img src="http://placehold.it/50/FA6F57/fff&amp;text=B" alt="User Avatar" class="img-rounded">
												<p class="text-center chat-name">Ben</p>
											</span> <!-- chat-img -->
											<div class="chat-body clearfix">
												<p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
											</div> <!-- chat-body -->
										</li> <!-- left -->

										<li class="left clearfix">
											<span class="chat-img pull-left">
												<img src="http://placehold.it/50/55C1E7/fff&amp;text=R" alt="User Avatar" class="img-rounded">
												<p class="text-center chat-name">Ruby</p>
											</span> <!-- chat-img -->
											<div class="chat-body clearfix">
												<p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
											</div> <!-- chat-body -->
										</li> <!-- right -->

										<li class="right clearfix">
											<span class="chat-img pull-right">
												<img src="http://placehold.it/50/FA6F57/fff&amp;text=B" alt="User Avatar" class="img-rounded">
												<p class="text-center chat-name">Ben</p>
											</span> <!-- chat-img -->
											<div class="chat-body clearfix">
												<p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
											</div> <!-- chat-body -->
										</li> <!-- left -->

									</ul> <!-- chat -->
								</div> <!-- panel-body-chat -->

								<div class="panel-footer">
									<div class="input-group">
										<input id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here...">
										<span class="input-group-btn">
											<button class="btn btn-primary btn-sm" id="btn-chat">Send</button>
										</span> <!-- input-group-btn -->
									</div> <!-- input-group -->
								</div> <!-- panel-footer -->
							</div> <!-- panel-chat -->
						</div> <!-- col-lg-6 -->

						<div class="col-lg-6">
							<h4>Information about the challenge</h4>
							<div class="panel panel-default">
								<div class="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur maiores rem vitae iste nemo quos amet, autem blanditiis odio, tempora possimus esse alias accusantium provident excepturi incidunt saepe dignissimos.</p>
								</div> <!-- panel-body -->
							</div> <!-- panel -->
						</div> <!-- col-lg-6 -->
					</div> <!-- row -->

					<div class="row">
						<div class="col-lg-6">
							<h4>Hints, help, additional info, resources</h4>
							<div class="panel panel-default">
								<div class="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur maiores rem vitae iste nemo quos amet, autem blanditiis odio, tempora possimus esse alias accusantium provident excepturi incidunt saepe dignissimos.</p>
								</div> <!-- panel-body -->
							</div> <!-- panel -->
						</div> <!-- col-lg-6 -->
						<div class="col-lg-6">
							<h4>APIs used for this challenge, links to their documentations</h4>
							<div class="panel panel-default">
								<div class="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur maiores rem vitae iste nemo quos amet, autem blanditiis odio, tempora possimus esse alias accusantium provident excepturi incidunt saepe dignissimos.</p>
								</div> <!-- panel-body -->
							</div> <!-- panel -->
						</div> <!-- col-lg-6 -->
					</div> <!-- row -->



				</div> <!-- panel-body -->
			</div> <!-- panel -->
		</div> <!-- col-lg-12 -->
	</div> <!-- row -->
</div> <!-- container -->

<div class="reward" style="display: none;">
	{% include '../partials/reward.swig' %}
</div>
{% endblock %}