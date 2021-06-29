<?php

use SilverStripe\Assets\Image;
use SilverStripe\Forms\TextField;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\HTMLEditor\HTMLEditorField;
class StaffMember extends Page {

	private static $db = array(
		"StaffPosition" => "Text",
		"StaffEmailAddress" => "Text",
		"StaffPhoneNumber" => "Text"
	);

	private static $has_one = array(
		"StaffPhoto" => Image::class,
	);


	public function getCMSFields(){
		$fields = parent::getCMSFields();
		$fields->addFieldToTab("Root.Main", new TextField("StaffPosition", "Position"));
		$fields->addFieldToTab("Root.Main", new TextField("StaffEmailAddress", "Email address"));
		$fields->addFieldToTab("Root.Main", new TextField("StaffPhoneNumber", "Phone Number"));
		$fields->addFieldToTab("Root.Main", new UploadField("StaffPhoto", "Staff Photo"));
		$fields->addFieldToTab("Root.Main", new HTMLEditorField("Content", "Biography"));

		return $fields;

	}
	public function FirstName(){
		$name = $this->Title;
		$nameArray = explode(' ', $name);

		return $nameArray[0];

	}

	public function Surname(){
		$name = $this->Title;
		$nameArray = explode(' ', $name, 2);

		return $nameArray[1];

	}

	//private static $allowed_children = array("");

}