# pluralsight-js-dev-env
JavaScript Development Environment from Pluralsight Course with Cory House


Used the following.

* Package Manifest: package.json
  * https://gist.github.com/coryhouse/29bd1029b623beb4c7f79b748dcba844

Commands

* npm install
  * installs packages listed in packages.json

Install Node Security Platform (obsolete)
* npm install -g nsp
  * "-g" means "install it globally", which means we can run it on the command line.
  * installs "Node Security Platform" service, which is obsolete.
  * https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting
* nsp check
  * replacement is "npm audit".
  * update is "npm audit fix".

