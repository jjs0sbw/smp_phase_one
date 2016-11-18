/* global Backbone, N1, n1, $ */
(function () {
  'use strict'

  // View class for selecting modeling approach
  N1.Views.StructuresSelectView = Backbone.View.extend({
    el: '#n1-app',

    initialize: function () {
      this.listenTo(this.collection, 'sync', this.render)
      this.$('#matrix-size-one').val(' ')
      this.$('#matrix-size-one-auto').val(' ')
      this.$('#matrix-size-many').val(' ')
      this.$('#matrix-size-many-auto').val(' ')
      this.$('#matrix-size-cluster').val(' ')
      this.$('#matrix-size-cluster-auto').val(' ')
    },

    render: function () {
      this.collection.each(function (model) {
      }, this)

      return this
    },

    events: {
      'click .create-one': 'oneCreate',
      'click .create-one-auto': 'oneCreateAuto',
      'click .create-many': 'manyCreate',
      'click .create-many-auto': 'manyCreateAuto',
      'click .create-cluster': 'clusterCreate',
      'click .create-cluster-auto': 'clusterCreateAuto'
    },

    oneCreate: function () {
      var viewOne = new N1.Views.StructuresStrictOrderOneView()
      viewOne.render().$el
      n1.size = this.$('#matrix-size-one').val()
      if (isNaN(n1.size)) {
        n1.size = 9
      }
      if (n1.size < 4) {
        n1.size = 4
      } else if (n1.size > 36) {
        n1.size = 36
      }
      if (n1.size) {
        this.collection.create({
          size: n1.size
        })
        $('#display').css('heigth', (Number((n1.size * 20) + Number(40))))
        $('#display').css('width', (Number((n1.size * 20) + Number(40))))
        $('#canvas-main').prop('width', Number(n1.size * 20))
        $('#canvas-main').prop('height', Number(n1.size * 20))
        $('#canvas-left-side').prop('width', Number(20))
        $('#canvas-left-side').prop('height', Number(n1.size * 20))
        $('#canvas-bottom').prop('width', Number(n1.size * 20))
        $('#canvas-bottom').prop('height', Number(20))
        $('#canvas-vector').prop('width', Number(n1.vectorGridLength * 20))
        $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
        $('#canvas-vector').hide()
        var canvas = $('#canvas-main').get(0)
        var context = canvas.getContext('2d')
        var canvas1 = $('#canvas-bottom').get(0)
        var context1 = canvas1.getContext('2d')
        var canvas2 = $('#canvas-left-side').get(0)
        var context2 = canvas2.getContext('2d')
        var canvas3 = $('#canvas-vector').get(0)
        var context3 = canvas3.getContext('2d')
        var cellSize = 20
        N1.MathLib.GridTools.reDraw(canvas, context, canvas1, context1,
          canvas2, context2, canvas3, context3, cellSize)
        $('#structure-create').hide()
      }
    },

    oneCreateAuto: function () {
      var viewOneAuto = new N1.Views.StructuresStrictOrderOneAutoView()
      // var viewOne = N1.Views.StructuresStrictOrderOneAutoView()
      viewOneAuto.render().$el
      n1.size = this.$('#matrix-size-one-auto').val()
      if (isNaN(n1.size)) {
        n1.size = 9
      }
      if (n1.size < 4) {
        n1.size = 4
      } else if (n1.size > 36) {
        n1.size = 36
      }
      if (n1.size) {
        this.collection.create({
          size: n1.size
        })
        $('#display').css('heigth', (Number((n1.size * 20) + Number(40))))
        $('#display').css('width', (Number((n1.size * 20) + Number(40))))
        $('#canvas-main').prop('width', Number(n1.size * 20))
        $('#canvas-main').prop('height', Number(n1.size * 20))
        $('#canvas-left-side').prop('width', Number(20))
        $('#canvas-left-side').prop('height', Number(n1.size * 20))
        $('#canvas-bottom').prop('width', Number(n1.size * 20))
        $('#canvas-bottom').prop('height', Number(20))
        $('#canvas-vector').prop('width', Number(n1.vectorGridLength * 20))
        $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
        $('#canvas-vector').hide()
        var canvas = $('#canvas-main').get(0)
        var context = canvas.getContext('2d')
        var canvas1 = $('#canvas-bottom').get(0)
        var context1 = canvas1.getContext('2d')
        var canvas2 = $('#canvas-left-side').get(0)
        var context2 = canvas2.getContext('2d')
        var canvas3 = $('#canvas-vector').get(0)
        var context3 = canvas3.getContext('2d')
        var cellSize = 20
        N1.MathLib.GridTools.reDraw(canvas, context, canvas1, context1,
          canvas2, context2, canvas3, context3, cellSize)
        $('#structure-create').hide()
      }
    },

    manyCreate: function () {
      var viewMany = new N1.Views.StructuresStrictOrderManyView()
      viewMany.render().$el
      var dataSize = this.$('#matrix-size-many').val()
      n1.size = N1.MathLib.GridTools.validateData(dataSize)
      if (n1.size) {
        this.collection.create({
          size: n1.size
        })
        $('#display').css('heigth', (Number((n1.size * 20) + Number(40))))
        $('#display').css('width', (Number((n1.size * 20) + Number(40))))
        $('#canvas-main').prop('width', Number(n1.size * 20))
        $('#canvas-main').prop('height', Number(n1.size * 20))
        $('#canvas-left-side').prop('width', Number(20))
        $('#canvas-left-side').prop('height', Number(n1.size * 20))
        $('#canvas-bottom').prop('width', Number(n1.size * 20))
        $('#canvas-bottom').prop('height', Number(20))
        $('#canvas-vector').prop('width', Number(n1.vectorGridLength * 20))
        $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
        var canvas = $('#canvas-main').get(0)
        var context = canvas.getContext('2d')
        var canvas1 = $('#canvas-bottom').get(0)
        var context1 = canvas1.getContext('2d')
        var canvas2 = $('#canvas-left-side').get(0)
        var context2 = canvas2.getContext('2d')
        var canvas3 = $('#canvas-vector').get(0)
        var context3 = canvas3.getContext('2d')
        $('#canvas-vector').hide()
        var cellSize = 20
        N1.MathLib.GridTools.reDraw(canvas, context, canvas1, context1,
          canvas2, context2, canvas3, context3, cellSize)
        $('#structure-create').hide()
      }
    },
    // many-create-auto
    manyCreateAuto: function () {
    var viewManyAuto = new N1.Views.StructuresStrictOrderManyAutoView()
    viewManyAuto.render().$el
    var dataSize = this.$('#matrix-size-many-auto').val()
    // console.log("dataSize is: " + dataSize)
    n1.size = N1.MathLib.GridTools.validateData(dataSize)
    if (n1.size) {
      this.collection.create({
        size: n1.size
      })
      $('#display').css('heigth', (Number((n1.size * 20) + Number(40))))
      $('#display').css('width', (Number((n1.size * 20) + Number(40))))
      $('#canvas-main').prop('width', Number(n1.size * 20))
      $('#canvas-main').prop('height', Number(n1.size * 20))
      $('#canvas-left-side').prop('width', Number(20))
      $('#canvas-left-side').prop('height', Number(n1.size * 20))
      $('#canvas-bottom').prop('width', Number(n1.size * 20))
      $('#canvas-bottom').prop('height', Number(20))
      $('#canvas-vector').prop('width', Number(n1.vectorGridLength * 20))
      $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
      var canvas = $('#canvas-main').get(0)
      var context = canvas.getContext('2d')
      var canvas1 = $('#canvas-bottom').get(0)
      var context1 = canvas1.getContext('2d')
      var canvas2 = $('#canvas-left-side').get(0)
      var context2 = canvas2.getContext('2d')
      var canvas3 = $('#canvas-vector').get(0)
      var context3 = canvas3.getContext('2d')
      $('#canvas-vector').hide()
      var cellSize = 20
      N1.MathLib.GridTools.reDraw(canvas, context, canvas1, context1,
        canvas2, context2, canvas3, context3, cellSize)
      $('#structure-create').hide()
    }
  },

    clusterCreate: function () {
      var viewCluster = new N1.Views.StructuresClusterCreationView()
      viewCluster.render().$el
      n1.size = Number.parseInt(this.$('#matrix-size-cluster').val())
      if (isNaN(n1.size)) {
        n1.size = 9
      }
      if(n1.size < 4) {
        n1.size = 4
      } else if(n1.size > 36) {
        n1.size = 36
      }
      if (n1.size) {
        this.collection.create({
          size: n1.size
        })
        $('#display').css('heigth', (Number((n1.size * 20) + Number(40))))
        $('#display').css('width', (Number((n1.size * 20) + Number(40))))
        $('#canvas-main').prop('width', Number(n1.size * 20))
        $('#canvas-main').prop('height', Number(n1.size * 20))
        $('#canvas-left-side').prop('width', Number(20))
        $('#canvas-left-side').prop('height', Number(n1.size * 20))
        $('#canvas-bottom').prop('width', Number(n1.size * 20))
        $('#canvas-bottom').prop('height', Number(20))
        $('#canvas-vector').prop('width', Number(n1.vectorGridLength * 20))
        $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
        var canvas = $('#canvas-main').get(0)
        var context = canvas.getContext('2d')
        var canvas1 = $('#canvas-bottom').get(0)
        var context1 = canvas1.getContext('2d')
        var canvas2 = $('#canvas-left-side').get(0)
        var context2 = canvas2.getContext('2d')
        var canvas3 = $('#canvas-vector').get(0)
        var context3 = canvas3.getContext('2d')
        $('#canvas-vector').hide()
        var cellSize = 20
        N1.MathLib.GridTools.reDraw(canvas, context, canvas1, context1,
          canvas2, context2, canvas3, context3, cellSize)
        $('#structure-create').hide()
      }
    },

    clusterCreateAuto: function () {
      var viewCluster = new N1.Views.StructuresClusterCreationAutoView()
      viewCluster.render().$el
      n1.size = Number.parseInt(this.$('#matrix-size-cluster-auto').val())
      if (isNaN(n1.size)) {
        n1.size = 9
      }
      if(n1.size < 4) {
        n1.size = 4
      } else if(n1.size > 36) {
        n1.size = 36
      }
      if (n1.size) {
        this.collection.create({
          size: n1.size
        })
        $('#display').css('heigth', (Number((n1.size * 20) + Number(40))))
        $('#display').css('width', (Number((n1.size * 20) + Number(40))))
        $('#canvas-main').prop('width', Number(n1.size * 20))
        $('#canvas-main').prop('height', Number(n1.size * 20))
        $('#canvas-left-side').prop('width', Number(20))
        $('#canvas-left-side').prop('height', Number(n1.size * 20))
        $('#canvas-bottom').prop('width', Number(n1.size * 20))
        $('#canvas-bottom').prop('height', Number(20))
        $('#canvas-vector').prop('width', Number(n1.vectorGridLength * 20))
        $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
        var canvas = $('#canvas-main').get(0)
        var context = canvas.getContext('2d')
        var canvas1 = $('#canvas-bottom').get(0)
        var context1 = canvas1.getContext('2d')
        var canvas2 = $('#canvas-left-side').get(0)
        var context2 = canvas2.getContext('2d')
        var canvas3 = $('#canvas-vector').get(0)
        var context3 = canvas3.getContext('2d')
        $('#canvas-vector').hide()
        var cellSize = 20
        N1.MathLib.GridTools.reDraw(canvas, context, canvas1, context1,
          canvas2, context2, canvas3, context3, cellSize)
        $('#structure-create').hide()
      }
    }
  })
}())
