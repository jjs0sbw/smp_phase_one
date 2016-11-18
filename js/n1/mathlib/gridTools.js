/* global $, N1, n1, alert */
(function () {
  'use strict'
  // initialize the window with a blank canvas
  // and data input area..
  N1.MathLib.GridTools.initHandler = function initHandler (size) {
    n1.vectorGrid = N1.MathLib.BinaryMatrix.Zero(1)
    n1.vectorSize = n1.vectorGrid.elements.length // numbr of rows
    n1.vectorGridElements = []
    n1.vectorGridLength = 2 // length of row
    n1.vectorGridClusterElements = []
    n1.gridText = N1.MathLib.BinaryMatrix.Zero(size)
    n1.gridColor = N1.MathLib.BinaryMatrix.Zero(size)
    size = Number(size) + Number(1) // see line below ..
    n1.vEntries = Array.apply(null, {length: size}).map(Number.call, Number)
    n1.vEntries.shift()
    n1.vNames = N1.MathLib.BinaryVector.NewOne(n1.vEntries)
  }

  // ###########################################################################
  // ###########################################################################
  //       Functions to initialize the grid
  // ###########################################################################
  // ###########################################################################

  function drawYellowCell (x, y, canvas, context, cellSize) {
    var x1 = x
    var y1 = y
    context.fillStyle = 'yellow'
    context.fillRect(x1 * cellSize, y1 * cellSize, cellSize - 1, cellSize - 1)
  }

  function enterYellowColor (x, y) {
    n1.gridColor.setElement(x + 1, y + 1, 1)
  }

  function drawXGridCell (x, canvas1, context1, cellSize, vNames) {
    var text
    context1.fillStyle = 'wheat'
    context1.fillRect((x - 1) * cellSize, 0, cellSize - 1, cellSize - 1)
    context1.fillStyle = 'black'
    context1.font = '0.8em tahoma'
    text = n1.vNames.element(x)
    if (x < 10) {
      context1.fillText(text, ((x - 1) * cellSize) + 2, 15)
    }
    if (x >= 10) {
      context1.fillText(text, ((x - 1) * cellSize) + 2, 15)
    }
  }

  function drawYGridCell (y, canvas2, context2, cellSize, vNames) {
    var text
    context2.fillStyle = 'wheat'
    context2.fillRect(0, (y - 1) * cellSize, cellSize - 1, cellSize - 1)
    context2.fillStyle = 'black'
    context2.font = '0.8em tahoma'
    text = n1.vNames.element(y)
    context2.fillText(text, 2, (y * cellSize) - 5)
  }

  function drawRedCell (x, y, canvas, context, cellSize) {
    context.fillStyle = 'red'
    context.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1)
  }

  function enterRedColor (x, y) {
    n1.gridColor.setElement(x + 1, y + 1, 2)
  }

  function drawGreenCell (x, y, canvas, context, cellSize) {
    context.fillStyle = 'green'
    context.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1)
  }

  function enterGreenColor (x, y) {
    n1.gridColor.setElement(x + 1, y + 1, 3)
  }

  function drawLightBlueCell (x, y, canvas, context, cellSize) {
    context.fillStyle = 'lightblue'
    context.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1)
  }

  function enterLightBlueColor (x, y) {
    n1.gridColor.setElement(x + 1, y + 1, 5)
  }

  function drawText (x, y, canvas, context, cellSize, gridText) {
    var text
    context.fillStyle = 'black'
    context.font = '0.8em tahoma'
    context.textAlign = 'center'
    text = n1.gridText.getElement(x + 1, y + 1)
    context.fillText(text, (((x + 1) * cellSize) - (cellSize / 2)), (((y + 1) *
    cellSize) - (cellSize / 4)))
  }

  function drawVectorGridCell (row, element, canvas3, context3, cellSize) {
    var text = null
    if (element === 1) {
      context3.fillStyle = 'wheat'
    } else {
      context3.fillStyle = 'white'
    }
    context3.fillRect((element - 1) * cellSize, (row - 1) * (cellSize), (cellSize - 1), (cellSize - 1)) // need to add the y axis here
    context3.fillStyle = 'black'
    context3.font = '0.8em tahoma'
    var textRow = n1.vectorGrid.getRow(row)
    var textRowVector = new N1.MathLib.BinaryVector.NewOne(textRow)
    text = textRowVector.element(element)
    if (!textRowVector.element(element)) {
      text = '*'
    }
    if (element < 10) {
      context3.fillText(text, ((element - 1) * cellSize) + 2, ((row - 1) * cellSize) + 15)
    }
    if (element >= 10) {
      context3.fillText(text, ((element - 1) * cellSize) + 2, ((row - 1) * cellSize) + 15)
    }
  }

  function drawClusterVectorGridCell (row, element, canvas3, context3, cellSize) {
    var text = null
    if (element === 1) {
      context3.fillStyle = 'green'
    } else {
      context3.fillStyle = 'green'
    }
    context3.fillRect((element - 1) * cellSize, (row - 1) * (cellSize), (cellSize - 1), (cellSize - 1)) // need to add the y axis here
    context3.fillStyle = 'black'
    context3.font = '0.8em tahoma'
    var textRow = n1.vectorGrid.getRow(row)
    var textRowVector = new N1.MathLib.BinaryVector.NewOne(textRow)
    text = textRowVector.element(element)
    if (!textRowVector.element(element)) {
      text = '*'
    }
    if (element < 10) {
      context3.fillText(text, ((element - 1) * cellSize) + 2, ((row - 1) * cellSize) + 15)
    }
    if (element >= 10) {
      context3.fillText(text, ((element - 1) * cellSize) + 2, ((row - 1) * cellSize) + 15)
    }
  }

  N1.MathLib.GridTools.initGrid =	function initGrid (canvas, context, canvas1,
     context1, canvas2, context2, size) {
    var x
    var y
    var cellSize = 20 // should be in global function
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context1.fillStyle = 'black'
    context1.fillRect(0, 0, canvas1.width, canvas1.height)
    context2.fillStyle = 'black'
    context2.fillRect(0, 0, canvas2.width, canvas2.height)
    for (x = 0; x < size; x++) {
      drawXGridCell(x + 1, canvas1, context1, cellSize, n1.vNames)
      for (y = 0; y < size; y++) {
        if (x !== y) {
          drawYellowCell(x, y, canvas, context, cellSize)
          enterYellowColor(x, y)
          drawYGridCell(y + 1, canvas2, context2, cellSize, n1.vNames)
        }
        if (x === y) {
          drawRedCell(x, y, canvas, context, cellSize)
          enterRedColor(x, y)
        }
        drawText(x, y, canvas, context, cellSize, n1.gridText)
      }
    }
  }

  N1.MathLib.GridTools.initClusterGrid =	function initGrid (canvas, context, canvas1,
     context1, canvas2, context2, size) {
    var x
    var y
    var cellSize = 20 // should be in global function
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context1.fillStyle = 'black'
    context1.fillRect(0, 0, canvas1.width, canvas1.height)
    context2.fillStyle = 'black'
    context2.fillRect(0, 0, canvas2.width, canvas2.height)
    for (x = 0; x < size; x++) {
      drawXGridCell(x + 1, canvas1, context1, cellSize, n1.vNames)
      for (y = 0; y < size; y++) {
        if (x !== y) {
          drawYellowCell(x, y, canvas, context, cellSize)
          enterYellowColor(x, y)
          drawYGridCell(y + 1, canvas2, context2, cellSize, n1.vNames)
        }
        if (x === y) {
          drawGreenCell(x, y, canvas, context, cellSize)
          enterGreenColor(x, y)
          n1.gridText.setElement(x + 1, y + 1, 1)
        }
        drawText(x, y, canvas, context, cellSize, n1.gridText)
      }
    }
  }

  // ##########################################################################
  // ##########################################################################
  //    Functions to enter data into the grid
  // ##########################################################################
  // ##########################################################################

  N1.MathLib.GridTools.enterData = function enterData (rcOne, rcTwo, canvas,
     context, cellSize) {
    var rcOneIndex
    var rcTwoIndex
    // get index numbers for the entered values
    rcOneIndex = n1.vNames.indexOf(rcOne)
    rcTwoIndex = n1.vNames.indexOf(rcTwo)
    if (!((rcOneIndex >= 1) && (rcOneIndex <= n1.size) && (rcTwoIndex >= 1) &&
     (rcTwoIndex <= n1.size))) {
      alert('Please enter a value from 1 to ' + n1.size + ' in each box')
    } else if (rcOneIndex === rcTwoIndex) {
      alert('Please enter two different values.. values can not be the same.')
    } else {
    // need to select the correct index of the input values
      n1.gridText.setElement(rcOneIndex, rcTwoIndex, 1)
      n1.gridText.setElement(rcTwoIndex, rcOneIndex, 0)
      enterRedColor(rcTwoIndex - 1, rcOneIndex - 1)
      enterGreenColor(rcOneIndex - 1, rcTwoIndex - 1)
    }
  }

  // ##########################################################################
  // ##########################################################################
  //    Function to check upper triangular area data for
  //    Proper form.  Modifies matrix
  // ##########################################################################
  // ##########################################################################

  N1.MathLib.GridTools.autoEnterData = function autoEnterData (rcOne, rcTwo, canvas,
     context, canvas1, context1, canvas2, context2, cellSize) {
    var scanResults
    var cOne
    var rTwo
    var nameOne
    var nameTwo
    var rcOneIndex
    var rcTwoIndex
    // get index numbers for the entered values
    rcOneIndex = n1.vNames.indexOf(rcOne)
    rcTwoIndex = n1.vNames.indexOf(rcTwo)
    if (!((rcOneIndex >= 1) && (rcOneIndex <= n1.size) && (rcTwoIndex >= 1) &&
     (rcTwoIndex <= n1.size))) {
      alert('Please enter a value from 1 to ' + n1.size + ' in each box')
    } else if (rcOneIndex === rcTwoIndex) {
      alert('Please enter two different values.. values can not be the same.')
    } else {
    // need to select the correct index of the input values
      n1.gridText.setElement(rcOneIndex, rcTwoIndex, 1)
      n1.gridText.setElement(rcTwoIndex, rcOneIndex, 0)
      enterRedColor(rcTwoIndex - 1, rcOneIndex - 1)
      enterGreenColor(rcOneIndex - 1, rcTwoIndex - 1)
    }
    // Scan the upper triangular area for 1's
    scanResults = n1.gridText.scanUpperTriangular1()
    // console.log("a - scanResults = " + scanResults)

    if (scanResults.length > 0) {
      cOne = scanResults[0] + 1
      rTwo = scanResults[1] + 1
      // console.log("a - cOne is: " + cOne)
      // console.log("a - rTwo is: " + rTwo)
      nameOne = n1.vNames.element(cOne)
      nameTwo = n1.vNames.element(rTwo)
      // console.log("a - nameOne is: " + nameOne + " index " + cOne)
      // console.log("a - nameTwo is: " + nameTwo + " index " + rTwo)
      // console.log("a - vNames is: " + n1.vNames.view())
      this.autoSwapRC(cOne, rTwo, canvas, context, canvas1, context1,
      canvas2, context2, cellSize)
      // console.log("a1 - vNames is: " + n1.vNames.view())
      nameOne = n1.vNames.element(cOne)
      nameTwo = n1.vNames.element(rTwo)
      // console.log("a1 - nameOne is: " + nameOne + " index " + cOne)
      // console.log("a1 - nameTwo is: " + nameTwo + " index " + rTwo)
      scanResults = []
      scanResults = n1.gridText.scanUpperTriangular1()
      // console.log("b - scanResults = " + scanResults)
      if (scanResults.length > 0) {
        cOne = scanResults[0] + 1
        rTwo = scanResults[1] + 1
        // console.log("b - cOne is: " + cOne)
        // console.log("b - rTwo is: " + rTwo)
        // console.log("b - vNames is: " + n1.vNames.view())
        this.autoSwapRC(cOne, rTwo, canvas, context, canvas1, context1,
        canvas2, context2, cellSize)
        // console.log("b1 - vNames is: " + n1.vNames.view())
        scanResults = []
        scanResults = n1.gridText.scanUpperTriangular1()
        // console.log("c - scanResults = " + scanResults)
        if (scanResults.length > 0) {
          cOne = scanResults[0] + 1
          rTwo = scanResults[1] + 1
          // console.log("c - cOne is: " + cOne)
          // console.log("c - rTwo is: " + rTwo)
          // console.log("c - vNames is: " + n1.vNames.view())
          this.autoSwapRC(cOne, rTwo, canvas, context, canvas1, context1,
          canvas2, context2, cellSize)
          // console.log("c1 - vNames is: " + n1.vNames.view())
          scanResults = []
          scanResults = n1.gridText.scanUpperTriangular1()
          // console.log("d - scanResults = " + scanResults)
        }
      }
    }
  }
  // #########################################################################
  // #########################################################################
  //   Now build a function to infer new information
  //   from the existing properly formed matrix
  //   (all green points in the lower triangular section.)
  // #########################################################################
  // #########################################################################
  N1.MathLib.GridTools.inferenceProcess = function inferenceProcess (canvas,
     context, canvas1, context1, canvas2, context2, cellSize) {
    var tempGridColor
    var tempGridText
    var tempId
    var rMatrix
    var ix
    var iy
    tempGridColor = n1.gridColor.duplicateMatrix()
    tempGridText = n1.gridText.duplicateMatrix()
    tempId = N1.MathLib.BinaryMatrix.Id(n1.size)
    rMatrix = tempGridText.add(tempId)
    N1.MathLib.GridTools.reachabilityMatrix(rMatrix)
    // ############## draw code here ########
    // need to redraw the main canvas using text values
    for (ix = 0; ix < n1.size; ix++) {
      drawXGridCell(ix + 1, canvas1, context1, cellSize, n1.vNames)
      for (iy = 0; iy < n1.size; iy++) {
        var color
        drawYGridCell(iy + 1, canvas2, context2, cellSize, n1.vNames)
        color = n1.gridColor.getElement(ix + 1, iy + 1)
        switch (color) {
          case 1:
            drawYellowCell(ix, iy, canvas, context, cellSize)
            break
          case 2:
            drawRedCell(ix, iy, canvas, context, cellSize)
            break
          case 3:
            drawGreenCell(ix, iy, canvas, context, cellSize)
            break
          case 5:
            drawLightBlueCell(ix, iy, canvas, context, cellSize)
            break
        }

        drawText(ix, iy, canvas, context, cellSize, N1.MathLib.gridText)
      }
    }
    // ############# draw code end ###########
  }

  N1.MathLib.GridTools.reachabilityMatrix =
  function reachabilityMatrix(matrixIn) {
    var rmOne
    var rmTwo
    var rmOut1
    var rmOut2
    var rmDiff1
    var rmDiff2
    var colorInferred
    var textInferred
    var tempGridColor
    var tempGridText
    var done = Boolean(0)
    var loopFlag = 25
    var matrixSum
    // start utility function here
    rmOne = matrixIn.duplicateMatrix()
    rmTwo = matrixIn.duplicateMatrix()
    rmOut1 = rmOne.boolMultiply(rmTwo)
    rmOut2 = rmOut1.boolMultiply(rmTwo)
    tempGridColor = n1.gridColor.duplicateMatrix()
    tempGridText = n1.gridText.duplicateMatrix()
    // start a loop to calculate the reachability matrix
    while ((!done) && (loopFlag > 0)) {
      rmDiff1 = rmOut2.subtract(rmOut1)
      // check to see if sum of rmDiff_1 is equal to zero
      // if not boolMultiply rmOut_2 by rmTwo
      // continue the boolMultiply until sum of rmDiff_1 is zero
      matrixSum = rmOut2.subtract(rmOut1)
      if (matrixSum === 0) {
        // done = new Boolean(1)
        done = Boolean(1)
        loopFlag = 0
      } else {
        rmOut1 = rmOut2
        rmOut2 = rmOut2.boolMultiply(rmTwo)
      }
      loopFlag = loopFlag - 1
    }
    rmDiff2 = rmOut2.subtract(rmOne)
    colorInferred = rmDiff2.mapProcess(function (rx) {
      if (rx >= 1) {
        return 4
      } else {
        return 0
      }
    })

    textInferred = rmDiff2.mapProcess(function (rx) {
      if (rx >= 1) {
        return 1
      } else {
        return 0
      }
    })
    tempGridColor = tempGridColor.add(colorInferred)
    tempGridText = tempGridText.add(textInferred)
    n1.gridColor = tempGridColor
    n1.gridText = tempGridText
  }

  // ##########################################################################
  // ##########################################################################
  //   Now build a function to swap the selected row and column pairs
  //   That are entered for the first time in the grid.. (modify swapRC()
  //   based on the approach in moveRC()
  // ##########################################################################
  // ##########################################################################

  N1.MathLib.GridTools.swapRC = function swapRC (rcOne, rcTwo, canvas, context,
     canvas1, context1, canvas2, context2, cellSize) {
    var tempRCOneIndex
    var tempRCTwoIndex
    var tempGridColorSwap
    var tempGridTextSwap
    var tempRowOneColorSwap
    var tempRowTwoColorSwap
    var tempRowOneTextSwap
    var tempRowTwoTextSwap
    var tempColOneColorSwap
    var tempColTwoColorSwap
    var tempColOneTextSwap
    var tempColTwoTextSwap

    tempRCOneIndex = n1.vNames.indexOf(rcOne)
    tempRCTwoIndex = n1.vNames.indexOf(rcTwo)

    tempGridColorSwap = n1.gridColor.duplicateMatrix()
    tempGridTextSwap = n1.gridText.duplicateMatrix()

    n1.vNames.setElement(tempRCTwoIndex, rcOne)
    n1.vNames.setElement(tempRCOneIndex, rcTwo)

    tempRowOneColorSwap = n1.gridColor.getRow(tempRCOneIndex)
    tempRowTwoColorSwap = n1.gridColor.getRow(tempRCTwoIndex)
    tempRowOneTextSwap = n1.gridText.getRow(tempRCOneIndex)
    tempRowTwoTextSwap = n1.gridText.getRow(tempRCTwoIndex)

    tempGridColorSwap.setRow(tempRCTwoIndex, tempRowOneColorSwap)
    tempGridColorSwap.setRow(tempRCOneIndex, tempRowTwoColorSwap)
    tempGridTextSwap.setRow(tempRCTwoIndex, tempRowOneTextSwap)
    tempGridTextSwap.setRow(tempRCOneIndex, tempRowTwoTextSwap)

    tempColOneColorSwap = tempGridColorSwap.getColumn(tempRCOneIndex)
    tempColTwoColorSwap = tempGridColorSwap.getColumn(tempRCTwoIndex)
    tempColOneTextSwap = tempGridTextSwap.getColumn(tempRCOneIndex)
    tempColTwoTextSwap = tempGridTextSwap.getColumn(tempRCTwoIndex)

    tempGridColorSwap.setColumn(tempRCTwoIndex, tempColOneColorSwap)
    tempGridColorSwap.setColumn(tempRCOneIndex, tempColTwoColorSwap)
    tempGridTextSwap.setColumn(tempRCTwoIndex, tempColOneTextSwap)
    tempGridTextSwap.setColumn(tempRCOneIndex, tempColTwoTextSwap)

    n1.gridColor = tempGridColorSwap
    n1.gridText = tempGridTextSwap
  }

  // ##########################################################################
  // ##########################################################################
  //   Now build a function to auto swap the row and column pairs selected by
  //   the upperTriangular1 function. Based on the swapRC method
  // ##########################################################################
  // ##########################################################################

  N1.MathLib.GridTools.autoSwapRC = function autoSwapRC (cOne, rTwo, canvas, context,
     canvas1, context1, canvas2, context2, cellSize) {
    var tempCOneElement
    var tempRTwoElement
    var tempRCOneIndex
    var tempRCTwoIndex
    var tempGridColorSwap
    var tempGridTextSwap
    var tempRowOneColorSwap
    var tempRowTwoColorSwap
    var tempRowOneTextSwap
    var tempRowTwoTextSwap
    var tempColOneColorSwap
    var tempColTwoColorSwap
    var tempColOneTextSwap
    var tempColTwoTextSwap


    tempRCOneIndex = cOne
    tempRCTwoIndex = rTwo
    // console.log("Call autoSwapRC a")
    // console.log("autoSwapRC a  cOne is: " + cOne)
    // console.log("autoSwapRC a  rTwo is: " + rTwo)

    tempRCOneIndex = cOne
    tempRCTwoIndex = rTwo

    tempCOneElement = n1.vNames.element(cOne)
    tempRTwoElement = n1.vNames.element(rTwo)

    // tempRCOneIndex = n1.vNames.element(cOne)
    // tempRCTwoIndex = n1.vNames.element(rTwo)

    // tempRCOneIndex = n1.vNames.indexOf(rTwo)
    // tempRCTwoIndex = n1.vNames.indexOf(cOne)

    // console.log("asa - tempRCOneIndex is: " + tempRCOneIndex + " index " + cOne)
    // console.log("asa - tempRCTwoIndex is: " + tempRCTwoIndex + " index " + rTwo)
    // console.log("asa - vNames is: " + n1.vNames.view())

    tempGridColorSwap = n1.gridColor.duplicateMatrix()
    tempGridTextSwap = n1.gridText.duplicateMatrix()

    // n1.vNames.setElement(tempRCTwoIndex, rOne) // rcOne
    // n1.vNames.setElement(tempRCOneIndex, cTwo) // rcTwo

    // n1.vNames.setElement(tempRCTwoIndex, cOne) // rcOne
    // n1.vNames.setElement(tempRCOneIndex, rTwo) // rcTwo

    n1.vNames.setElement(tempRCTwoIndex, tempCOneElement) // rcOne
    n1.vNames.setElement(tempRCOneIndex, tempRTwoElement) // rcTwo


    tempRowOneColorSwap = n1.gridColor.getRow(tempRCOneIndex)
    tempRowTwoColorSwap = n1.gridColor.getRow(tempRCTwoIndex)
    tempRowOneTextSwap = n1.gridText.getRow(tempRCOneIndex)
    tempRowTwoTextSwap = n1.gridText.getRow(tempRCTwoIndex)

    tempGridColorSwap.setRow(tempRCTwoIndex, tempRowOneColorSwap)
    tempGridColorSwap.setRow(tempRCOneIndex, tempRowTwoColorSwap)
    tempGridTextSwap.setRow(tempRCTwoIndex, tempRowOneTextSwap)
    tempGridTextSwap.setRow(tempRCOneIndex, tempRowTwoTextSwap)

    tempColOneColorSwap = tempGridColorSwap.getColumn(tempRCOneIndex)
    tempColTwoColorSwap = tempGridColorSwap.getColumn(tempRCTwoIndex)
    tempColOneTextSwap = tempGridTextSwap.getColumn(tempRCOneIndex)
    tempColTwoTextSwap = tempGridTextSwap.getColumn(tempRCTwoIndex)

    tempGridColorSwap.setColumn(tempRCTwoIndex, tempColOneColorSwap)
    tempGridColorSwap.setColumn(tempRCOneIndex, tempColTwoColorSwap)
    tempGridTextSwap.setColumn(tempRCTwoIndex, tempColOneTextSwap)
    tempGridTextSwap.setColumn(tempRCOneIndex, tempColTwoTextSwap)

    n1.gridColor = tempGridColorSwap
    n1.gridText = tempGridTextSwap

    // console.log("asb - tempRCOneIndex is: " + tempRCOneIndex + " index " + cOne)
    // console.log("asb - tempRCTwoIndex is: " + tempRCTwoIndex + " index " + rTwo)
    // console.log("asb - vNames is: " + n1.vNames.view())
  }


  // #########################################################################
  // #########################################################################
  //   Now build a function redraw the screen after a new state is set
  // #########################################################################
  // #########################################################################

  N1.MathLib.GridTools.reDraw = function reDraw (canvas, context, canvas1,
    context1, canvas2, context2, canvas3, context3, cellSize, size) {
    var sx
    var sy
    // ############## draw code here ########
    // need to redraw the main canvas using text values
    for (sx = 0; sx < n1.size; sx++) {
      var color
      drawXGridCell(sx + 1, canvas1, context1, cellSize, n1.vNames)
      for (sy = 0; sy < n1.size; sy++) {
        drawYGridCell(sy + 1, canvas2, context2, cellSize, n1.vNames)
        color = n1.gridColor.getElement(sx + 1, sy + 1)
        switch (color) {
          case 1:
            drawYellowCell(sx, sy, canvas, context, cellSize)
            break
          case 2:
            drawRedCell(sx, sy, canvas, context, cellSize)
            break
          case 3:
            drawGreenCell(sx, sy, canvas, context, cellSize)
            break
          case 5:
            drawLightBlueCell(sx, sy, canvas, context, cellSize)
            break
        }
        drawText(sx, sy, canvas, context, cellSize, n1.gridText)
      }
    }
    var j
    var i

    $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
    for (j = 0; j < n1.vectorGrid.elements.length; j++) {
      for (i = 0; i < n1.vectorGridLength; i++) {
        drawVectorGridCell(j + 1, i + 1, canvas3, context3, cellSize)
      }
    }
  }

  // #########################################################################
  // #########################################################################
  //   Now build a function redraw the cluster screen after a new state is set
  // #########################################################################
  // #########################################################################

  N1.MathLib.GridTools.reDrawCluster = function reDraw (canvas, context, canvas1,
    context1, canvas2, context2, canvas3, context3, cellSize, size) {
    var sx
    var sy
    var xy
    var ab
    if (n1.vectorGridClusterElements.length > 1) {
      for (xy = 0; xy < n1.vectorGridClusterElements.length; xy++) {
        for (ab = 0; ab < n1.vectorGridClusterElements.length; ab++) {
          if (xy !== ab) {
            enterRedColor(
              n1.vNames.indexOf(n1.vectorGridClusterElements[xy]) - 1,
              n1.vNames.indexOf(n1.vectorGridClusterElements[ab]) - 1
            )
          }
        }
      }
    }

    // ############## update n1.gridColor content here ############
    // ############## using the n1.vectorGridElements ############
    // ############## draw code here ########
    // need to redraw the main canvas using text values
    for (sx = 0; sx < n1.size; sx++) {
      var color
      drawXGridCell(sx + 1, canvas1, context1, cellSize, n1.vNames)
      for (sy = 0; sy < n1.size; sy++) {
        drawYGridCell(sy + 1, canvas2, context2, cellSize, n1.vNames)
        color = n1.gridColor.getElement(sx + 1, sy + 1)
        switch (color) {
          case 1:
            drawYellowCell(sx, sy, canvas, context, cellSize)
            break
          case 2:
            drawRedCell(sx, sy, canvas, context, cellSize)
            break
          case 3:
            drawGreenCell(sx, sy, canvas, context, cellSize)
            break
          case 5:
            drawLightBlueCell(sx, sy, canvas, context, cellSize)
            break
        }
        drawText(sx, sy, canvas, context, cellSize, n1.gridText)
      }
    }
    var j
    var i

    $('#canvas-vector').prop('height', Number(n1.vectorGrid.elements.length * 20))
    for (j = 0; j < n1.vectorGrid.elements.length; j++) {
      for (i = 0; i < n1.vectorGridLength; i++) {
        drawClusterVectorGridCell(j + 1, i + 1, canvas3, context3, cellSize)
      }
    }
  }

