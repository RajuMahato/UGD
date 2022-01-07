(function(window, undefined) {
  var dictionary = {
    "c485bdbb-4f79-4e22-aa7b-cadd45eec14a": "Home",
    "6318b7aa-50c8-4c59-a5ee-633f4a60fe12": "payment",
    "2ebd601f-3ca1-41ee-b160-0fb97849521b": "Sign Up",
    "899b8ab1-aab6-400e-9e69-990ce134a147": "ApplyESim",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign In",
    "2bd09b00-e6dd-41e0-a982-8aafe5d119f3": "Profile",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);