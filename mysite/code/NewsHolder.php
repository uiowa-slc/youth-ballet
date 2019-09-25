<?php

use SilverStripe\Blog\Model\Blog;
class NewsHolder extends Blog {

	private static $db = array(

	);

	private static $has_one = array(

	);
	private static $belongs_many_many = array (
	);
	private static $has_many = array(
	);

	private static $allowed_children = array(
		'NewsEntry'
	);



	private static $singular_name = 'News Holder';

	private static $plural_name = 'News Holders';

	public function getCMSFields(){
		$fields = parent::getCMSFields();
		$fields->removeByName("Testimonial");
		return $fields;
	}


}