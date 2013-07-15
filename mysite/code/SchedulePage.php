<?php

class SchedulePage extends Page {
	
	
	public static $defaults = array(
							 
	
	);
	
	public static $db = array(
	

	
	
	);
	
	public static $has_one = array(
	
	'FileUpload' => 'File'
	
	);
	
	
	
function getCMSFields() {
	$fields = parent::getCMSFields();
	
		$fields->addFieldToTab('Root.Content.File', new FileIFrameField('FileUpload','Upload file here',null,null,null,'assets/Uploads/schedules/'));
	
    return $fields;
	
   }	
	
}

class SchedulePage_Controller extends Page_Controller {
	
	
	public function init() {
		parent::init();
		
	}
	
}

?>