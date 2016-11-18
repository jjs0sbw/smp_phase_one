/* global _, $, Backbone, N1 , n1*/
// Model class for each structure

// View class for displaying each structure list item
var StructuresListItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'structure',
  template: _.template($('#structure-item-tmpl').html()),

  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove)
  },

  render: function () {
    var html = this.template(this.model.toJSON())
    this.$el.html(html)
    return this
  },

  events: {
    'click .remove': 'onRemove'
  },

  onRemove: function () {
    this.model.destroy()
  }
})

// View class for rendering the list of all structures
var StructuresListView = Backbone.View.extend({
  el: '#n1-app',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    this.collection.each(function (model) {
      var item = new StructuresInputView({model: model})
      item.render().$el
    }, this)

    return this
  },

  events: {
    'click .create': 'onCreate'
  },

  onCreate: function () {
    var $size = this.$('#matrix-size')

    if ($size.val()) {
      this.collection.create({
        size: $size.val()
      })

      $size.val('')
      this.$('#structure-create').hide()
    }
  }
})

// View class for displaying structure input items
var StructuresInputView = Backbone.View.extend({
  el: '#n1-app',
  template: _.template($('#structure-input-tmpl').html()),
  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove)
    console.log('Starting here...')
  },

  render: function () {
    var html = this.template(this.model.toJSON())
    this.$el.html(html)
    console.log('Rendering here...')
    return this
  }
})

// View class for displaying structure input items
var StructuresSelectView = Backbone.View.extend({
  el: '#n1-app',
  template: _.template($('#structure-strict-one-tmpl').html()),
  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove)
    console.log('Starting here...')
  },

  render: function () {
    var html = this.template(this.model.toJSON())
    this.$el.html(html)
    console.log('Rendering here...')
    return this
  }
})

// Create a new list collection, a list view, and then fetch list data:
n1.structuresList = new N1.Collections.StructureList()
n1.structuresView =
new N1.Views.StructuresSelectView({collection: n1.structuresList})
// new N1.Views.StructuresInitialView({collection: n1.structuresList})

n1.structuresList.fetch()
