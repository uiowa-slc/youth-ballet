<% if $TestimonialQuote %>
	<blockquote class="testimonial <% if $TestimonialName || $TestimonialAttribution %>name<% end_if %>">
		<% if $TestimonialPhoto %>
			<img src="$TestimonialPhoto.FocusFill(200,200).URL" alt="Testimony from $TestimonialName">
		<% end_if %>
		<% if $TestimonialName || $TestimonialAttribution %>
			<footer>
				<cite class="cite">
					$TestimonialName
					<% if $TestimonialAttribution %><em>$TestimonialAttribution</em><% end_if %>
				</cite>
			</footer>
		<% end_if %>
		<% if $TestimonialQuote %>
			<p class="quote">"$TestimonialQuote"</p>
		<% end_if %>
	</blockquote>
	<a href="{$BaseHref}about/testimonals/" class="more">more testimonials</a>
<% end_if %>