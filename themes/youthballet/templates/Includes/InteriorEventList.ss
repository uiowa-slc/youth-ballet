<% with $Page(calendar) %>
	<% if $UpcomingEvents %>
		<section class="eventlist">
			<div class="container">
				<h3 class="eventlist-heading">Calendar</h3>
				<div class="interior-flickity">
					<% loop $UpcomingEvents %>
						<div class="gallery-cell clearfix">
							<% loop $Event.DateTimes %>
								<p class="eventlist-date">
									<% with $StartDate %>$Format(M j)<% end_with %><% if $EndDate && $EndDate != $StartDate %>&ndash;<% with $EndDate %>$Format(M j)
										<% end_with %>
									<% end_if %>
								</p>
							<% end_loop %>
							<p class="eventlist-title">
								<a href="$Link">$Title</a>
							</p>
						</div>
			    	<% end_loop %>
		    	</div>
		    	<a href="{$BaseHref}calendar/" class="calendarlink">Full Calendar</a>
		    </div>
	   </section>
    <% end_if %>
<% end_with %>