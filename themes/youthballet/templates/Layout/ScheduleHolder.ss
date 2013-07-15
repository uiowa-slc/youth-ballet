

<div id="announcements-right">
<h1>Announcements</h1>
		<% include Announcements %>
	</div>
	
<h2>$Title</h2>
<div class="main-content">
$Content

<ul>
<% control Children  %>
	<li><a href="$FileUpload.URL">$MenuTitle</a></li>
<% end_control %>
</ul>
</div>




