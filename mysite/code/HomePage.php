<?php
class HomePage extends Page {
	public static $db = array(
	    'Testimonial' => 'Text',
		'Attribution' => 'Text'
	);
	public static $has_one = array(
	);
	function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab("Root.Content.Main", new TextareaField('Testimonial'));
		$fields->addFieldToTab("Root.Content.Main", new TextField('Attribution'));
		return $fields;
	}
}
class HomePage_Controller extends Page_Controller {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	public static $allowed_actions = array (
	);
	
	//function Events(){
	//	$where = "ClassName = 'EventPage'";
	//	$result = DataObject::get("EventPage",$where,"","");
	//	return $result;
	//}

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates 
		// instead of putting Requirements calls here.  However these are 
		// included so that our older themes still work
		Requirements::themedCSS('layout'); 
		Requirements::themedCSS('typography'); 
		Requirements::themedCSS('form'); 
	}
}