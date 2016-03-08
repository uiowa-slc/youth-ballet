<?php
/**
 * Defines the Minisite page type
 */
class HomePageTab extends SiteTree {

	private static $defaults = array(

	);

	private static $db = array(

	);

	private static $has_one = array(
		'FeatureImage' => 'Image',

	);

	function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->addFieldToTab('Root.Images', new UploadField('FeatureImage', 'Feature Box Image 727x528'));

		return $fields;

	}

}

class HomePageTab_Controller extends Page_Controller {

	function init() {
		parent::init();
	}

}
?>