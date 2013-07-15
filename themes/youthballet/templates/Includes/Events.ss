	<% control ChildrenOf(events) %>
		<div class="event">
		<% if Picture %>
		<img src="<% control Picture %><% control SetWidth(87) %> $URL <% end_control %><% end_control %>" alt="$Title"/>
		<% end_if %>
			<div class="event-description">
			<h3><a href="$Link">$MenuTitle</a></h3>
			<div><strong>$Date</strong></div>
			<p>$Content.LimitWordCount(10)</p>
			</div>
		</div>
		<div class="clear-both"></div>
	<% end_control %>