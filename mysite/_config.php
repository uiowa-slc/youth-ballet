<?php

global $project;
$project = 'mysite';

global $database;
$database = 'youthballet';

require_once("conf/ConfigureFromEnv.php");

MySQLDatabase::set_connection_charset('utf8');

// Set the current theme. More themes can be downloaded from
// http://www.silverstripe.org/themes/
SSViewer::set_theme('simple');

FulltextSearchable::enable(array('SiteTree'));

// Set the site locale
i18n::set_locale('en_US');


if(Director::isLive()) {
	Director::forceSSL();
}
GD::set_default_quality(80);
Authenticator::unregister('MemberAuthenticator');
Authenticator::set_default_authenticator('SAMLAuthenticator');