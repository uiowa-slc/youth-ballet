<div class="main-photo">
	<div class="inner">
		<h3>Take the leap</h3>
		<a href="{$BaseHref}enrollment" class="main-photo-link">Enroll Online Today</a>
	</div>
</div>

<div class="home-programs">
	<div class="container">
		<h2>Dance Programs <span>for all ages</span></h2>
		<br>
		<p>Located on The University of Iowa campus, The School of Dance is the perfect choice, whether you dream of a career in dance, seek an outlet for personal growth or just want to have fun.</p>
	</div>
</div>

<div class="programs">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="program">
					<img src="{$ThemeDir}/images/program-children.jpg" alt="Children">
					<div class="content">
						<h3>Children</h3>
						<p>Introduces students to basic movement exploration.<br />For students ages 2-6.</p>
						<a href="{$BaseHref}programs/childrens-division/">Explore</a>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="program">
					<img src="{$ThemeDir}/images/program-ballet.jpg" alt="Youth Ballet">
					<div class="content">
						<h3>Youth Ballet</h3>
						<p>Our youth ballet curriculum consists of five levels of ballet technique, prepointe classes, and pointe classes.</p>
						<a href="{$BaseHref}programs/youth-ballet-program/">Explore</a>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="program">
					<img src="{$ThemeDir}/images/program-adult.jpg" alt="Teen and Adult">
					<div class="content">
						<h3>Teen & Adult</h3>
						<p>Classes include Adult Beginner and Adult Intermediate levels in ballet, modern, jazz, and body ocnditioning.</p>
						<a href="{$BaseHref}programs/teen-and-adult-classes/">Explore</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="established">
	<div class="head">
		<div class="content">
			<h2>Established in 1972</h2>
			<p>We strive to serve the people of Iowa by providing high-quality outreach that enriches lives by encouraging and nurturing artistic expression and fostering the love and teaching of movement.</p>
		</div>
	</div>
	<div class="established-photo">

	</div>
</div>

<div class="learn">
	<div class="top">
		<div class="container">
			<h2>Learn more about us</h2>
		</div>
	</div>
	<div class="bot">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="learn-spot">
						<img src="{$ThemeDir}/images/tour.jpg" alt="Tour the studio">
						<div class="">
							<h5>Tour the Studio</h5>
							<h4><a href="{$BaseHref}about/our-facilities/">Our Facilities</a></h4>
							<p>With its marley floors, high ceilings, and abundant natural light, Halsey Hall provides an inspiring and professional dance space.</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="learn-spot">
						<img src="{$ThemeDir}/images/faculty.jpg" alt="Professional Faculty">
						<div class="">
							<h5>Professional Faculty</h5>
							<h4><a href="{$BaseHref}about/instructors/">Meet Our Instructors</a></h4>
							<p>Our faculty includes distinguished instructors and choreographers as well as current and former dancers from major companies worldwide.</p>
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
											<span class="date">$PublishDate.format(F d)</span>
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
</div>








