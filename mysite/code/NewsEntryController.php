<?php

use SilverStripe\Blog\Model\BlogPostController;

class NewsEntryController extends BlogPostController {

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
	private static $allowed_actions = array (
	);

	public function RelatedNewsEntries(){
		//Commenting these out for now until I can update this for blog 2.0
	/*	$holder = NewsHolder::get()->First();
		$tags = $this->TagsCollection()->sort('Date', 'ASC')->limit(6);
		$entries = new ArrayList();

		foreach($tags as $tag){
			$taggedEntries = $holder->Entries(5, $tag->Tag)->exclude(array("ID"=>$this->ID))->sort('Date', 'ASC')->First();
			if($taggedEntries){
				foreach($taggedEntries as $taggedEntry){
					if($taggedEntry->ID){
						$entries->push($taggedEntry);
					}
				}
			}

		}

		if($entries->count() > 1){
			$entries->removeDuplicates();
		}
		return $entries;*/
	}

	public function init() {
		parent::init();


	}

}