/* global suite, expect, N1, test, assert */
suite('N1.MathLib.BinaryMatrix Factory methods', function () {
  test('Creates the Identity Matrix', function () {
    var idMatrix = new N1.MathLib.BinaryMatrix.Id(3)
    var expectedElements = [[1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]]
    expect(idMatrix.elements).to.deep.equal(expectedElements)

    var idMatrixTwo = N1.MathLib.BinaryMatrix.Id(3)
    expect(idMatrixTwo.elements).to.deep.equal(expectedElements)
  })

  test('Creates the Zero Matrix', function () {
    var zeroMatrix = new N1.MathLib.BinaryMatrix.Zero(3)
    var expectedElements = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
    expect(zeroMatrix.elements).to.deep.equal(expectedElements)

    var zeroMatrixTwo = N1.MathLib.BinaryMatrix.Zero(3)
    expect(zeroMatrixTwo.elements).to.deep.equal(expectedElements)
  })

  test('Creates the Universal Matrix', function () {
    var uniMatrix = new N1.MathLib.BinaryMatrix.One(3)
    var expectedElements = [[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]]
    expect(uniMatrix.elements).to.deep.equal(expectedElements)

    var uniMatrixTwo = N1.MathLib.BinaryMatrix.One(3)
    expect(uniMatrixTwo.elements).to.deep.equal(expectedElements)
  })

  test('Creates a new matrix', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var expectedElements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var newMatrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    // var newMatrix = new N1.MathLib.BinaryMatrix.NewOne(elements)
    var newMatrixTwo = N1.MathLib.BinaryMatrix.NewOne(elements)

    expect(newMatrix.elements).to.deep.equal(expectedElements)
    expect(newMatrixTwo.elements).to.deep.equal(expectedElements)
  })
})

