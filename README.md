ionic-activity-demo
===================

Demo project to show issues around rendering activity indicator directive.

- Clone the repo into a web server enabled directory
- Bring up index.html in the browser
- You should see the canvas element render the progress indicator
- Click on the link at the the bottom of the page 'Ionic tabs ->>>' to change to an Ionic tab view
- Note the canvas element renders but there is no content painted in it



If the round progress directive is included in a page with no ionic directives the canvas renders and the path info is drawn on the canvas


![Alt text](/images/home.png "Home")


If the round progress directive is embedded within an ionic directive (eg: tab view) the canvas element is rendered but nothing is written to it.

![Alt text](/images/tab.png "Tab")
