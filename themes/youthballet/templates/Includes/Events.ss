	<% loop ChildrenOf(events) %>
		<div class="event">
		<% if Picture %>
		<img src="<% loop Picture %><% loop SetWidth(87) %> $URL <% end_loop %><% end_loop %>" alt="$Title"/>
		<% end_if %>
			<div class="event-description">
			<h3><a href="$Link">$MenuTitle</a></h3>
			<div><strong>$Date</strong></div>
			<p>$Content.LimitWordCount(10)</p>
			</div>
		</div>
		<div class="clear-both"></div>
	<% end_loop %>