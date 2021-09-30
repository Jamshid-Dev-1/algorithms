function stringCompression(str) {
  let emptyStr = "";
  str.split("").forEach((letter) => {
    if (!emptyStr.includes(letter)) {
      let filteredLetters = str.split("").filter((item) => item == letter);
      emptyStr += `${filteredLetters[0]}${filteredLetters.length}`;
    }
    if (emptyStr.length > str.length) {
      console.log(str);
      return str;
    }
    console.log(emptyStr);
    return emptyStr;
  });
}
