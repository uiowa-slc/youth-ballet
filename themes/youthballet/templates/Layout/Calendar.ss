<% include HeaderPhoto %>
<main class="container main" role="main">

	<div class="row">

		<!-- Main Content -->
		<div class="col-md-8 col-md-offset-2">
			<section id="main-content" tabindex="-1">
				<h1>$Title</h1>
				$Content
				$Form

				<% if Events %>
				<div id="event-calendar-events">
					<% include EventList %>
				</div>
				<% else %>
					<p>There are no upcoming events.</p>
				<% end_if %>
			</section>
		</div><!-- end .col -->
	</div><!-- end .row -->
</main><!-- end .container -->
<% include PhotoGallery %>

