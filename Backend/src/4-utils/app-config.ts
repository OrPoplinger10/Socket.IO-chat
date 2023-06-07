class AppConfig{
 // Server Port
public port = 4000;

// Server Url:
public serverUrl = "http://localhost:" + this.port;

// Images url:
public imagesUrl = this.serverUrl + "/api/products/images/";

// Database host( on which computer the database exists);
public mySqlHost = "localhost";

// Database user
public mySqlUser ="root"

// Database password
public mySqlPassword =""; 

// Database Name:
public mySqlDatabase = "" //


}

const appConfig =new AppConfig();

export default appConfig;