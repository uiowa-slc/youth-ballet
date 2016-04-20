<div class="headertest">
	<div class="container">
		<div class="test clearfix">
			<a href="{$BaseHref}" class="logo">
				<img src="{$ThemeDir}/images/youth-ballet-logo.png" alt="Youth Ballet">
			</a>

			<nav role="navigation" class="nav-wrapper no-print" aria-label="Main menu">
				<ul class="main-nav clearfix">
					<% loop Menu(1) %>
						<li class="$FirstLast<% if $LinkOrSection = "section" %> active<% end_if %><% if Children %> parent<% end_if %>"><a href="$Link">$MenuTitle</a>
							<% if Children %>
								<ul>
									<% loop Children %>
										<li class="$FirstLast <% if $LinkOrCurrent = "current" %>active<% end_if %>"><a href="$Link">$MenuTitle</a></li>
									<% end_loop %>
								</ul>
							<% end_if %>
						</li>
					<% end_loop %>
				</ul>
			</nav>
		</div>
		<% if $ClassName != "HomePage" %>$Breadcrumbs<% end_if %>
	</div>
</div>