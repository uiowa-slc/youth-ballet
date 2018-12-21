<?php

use SilverStripe\Blog\Model\BlogPost;
class NewsEntry extends BlogPost {

	private static $db = array(

	);

	private static $belongs_many_many = array (
	);
	private static $has_many = array(
	);

	private static $allowed_children = array(

	);

	private static $singular_name = 'News Entry';

	private static $plural_name = 'News Entries';


	public function getCMSFields(){
		$fields = parent::getCMSFields();
		$fields->removeByName("Testimonial");
		$fields->removeByName("PhotoGallery");
		$fields->removeByName("Widgets");
		$fields->removeByName("BackgroundPhoto");

		return $fields;
	}


}