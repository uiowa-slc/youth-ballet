<?php

use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TextareaField;
use SilverStripe\Forms\TextField;
use SilverStripe\CMS\Model\SiteTree;
class Page extends SiteTree {

	private static $db = array(
		"TestimonialQuote" => "Text",
		"TestimonialName" => "Text",
		"TestimonialAttribution" => "Text",
	);

	private static $has_one = array(
		"BackgroundPhoto" => Image::class,
		"TestimonialPhoto" => Image::class,
	);

	public function getCMSFields(){
		$fields = parent::getCMSFields();

		$fields->removeByName("ExtraMeta");
		$fields->addFieldToTab("Root.Main", new UploadField("BackgroundPhoto", "Background Photo"), "Content");

		$fields->addFieldToTab("Root.Testimonial", new TextareaField("TestimonialQuote", "Quote"));
		$fields->addFieldToTab("Root.Testimonial", new TextField("TestimonialName", "Person (Jane Doe)"));
		$fields->addFieldToTab("Root.Testimonial", new TextField("TestimonialAttribution", "Attribution (Youth Ballet)"));
		$fields->addFieldToTab("Root.Testimonial", new UploadField("TestimonialPhoto", "Photo"));

		return $fields;

	}

}
