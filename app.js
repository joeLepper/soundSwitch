var gpio = require('pi-gpio');

gpio.open(16,'output',function(err) {
  gpio.write(16,1,function() {
    console.log('inside callback from write');
    gpio.close(16);
  });
});
