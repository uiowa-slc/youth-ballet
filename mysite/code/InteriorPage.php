<?php
/**
 * Defines the HomePage page type
 */
 
class InteriorPage extends Page {
 static $db = array(

	"ImageCaption" => "Text",
  
);
   static $has_one = array(
   
  	'ContentImage' => 'Image'
 
   );
   
   function getCMSFields() {
   $fields = parent::getCMSFields();
   
   
	$fields->addFieldToTab('Root.Images', new TextField('ImageCaption', 'Image Caption'));
    		$fields->addFieldToTab('Root.Images', new UploadField('ContentImage', 'Event Image 469x331 pixels'));

   return $fields;
}
}
 
class InteriorPage_Controller extends Page_Controller {
	
}
?>