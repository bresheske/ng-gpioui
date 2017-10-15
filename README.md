# ng-gpioUI
This project replaces nodejs-gpio-ui.  It's written in angular CLI and uses nodeJS for a very minimal web server. 

## Installing & Running
```
npm install
ng serve
```

## Building
```
ng build --prod
```

## Running Prod
```
node web.js
```

## Installing onto a PI
Edit /etc/rc.local and add line:
```
sudo node /home/pi/ng-gpioui/dist/web.js &
```