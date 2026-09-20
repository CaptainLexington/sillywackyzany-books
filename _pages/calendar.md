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
 - name: Elko Trader's Market
   url:  https://tradersmarket.us/
   date: October 3-4
   location: Elko, Minnesota
 - name: Twin Cities Book Festival
   url: https://twincitiesbookfestival.com/
   date: November 7
   location: Union Depot, St Paul

---

Come see me at the following marketplaces in 2026:

<ul>
    {% for event in page.events %}
    <li> 
        <a href="{{event.url}}"> {{event.name}} </a> · {{ event.date }} in {{ event.location }} </li>
    {% endfor %}
</ul>


<!-- {% include calendar.liquid calendar_id='test@gmail.com' timezone='America/Chicago' %} -->
