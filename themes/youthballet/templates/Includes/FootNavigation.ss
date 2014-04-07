<% loop Menu(1) %>
	<ul class = "$MenuTitle">            
       	        <li>
                	<a class="$LinkingMode" href="$Link">$MenuTitle</a>
				</li>
                <% if Children %>
	                <% loop Children %>
	                	<li><a class="ListChild" href="$Link">$MenuTitle</a></li>
	                <% end_loop %>
                <% end_if %>
                			
	</ul>	
<% end_loop %>