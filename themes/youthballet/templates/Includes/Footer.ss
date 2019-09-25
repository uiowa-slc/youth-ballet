<%-- Footer --%>
<footer class="footer" role="contentinfo">
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-3">
				<a href="{$BaseHref}" class="footer-logo">
					<img src="$resourceURL('themes/youthballet/dist/images/youth-ballet-logo.png')" alt="Youth Ballet logo">
				</a>
			</div>
			<div class="col-sm-6 col-md-3">
				<ul class="footer-nav unstyled">
					<% loop Menu(1) %>
						<li><a href="$Link">$MenuTitle</a></li>
					<% end_loop %>
				</ul>
			</div>
			<div class="col-sm-6 col-md-3">
				<p class="footer-address" itemscope itemtype="http://schema.org/LocalBusiness">
					<span itemprop="name">$SiteConfig.Title</span><br>
					<span itemprop="streetAddress"><% if $SiteConfig.Address1 %>$SiteConfig.Address1</span> <br><% end_if %>
					<span itemprop="addressLocality">Iowa City</span>, <span itemprop="addressRegion">IA</span> <span itemprop="postalCode">52242</span><br>
					<% if $SiteConfig.Phone %><span itemprop="telephone">$SiteConfig.Phone</span> <br><% end_if %>
					<% if $SiteConfig.Email %><a href="mailto:$SiteConfig.Email">$SiteConfig.Email</a><% end_if %>
				</p>
			</div>
			<div class="clearfix visible-md-block"></div>
			<div class="col-sm-12 col-md-3">
				<img src="$resourceURL('themes/youthballet/dist/images/clas_black_arch_solid.png')" alt="College of Liberal Arts and Sciences logo" style="display: block;margin: 0 auto;">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<p class="copy text-center">&copy; {$Now.Year} The University of Iowa. All rights reserved. Created by <a href="https://md.studentlife.uiowa.edu/" target="_blank">M+D</a></p>
			</div>
		</div>
	</div>
</footer>