<?php

use SilverStripe\ORM\Connect\MySQLDatabase;
use SilverStripe\View\SSViewer;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\ORM\Search\FulltextSearchable;
use SilverStripe\i18n\i18n;
use SilverStripe\Control\Director;
use SilverStripe\Security\MemberAuthenticator\MemberAuthenticator;
use SilverStripe\Security\Authenticator;


if(Director::isLive()) {
	Director::forceSSL();
}