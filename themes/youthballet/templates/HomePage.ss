<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<% base_tag %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><% if MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> | $SiteConfig.Title</title>

<link href=' http://fonts.googleapis.com/css?family=Vollkorn' rel='stylesheet' type='text/css'/>
<link href=' http://fonts.googleapis.com/css?family=Cantarell' rel='stylesheet' type='text/css'/>
<link href='http://fonts.googleapis.com/css?family=Josefin+Sans+Std+Light' rel='stylesheet' type='text/css'/>
<link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:regular,bold' rel='stylesheet' type='text/css'/>
<link rel="stylesheet" type="text/css" href="layout.css"/>
<link rel="stylesheet" type="text/css" href="typography.css"/>
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
		<div id="featured-container">
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
					<% control Home %>
						<li><a href="#" onclick="document.getElementById('featured-container').style.backgroundImage = 'url($FeatureImage.URL)';return false;"><img src="$FeatureImage.URL" width="79px" height="60px" alt="Thumbnail Image"/></a></li>
						
					<% end_control %>
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
					
					<object width="500" height="420"> <param name="flashvars" value="offsite=true&lang=en-us&page_show_url=%2Fphotos%2Fimubuddy%2Fsets%2F72157633396040193%2Fshow%2F&page_show_back_url=%2Fphotos%2Fimubuddy%2Fsets%2F72157633396040193%2F&set_id=72157633396040193&jump_to="></param> <param name="movie" value="http://www.flickr.com/apps/slideshow/show.swf?v=124984"></param> <param name="allowFullScreen" value="true"></param><embed type="application/x-shockwave-flash" src="http://www.flickr.com/apps/slideshow/show.swf?v=124984" allowFullScreen="true" flashvars="offsite=true&lang=en-us&page_show_url=%2Fphotos%2Fimubuddy%2Fsets%2F72157633396040193%2Fshow%2F&page_show_back_url=%2Fphotos%2Fimubuddy%2Fsets%2F72157633396040193%2F&set_id=72157633396040193&jump_to=" width="500" height="420"></embed></object>
					
					
					<!--<object width="500" height="285"><param name="movie" value="http://www.youtube.com/v/6bz6HkV3JIg&amp;hl=en_US&amp;fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/6bz6HkV3JIg&amp;hl=en_US&amp;fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="500" height="285"></embed></object>-->
					
					
 <!--<iframe align="center" 
src="http://www.flickr.com/slideShow/index.gne?group_id=&user_id=imubuddy&set_id=72157624514198157&text=" 
frameBorder="0" width="500" height="500" scrolling="no"></iframe>-->

<!--<img style="visibility:hidden;width:0px;height:0px;" alt="counter" border=0 width=0 height=0 src="http://counters.gigya.com/wildfire/IMP/CXNID=2000002.11NXC/bT*xJmx*PTEyODEwMTY*NzQzNjYmcHQ9MTI4MTAxNjQ3NjU2NiZwPTkwMjA1MSZkPSZnPTEmb2Y9MA==.gif" /><object id="ci_62918_o" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="500" height="420"><param name="movie" value="http://apps.cooliris.com/embed/cooliris.swf"/><param name="allowFullScreen" value="true"/><param name="allowScriptAccess" value="always"/><param name="bgColor" value="#121212" /><param name="flashvars" value="feed=api%3A%2F%2Fwww.flickr.com%2F%3Fuser%3D9717880%40N03%26album%3D72157624514198157&backgroundcolor=%23000000&style=dark&glowcolor=%23FFFFFF&numrows=2" /><param name="wmode" value="opaque" /><embed id="ci_62918_e" type="application/x-shockwave-flash" src="http://apps.cooliris.com/embed/cooliris.swf" width="500" height="420" allowFullScreen="true" allowScriptAccess="always" bgColor="#121212" flashvars="feed=api%3A%2F%2Fwww.flickr.com%2F%3Fuser%3D9717880%40N03%26album%72157633396040193&backgroundcolor=%23000000&style=dark&glowcolor=%23FFFFFF&numrows=2" wmode="opaque"></embed></object>-->

<!--
					<img style="visibility:hidden;width:0px;height:0px;" border=0 width=0 height=0 src="http://counters.gigya.com/wildfire/IMP/CXNID=2000002.11NXC/bT*xJmx*PTEyODA*MTgzNzA5NDUmcHQ9MTI4MDQxODM3NjA2OCZwPTkwMjA1MSZkPSZnPTEmb2Y9MA==.gif" /><object class="slideshow" id="ci_32920_o" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="500" height="400"><param name="movie" value="http://apps.cooliris.com/embed/cooliris.swf"/><param name="allowFullScreen" value="true"/><param name="allowScriptAccess" value="always"/><param name="bgColor" value="#121212" /><param name="flashvars" value="feed=api%3A%2F%2Fwww.flickr.com%2F%3Fuser%3D9717880%imubuddy%26album%3D72157624514198157" /><param name="wmode" value="opaque" /><embed id="ci_32920_e" type="application/x-shockwave-flash" src="http://apps.cooliris.com/embed/cooliris.swf" width="500" height="400" allowFullScreen="true" allowScriptAccess="always" bgColor="#121212" flashvars="feed=api%3A%2F%2Fwww.flickr.com%2F%3Fuser%3D9717880%imubuddy%26album%3D72157624514198157" wmode="opaque"></embed></object>-->


</div>
					
				</div>
			
			</div><!--end news container -->
			
			<div id="content">
			
				<% if ChildrenOf(schedules) %>
					<div id="announcements">
					<h2>Programs/Handbook</h2><img class="pdf" src="$ThemeDir/images/document-pdf-text.png" alt="PDF" />
			<% include Announcements %>
				</div>
				
				<% end_if %>
                
  			<div id="review">
            
				
				
				<div id="mission">
					<h2>Mission</h2>
					<p>The University of Iowa Youth Ballet and School of Dance strives to serve the people of Iowa by providing high-quality outreach that enriches lives by encouraging and nuturing artistic expression and fostering the love and teaching of movement.  We are committed to providing excellent, technique appropriate, and challenging classes for all ability levels across dance disciplines.  We are dedicated to developing strong, well-rounded dancers and teachers of dance.</p>
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
		<div id="footer"> <img src="$ThemeDir/images/youthballetlogo_footer.png" alt="Footer" />

			<div id="footer-nav">
				<% control Menu(1) %>
					<div class="footer-block $URLSegment">
						<a href="$Link"><h2>$MenuTitle</h2></a>
						<ul>
							<% control Children %>
								<li><a href="$Link">$MenuTitle</a></li>
							<% end_control %>
						</ul>
					</div>
				<% end_control %>
			</div>			<div class="clear-left"></div>
			<div id="copyright-info"> 
			
			<a href="http://www.uiowa.edu"><img src="$ThemeDir/images/uiowalogo-footer.png" id="uiowa-footer-logo" alt="UIowa Logo" /></a>
				<p>The University of Iowa 2010. All rights reserved. <br />Department of Dance - E114 Halsey Hall - Iowa City, IA 52242 - 319-335-2228</p>
				 <a href="http://clas.uiowa.edu"><img src="$ThemeDir/images/clas_black_arch_solid.png" id="clas-footer-logo" alt="Footer"/></a>
			
			
			</div>
		</div>
		<!-- End Layout/HomePage.ss -->
	</div>
	<!-- end typography -->
</div>
<!-- end body-wrapper -->

<% if CurrentMember %>
<div class="edit-box">
<p><a href="$BaseHref/admin/show/{$ID}">Edit this page</a></p>
</div>
<% end_if %>  

</body>
</html>
