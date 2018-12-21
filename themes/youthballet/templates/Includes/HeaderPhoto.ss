<% if $BackgroundPhoto %>
	<div class="page-photo">
		<% include MainNav %>

		<picture class="picture">
			<!--[if IE 9]><video style="display: none;"><![endif]-->
			<source srcset="$BackgroundPhoto.FocusFill(1200,500).URL" media="(min-width: 980px)">
			<source srcset="$BackgroundPhoto.FocusFill(980,400).URL" media="(min-width: 768px)">
			<source srcset="$BackgroundPhoto.FocusFill(768,400).URL" media="(min-width: 480px)">
			<!--[if IE 9]></video><![endif]-->
			<img srcset="$BackgroundPhoto.FocusFill(480,400).URL" alt="$Title">
		</picture>
	</div>
<% else %>
	<div class="page-photo">
		<% include MainNav %>
		<picture class="picture">
			<!--[if IE 9]><video style="display: none;"><![endif]-->
			<source srcset="$SiteConfig.DefaultPhoto.FocusFill(1200,400).URL" media="(min-width: 980px)">
			<source srcset="$SiteConfig.DefaultPhoto.FocusFill(980,400).URL" media="(min-width: 768px)">
			<source srcset="$SiteConfig.DefaultPhoto.FocusFill(768,400).URL" media="(min-width: 480px)">
			<!--[if IE 9]></video><![endif]-->
			<img srcset="$SiteConfig.DefaultPhoto.FocusFill(480,400).URL" alt="$Title">
		</picture>
	</div>
<% end_if %>