
$(function(){
	$('.main-nav').setup_navigation();
});

var keyCodeMap = {
        48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:";",
        65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l",
        77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z",
        96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9"
}

$.fn.setup_navigation = function(settings) {

	settings = jQuery.extend({
		menuHoverClass: 'show-menu',
	}, settings);

	// Add ARIA role to menubar and menu items
	$(this).attr('role', 'menubar').find('li').attr('role', 'menuitem');

	var top_level_links = $(this).find('> li > a');

	// Added by Terrill: (removed temporarily: doesn't fix the JAWS problem after all)
	// Add tabindex="0" to all top-level links
	// Without at least one of these, JAWS doesn't read widget as a menu, despite all the other ARIA
	//$(top_level_links).attr('tabindex','0');

	// Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
	$(top_level_links).next('ul')
		.attr('data-test','true')
		.attr({ 'aria-hidden': 'true', 'role': 'menu' })
		.find('a')
			.attr('tabIndex',-1);

	// Adding aria-haspopup for appropriate items
	$(top_level_links).each(function(){
		if($(this).next('ul').length > 0)
			$(this).parent('li').attr('aria-haspopup', 'true');
	});

	$(top_level_links).hover(function(){
		$(this).closest('ul')
			.attr('aria-hidden', 'false')
			.find('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		$(this).next('ul')
			.attr('aria-hidden', 'false')
			.find('a').attr('tabIndex',0);
	});
	$(top_level_links).focus(function(){
		$(this).closest('ul')
			// Removed by Terrill
			// The following was adding aria-hidden="false" to root ul since menu is never hidden
			// and seemed to be causing flakiness in JAWS (needs more testing)
			// .attr('aria-hidden', 'false')
			.find('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		$(this).next('ul')
			.attr('aria-hidden', 'false')
			.addClass(settings.menuHoverClass)
			.find('a').attr('tabIndex',0);
	});

	// Bind arrow keys for navigation
	$(top_level_links).keydown(function(e){
		if(e.keyCode == 37) {
			e.preventDefault();
			// This is the first item
			if($(this).parent('li').prev('li').length == 0) {
				$(this).parents('ul').find('> li').last().find('a').first().focus();
			} else {
				$(this).parent('li').prev('li').find('a').first().focus();
			}
		} else if(e.keyCode == 38) {
			e.preventDefault();
			if($(this).parent('li').find('ul').length > 0) {
				$(this).parent('li').find('ul')
					.attr('aria-hidden', 'false')
					.addClass(settings.menuHoverClass)
					.find('a').attr('tabIndex',0)
						.last().focus();
			}
		} else if(e.keyCode == 39) {
			e.preventDefault();
			// This is the last item
			if($(this).parent('li').next('li').length == 0) {
				$(this).parents('ul').find('> li').first().find('a').first().focus();
			} else {
				$(this).parent('li').next('li').find('a').first().focus();
			}
		} else if(e.keyCode == 40) {
			e.preventDefault();
			if($(this).parent('li').find('ul').length > 0) {
				$(this).parent('li').find('ul')
					.attr('aria-hidden', 'false')
					.addClass(settings.menuHoverClass)
					.find('a').attr('tabIndex',0)
						.first().focus();
			}
		} else if(e.keyCode == 13 || e.keyCode == 32) {
			// If submenu is hidden, open it
			e.preventDefault();
			$(this).parent('li').find('ul[aria-hidden=true]')
					.attr('aria-hidden', 'false')
					.addClass(settings.menuHoverClass)
					.find('a').attr('tabIndex',0)
						.first().focus();
		} else if(e.keyCode == 27) {
			e.preventDefault();
			$('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		} else {
			$(this).parent('li').find('ul[aria-hidden=false] a').each(function(){
				if($(this).text().substring(0,1).toLowerCase() == keyCodeMap[e.keyCode]) {
					$(this).focus();
					return false;
				}
			});
		}
	});


	var links = $(top_level_links).parent('li').find('ul').find('a');
	$(links).keydown(function(e){
		if(e.keyCode == 38) {
			e.preventDefault();
			// This is the first item
			if($(this).parent('li').prev('li').length == 0) {
				$(this).parents('ul').parents('li').find('a').first().focus();
			} else {
				$(this).parent('li').prev('li').find('a').first().focus();
			}
		} else if(e.keyCode == 40) {
			e.preventDefault();
			if($(this).parent('li').next('li').length == 0) {
				$(this).parents('ul').parents('li').find('a').first().focus();
			} else {
				$(this).parent('li').next('li').find('a').first().focus();
			}
		} else if(e.keyCode == 27 || e.keyCode == 37) {
			e.preventDefault();
			$(this)
				.parents('ul').first()
					.prev('a').focus()
					.parents('ul').first().find('.'+settings.menuHoverClass)
						.attr('aria-hidden', 'true')
						.removeClass(settings.menuHoverClass)
						.find('a')
							.attr('tabIndex',-1);
		} else if(e.keyCode == 32) {
			e.preventDefault();
			window.location = $(this).attr('href');
		} else {
			var found = false;
			$(this).parent('li').nextAll('li').find('a').each(function(){
				if($(this).text().substring(0,1).toLowerCase() == keyCodeMap[e.keyCode]) {
					$(this).focus();
					found = true;
					return false;
				}
			});

			if(!found) {
				$(this).parent('li').prevAll('li').find('a').each(function(){
					if($(this).text().substring(0,1).toLowerCase() == keyCodeMap[e.keyCode]) {
						$(this).focus();
						return false;
					}
				});
			}
		}
	});


	// Hide menu if click or focus occurs outside of navigation
	$(this).find('a').last().keydown(function(e){
		if(e.keyCode == 9) {
			// If the user tabs out of the navigation hide all menus
			$('.'+settings.menuHoverClass)
				.attr('aria-hidden', 'true')
				.removeClass(settings.menuHoverClass)
				.find('a')
					.attr('tabIndex',-1);
		}
	});
	$(document).click(function(){ $('.'+settings.menuHoverClass).attr('aria-hidden', 'true').removeClass(settings.menuHoverClass).find('a').attr('tabIndex',-1); });

	$(this).click(function(e){
		e.stopPropagation();
	});
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ6LW1lbnViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4kKGZ1bmN0aW9uKCl7XG5cdCQoJy5tYWluLW5hdicpLnNldHVwX25hdmlnYXRpb24oKTtcbn0pO1xuXG52YXIga2V5Q29kZU1hcCA9IHtcbiAgICAgICAgNDg6XCIwXCIsIDQ5OlwiMVwiLCA1MDpcIjJcIiwgNTE6XCIzXCIsIDUyOlwiNFwiLCA1MzpcIjVcIiwgNTQ6XCI2XCIsIDU1OlwiN1wiLCA1NjpcIjhcIiwgNTc6XCI5XCIsIDU5OlwiO1wiLFxuICAgICAgICA2NTpcImFcIiwgNjY6XCJiXCIsIDY3OlwiY1wiLCA2ODpcImRcIiwgNjk6XCJlXCIsIDcwOlwiZlwiLCA3MTpcImdcIiwgNzI6XCJoXCIsIDczOlwiaVwiLCA3NDpcImpcIiwgNzU6XCJrXCIsIDc2OlwibFwiLFxuICAgICAgICA3NzpcIm1cIiwgNzg6XCJuXCIsIDc5Olwib1wiLCA4MDpcInBcIiwgODE6XCJxXCIsIDgyOlwiclwiLCA4MzpcInNcIiwgODQ6XCJ0XCIsIDg1OlwidVwiLCA4NjpcInZcIiwgODc6XCJ3XCIsIDg4OlwieFwiLCA4OTpcInlcIiwgOTA6XCJ6XCIsXG4gICAgICAgIDk2OlwiMFwiLCA5NzpcIjFcIiwgOTg6XCIyXCIsIDk5OlwiM1wiLCAxMDA6XCI0XCIsIDEwMTpcIjVcIiwgMTAyOlwiNlwiLCAxMDM6XCI3XCIsIDEwNDpcIjhcIiwgMTA1OlwiOVwiXG59XG5cbiQuZm4uc2V0dXBfbmF2aWdhdGlvbiA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG5cblx0c2V0dGluZ3MgPSBqUXVlcnkuZXh0ZW5kKHtcblx0XHRtZW51SG92ZXJDbGFzczogJ3Nob3ctbWVudScsXG5cdH0sIHNldHRpbmdzKTtcblxuXHQvLyBBZGQgQVJJQSByb2xlIHRvIG1lbnViYXIgYW5kIG1lbnUgaXRlbXNcblx0JCh0aGlzKS5hdHRyKCdyb2xlJywgJ21lbnViYXInKS5maW5kKCdsaScpLmF0dHIoJ3JvbGUnLCAnbWVudWl0ZW0nKTtcblxuXHR2YXIgdG9wX2xldmVsX2xpbmtzID0gJCh0aGlzKS5maW5kKCc+IGxpID4gYScpO1xuXG5cdC8vIEFkZGVkIGJ5IFRlcnJpbGw6IChyZW1vdmVkIHRlbXBvcmFyaWx5OiBkb2Vzbid0IGZpeCB0aGUgSkFXUyBwcm9ibGVtIGFmdGVyIGFsbClcblx0Ly8gQWRkIHRhYmluZGV4PVwiMFwiIHRvIGFsbCB0b3AtbGV2ZWwgbGlua3Ncblx0Ly8gV2l0aG91dCBhdCBsZWFzdCBvbmUgb2YgdGhlc2UsIEpBV1MgZG9lc24ndCByZWFkIHdpZGdldCBhcyBhIG1lbnUsIGRlc3BpdGUgYWxsIHRoZSBvdGhlciBBUklBXG5cdC8vJCh0b3BfbGV2ZWxfbGlua3MpLmF0dHIoJ3RhYmluZGV4JywnMCcpO1xuXG5cdC8vIFNldCB0YWJJbmRleCB0byAtMSBzbyB0aGF0IHRvcF9sZXZlbF9saW5rcyBjYW4ndCByZWNlaXZlIGZvY3VzIHVudGlsIG1lbnUgaXMgb3BlblxuXHQkKHRvcF9sZXZlbF9saW5rcykubmV4dCgndWwnKVxuXHRcdC5hdHRyKCdkYXRhLXRlc3QnLCd0cnVlJylcblx0XHQuYXR0cih7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgJ3JvbGUnOiAnbWVudScgfSlcblx0XHQuZmluZCgnYScpXG5cdFx0XHQuYXR0cigndGFiSW5kZXgnLC0xKTtcblxuXHQvLyBBZGRpbmcgYXJpYS1oYXNwb3B1cCBmb3IgYXBwcm9wcmlhdGUgaXRlbXNcblx0JCh0b3BfbGV2ZWxfbGlua3MpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRpZigkKHRoaXMpLm5leHQoJ3VsJykubGVuZ3RoID4gMClcblx0XHRcdCQodGhpcykucGFyZW50KCdsaScpLmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuXHR9KTtcblxuXHQkKHRvcF9sZXZlbF9saW5rcykuaG92ZXIoZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJ3VsJylcblx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG5cdFx0XHQuZmluZCgnLicrc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKHNldHRpbmdzLm1lbnVIb3ZlckNsYXNzKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmF0dHIoJ3RhYkluZGV4JywtMSk7XG5cdFx0JCh0aGlzKS5uZXh0KCd1bCcpXG5cdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuXHRcdFx0LmZpbmQoJ2EnKS5hdHRyKCd0YWJJbmRleCcsMCk7XG5cdH0pO1xuXHQkKHRvcF9sZXZlbF9saW5rcykuZm9jdXMoZnVuY3Rpb24oKXtcblx0XHQkKHRoaXMpLmNsb3Nlc3QoJ3VsJylcblx0XHRcdC8vIFJlbW92ZWQgYnkgVGVycmlsbFxuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyB3YXMgYWRkaW5nIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiB0byByb290IHVsIHNpbmNlIG1lbnUgaXMgbmV2ZXIgaGlkZGVuXG5cdFx0XHQvLyBhbmQgc2VlbWVkIHRvIGJlIGNhdXNpbmcgZmxha2luZXNzIGluIEpBV1MgKG5lZWRzIG1vcmUgdGVzdGluZylcblx0XHRcdC8vIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG5cdFx0XHQuZmluZCgnLicrc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKHNldHRpbmdzLm1lbnVIb3ZlckNsYXNzKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmF0dHIoJ3RhYkluZGV4JywtMSk7XG5cdFx0JCh0aGlzKS5uZXh0KCd1bCcpXG5cdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm1lbnVIb3ZlckNsYXNzKVxuXHRcdFx0LmZpbmQoJ2EnKS5hdHRyKCd0YWJJbmRleCcsMCk7XG5cdH0pO1xuXG5cdC8vIEJpbmQgYXJyb3cga2V5cyBmb3IgbmF2aWdhdGlvblxuXHQkKHRvcF9sZXZlbF9saW5rcykua2V5ZG93bihmdW5jdGlvbihlKXtcblx0XHRpZihlLmtleUNvZGUgPT0gMzcpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdC8vIFRoaXMgaXMgdGhlIGZpcnN0IGl0ZW1cblx0XHRcdGlmKCQodGhpcykucGFyZW50KCdsaScpLnByZXYoJ2xpJykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCd1bCcpLmZpbmQoJz4gbGknKS5sYXN0KCkuZmluZCgnYScpLmZpcnN0KCkuZm9jdXMoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCdsaScpLnByZXYoJ2xpJykuZmluZCgnYScpLmZpcnN0KCkuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoZS5rZXlDb2RlID09IDM4KSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZigkKHRoaXMpLnBhcmVudCgnbGknKS5maW5kKCd1bCcpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoJ2xpJykuZmluZCgndWwnKVxuXHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm1lbnVIb3ZlckNsYXNzKVxuXHRcdFx0XHRcdC5maW5kKCdhJykuYXR0cigndGFiSW5kZXgnLDApXG5cdFx0XHRcdFx0XHQubGFzdCgpLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKGUua2V5Q29kZSA9PSAzOSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Ly8gVGhpcyBpcyB0aGUgbGFzdCBpdGVtXG5cdFx0XHRpZigkKHRoaXMpLnBhcmVudCgnbGknKS5uZXh0KCdsaScpLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50cygndWwnKS5maW5kKCc+IGxpJykuZmlyc3QoKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoJ2xpJykubmV4dCgnbGknKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZihlLmtleUNvZGUgPT0gNDApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKCQodGhpcykucGFyZW50KCdsaScpLmZpbmQoJ3VsJykubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgnbGknKS5maW5kKCd1bCcpXG5cdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcblx0XHRcdFx0XHQuYWRkQ2xhc3Moc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKS5hdHRyKCd0YWJJbmRleCcsMClcblx0XHRcdFx0XHRcdC5maXJzdCgpLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKGUua2V5Q29kZSA9PSAxMyB8fCBlLmtleUNvZGUgPT0gMzIpIHtcblx0XHRcdC8vIElmIHN1Ym1lbnUgaXMgaGlkZGVuLCBvcGVuIGl0XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgnbGknKS5maW5kKCd1bFthcmlhLWhpZGRlbj10cnVlXScpXG5cdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcblx0XHRcdFx0XHQuYWRkQ2xhc3Moc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKS5hdHRyKCd0YWJJbmRleCcsMClcblx0XHRcdFx0XHRcdC5maXJzdCgpLmZvY3VzKCk7XG5cdFx0fSBlbHNlIGlmKGUua2V5Q29kZSA9PSAyNykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JCgnLicrc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKHNldHRpbmdzLm1lbnVIb3ZlckNsYXNzKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmF0dHIoJ3RhYkluZGV4JywtMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcykucGFyZW50KCdsaScpLmZpbmQoJ3VsW2FyaWEtaGlkZGVuPWZhbHNlXSBhJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRpZigkKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwxKS50b0xvd2VyQ2FzZSgpID09IGtleUNvZGVNYXBbZS5rZXlDb2RlXSkge1xuXHRcdFx0XHRcdCQodGhpcykuZm9jdXMoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblxuXHR2YXIgbGlua3MgPSAkKHRvcF9sZXZlbF9saW5rcykucGFyZW50KCdsaScpLmZpbmQoJ3VsJykuZmluZCgnYScpO1xuXHQkKGxpbmtzKS5rZXlkb3duKGZ1bmN0aW9uKGUpe1xuXHRcdGlmKGUua2V5Q29kZSA9PSAzOCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Ly8gVGhpcyBpcyB0aGUgZmlyc3QgaXRlbVxuXHRcdFx0aWYoJCh0aGlzKS5wYXJlbnQoJ2xpJykucHJldignbGknKS5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJ3VsJykucGFyZW50cygnbGknKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoJ2xpJykucHJldignbGknKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZihlLmtleUNvZGUgPT0gNDApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmKCQodGhpcykucGFyZW50KCdsaScpLm5leHQoJ2xpJykubGVuZ3RoID09IDApIHtcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCd1bCcpLnBhcmVudHMoJ2xpJykuZmluZCgnYScpLmZpcnN0KCkuZm9jdXMoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCdsaScpLm5leHQoJ2xpJykuZmluZCgnYScpLmZpcnN0KCkuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoZS5rZXlDb2RlID09IDI3IHx8IGUua2V5Q29kZSA9PSAzNykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50cygndWwnKS5maXJzdCgpXG5cdFx0XHRcdFx0LnByZXYoJ2EnKS5mb2N1cygpXG5cdFx0XHRcdFx0LnBhcmVudHMoJ3VsJykuZmlyc3QoKS5maW5kKCcuJytzZXR0aW5ncy5tZW51SG92ZXJDbGFzcylcblx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcblx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhzZXR0aW5ncy5tZW51SG92ZXJDbGFzcylcblx0XHRcdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RhYkluZGV4JywtMSk7XG5cdFx0fSBlbHNlIGlmKGUua2V5Q29kZSA9PSAzMikge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBmb3VuZCA9IGZhbHNlO1xuXHRcdFx0JCh0aGlzKS5wYXJlbnQoJ2xpJykubmV4dEFsbCgnbGknKS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHRpZigkKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwxKS50b0xvd2VyQ2FzZSgpID09IGtleUNvZGVNYXBbZS5rZXlDb2RlXSkge1xuXHRcdFx0XHRcdCQodGhpcykuZm9jdXMoKTtcblx0XHRcdFx0XHRmb3VuZCA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYoIWZvdW5kKSB7XG5cdFx0XHRcdCQodGhpcykucGFyZW50KCdsaScpLnByZXZBbGwoJ2xpJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRpZigkKHRoaXMpLnRleHQoKS5zdWJzdHJpbmcoMCwxKS50b0xvd2VyQ2FzZSgpID09IGtleUNvZGVNYXBbZS5rZXlDb2RlXSkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5mb2N1cygpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXG5cdC8vIEhpZGUgbWVudSBpZiBjbGljayBvciBmb2N1cyBvY2N1cnMgb3V0c2lkZSBvZiBuYXZpZ2F0aW9uXG5cdCQodGhpcykuZmluZCgnYScpLmxhc3QoKS5rZXlkb3duKGZ1bmN0aW9uKGUpe1xuXHRcdGlmKGUua2V5Q29kZSA9PSA5KSB7XG5cdFx0XHQvLyBJZiB0aGUgdXNlciB0YWJzIG91dCBvZiB0aGUgbmF2aWdhdGlvbiBoaWRlIGFsbCBtZW51c1xuXHRcdFx0JCgnLicrc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcblx0XHRcdFx0LnJlbW92ZUNsYXNzKHNldHRpbmdzLm1lbnVIb3ZlckNsYXNzKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmF0dHIoJ3RhYkluZGV4JywtMSk7XG5cdFx0fVxuXHR9KTtcblx0JChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKXsgJCgnLicrc2V0dGluZ3MubWVudUhvdmVyQ2xhc3MpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKS5yZW1vdmVDbGFzcyhzZXR0aW5ncy5tZW51SG92ZXJDbGFzcykuZmluZCgnYScpLmF0dHIoJ3RhYkluZGV4JywtMSk7IH0pO1xuXG5cdCQodGhpcykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSk7XG59XG4iXSwiZmlsZSI6InotbWVudWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
