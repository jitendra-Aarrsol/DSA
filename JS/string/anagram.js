function isAnagram(str1, str2) {
  // Convert the strings to lowercase and remove spaces
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  // Check if the lengths of the strings are the same
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in both strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  console.log(sortedStr1)
  console.log(sortedStr2)
  // Compare the sorted strings
  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

// Example usage
const string1 = "listen";
const string2 = "silent";
if (isAnagram(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}
