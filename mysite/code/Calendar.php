<?php

use SilverStripe\Assets\Image;
use SilverStripe\Blog\Model\Blog;
use SilverStripe\Forms\DateField;
use EdgarIndustries\YouTubeField\YouTubeField;
use SilverStripe\ORM\ArrayList;

class Calendar extends Blog {

    private static $db = array(

    );

    private static $has_one = array(

    );

    private static $allowed_children = array(
        'CalendarEvent'
    );

    private static $belongs_many_many = array (

    );

    public function UpcomingDates($count = 7){
        $now = date('Y-m-d');
        $dates = CalendarEvent::get()->filter(array(
            'Date:GreaterThanOrEqual' => $now
            ))->sort('Date')->limit($count);

        $combinedDates = array();
        $masterDates = new ArrayList();
        //todo: make this an arraylist full of dates, add events to the dates where appropriate
        $datesArrayList = $this->to_array_list($dates);
        $datesUnique = $datesArrayList->removeDuplicates('Date');
        //print_r($datesArrayList);
        foreach($datesArrayList as $dateUnique){
            $masterDateShows = new ArrayList();
            //$masterDates->push($dateUnique);
            //$masterDate = $masterDates->find('Date', $dateUnique);
            $dateTransient = new CalendarDateTransient();
            $dateTransient->Date = $dateUnique->Date;
            $dateTransient->ShowsTransient =  new ArrayList();
            $masterDates->push($dateTransient);
        }

        //masterDates holds onto an array of dates that will contain all events on each date.
        foreach($dates as $date){
            $show = $date->CalendarEvent();

            $showWithTimes = new CalendarEvent();
            $showWithTimes->Title = $show->Title;
            $showWithTimes->Content = $show->Content;
            $showWithTimes->URLSegment = $show->URLSegment;
            $showWithTimes->Times = $date->Times;
            $showWithTimes->Poster = $show->Poster;

            $masterDateToUse = $masterDates->find('Date', $date->Date);

            //print_r($masterDateToUse);
            $masterDateToUse->ShowsTransient->push($showWithTimes);

        }

        //print_r($masterDates);
        return $masterDates;
    }


    public function UpcomingShows($count = 5){
        $now = date('Y-m-d');
        $dates = CalendarEvent::get()->filter(array(
            'Date:GreaterThanOrEqual' => $now
            ))->sort('Date')->limit($count);

        $events = new ArrayList();

        foreach($dates as $date){
            $event = CalendarEvent::get()->filter(array('ID' => 472))->First();


            if($event){
                $events->push($event);
            }

        }


        return $events;
    }



}
