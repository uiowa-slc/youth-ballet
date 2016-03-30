<?php
class CalendarExtension extends DataExtension {

	private static $db = array(
	);

	private static $has_one = array(
		"Photo" => "Image",
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab("Root.Main", new UploadField("Photo", "Header Photo"));

		return $fields;
	}

}
