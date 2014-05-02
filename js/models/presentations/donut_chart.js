ds.models.donut_chart = function(data) {
  "use strict";

  var chart
    , base
    , self = {};

  chart = ds.models.chart(data).rebind(self);
  base = ds.models.item(data).set_type('donut_chart').rebind(self);

  /**
   * Data mutators
   */

 self.toJSON = function() {
    return chart.toJSON(base.toJSON({
    }));
  }

  return self;
};