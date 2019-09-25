<div class="page-photo">
	<% include MainNav %>
	<picture class="picture">
		<!--[if IE 9]><video style="display: none;"><![endif]-->
		<source srcset="$BackgroundPhoto.FocusFill(1200,750).URL" media="(min-width: 980px)">
		<source srcset="$BackgroundPhoto.FocusFill(980,660).URL" media="(min-width: 768px)">
		<source srcset="$BackgroundPhoto.FocusFill(768,670).URL" media="(min-width: 480px)">
		<!--[if IE 9]></video><![endif]-->
		<img srcset="$BackgroundPhoto.FocusFill(480,500).URL" alt="$Title">
	</picture>
	<div class="inner">
		<h3>$HomePhotoTitle</h3>
		<% if $HomePhotoSubtitle %><h4>$HomePhotoSubtitle</h4><% end_if %>
		<a href="$HomePhotoLink.Link" class="main-photo-link">$HomePhotoButtonText</a>
	</div>
</div>
<section class="programs">
	<div class="programs-top">
		<div class="container">
			<h2>Dance Programs <span>for all ages</span></h2>
			<br>
			<p>$ProgramsPageContent</p>
		</div>
	</div>
	<div class="programs-bottom">
		<div class="container">
			<div class="row">
				<div class="program clearfix">
					<div class="border-img">
						<img src="$Program1Photo.FocusFill(350,350).URL" alt="$Program1Title">
					</div>
					<div class="content">
						<h3>$Program1Title</h3>
						<p>$Program1Content</p>
						<a href="$Program1Link.Link">Explore</a>
					</div>
				</div>
				<div class="program clearfix">
					<div class="border-img">
						<img src="$Program2Photo.FocusFill(350,350).URL" alt="$Program2Title">
					</div>
					<div class="content">
						<h3>$Program2Title</h3>
						<p>$Program2Content</p>
						<a href="$Program2Link.Link">Explore</a>
					</div>
				</div>
				<div class="program clearfix">
					<div class="border-img">
						<img src="$Program3Photo.FocusFill(350,350).URL" alt="$Program3Title">
					</div>
					<div class="content">
						<h3>$Program3Title</h3>
						<p>$Program3Content</p>
						<a href="$Program3Link.Link">Explore</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="established">
	<div class="head">
		<div class="content">
			<h2>$PromoHeading</h2>
			<p>$PromoContent</p>
		</div>
	</div>
	<div class="established-photo">

	</div>
</section>

<section class="learn">
	<div class="top">
		<div class="container">
			<h2>Learn more about us</h2>
		</div>
	</div>
	<div class="bot">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="learn-spot clearfix">
						<div class="border-img">
							<img src="$AboutUsFeature1Photo.FocusFill(350,350).URL" alt="$AboutUsFeature1Title">
						</div>
						<div class="content">
							<h5>$AboutUsFeature1SubTitle</h5>
							<h4><a href="$AssociatedPage.Link">$AboutUsFeature1Title</a></h4>
							<p>$AboutUsFeature1Content</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="learn-spot clearfix">
						<div class="border-img">
							<img src="$AboutUsFeature2Photo.FocusFill(350,350).URL" alt="$AboutUsFeature2Title">
						</div>
						<div class="content">
							<h5>$AboutUsFeature2SubTitle</h5>
							<h4><a href="$AssociatedPageTwo.Link">$AboutUsFeature2Title</a></h4>
							<p>$AboutUsFeature2Content</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="announcements">
						<% with $Page(news) %>
							<% if $AllChildren %>
								<h3>Announcements</h3>
								<ul>
									<% loop $BlogPosts.Limit(3) %>
										<li>
											<span class="date">Posted on $PublishDate.format(MMMM d)</span>
											<a href="$Link">$Title</a>

										</li>
									<% end_loop %>
								</ul>
								<p class="viewall"><a href="{$BaseHref}/news-and-events/news/">View all accouncements</a></p>
							<% end_if %>
						<% end_with %>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>








