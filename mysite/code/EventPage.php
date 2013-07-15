<?php

class EventPage extends Page {
	
	public static $db = array(
		'Date' => 'Text',

	);
	public static $has_one = array(
								      	'Picture' => 'Image'

	);
	function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab("Root.Content.Main", new TextField('Date'));
		$fields->addFieldToTab("Root.Content.Image", new ImageField('Picture'));
		return $fields;
	}
}
 
class EventPage_Controller extends Page_Controller {

function init() {
		parent::init();
		
		
	
	}
 
}
?>