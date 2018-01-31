A user interface for javascript objects and javascript development environment, implemented as a web page. In one sense the tool is just an interface for interacting with and modifying any javascript object. Any valid object literal should be convertable by the tool into an interface. 

It is intended to provide an easy to use interface for executing and modifying a collection of user-designed functions, which may interact.

The intent of the design is to allow the user to add any functionality permitted by the web browser and hardware, so the user should have the ability to customize everything. 

The program is implemented as an HTML file with javascript, to allow it to be run from any machine with a modern web browser, whether it is connected to the internet or not. The program allows saving changes to an local HTML file, or to the Web Browser, or to a server.

It enables building tools to record, process, and share information, which can implement apps like project organizers, note keepers, schedulers.

Predicated on the continued advancement of web functionality, peer to peer communication, and web APIs, toward democratization of information and automation.

The tool must be flexible and configurable. It should be easy to run in any way - from a server, locally, adding a parameter with a new project object etc.

Since javascript objects are turing complete, the tool is as well.

Features:
   -Any Javascript object can be accessed/used by the WP converting its named functions and objects into buttons in the web interface.
   -Calling functions prompts for parameters by name, including populating default values of the parameters
   -Functions and objects can be edited with the 'edit' function
   -Can save the entire page as a portable html file with the 'download' function
   -Can save the javascript object to the server with 'save_to_server'
   -Runs code on startup, if the code is named 'init' or '_init'(hidden) as a object/function of the main object
   -Hidden objects and functions with '_' prefix
   -Can call functions from the command line. Can run multi-parameter functions from a single line
   -The command line remembers the last run function (accessed by pushing the up arrow)