<?php

class SiteConfigExtension extends DataExtension {

	static $db = array(
		'Analytics' => 'Text',
		'Address1' => 'Text',
		'Phone' => 'Text',
		'Email' => 'Text',

	);

	static $has_one = array(
		"DefaultPhoto" => "Image",
	);

	public function updateCMSFields(FieldList $fields) {
		$fields->addFieldToTab('Root.Main', new TextField('Analytics', 'Google Analytics Tracking ID'));
		$fields->addFieldToTab('Root.Main', new TextField('Address1', 'Address'));
		$fields->addFieldToTab('Root.Main', new TextField('Phone', 'Phone Number'));
		$fields->addFieldToTab('Root.Main', new TextField('Email', 'Email'));
		$fields->addFieldToTab('Root.Main', new UploadField('DefaultPhoto', 'Default Background Photo'));

		return $fields;

	}

}
class SiteConfigExtensionPage_Controller extends Page_Controller {

	public function init() {
		parent::init();
	}

}