function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    const res = handleCipher(isDecode = true, abc, abc.length, str, key);

    return res;
  };
  this.decode = function (str) {
    const res = handleCipher(isDecode = false, abc, abc.length, str, key);

    return res;
  };
}

function handleCipher(isDecode, abc, abcTAM, str, key) {
  let res = '';
  let keyEqual = key;
  let i = 0;

  if (key.length < str.length) {
    keyEqual = equalSize(str, key);
  }

  for (let count = 0; count < str.length; count++) {
    if (abc.indexOf(str[count]) === -1) {
      res += str[count];
      continue;
    }

    if (isDecode) {
      i = abc.indexOf(str[count]) + abc.indexOf(keyEqual[count]);

      res += i >= abcTAM ? abc[i - abcTAM] : abc[i];
    } else {
      i = abc.indexOf(str[count]) - abc.indexOf(keyEqual[count]);

      res += (i < 0) ? abc[abcTAM - Math.abs(i)] : abc[i];
    }
  }

  return res;
}

function equalSize(a, b) {
  for (let t = 0; b.length < a.length; t++) {
    b += b[t];
  }
  return b;
}

