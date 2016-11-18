/* global suite, N1, n1, test, $, assert */
suite('N1.MathLib.GridTools methods', function () {
  test('Initialize new session', function () {
    var size_test = 9
    N1.MathLib.GridTools.initHandler(size_test)
    assert.strictEqual(n1.gridText.elements.length, 9)
    assert.strictEqual(n1.gridColor.elements.length, 9)
    assert.strictEqual(n1.vectorSize, 1)
    assert.strictEqual(n1.vectorGridLength, 2)
    assert.deepEqual(n1.vNames.elements, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    size_test = null
    n1.gridText = null
    n1.gridColor = null
    n1.vNames = null
    n1.vectorSize = null
    n1.vectorGridLength = null
  })

  test('Initialize grid', function () {
    var size_test = 9
    var canvas_test = $('#canvas-main_test').get(0)
    var context_test = canvas_test.getContext('2d')
    var canvas1_test = $('#canvas-bottom_test').get(0)
    var context1_test = canvas1_test.getContext('2d')
    var canvas2_test = $('#canvas-left-side_test').get(0)
    var context2_test = canvas2_test.getContext('2d')
    var canvas3_test = $('#canvas-vector_test').get(0)
    var context3_test = canvas3_test.getContext('2d')
    $('#canvas-main_test').hide()
    $('#canvas-left-side_test').hide()
    $('#canvas-bottom_test').hide()
    $('#canvas-vector_test').hide()

    N1.MathLib.GridTools.initHandler(size_test)
    assert.strictEqual(n1.gridText.elements.length, 9)
    assert.strictEqual(n1.gridColor.elements.length, 9)
    assert.strictEqual(n1.vectorSize, 1)
    assert.strictEqual(n1.vectorGridLength, 2)
    assert.deepEqual(n1.vNames.elements, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    N1.MathLib.GridTools.initGrid(canvas_test, context_test, canvas1_test, context1_test, canvas2_test, context2_test, size_test)
    assert.strictEqual(n1.gridText.getElement(1, 1), 0)
    assert.strictEqual(n1.gridText.getElement(2, 2), 0)
    size_test = null
    n1.gridText = null
    n1.gridColor = null
    n1.vNames = null
    n1.vectorSize = null
    n1.vectorGridLength = null
  })

  test('Enter data', function () {
    var size_test = 9
    var canvas_test = $('#canvas-main_test').get(0)
    var context_test = canvas_test.getContext('2d')
    var canvas1_test = $('#canvas-bottom_test').get(0)
    var context1_test = canvas1_test.getContext('2d')
    var canvas2_test = $('#canvas-left-side_test').get(0)
    var context2_test = canvas2_test.getContext('2d')
    var canvas3_test = $('#canvas-vector_test').get(0)
    var context3_test = canvas3_test.getContext('2d')
    var cellSize_test = 20
    var rcOne_test = 3
    var rcTwo_test = 7
    n1.size = size_test
    $('#canvas-main_test').hide()
    $('#canvas-left-side_test').hide()
    $('#canvas-bottom_test').hide()
    $('#canvas-vector_test').hide()

    N1.MathLib.GridTools.initHandler(size_test)
    assert.strictEqual(n1.gridText.elements.length, 9)
    assert.strictEqual(n1.gridColor.elements.length, 9)
    assert.strictEqual(n1.vectorSize, 1)
    assert.strictEqual(n1.vectorGridLength, 2)
    assert.deepEqual(n1.vNames.elements, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    N1.MathLib.GridTools.initGrid(canvas_test, context_test, canvas1_test, context1_test, canvas2_test, context2_test, size_test)
    assert.strictEqual(n1.gridText.getElement(1, 1), 0)
    assert.strictEqual(n1.gridText.getElement(2, 2), 0)
    assert.strictEqual(n1.gridText.getElement(3, 3), 0)
    assert.strictEqual(n1.gridText.getElement(4, 4), 0)
    assert.strictEqual(n1.gridColor.getElement(1, 1), 2)
    assert.strictEqual(n1.gridColor.getElement(2, 2), 2)
    assert.strictEqual(n1.gridColor.getElement(3, 3), 2)
    assert.strictEqual(n1.gridColor.getElement(4, 4), 2)

    N1.MathLib.GridTools.enterData(rcOne_test, rcTwo_test, canvas_test, context_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(3, 7), 1)
    assert.strictEqual(n1.gridColor.getElement(3, 7), 3)
    assert.strictEqual(n1.gridColor.getElement(7, 3), 2)

    size_test = null
    n1.gridText = null
    n1.gridColor = null
    n1.vNames = null
    n1.vectorSize = null
    n1.vectorGridLength = null
  })

// new autoswap test here based on 'Swap Row -- Colum code'
/*
test('Autoswap Row -- Column', function () {
  var size_test = 9
  var canvas_test = $('#canvas-main_test').get(0)
  var context_test = canvas_test.getContext('2d')
  var canvas1_test = $('#canvas-bottom_test').get(0)
  var context1_test = canvas1_test.getContext('2d')
  var canvas2_test = $('#canvas-left-side_test').get(0)
  var context2_test = canvas2_test.getContext('2d')
  var canvas3_test = $('#canvas-vector_test').get(0)
  var context3_test = canvas3_test.getContext('2d')
  var cellSize_test = 20
  var rcOne_1_test = 2
  var rcTwo_1_test = 4
  var rcOne_2_test = 7
  var rcTwo_2_test = 5
  var entryArray = []
  n1.size = size_test
  $('#canvas-main_test').hide()
  $('#canvas-left-side_test').hide()
  $('#canvas-bottom_test').hide()
  $('#canvas-vector_test').hide()

  N1.MathLib.GridTools.initHandler(size_test)
  assert.strictEqual(n1.gridText.elements.length, 9)
  assert.strictEqual(n1.gridColor.elements.length, 9)
  assert.strictEqual(n1.vectorSize, 1)
  assert.strictEqual(n1.vectorGridLength, 2)
  assert.deepEqual(n1.vNames.elements, [1, 2, 3, 4, 5, 6, 7, 8, 9])
  N1.MathLib.GridTools.initGrid(canvas_test, context_test, canvas1_test, context1_test, canvas2_test, context2_test, size_test)
  assert.strictEqual(n1.gridText.getElement(1, 1), 0)
  assert.strictEqual(n1.gridText.getElement(2, 2), 0)
  assert.strictEqual(n1.gridText.getElement(3, 3), 0)
  assert.strictEqual(n1.gridText.getElement(4, 4), 0)
  assert.strictEqual(n1.gridColor.getElement(1, 1), 2)
  assert.strictEqual(n1.gridColor.getElement(2, 2), 2)
  assert.strictEqual(n1.gridColor.getElement(3, 3), 2)
  assert.strictEqual(n1.gridColor.getElement(4, 4), 2)

  N1.MathLib.GridTools.enterData(rcOne_1_test, rcTwo_1_test, canvas_test, context_test, cellSize_test)
  assert.strictEqual(n1.gridText.getElement(2, 4), 1)
  assert.strictEqual(n1.gridColor.getElement(2, 4), 3)
  assert.strictEqual(n1.gridColor.getElement(4, 2), 2)
  N1.MathLib.GridTools.enterData(rcOne_2_test, rcTwo_2_test, canvas_test, context_test, cellSize_test)
  assert.strictEqual(n1.gridText.getElement(7, 5), 1)
  assert.strictEqual(n1.gridColor.getElement(7, 5), 3)
  assert.strictEqual(n1.gridColor.getElement(5, 7), 2)
  entryArray = n1.gridText.scanUpperTriangular1()
  //console.log("entryArray_1 = " + entryArray[0])
  //console.log("entryArray_2 = " + entryArray[1])
  N1.MathLib.GridTools.swapRC(entryArray[0] + 1, entryArray[1] + 1, canvas_test, context_test,
  canvas1_test, context1_test, canvas2_test, context2_test, cellSize_test)
  assert.strictEqual(n1.gridText.getElement(5, 7), 1)
  assert.strictEqual(n1.gridColor.getElement(5, 7), 3)
  assert.strictEqual(n1.gridColor.getElement(7, 5), 2)

  size_test = null
  n1.gridText = null
  n1.gridColor = null
  n1.vNames = null
  n1.vectorSize = null
  n1.vectorGridLength = null
  rcOne_1_test = null
  rcTwo_1_test = null
  rcOne_2_test = null
  rcTwo_2_test = null
})
*/

  test('Swap Row -- Column', function () {
    var size_test = 9
    var canvas_test = $('#canvas-main_test').get(0)
    var context_test = canvas_test.getContext('2d')
    var canvas1_test = $('#canvas-bottom_test').get(0)
    var context1_test = canvas1_test.getContext('2d')
    var canvas2_test = $('#canvas-left-side_test').get(0)
    var context2_test = canvas2_test.getContext('2d')
    var canvas3_test = $('#canvas-vector_test').get(0)
    var context3_test = canvas3_test.getContext('2d')
    var cellSize_test = 20
    var rcOne_1_test = 2
    var rcTwo_1_test = 4
    var rcOne_2_test = 7
    var rcTwo_2_test = 5
    n1.size = size_test
    $('#canvas-main_test').hide()
    $('#canvas-left-side_test').hide()
    $('#canvas-bottom_test').hide()
    $('#canvas-vector_test').hide()

    N1.MathLib.GridTools.initHandler(size_test)
    assert.strictEqual(n1.gridText.elements.length, 9)
    assert.strictEqual(n1.gridColor.elements.length, 9)
    assert.strictEqual(n1.vectorSize, 1)
    assert.strictEqual(n1.vectorGridLength, 2)
    assert.deepEqual(n1.vNames.elements, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    N1.MathLib.GridTools.initGrid(canvas_test, context_test, canvas1_test, context1_test, canvas2_test, context2_test, size_test)
    assert.strictEqual(n1.gridText.getElement(1, 1), 0)
    assert.strictEqual(n1.gridText.getElement(2, 2), 0)
    assert.strictEqual(n1.gridText.getElement(3, 3), 0)
    assert.strictEqual(n1.gridText.getElement(4, 4), 0)
    assert.strictEqual(n1.gridColor.getElement(1, 1), 2)
    assert.strictEqual(n1.gridColor.getElement(2, 2), 2)
    assert.strictEqual(n1.gridColor.getElement(3, 3), 2)
    assert.strictEqual(n1.gridColor.getElement(4, 4), 2)

    N1.MathLib.GridTools.enterData(rcOne_1_test, rcTwo_1_test, canvas_test, context_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(2, 4), 1)
    assert.strictEqual(n1.gridColor.getElement(2, 4), 3)
    assert.strictEqual(n1.gridColor.getElement(4, 2), 2)
    N1.MathLib.GridTools.enterData(rcOne_2_test, rcTwo_2_test, canvas_test, context_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(7, 5), 1)
    assert.strictEqual(n1.gridColor.getElement(7, 5), 3)
    assert.strictEqual(n1.gridColor.getElement(5, 7), 2)
    N1.MathLib.GridTools.swapRC(rcOne_2_test, rcTwo_2_test, canvas_test, context_test,
    canvas1_test, context1_test, canvas2_test, context2_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(5, 7), 1)
    assert.strictEqual(n1.gridColor.getElement(5, 7), 3)
    assert.strictEqual(n1.gridColor.getElement(7, 5), 2)

    size_test = null
    n1.gridText = null
    n1.gridColor = null
    n1.vNames = null
    n1.vectorSize = null
    n1.vectorGridLength = null
    rcOne_1_test = null
    rcTwo_1_test = null
    rcOne_2_test = null
    rcTwo_2_test = null
  })

  test('Inference Process', function () {
    var size_test = 9
    var canvas_test = $('#canvas-main_test').get(0)
    var context_test = canvas_test.getContext('2d')
    var canvas1_test = $('#canvas-bottom_test').get(0)
    var context1_test = canvas1_test.getContext('2d')
    var canvas2_test = $('#canvas-left-side_test').get(0)
    var context2_test = canvas2_test.getContext('2d')
    var canvas3_test = $('#canvas-vector_test').get(0)
    var context3_test = canvas3_test.getContext('2d')
    var cellSize_test = 20
    var rcOne_1_test = 2
    var rcTwo_1_test = 4
    var rcOne_2_test = 7
    var rcTwo_2_test = 5
    n1.size = size_test
    $('#canvas-main_test').hide()
    $('#canvas-left-side_test').hide()
    $('#canvas-bottom_test').hide()
    $('#canvas-vector_test').hide()

    N1.MathLib.GridTools.initHandler(size_test)
    assert.strictEqual(n1.gridText.elements.length, 9)
    assert.strictEqual(n1.gridColor.elements.length, 9)
    assert.strictEqual(n1.vectorSize, 1)
    assert.strictEqual(n1.vectorGridLength, 2)
    assert.deepEqual(n1.vNames.elements, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    N1.MathLib.GridTools.initGrid(canvas_test, context_test, canvas1_test, context1_test, canvas2_test, context2_test, size_test)
    assert.strictEqual(n1.gridText.getElement(1, 1), 0)
    assert.strictEqual(n1.gridText.getElement(2, 2), 0)
    assert.strictEqual(n1.gridText.getElement(3, 3), 0)
    assert.strictEqual(n1.gridText.getElement(4, 4), 0)
    assert.strictEqual(n1.gridColor.getElement(1, 1), 2)
    assert.strictEqual(n1.gridColor.getElement(2, 2), 2)
    assert.strictEqual(n1.gridColor.getElement(3, 3), 2)
    assert.strictEqual(n1.gridColor.getElement(4, 4), 2)

    N1.MathLib.GridTools.enterData(rcOne_1_test, rcTwo_1_test, canvas_test, context_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(2, 4), 1)
    assert.strictEqual(n1.gridColor.getElement(2, 4), 3)
    assert.strictEqual(n1.gridColor.getElement(4, 2), 2)
    N1.MathLib.GridTools.enterData(rcOne_2_test, rcTwo_2_test, canvas_test, context_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(7, 5), 1)
    assert.strictEqual(n1.gridColor.getElement(7, 5), 3)
    assert.strictEqual(n1.gridColor.getElement(5, 7), 2)
    N1.MathLib.GridTools.swapRC(rcOne_2_test, rcTwo_2_test, canvas_test, context_test,
    canvas1_test, context1_test, canvas2_test, context2_test, cellSize_test)
    assert.strictEqual(n1.gridText.getElement(5, 7), 1)
    assert.strictEqual(n1.gridColor.getElement(5, 7), 3)
    assert.strictEqual(n1.gridColor.getElement(7, 5), 2)
    // before inference process
    assert.strictEqual(n1.gridColor.getElement(2, 5), 1)
    N1.MathLib.GridTools.inferenceProcess(canvas_test, context_test, canvas1_test, context1_test, canvas2_test, context2_test, cellSize_test)
    // issue with testing this function -- need to rewrite
    assert.strictEqual(n1.gridColor.getElement(2, 5), 1)

    size_test = null
    n1.gridText = null
    n1.gridColor = null
    n1.vNames = null
    n1.vectorSize = null
    n1.vectorGridLength = null
    rcOne_1_test = null
    rcTwo_1_test = null
    rcOne_2_test = null
    rcTwo_2_test = null
  })
})
