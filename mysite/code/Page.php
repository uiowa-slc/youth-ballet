<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

	/*
   * limits words to a number, but tries to validate the code
   */
	public function getSummaryHTML($ContentArea='Content', $limit = 10) {
		$m = 0;
		$addEplisis = '';
		$returnstr = '';
		$returnArray = array();
		$html = array();
		$chars = preg_split('/(<[^>]*[^\/]>| )/i', $this->$ContentArea, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);
		foreach ($chars as $elemnt) {
			// found start tag
			if (preg_match('/^<(p|h1|h2|h3|h4|h5|h6|q|b|i|strong|em)(.*)>$/', $elemnt)) {
				preg_match('/^<(p|h1|h2|h3|h4|h5|h6|q|b|i|strong|em)(.*)>$/', $elemnt, $matches);
				array_push($html, $matches[1]);// convert <p class=""> to p
				array_push($returnArray, $elemnt);
				// found end tag
			} else if (preg_match('/^<\/(p|h1|h2|h3|h4|h5|h6|q|b|i|strong|em)(.*)>$/', $elemnt)) {
					preg_match('/^<\/(p|h1|h2|h3|h4|h5|h6|q|b|i|strong|em)(.*)>$/', $elemnt, $matches);
					$testelement = array_pop($html);
					// match (ie: <p>etc</p>)
					if ($testelement==$elemnt[1]) array_pop($html);
					array_push($returnArray, $elemnt);
				} else {
				// done
				if ($elemnt == ' ') continue;
				array_push($returnArray, $elemnt);
				$m++;
				if ($m > $limit) {
					$addEplisis = '&hellip;';
					break;
				}
			}
		}
		// convert start tags to end tags
		$tmpr = '';
		foreach ($html as $elemnt) {
			$tmpr.='</'.$elemnt.'>';
		}
		return implode($returnArray, ' ') . $addEplisis . $tmpr;
	}


}




class Page_Controller extends ContentController {

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

	public function navlink() {

	}


	public function init() {
		parent::init();
		// Note: you should use SS template require tags inside your templates
		// instead of putting Requirements calls here.  However these are
		// included so that our older themes still work
		Requirements::themedCSS('layout');
		Requirements::themedCSS('typography');
		Requirements::themedCSS('form');
	}
		function HomePageTabs($limit=4) {
		//$set = DataObject::get("HomePageTab", null, null, null, $limit);
		$set = HomePageTab::get()->limit($limit); 
		return $set;
	}


}
