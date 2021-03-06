ds.register_dashboard_item('discrete_bar_chart', {

  display_name: 'Discrete Bar Chart',
  icon: 'fa fa-image',
  category: 'chart',

  constructor: function(data) {
    'use strict'

    var self = limivorous.observable()
                         .extend(ds.models.item, {item_type: 'discrete_bar_chart'})
                         .extend(ds.models.chart)
                         .build()

    ds.models.chart.init(self, data)
    ds.models.item.init(self, data)

    self.toJSON = function() {
      return ds.models.chart.json(self, ds.models.item.json(self))
    }

    return self
  },

  data_handler: function(query, item) {
    ds.charts.discrete_bar_chart($('#' + item.item_id + ' .ds-graph-holder'), item, query)
  },

  template: ds.templates.models.discrete_bar_chart,

  interactive_properties: ds.models.chart.interactive_properties
                            .concat(ds.models.item.interactive_properties)

})
