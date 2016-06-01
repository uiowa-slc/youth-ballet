
<ul>
<% loop ChildrenOf(schedules) %>
	<li><a href="$FileUpload.URL">$MenuTitle</a> <img class="pdf" src="$ThemeDir/images/document-pdf-text.png" alt="PDF" /></li>
<% end_loop %>
</ul>