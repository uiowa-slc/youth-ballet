<?php
/**
 * Defines the InteriorPage page type
 */

class FullWidthPage extends Page {

	private static $db = array(

	);
	private static $has_one = array(

	);
	private static $has_many = array(

	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();
		return $fields;
	}
}

class FullWidthPage_Controller extends Page_Controller {

}