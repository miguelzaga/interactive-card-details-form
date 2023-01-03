function formatCardNumber(str) {
  const noSpaces = str.replace(/\s/g, "").trim();
  const regex = /(\d{4})/g;
  const formatted = noSpaces.replace(regex, "$1 ")

  return formatted
}

export default formatCardNumber
