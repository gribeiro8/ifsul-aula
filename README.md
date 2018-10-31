# Example of APD class

[![N|Solid](http://mocitec.charqueadas.ifsul.edu.br/landingpage/img/ifsul-horizontal-colorido.png)](http://www.charqueadas.ifsul.edu.br/portal/index.php?option=com_content&view=article&id=406&Itemid=161)


Implementation created in the APD class of the course Technologist in Systems for Internet.
Example is a base built with node.js / express / mysql for future implementations.

# Project!

The project follows the following idea:
- Client requests are handled in the route module
- These routes call a special controller that will request a model and / or send a return view
- Models are implemented in mysql and can be customized at will
- Views are implemented in ejs and will receive a bootstrap layout in the future




### In future

Modules and implementations we use:
* Express-flash [Express-flash](https://www.npmjs.com/package/express-flash "Express-flash")
* Express-session [Express-session](https://github.com/expressjs/session "Express-session")
* Express-mysql-session [Express-mysql-session](https://www.npmjs.com/package/express-mysql-session "Express-mysql-session")
* Express-validator [Express-validator](https://github.com/express-validator/express-validator "Express-validator")
* Express-fileupdate [Express-fileupdate](https://www.npmjs.com/package/express-fileupload "Express-fileupdate")

Adding static css / imgs / js files