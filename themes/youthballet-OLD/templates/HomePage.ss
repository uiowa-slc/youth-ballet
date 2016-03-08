<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<% base_tag %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>$Title | $SiteConfig.Title</title>

<link href=' https://fonts.googleapis.com/css?family=Vollkorn' rel='stylesheet' type='text/css'/>
<link href=' https://fonts.googleapis.com/css?family=Cantarell' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Josefin+Sans+Std+Light' rel='stylesheet' type='text/css'/>
<link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:regular,bold' rel='stylesheet' type='text/css'/>
<link rel="stylesheet" type="text/css" href="$ThemeDir/css/reset.css"/>
<!--[if IE 7]><style type='text/css'>@import url($ThemeDir/css/ie7.css);</style><![endif]-->

<% if CurrentMember %>

<style type="text/css">
div.edit-box {
  margin: 0;
  font-size: 80% /*smaller*/;
  font-weight: bold;
  line-height: 1.1;
  text-align: center;
  position: fixed;
  top: 2em;
  left: auto;
  width: 8.5em;
  right: 2em;
}
div.edit-box p {
  margin: 0; 
  padding: 0.3em 0.4em;
  font-family: Arial, sans-serif;
  background: #900;
  border: thin outset #900;
  color: white;
}

div.edit-box a, div.edit-box em { display: block; margin: 0 0.5em }
div.edit-box a, div.edit-box em { border-top: 2px groove #900 }
div.edit-box a:first-child { border-top: none }
div.edit-box em { color: #CFC }

div.edit-box a:link { text-decoration: none; color: white }
div.edit-box a:visited { text-decoration: none; color: #CCC }
div.edit-box a:hover { background: black; color: white }
</style>

<% end_if %>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-426753-6']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>
<body>
<div id="department-logos">
	<div id="department-logos-container"> 	<a href="http://dance.uiowa.edu"><img alt="The Department of Dance" id="department-of-dance-logo" src="$ThemeDir/images/departmentofdancelogo.png" /></a>
	<a href="http://www.uiowa.edu"> <img alt="The University of Iowa" id="uiowa-logo" src="$ThemeDir/images/uiowalogo-footer.png" /></a>
		<div class="clear-both"></div>
	</div>
</div>
<div id="body-wrapper">
	<div class="typography">
		<!-- Layout/HomePage.ss -->
		<div id="featured-container" style="background-image:url('$HomePageTabs.First.FeatureImage.URL') ;">
			<div id="featured-content">
			<h1 class="logo"><a href="$BaseHref">Youth Ballet &amp; School of Dance</a></h1>
				<h2>The University of Iowa Youth<br /> Ballet and School of Dance is an<br /> incredible dance program.</h2>
				$Content
			</div>
			<div id="featured-nav">
						<% include Navigation %>
				<div class="clear-right"></div>
				
				
				<div id="control-featured-background">
					<ul>

					<% loop HomePageTabs %>
						<li><a href="#" name="$ID" onclick="document.getElementById('featured-container').style.backgroundImage = 'url($FeatureImage.URL)';return false;"><img src="$FeatureImage.URL" width="79px" height="60px" alt="Thumbnail Image"/></a></li>
						
					<% end_loop %>
					</ul>
					
				</div>
				
				
				
				
				
			</div>
		</div>
		<!-- end featured container -->
		<div class="clear-both"></div>
		<div id="content-container" class="homepage">
		
		
			<div id="news-container">
			
			<% if ChildrenOf(events) %>
				<div id="events">
					<h2>News & Events</h2>
					<% include Events %>
				</div>
				
				<% end_if %>
				
				<div id="video">
					<h2>Gallery</h2>
					<div class="video">		
						<iframe src="https://www.flickr.com/photos/imubuddy/12838039614/in/set-72157633396040193/player/" width="500" height="434" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
					</div>
					
				</div>
			
			</div><!--end news container -->
			
			<div id="content">
			
				<% if ChildrenOf(schedules) %>
					<div id="announcements">
					<h2>Schedules/Handbook</h2>
						<% include Announcements %>
				</div>
				
				<% end_if %>
                
  			<div id="review">
            
				
				
				<div id="mission">
					<h2>Mission</h2>
					<p>$Mission</p>
				</div>
		
		
						<div id="mission">
					<h2>Testimonials</h2>
					<p class="testimonial">$Testimonial <a href="./testimonials/">(read more...)</a></p>
					<p class="parent">- $Attribution</p>
				</div>		
				
				
				<div class="clear-both"></div>
			</div>
			<!-- end content -->
		</div>
<!-- end content-container -->
		<div id="footer">
			<div id="footer-nav">
				<%include FootNavigation %>
			</div>			
			<div id="copyright-info"> 	<a href="http://www.uiowa.edu"><img src="$ThemeDir/images/uiowalogo-footer.png" id="uiowa-footer-logo" alt="University of Iowa"/></a>
				<p>The University of Iowa $Now.Year . All rights reserved. <br />Department of Dance - E114 Halsey Hall - Iowa City, IA 52242 - 319-335-2228</p>
				 <a href="http://clas.uiowa.edu"><img src="$ThemeDir/images/clas_black_arch_solid.png" id="clas-footer-logo" alt="CLAS" /></a>
			
			</div>
			<div style="clear:both;"></div>

		</div>

		<!-- End Layout/HomePage.ss -->
	</div>
	<!-- end typography -->
</div>
<!-- end body-wrapper -->

<% if CurrentMember %>
<div class="edit-box">
<p><a href="{$CMSEditLink}">Edit this page</a></p>
</div>
<% end_if %>  

</body>
</html>