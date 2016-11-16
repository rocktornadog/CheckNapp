angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/home
      /page1/tab3/home
  */
  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.users'
      2) Using $state.go programatically:
        $state.go('tabsController.users');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/contacts
      /page1/tab2/contacts
      /page1/tab3/contacts
  */
  .state('tabsController.users', {
    url: '/contacts',
    views: {
      'tab1': {
        templateUrl: 'templates/users.html',
        controller: 'usersCtrl'
      },
      'tab2': {
        templateUrl: 'templates/users.html',
        controller: 'usersCtrl'
      },
      'tab3': {
        templateUrl: 'templates/users.html',
        controller: 'usersCtrl'
      }
    }
  })

  .state('tabsController.events', {
    url: '/events',
    views: {
      'tab3': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('tabsController.options', {
    url: '/options',
    views: {
      'tab5': {
        templateUrl: 'templates/options.html',
        controller: 'optionsCtrl'
      }
    }
  })

  .state('createNewUser', {
    url: '/NewUser',
    templateUrl: 'templates/createNewUser.html',
    controller: 'createNewUserCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.userInformation'
      2) Using $state.go programatically:
        $state.go('tabsController.userInformation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/userinfo
      /page1/tab2/userinfo
      /page1/tab3/userinfo
  */
  .state('tabsController.userInformation', {
    url: '/userinfo',
    views: {
      'tab1': {
        templateUrl: 'templates/userInformation.html',
        controller: 'userInformationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/userInformation.html',
        controller: 'userInformationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/userInformation.html',
        controller: 'userInformationCtrl'
      }
    }
  })

  .state('createEvent', {
    url: '/page13',
    templateUrl: 'templates/createEvent.html',
    controller: 'createEventCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});