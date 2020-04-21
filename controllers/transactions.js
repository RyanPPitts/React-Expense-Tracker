// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public

exports.getTransactions = () => (req, res, next) => {
  res.send('GET transactions');
};

// @desc Add a transactions
// @route POST /api/v1/transactions
// @access Public

exports.addTransaction = () => (req, res, next) => {
  res.send('POST transactions');
};

// @desc Deletetransactions
// @route DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransaction = () => (req, res, next) => {
  res.send('DELETE transactions');
};
