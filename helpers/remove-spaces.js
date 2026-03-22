const removeSpaces = (string) => {
  return string.replace(/\s+/g, "").toLowerCase();
}

module.exports = { removeSpaces };
