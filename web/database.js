var database = new DataBase();

function DataBase() {

    var localDatabaseStorage = window.localStorage.getItem('database');
    this.userExistsAndPasswortIsMatching = function(usernameString, passwordString) {
       for( var i=0;i<this.userList.length;i++) {
           if(this.userList[i].username===usernameString && this.userList[i].password===passwordString) {
               return true;
           }
        
       }
        return false;
    }
    this.userList = typeof localDatabaseStorage === 'string' ?
        JSON.parse(localDatabaseStorage).userList : [
        {
            username: 'alice',
            password: '123'
        }
    ];
    this.currentLoggedInUser = typeof localDatabaseStorage === 'string' ? 
        JSON.parse(localDatabaseStorage).currentLoggedInUser : 'none';

    this.loginUser = function(username, password) {
        
        if(this.currentLoggedInUser!=='none'
            || false === this.userExistsAndPasswortIsMatching(username, password) 
        ) {
            return false;
        }

        this.currentLoggedInUser = username;
        this.saveToLocalStorage();
        return true;
    };
    this.logout= function() {
        this.currentLoggedInUser= 'none';
        this.saveToLocalStorage();
    }

    this.signUp = function(usernameString, passwordString) {

        this.userList.push({
            username: usernameString,
            password: passwordString
        });
        
        this.saveToLocalStorage()
    };

    this.saveToLocalStorage= function() {

        window.localStorage.setItem('database', JSON.stringify(this));
    }
}