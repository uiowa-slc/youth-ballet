<% if Menu(2) %>
	<nav class="subnavigation">
		<% if Menu(2) %>
			<% with Level(1) %>
				<h5 class="section-title">
					<% if $LinkOrCurrent = "current" %>$MenuTitle<% else %><a href="$Link">$MenuTitle</a><% end_if %>
				</h5>
			<% end_with %>
		<% end_if %>
		<ul class="unstyled first-level">
			<% loop Menu(2) %>
				<li <% if LinkOrSection = section || current %>class="active"<% end_if %>><a href="$Link">$MenuTitle</a>

				<%-- second level nav --%>
					<% if $LinkOrSection = "section" && Children %>
						<ul class="unstyled second-level">
							<% loop Children %>
								<li <% if $LinkOrCurrent = "current" %>class="active"<% end_if %>>
									<a href="$Link">$MenuTitle</a>
								</li>
							<% end_loop %>
						</ul>
					<% end_if %>
				<%-- end second level --%>

				</li>
			<% end_loop %>

		</ul>
	</nav>
<% end_if %>