<% include HeaderPhoto %>
<main class="container main" role="main">

	<div class="row">
		<!-- Side Bar -->
		<% if $Children || $Parent %><%--Determine if Side Nav should be rendered, you can change this logic --%>
			<div class="col-lg-3 sidebar">
				<% include SideNav %>
			</div>
		<% end_if %>

		<!-- Main Content -->
		<div class="<% if $Children || $Parent %>col-lg-9 children<% else %>col-md-10 col-md-offset-1<% end_if %>">
			<section id="main-content" tabindex="-1">
				<div class="staffmember <% if $Position %>position<% end_if %>">
					<h1 class="title">$Title</h1>
					<!-- Position -->
					<% if $Position %>
						<h3 class="position">$Position</h3>
					<% end_if %>
					<hr />
					<img src="$Photo.SetWidth(400).URL" alt="$Name" class="staffmember-img">

					<!-- Email & Phone -->
					<% if $EmailAddress || $PhoneNumber %>
						<ul class="details">
							<% if $EmailAddress %><li><strong>Email:</strong> <a href="mailto:$EmailAddress">$EmailAddress</a></li><% end_if %>
							<% if $PhoneNumber %><li><strong>Phone:</strong> $PhoneNumber</li><% end_if %>
						</ul>

					<% end_if %>

					$Content
					$Form
				</div>
			</section>
			<% include ChildPages %>
		</div><!-- end .col -->
	</div><!-- end .row -->
</main><!-- end .container -->
<% include PhotoGallery %>
<% include InteriorEventList %>
<% include Enroll %>