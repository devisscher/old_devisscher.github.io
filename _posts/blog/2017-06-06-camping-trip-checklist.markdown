---
layout: post
comments: true
title:  "Camping trip checklist"
date:   2017-06-06T09:00:00Z
categories: blog
tags: adventure camping trips checklists
--- 
<style>
input[type=checkbox]
{
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  padding: 10px;
}
</style>

When you head into the wild, trying to remember to pack everything you need is not an easy task. I always get to the campsite and realize that I forgot something. Here is a camping checklist for the adventurous: 

# Survival Gear

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_firstaid" /> First aid kit

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_flashlight" /> Flashlight

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_matches" /> Matches and lighter

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_knife" /> Knife

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_axe" /> Axe

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_gps" /> GPS and Map

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_sunscreen" /> Sunscreen and Bug spray

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_poncho" /> Emergency poncho

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_whistle" /> Whistle

# Camping Gear

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_tent" /> Tent

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_tarp" /> Tarp

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_sleepingbag" /> Sleeping bag

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_sleepingpad" /> Sleeping pad

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_stove_fuel" /> Stove and Fuel

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_pots" /> Pots

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_pot_grabber" /> Pot grabber

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_utensils" /> Utensils

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_plate" /> Plate

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_bowl" /> Bowl

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_cup" /> Cup

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_filter" /> Water filter




# Personal Gear

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_toothbrush_soap" /> Toothbrush and Camp suds

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_tp" /> TP

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_towel" /> Pack towel

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_phone" /> Phone

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_crocs" /> Crocs

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_camera" /> Camera

# Clothing

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_tshirt" /> T-Shirt(s)

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_longsleeve" /> Long sleeve shirt

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_hoodie" /> Hoodie or Fleece

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_pants" /> Pants

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_shorts" /> Shorts

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_underwear" /> Underwear

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_socks" /> Cotton/Sports socks 

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_warm_socks" /> Warm socks 

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_toque" /> Toque

<input type="checkbox" name="item_checkbox" onclick="item_checked(this.id);" id="tdevisscher_hat" /> Hat




Please feel free to comment your additions. You never know, I may have forgotten stuff.

<script>

function item_checked(item_id)

{	
	if(localStorage[item_id]){
		confirm("Removing item, are you sure?")
		localStorage.removeItem([item_id]);
	} else {
		alert("keep on packing!")
		localStorage[item_id] = true;
	}
	
	//alert(localStorage[item_id])
}

function check_items_that_are_in_storage(){
	checkboxes = document.getElementsByName('item_checkbox');
	for (var i = 0; i < checkboxes.length; i++) {
	     //checkboxes[i].checked = true;
	     console.log(checkboxes[i].id);

	     if(localStorage[checkboxes[i].id]) {
	     	checkboxes[i].checked = localStorage[checkboxes[i].id];
	    }
	}
}

check_items_that_are_in_storage()





































</script>