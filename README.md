dualcolumns
===========

JQuery plugin that automatically changes short text to columns 
w/o the hassle of having white space in your container.  If a 
element has less than X chars in it (the example uses 9) then 
it will attempt to assign it to the specified "half" class(es)
if it can do so without having a row with only one column (no 
white-space).  It supports using a generic "half" class, as 
well as optional left/right classes.



single class example
====================

$('div.columnbox').dualColumns(9, 'full', 'half');
Find all divs with the class "columnbox" and assign them full
if text length is 9 or higher or there isn't another available
half column in that row.


dual class example
==================
$('div.columnbox').dualColumns(9, 'full', 'left', 'right');
Same as above but now with the added option of using a left
and right column class.



contact
=======
I can be reached at trollboy@gmail.com.  Don't spam me or I will
do all the things the gumdrop promises in the hit Mastodon song
Linoleum knife.
[http://www.youtube.com/watch?v=xo9v_GIuDBk](https://www.youtube.com/watch?v=WWvt3E5a-AA)
