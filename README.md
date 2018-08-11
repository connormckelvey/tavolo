# Tavolo

A Sass Mixin and jQuery Plugin for creating responsive tables.

### Shoutout to Zurb
A Majority of the original code is from Zurbs Responsive Tables Repository. However out of necessity I created a Sass Mixin and jQuery plugin that removed the need to initialize the responsive table with the class 'Keyword' that was dictated in their repository. 

### Known Issues
Limited testing has been done and until a later version, tables will only be able to be initialized using a single class. (Ex $('.my-table').tavolo()). Using IDs or a chained selector will not work.
