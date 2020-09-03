<?php

use SilverStripe\Assets\Image;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Control\Email\Email;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\ORM\DataExtension;

class SiteConfigExtension extends DataExtension {

	private static $db = array(

		'Address1' => 'Text',
		'Phone' => 'Text',
		'Email' => 'Text',

	);

	private static $has_one = array(
		"DefaultPhoto" => Image::class,
	);

	public function updateCMSFields(FieldList $fields) {

		$fields->addFieldToTab('Root.Main', new TextField('Address1', 'Address'));
		$fields->addFieldToTab('Root.Main', new TextField('Phone', 'Phone Number'));
		$fields->addFieldToTab('Root.Main', new TextField('Email', 'Email'));
		$fields->addFieldToTab('Root.Main', new UploadField('DefaultPhoto', 'Default Background Photo'));

		return $fields;

	}

}