/**
2. * System configuration for Angular samples
3. * Adjust as necessary for your application needs.
4. */
5.(function (global) {
6.  System.config({
7.    paths: {
8.      // paths serve as alias
9.      'npm:': 'node_modules/'
10.    },
11.    // map tells the System loader where to look for things
12.    map: {
13.      // our app is within the app folder
14.      app: 'app',
15.
16.      // angular bundles
17.      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
18.      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
19.      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
20.      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
21.      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
22.      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
23.      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
24.      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
25.
26.      // other libraries
27.      'rxjs':                      'npm:rxjs',
28.      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
29.    },
30.    // packages tells the System loader how to load when no filename and/or no extension
31.    packages: {
32.      app: {
33.        main: './main.js',
34.        defaultExtension: 'js'
35.      },
36.      rxjs: {
37.        defaultExtension: 'js'
38.      },
39.      'angular-in-memory-web-api': {
40.        main: './index.js',
41.        defaultExtension: 'js'
42.      }
43.    }
44.  });
45.})(this);