// #########################################################################
// #########################################################################
//   Now build a function to remove the selected row and column pairs
//   and convert then into one vector (they are the same)
// #########################################################################
// #########################################################################

  N1.MathLib.GridTools.same = function same (rcOne, rcTwo, canvas, context,
     canvas1, context1, canvas2, context2, canvas3, context3, cellSize) {
    var tempRowOneColor
    var tempColumnOneColor
    var tempRowTwoColor
    var tempColumnTwoColor
    var tempRowOneText
    var tempColumnOneText
    var tempRowTwoText
    var tempColumnTwoText
    var rcOneIndex
    var rcTwoIndex

    rcOneIndex = (n1.vNames.indexOf(rcOne))
    rcTwoIndex = (n1.vNames.indexOf(rcTwo))
    n1.vNames.deleteElement(rcTwoIndex)
    tempRowOneColor =
    N1.MathLib.BinaryVector.NewOne(n1.gridColor.getRow(rcOneIndex))

    tempRowTwoColor =
    N1.MathLib.BinaryVector.NewOne(n1.gridColor.getRow(rcTwoIndex))

    tempRowOneColor =
    n1.gridColor.addColorRows(tempRowOneColor, tempRowTwoColor)

    tempColumnOneColor =
    N1.MathLib.BinaryVector.NewOne(n1.gridColor.getColumn(rcOneIndex))

    tempColumnTwoColor =
    N1.MathLib.BinaryVector.NewOne(n1.gridColor.getColumn(rcTwoIndex))

    tempColumnOneColor =
    n1.gridColor.addColorColumns(tempColumnOneColor, tempColumnTwoColor)

    n1.gridColor.setRow(rcOneIndex, tempRowOneColor)

    n1.gridColor.setColumn(rcOneIndex, tempColumnOneColor.elements)

    n1.gridColor =
    N1.MathLib.BinaryMatrix.NewOne(n1.gridColor.deleteRowAndColumn(rcTwoIndex))

    tempRowOneText =
    N1.MathLib.BinaryVector.NewOne(n1.gridText.getRow(rcOneIndex))

    tempRowTwoText =
    N1.MathLib.BinaryVector.NewOne(n1.gridText.getRow(rcTwoIndex))

    tempRowOneText =
    n1.gridText.addTextRows(tempRowOneText, tempRowTwoText)

    tempColumnOneText =
    N1.MathLib.BinaryVector.NewOne(n1.gridText.getColumn(rcOneIndex))

    tempColumnTwoText =
    N1.MathLib.BinaryVector.NewOne(n1.gridText.getColumn(rcTwoIndex))

    tempColumnOneText =
    n1.gridText.addTextColumns(tempColumnOneText, tempColumnTwoText)

    n1.gridText.setColumn(rcOneIndex, tempColumnOneText.elements)

    n1.gridText.setRow(rcOneIndex, tempRowOneText)

    n1.gridText =
    N1.MathLib.BinaryMatrix.NewOne(n1.gridText.deleteRowAndColumn(rcTwoIndex))

    // ############## draw code here ########
    // need to redraw the main canvas using text values
    context1.clearRect(0, 0, canvas1.width, canvas1.height)
    context2.clearRect(0, 0, canvas2.width, canvas2.height)
    context3.clearRect(0, 0, canvas3.width, canvas3.height)
    context.clearRect(0, 0, canvas.width, canvas.height)

    // need to redraw the vectorGrid canvas3 with existing and new values
    if (n1.vectorGrid.elements.length === 1) {
      var rowHereContent = N1.MathLib.BinaryVector.NewOne(n1.vectorGrid.elements[0])
      if (rowHereContent.getElements()[0] === 0) {
        n1.vectorGridElements = [rcOne, rcTwo]
        var nextRow = new N1.MathLib.BinaryVector.NewOne(n1.vectorGridElements)
        n1.vectorGrid.setRow(1, nextRow)
      } else if (rowHereContent.getElements()[0] === rcOne) {
        n1.vectorGridElements.push(rcTwo)
        nextRow = new N1.MathLib.BinaryVector.NewOne(n1.vectorGridElements)
        n1.vectorGrid.setRow(1, nextRow)
        if (n1.vectorGridElements.length > n1.vectorGridLength) {
          n1.vectorGridLength = n1.vectorGridElements.length
        }
      } else {
        var tempVectorElements = n1.vectorGridElements
        var firstRowTempElements = []
        var iii = null
        for (iii = 0; iii < tempVectorElements.length; iii++) {
          firstRowTempElements.push(tempVectorElements[iii])
        }
        n1.vectorGridElements = [firstRowTempElements, [rcOne, rcTwo]]

        n1.vectorGrid.setElements(n1.vectorGridElements)
        n1.vectorSize = n1.vectorGrid.elements.length
      }
    } else { // more than one row now
      var found = false
      var ii
      for (ii = 0; ii < n1.vectorSize; ii++) {
        if (n1.vectorGrid.getRow(ii + 1)[0] === rcOne) {
          found = true // update found flag
          var tempRowNowOne = (n1.vectorGrid.getRow(ii + 1))
          tempRowNowOne.push(rcTwo)
          if (tempRowNowOne.length > n1.vectorGridLength) {
            n1.vectorGridLength = tempRowNowOne.length
          }
          n1.vectorGrid.setRow((ii + 1), tempRowNowOne)
          n1.vectorGridElements = n1.vectorGrid.getElements()
        }
      }
      if (!found) {
        var tempVectorElementsNow = n1.vectorGrid.getElements()
        var jj
        var newElementsNow = []
        for (jj = 0; jj < n1.vectorGrid.elements.length; jj++) {
          var nextElementRow = []
          for (ii = 0; ii < tempVectorElementsNow[jj].length; ii++) {
            nextElementRow.push(tempVectorElementsNow[jj][ii])
          }
          newElementsNow.push(nextElementRow)
        }
        var addNewVectorRow = [rcOne, rcTwo]
        newElementsNow.push(addNewVectorRow)
        n1.vectorGrid.setElements(newElementsNow)
        n1.vectorSize = n1.vectorGrid.elements.length
      }
    }
    if (n1.vectorGrid.elements.length > 1) {
      n1.vectorGridClusterElements = []
      var row
      var elementsNow
      for (row = 0; row < n1.vectorGrid.elements.length; row++) {
        elementsNow = []
        elementsNow.push(n1.vectorGrid.getRow(row + 1)[0])
        n1.vectorGridClusterElements.push(elementsNow)
      }
    }
  }

  // #########################################################################
  // #########################################################################
  //   Now build a function to validate usr input of size and item data
  // #########################################################################
  // #########################################################################

    N1.MathLib.GridTools.validateData = function validateData (inData) {
      var validatedData = Number.parseInt(inData)
      if (isNaN(validatedData)) {
        validatedData = 9
      }
      if (validatedData < 4) {
        validatedData = 4
      } else if (validatedData > 36) {
        validatedData = 36
      }
      return validatedData
    }
}())
