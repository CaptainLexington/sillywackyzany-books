---
layout: page
permalink: /calendar/
title: Event Calendar
nav-title: calendar
description: Upcoming events for SillyWackyZany Books
nav: true
nav_order: 1
calendar: false
social: true
events:
 - name: Minicon
   url:  https://mnstf.org/minicon59/
   date: April 3-5
   location: Bloomington
 - name: Elko Trader's Market
   url:  https://tradersmarket.us/
   date: May 22-25
   location: Elko, Minnesota
 - name: Minnesota Antiquarian Book Fair
   url:  https://minnesotaantiquarianbookfair.wordpress.com/
   date: June 27
   location: St Paul
 - name: CONvergence
   url:  https://www.convergence-con.org/
   date: July 2-5
   location: Minneapolis
 - name: Pulpfest
   url:  https://pulpfest.com/
   date: July 30 - August 2
   location: Pittsburgh, PA
 - name: Elko Trader's Market
   url:  https://tradersmarket.us/
   date: September 4-7
   location: Elko, Minnesota
 - name: Elko Trader's Market
   url:  https://tradersmarket.us/
   date: October 3-4
   location: Elko, Minnesota

---

Come see me at the following marketplaces in 2026:

<ul>
    {% for event in page.events %}
    <li> 
        <a href="{{event.url}}"> {{event.name}} </a> · {{ event.date }} in {{ event.location }} </li>
    {% endfor %}
</ul>


<!-- {% include calendar.liquid calendar_id='test@gmail.com' timezone='America/Chicago' %} -->
