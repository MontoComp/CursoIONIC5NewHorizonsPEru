// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authUserApi:{
    baseUrl:'http://localhost:3027/users'
  },
  gmapsApi:{
    apiKey:'AIzaSyDvvrFgXRcQLnADyeSbMTBPoVTIITHL6Ho',
    defaultZoom:14,
  },
  openTripMap: {
    defaultCity:'Trujillo',
    apikey: 'apikey=5ae2e3f221c38a28845f05b66b2ebd0c0a4a7428f0803525b45f11d8',
    baseUrl: 'https://api.opentripmap.com/0.1/en/places/',
    radius: '1000',
    rate: '2',
    formatCount: 'count',
    formatJson: 'json',
  },
  urlAvatarDefaultImage:
    'https://ionicframework.com/docs/demos/api/avatar/avatar.svg',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