suite('N1.MathLib.BinaryMatrix Operation methods', function () {
  test('Elements set correctly', function () {
    var matrix = new N1.MathLib.BinaryMatrix()
    assert.strictEqual(matrix.elements, undefined, 'Elements do not exist yet')

    var newElements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    matrix.setElements(newElements)
    assert.deepEqual(matrix.elements, newElements, 'Elements set properly')
  })

  test('Elements returned correctly', function () {
    var newElements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = new N1.MathLib.BinaryMatrix(newElements)

    var returnedElements = matrix.getElements()
    assert.deepEqual(returnedElements, matrix.elements, 'Elements returned properly')
  })

  test('Row set correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var newRow = [1, 1, 1]
    matrix.setRow(2, newRow)
    var expectedElements = [[1, 0, 1],
        [1, 1, 1],
        [1, 0, 1]]

    assert.deepEqual(matrix.elements, expectedElements)
  })

  test('Row retrieved correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var expectedRow = [1, 0, 1]
    var actualRow = matrix.getRow(1)
    assert.deepEqual(actualRow, expectedRow)
  })

  test('Row and column deleted correctly', function () {
    var elements = [[1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 1],
        [0, 0, 1, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var expectedMatrix = [[1, 0, 1],
                          [0, 1, 0],
                          [1, 0, 1]]
    var actualMatrix = matrix.deleteRowAndColumn(4)
    assert.deepEqual(actualMatrix, expectedMatrix)
  })

  test('Element set correctly', function () {
    var elements = [[0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    assert(matrix.elements[1][1] === 1)
    matrix.setElement(2, 2, 0)
    assert(matrix.elements[1][1] === 0)
  })

  test('Element retrieved correctly', function () {
    var elements = [[0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var returnedElement = matrix.getElement(2, 2)
    assert(returnedElement === 1)
    assert(matrix.elements[1][1] === returnedElement)
  })

  test('Column set correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var newCol = [1, 1, 1]
    matrix.setColumn(2, newCol)
    var expectedElements = [[1, 1, 1],
        [0, 1, 0],
        [1, 1, 1]]
    assert.deepEqual(matrix.elements, expectedElements)
  })

  test('Column retrieved correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var returnedCol = matrix.getColumn(2, 2)
    var expectedCol = [0, 1, 0]
    assert.deepEqual(returnedCol, expectedCol)
  })

  test('Number of rows correctly returned', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var numOfRows = matrix.numberOfRows()
    assert.strictEqual(numOfRows, 3)
  })

  test('Number of Columns correctly returned', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var numOfCols = matrix.numberOfColumns()
    assert.strictEqual(numOfCols, 3)
  })

  test('Duplicate matrix valid', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var dupeMatrix = matrix.duplicateMatrix()
    assert.deepEqual(dupeMatrix.elements, matrix.elements)
  })

  test('Same size matrix detection valid', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var idMatrix = N1.MathLib.BinaryMatrix.Id(3)
    assert.isOk(matrix.isSameSizeAs(idMatrix))
  })

  test('Functions Map properly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var sampleFunc = function (value, row, column) {
      return value * 2
    }
    var processedMatrix = matrix.mapProcess(sampleFunc)
    var expectedElements = [[2, 0, 2],
        [0, 2, 0],
        [2, 0, 2]]
    assert.deepEqual(processedMatrix.elements, expectedElements)
  })

  test('Matrices add correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var matrixTwo = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingMatrix = matrix.add(matrixTwo)
    var expectedElements = [[2, 0, 2],
        [0, 2, 0],
        [2, 0, 2]]
    assert.deepEqual(resultingMatrix.elements, expectedElements)
  })

  test('Color rows add correctly -- one ', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var rowOne = N1.MathLib.BinaryVector.NewOne([1, 1, 1, 1, 2, 2, 2, 5, 5, 5, 2, 3])
    var rowTwo = N1.MathLib.BinaryVector.NewOne([1, 2, 3, 5, 1, 2, 3, 1, 2, 3, 5, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingRowContents = matrix.addColorRows(rowOne, rowTwo)
    var expectedRowContents = [1, 2, 3, 5, 2, 2, 3, 5, 5, 3, 5, 3]
    assert.deepEqual(resultingRowContents.elements, expectedRowContents)
    matrix = null
    rowOne = null
    rowTwo = null
  })

  test('Color rows add correctly -- two ', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var rowOne = N1.MathLib.BinaryVector.NewOne([1, 1, 1, 1, 2, 2, 2, 5, 5, 5, 2, 3, 5])
    var rowTwo = N1.MathLib.BinaryVector.NewOne([1, 2, 3, 5, 1, 2, 3, 1, 2, 3, 5, 1, 5])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingRowContents = matrix.addColorRows(rowOne, rowTwo)
    var expectedRowContents = [1, 2, 3, 5, 2, 2, 3, 5, 5, 3, 5, 3, 5]
    assert.deepEqual(resultingRowContents.elements, expectedRowContents)
    matrix = null
    rowOne = null
    rowTwo = null
  })

  test('Color columns add correctly -- one ', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var columnOne = N1.MathLib.BinaryVector.NewOne([1, 1, 1, 1, 2, 2, 2, 5, 5, 5, 2, 3, 5])
    var columnTwo = N1.MathLib.BinaryVector.NewOne([1, 2, 3, 5, 1, 2, 3, 1, 2, 3, 5, 1, 5])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingColumnContents = matrix.addColorColumns(columnOne, columnTwo)
    var expectedColumnContents = [1, 2, 3, 5, 2, 2, 3, 5, 5, 3, 5, 3, 5]
    assert.deepEqual(resultingColumnContents.elements, expectedColumnContents)
    matrix = null
    columnOne = null
    columnTwo = null
  })

  test('Color columns add correctly -- two ', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var columnOne = N1.MathLib.BinaryVector.NewOne([1, 1, 1, 1, 2, 2, 2, 5, 5, 5, 2, 3, 5])
    var columnTwo = N1.MathLib.BinaryVector.NewOne([1, 2, 3, 5, 1, 2, 3, 1, 2, 3, 5, 1, 5])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingColumnContents = matrix.addColorColumns(columnOne, columnTwo)
    var expectedColumnContents = [1, 2, 3, 5, 2, 2, 3, 5, 5, 3, 5, 3, 5]
    assert.deepEqual(resultingColumnContents.elements, expectedColumnContents)
    matrix = null
    columnOne = null
    columnTwo = null
  })

  test('Text rows add correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var rowOne = N1.MathLib.BinaryVector.NewOne([1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1])
    var rowTwo = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingRowContents = matrix.addTextRows(rowOne, rowTwo)
    var expectedRowContents = [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
    assert.deepEqual(resultingRowContents.elements, expectedRowContents)
    matrix = null
    rowOne = null
    rowTwo = null
  })

  test('Empty first text rows returns null', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var rowOne = N1.MathLib.BinaryVector.NewOne([])
    var rowTwo = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingRowContents = matrix.addTextRows(rowOne, rowTwo)
    var expectedRowContents = null
    assert.deepEqual(resultingRowContents, expectedRowContents)
    matrix = null
    rowOne = null
    rowTwo = null
  })

  test('Empty second text rows returns null', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var rowOne = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var rowTwo = N1.MathLib.BinaryVector.NewOne([])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingRowContents = matrix.addTextRows(rowOne, rowTwo)
    var expectedRowContents = null
    assert.deepEqual(resultingRowContents, expectedRowContents)
    matrix = null
    rowOne = null
    rowTwo = null
  })

  test('Different length text rows returns null', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var rowOne = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var rowTwo = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingRowContents = matrix.addTextRows(rowOne, rowTwo)
    var expectedRowContents = null
    assert.deepEqual(resultingRowContents, expectedRowContents)
    matrix = null
    rowOne = null
    rowTwo = null
  })

  test('Text columns add correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var columnOne = N1.MathLib.BinaryVector.NewOne([1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1])
    var columnTwo = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingColumnContents = matrix.addTextColumns(columnOne, columnTwo)
    var expectedColumnContents = [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
    assert.deepEqual(resultingColumnContents.elements, expectedColumnContents)
    matrix = null
    columnOne = null
    columnTwo = null
  })

  test('Empty first text column returns null', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var columnOne = N1.MathLib.BinaryVector.NewOne([])
    var columnTwo = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingColumnContents = matrix.addTextColumns(columnOne, columnTwo)
    var expectedColumnContents = null
    assert.deepEqual(resultingColumnContents, expectedColumnContents)
    matrix = null
    columnOne = null
    columnTwo = null
  })

  test('Empty second text column returns null', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var columnOne = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var columnTwo = N1.MathLib.BinaryVector.NewOne([])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingColumnContents = matrix.addTextColumns(columnOne, columnTwo)
    var expectedColumnContents = null
    assert.deepEqual(resultingColumnContents, expectedColumnContents)
    matrix = null
    columnOne = null
    columnTwo = null
  })

  test('Different length text columns returns null', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var columnOne = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1])
    var columnTwo = N1.MathLib.BinaryVector.NewOne([1, 0, 0, 1, 1, 1, 0, 1])
    var matrix = N1.MathLib.BinaryMatrix.NewOne(elements)
    var resultingColumnContents = matrix.addTextColumns(columnOne, columnTwo)
    var expectedColumnContents = null
    assert.deepEqual(resultingColumnContents, expectedColumnContents)
    matrix = null
    columnOne = null
    columnTwo = null
  })

  test('Matrices subtract correctly', function () {
    var univeralMatrix = N1.MathLib.BinaryMatrix.NewOne([[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]])
    var otherMatrix = N1.MathLib.BinaryMatrix.NewOne([[0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]])
    var resultMatrix = univeralMatrix.subtract(otherMatrix)
    var expectedElements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    assert.deepEqual(resultMatrix.elements, expectedElements)
  })

  test('Left Multiply valid', function () {
    var univeralMatrix = N1.MathLib.BinaryMatrix.NewOne([[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]])
    var otherMatrix =  N1.MathLib.BinaryMatrix.NewOne([[0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]])
    assert.isOk(univeralMatrix.leftMultiply(otherMatrix))
  })

  test('Boolean multiplication valid', function () {
    var matrix =  N1.MathLib.BinaryMatrix.NewOne([[0, 1, 0],
        [0, 0, 1],
        [0, 1, 0]])
    var otherMatrix =  N1.MathLib.BinaryMatrix.NewOne([[0, 1, 0],
        [1, 0, 0],
        [0, 0, 1]])
    var multipliedMatrix = matrix.boolMultiply(otherMatrix)
    var expectedElements = [[1, 0, 0],
        [0, 0, 1],
        [1, 0, 0]]
    assert.deepEqual(multipliedMatrix.elements, expectedElements)
  })

  test('Matrix view valid', function () {
    var matrix = N1.MathLib.BinaryMatrix.NewOne([[0, 1, 0],
        [0, 0, 1],
        [0, 1, 0]])
    var expectedView = '[0, 1, 0]<br>[0, 0, 1]<br>[0, 1, 0]'
    assert.strictEqual(matrix.matrixView(), expectedView)
  })

  test('Scan upper triangular for ones valid', function () {
    var matrix = N1.MathLib.BinaryMatrix.NewOne([[0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]])
    // var entries = matrix.elements
    var entry = [2, 1]
    assert.deepEqual(matrix.scanUpperTriangular1(), entry)
  })
})
