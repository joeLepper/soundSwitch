

var gpio = require('pi-gpio')
  , isOn = false
  , flash = function(){
    isOn = !isOn;
    setTimeout(function(){doFlash()},100);
  }
  , doFlash = function(){
    gpio.open(22,'output',function(err) {
      if(isOn){
        gpio.write(22,1,function(){flash()})
      }
      else{
        gpio.write(22,0,function(){flash()});
      }
    });
  };
gpio.close(22);
setTimeout(function(){doFlash()},1000);
