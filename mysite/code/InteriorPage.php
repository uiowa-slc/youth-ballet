<?php
/**
 * Defines the InteriorPage page type
 */

class InteriorPage extends Page {

	private static $db = array(

	);
	private static $has_one = array(
		"Photo" => "Image",
	);
	private static $has_many = array(
		'PhotoEntries' => 'PhotoEntry'
	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab("Root.Main", new UploadField("Photo", "Header Photo"));

		$gridFieldConfig = GridFieldConfig_RelationEditor::create()->addComponents();
		$gridFieldConfig->addComponent(new GridFieldSortableRows('SortOrder'));
		$gridField = new GridField("PhotoEntries", "Photos:", $this->PhotoEntries(), $gridFieldConfig);
		$fields->addFieldToTab("Root.Gallery", $gridField);

		return $fields;
	}
}

class InteriorPage_Controller extends Page_Controller {

}