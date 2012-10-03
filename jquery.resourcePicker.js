/*
Simple jQuery plugin that redirects the UA to a resource URL onChange.

Ex:
$('#mySelectTag').resourcePicker()

<select data-resource-picker="post">
  <option value="1">Post 1</option>
</select>
*/

$.fn.resourcePicker = function(options) {
  var _this = this;
  
  this.resource = $(this).attr('data-resource-picker');
  if (typeof this.resource === "undefined") {
    console.debug("jQuery.resourcePicker.js: You must add a `data-resource' attribute to your select tag.");
    return;
  }
  
  $(this).change(function(e) {
    var selected = $(this).find('option:selected');
    _this.redirectTo(selected);
  });
  
  this.redirectTo = function(selected) {
    var value = selected.val(),
        name = selected.text();
    location.href = '/' + this.resource.pluralize() + '/' + value;
  };
};