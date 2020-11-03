<!DOCTYPE html>
<!--[if lt IE 10]><html lang="en" class="lt-ie10 no-js"> <![endif]-->
<!--[if lt IE 9]><html lang="en" class="lt-ie9 no-js"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
<head>
	$GlobalAnalytics
	<% base_tag %>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="<% if $MetaDescription %>$MetaDescription<% else %>$Content.LimitCharacters(150)<% end_if %>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title | $SiteConfig.Title<% end_if %></title>
	<script src="$resourceURL('themes/youthballet/dist/scripts/modernizr.js')"></script>
	<%-- Favicon --%>
	<link rel="shortcut icon" href="{$BaseHref}favicon.ico" type="image/x-icon">
	<%-- CSS --%>

	<link rel="stylesheet" href="$resourceURL('themes/youthballet/dist/css/main.css')" />
	<%-- Typekit --%>
	<% include TypeKit %>
	<%-- Picturefill --%>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/2.3.1/picturefill.min.js" async></script>
	<%--[if lt IE 9]>
		 <script src="{$resourceURLL}(js/ie/html5shiv.js)"></script>
		 <script src="{$resourceURLL}(js/ie/respond.min.js)"></script>
	<![endif]--%>
</head>
<body class="$ClassName">
	<a id="skiptocontent" class="visuallyhidden focusable" href="#main-content">Skip to main content</a>
	<% include UiowaBar %>
	<% include MobileMenu %>
	$Layout
	<% include Footer %>

	<%-- JS --%>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="$resourceURL('themes/youthballet/dist/scripts/build/production.min.js')"></script>
	$Analytics
	$BetterNavigator
</body>
</html>