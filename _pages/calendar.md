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
   location: Elko
 - name: Inbound BrewCo Booktoberfest
   url: https://inboundbrew.co/book-fair-for-grown-ups-1
   date: October 24
   location: Falcon Heights
 - name: Twin Cities Book Festival
   url: https://twincitiesbookfestival.com/
   date: November 7
   location: St Paul
 - name: Cuppa Mora Pages
   url: https://cuppamorepages.com/ 
   date: November 22
   location: Inver Grove Heights

---

Come see me at the following marketplaces in 2026:

<ul>
    {% for event in page.events %}
    <li> 
        <a href="{{event.url}}"> {{event.name}} </a> · {{ event.date }} in {{ event.location }} </li>
    {% endfor %}
</ul>


<!-- {% include calendar.liquid calendar_id='test@gmail.com' timezone='America/Chicago' %} -->
