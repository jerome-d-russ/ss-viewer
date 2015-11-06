var fs = require('fs');

var books = {
  "OT": {
    "Genesis": {
      "order": "1",
      "abbreviation": "Gen",
      "chapters": {
        "1": {
          "length": "31"
        },
        "2": {
          "length": "25"
        },
        "3": {
          "length": "24"
        },
        "4": {
          "length": "26"
        },
        "5": {
          "length": "32"
        },
        "6": {
          "length": "22"
        },
        "7": {
          "length": "24"
        },
        "8": {
          "length": "22"
        },
        "9": {
          "length": "29"
        },
        "10": {
          "length": "32"
        },
        "11": {
          "length": "32"
        },
        "12": {
          "length": "20"
        },
        "13": {
          "length": "18"
        },
        "14": {
          "length": "24"
        },
        "15": {
          "length": "21"
        },
        "16": {
          "length": "16"
        },
        "17": {
          "length": "27"
        },
        "18": {
          "length": "33"
        },
        "19": {
          "length": "38"
        },
        "20": {
          "length": "18"
        },
        "21": {
          "length": "34"
        },
        "22": {
          "length": "24"
        },
        "23": {
          "length": "20"
        },
        "24": {
          "length": "67"
        },
        "25": {
          "length": "34"
        },
        "26": {
          "length": "35"
        },
        "27": {
          "length": "46"
        },
        "28": {
          "length": "22"
        },
        "29": {
          "length": "35"
        },
        "30": {
          "length": "43"
        },
        "31": {
          "length": "55"
        },
        "32": {
          "length": "32"
        },
        "33": {
          "length": "20"
        },
        "34": {
          "length": "31"
        },
        "35": {
          "length": "29"
        },
        "36": {
          "length": "43"
        },
        "37": {
          "length": "36"
        },
        "38": {
          "length": "30"
        },
        "39": {
          "length": "23"
        },
        "40": {
          "length": "23"
        },
        "41": {
          "length": "57"
        },
        "42": {
          "length": "38"
        },
        "43": {
          "length": "34"
        },
        "44": {
          "length": "34"
        },
        "45": {
          "length": "28"
        },
        "46": {
          "length": "34"
        },
        "47": {
          "length": "31"
        },
        "48": {
          "length": "22"
        },
        "49": {
          "length": "33"
        },
        "50": {
          "length": "26"
        }
      }
    },
    "Exodus": {
      "order": "2",
      "abbreviation": "Exod",
      "chapters": {
        "1": {
          "length": "22"
        },
        "2": {
          "length": "25"
        },
        "3": {
          "length": "22"
        },
        "4": {
          "length": "31"
        },
        "5": {
          "length": "23"
        },
        "6": {
          "length": "30"
        },
        "7": {
          "length": "25"
        },
        "8": {
          "length": "32"
        },
        "9": {
          "length": "35"
        },
        "10": {
          "length": "29"
        },
        "11": {
          "length": "10"
        },
        "12": {
          "length": "51"
        },
        "13": {
          "length": "22"
        },
        "14": {
          "length": "31"
        },
        "15": {
          "length": "27"
        },
        "16": {
          "length": "36"
        },
        "17": {
          "length": "16"
        },
        "18": {
          "length": "27"
        },
        "19": {
          "length": "25"
        },
        "20": {
          "length": "26"
        },
        "21": {
          "length": "36"
        },
        "22": {
          "length": "31"
        },
        "23": {
          "length": "33"
        },
        "24": {
          "length": "18"
        },
        "25": {
          "length": "40"
        },
        "26": {
          "length": "37"
        },
        "27": {
          "length": "21"
        },
        "28": {
          "length": "43"
        },
        "29": {
          "length": "46"
        },
        "30": {
          "length": "38"
        },
        "31": {
          "length": "18"
        },
        "32": {
          "length": "35"
        },
        "33": {
          "length": "23"
        },
        "34": {
          "length": "35"
        },
        "35": {
          "length": "35"
        },
        "36": {
          "length": "38"
        },
        "37": {
          "length": "29"
        },
        "38": {
          "length": "31"
        },
        "39": {
          "length": "43"
        },
        "40": {
          "length": "38"
        }
      }
    },
    "Leviticus": {
      "order": "3",
      "abbreviation": "Lev",
      "chapters": {
        "1": {
          "length": "17"
        },
        "2": {
          "length": "16"
        },
        "3": {
          "length": "17"
        },
        "4": {
          "length": "35"
        },
        "5": {
          "length": "19"
        },
        "6": {
          "length": "30"
        },
        "7": {
          "length": "38"
        },
        "8": {
          "length": "36"
        },
        "9": {
          "length": "24"
        },
        "10": {
          "length": "20"
        },
        "11": {
          "length": "47"
        },
        "12": {
          "length": "8"
        },
        "13": {
          "length": "59"
        },
        "14": {
          "length": "57"
        },
        "15": {
          "length": "33"
        },
        "16": {
          "length": "34"
        },
        "17": {
          "length": "16"
        },
        "18": {
          "length": "30"
        },
        "19": {
          "length": "37"
        },
        "20": {
          "length": "27"
        },
        "21": {
          "length": "24"
        },
        "22": {
          "length": "33"
        },
        "23": {
          "length": "44"
        },
        "24": {
          "length": "23"
        },
        "25": {
          "length": "55"
        },
        "26": {
          "length": "46"
        },
        "27": {
          "length": "34"
        }
      }
    },
    "Numbers": {
      "order": "4",
      "abbreviation": "Num",
      "chapters": {
        "1": {
          "length": "54"
        },
        "2": {
          "length": "34"
        },
        "3": {
          "length": "51"
        },
        "4": {
          "length": "49"
        },
        "5": {
          "length": "31"
        },
        "6": {
          "length": "27"
        },
        "7": {
          "length": "89"
        },
        "8": {
          "length": "26"
        },
        "9": {
          "length": "23"
        },
        "10": {
          "length": "36"
        },
        "11": {
          "length": "35"
        },
        "12": {
          "length": "16"
        },
        "13": {
          "length": "33"
        },
        "14": {
          "length": "45"
        },
        "15": {
          "length": "41"
        },
        "16": {
          "length": "50"
        },
        "17": {
          "length": "13"
        },
        "18": {
          "length": "32"
        },
        "19": {
          "length": "22"
        },
        "20": {
          "length": "29"
        },
        "21": {
          "length": "35"
        },
        "22": {
          "length": "41"
        },
        "23": {
          "length": "30"
        },
        "24": {
          "length": "25"
        },
        "25": {
          "length": "18"
        },
        "26": {
          "length": "65"
        },
        "27": {
          "length": "23"
        },
        "28": {
          "length": "31"
        },
        "29": {
          "length": "40"
        },
        "30": {
          "length": "16"
        },
        "31": {
          "length": "54"
        },
        "32": {
          "length": "42"
        },
        "33": {
          "length": "56"
        },
        "34": {
          "length": "29"
        },
        "35": {
          "length": "34"
        },
        "36": {
          "length": "13"
        }
      }
    },
    "Deuteronomy": {
      "order": "5",
      "abbreviation": "Deut",
      "chapters": {
        "1": {
          "length": "46"
        },
        "2": {
          "length": "37"
        },
        "3": {
          "length": "29"
        },
        "4": {
          "length": "49"
        },
        "5": {
          "length": "33"
        },
        "6": {
          "length": "25"
        },
        "7": {
          "length": "26"
        },
        "8": {
          "length": "20"
        },
        "9": {
          "length": "29"
        },
        "10": {
          "length": "22"
        },
        "11": {
          "length": "32"
        },
        "12": {
          "length": "32"
        },
        "13": {
          "length": "18"
        },
        "14": {
          "length": "29"
        },
        "15": {
          "length": "23"
        },
        "16": {
          "length": "22"
        },
        "17": {
          "length": "20"
        },
        "18": {
          "length": "22"
        },
        "19": {
          "length": "21"
        },
        "20": {
          "length": "20"
        },
        "21": {
          "length": "23"
        },
        "22": {
          "length": "30"
        },
        "23": {
          "length": "25"
        },
        "24": {
          "length": "22"
        },
        "25": {
          "length": "19"
        },
        "26": {
          "length": "19"
        },
        "27": {
          "length": "26"
        },
        "28": {
          "length": "68"
        },
        "29": {
          "length": "29"
        },
        "30": {
          "length": "20"
        },
        "31": {
          "length": "30"
        },
        "32": {
          "length": "52"
        },
        "33": {
          "length": "29"
        },
        "34": {
          "length": "12"
        }
      }
    },
    "Joshua": {
      "order": "6",
      "abbreviation": "Josh",
      "chapters": {
        "1": {
          "length": "18"
        },
        "2": {
          "length": "24"
        },
        "3": {
          "length": "17"
        },
        "4": {
          "length": "24"
        },
        "5": {
          "length": "15"
        },
        "6": {
          "length": "27"
        },
        "7": {
          "length": "26"
        },
        "8": {
          "length": "35"
        },
        "9": {
          "length": "27"
        },
        "10": {
          "length": "43"
        },
        "11": {
          "length": "23"
        },
        "12": {
          "length": "24"
        },
        "13": {
          "length": "33"
        },
        "14": {
          "length": "15"
        },
        "15": {
          "length": "63"
        },
        "16": {
          "length": "10"
        },
        "17": {
          "length": "18"
        },
        "18": {
          "length": "28"
        },
        "19": {
          "length": "51"
        },
        "20": {
          "length": "9"
        },
        "21": {
          "length": "45"
        },
        "22": {
          "length": "34"
        },
        "23": {
          "length": "16"
        },
        "24": {
          "length": "33"
        }
      }
    },
    "Judges": {
      "order": "7",
      "abbreviation": "Judg",
      "chapters": {
        "1": {
          "length": "36"
        },
        "2": {
          "length": "23"
        },
        "3": {
          "length": "31"
        },
        "4": {
          "length": "24"
        },
        "5": {
          "length": "31"
        },
        "6": {
          "length": "40"
        },
        "7": {
          "length": "25"
        },
        "8": {
          "length": "35"
        },
        "9": {
          "length": "57"
        },
        "10": {
          "length": "18"
        },
        "11": {
          "length": "40"
        },
        "12": {
          "length": "15"
        },
        "13": {
          "length": "25"
        },
        "14": {
          "length": "20"
        },
        "15": {
          "length": "20"
        },
        "16": {
          "length": "31"
        },
        "17": {
          "length": "13"
        },
        "18": {
          "length": "31"
        },
        "19": {
          "length": "30"
        },
        "20": {
          "length": "48"
        },
        "21": {
          "length": "25"
        }
      }
    },
    "Ruth": {
      "order": "8",
      "abbreviation": "Ruth",
      "chapters": {
        "1": {
          "length": "22"
        },
        "2": {
          "length": "23"
        },
        "3": {
          "length": "18"
        },
        "4": {
          "length": "22"
        }
      }
    },
    "1 Samuel": {
      "order": "9",
      "abbreviation": "1Sam",
      "chapters": {
        "1": {
          "length": "28"
        },
        "2": {
          "length": "36"
        },
        "3": {
          "length": "21"
        },
        "4": {
          "length": "22"
        },
        "5": {
          "length": "12"
        },
        "6": {
          "length": "21"
        },
        "7": {
          "length": "17"
        },
        "8": {
          "length": "22"
        },
        "9": {
          "length": "27"
        },
        "10": {
          "length": "27"
        },
        "11": {
          "length": "15"
        },
        "12": {
          "length": "25"
        },
        "13": {
          "length": "23"
        },
        "14": {
          "length": "52"
        },
        "15": {
          "length": "35"
        },
        "16": {
          "length": "23"
        },
        "17": {
          "length": "58"
        },
        "18": {
          "length": "30"
        },
        "19": {
          "length": "24"
        },
        "20": {
          "length": "42"
        },
        "21": {
          "length": "15"
        },
        "22": {
          "length": "23"
        },
        "23": {
          "length": "29"
        },
        "24": {
          "length": "22"
        },
        "25": {
          "length": "44"
        },
        "26": {
          "length": "25"
        },
        "27": {
          "length": "12"
        },
        "28": {
          "length": "25"
        },
        "29": {
          "length": "11"
        },
        "30": {
          "length": "31"
        },
        "31": {
          "length": "13"
        }
      }
    },
    "2 Samuel": {
      "order": "10",
      "abbreviation": "2Sam",
      "chapters": {
        "1": {
          "length": "27"
        },
        "2": {
          "length": "32"
        },
        "3": {
          "length": "39"
        },
        "4": {
          "length": "12"
        },
        "5": {
          "length": "25"
        },
        "6": {
          "length": "23"
        },
        "7": {
          "length": "29"
        },
        "8": {
          "length": "18"
        },
        "9": {
          "length": "13"
        },
        "10": {
          "length": "19"
        },
        "11": {
          "length": "27"
        },
        "12": {
          "length": "31"
        },
        "13": {
          "length": "39"
        },
        "14": {
          "length": "33"
        },
        "15": {
          "length": "37"
        },
        "16": {
          "length": "23"
        },
        "17": {
          "length": "29"
        },
        "18": {
          "length": "33"
        },
        "19": {
          "length": "43"
        },
        "20": {
          "length": "26"
        },
        "21": {
          "length": "22"
        },
        "22": {
          "length": "51"
        },
        "23": {
          "length": "39"
        },
        "24": {
          "length": "25"
        }
      }
    },
    "1 Kings": {
      "order": "11",
      "abbreviation": "1Kgs",
      "chapters": {
        "1": {
          "length": "53"
        },
        "2": {
          "length": "46"
        },
        "3": {
          "length": "28"
        },
        "4": {
          "length": "34"
        },
        "5": {
          "length": "18"
        },
        "6": {
          "length": "38"
        },
        "7": {
          "length": "51"
        },
        "8": {
          "length": "66"
        },
        "9": {
          "length": "28"
        },
        "10": {
          "length": "29"
        },
        "11": {
          "length": "43"
        },
        "12": {
          "length": "33"
        },
        "13": {
          "length": "34"
        },
        "14": {
          "length": "31"
        },
        "15": {
          "length": "34"
        },
        "16": {
          "length": "34"
        },
        "17": {
          "length": "24"
        },
        "18": {
          "length": "46"
        },
        "19": {
          "length": "21"
        },
        "20": {
          "length": "43"
        },
        "21": {
          "length": "29"
        },
        "22": {
          "length": "53"
        }
      }
    },
    "2 Kings": {
      "order": "12",
      "abbreviation": "2Kgs",
      "chapters": {
        "1": {
          "length": "18"
        },
        "2": {
          "length": "25"
        },
        "3": {
          "length": "27"
        },
        "4": {
          "length": "44"
        },
        "5": {
          "length": "27"
        },
        "6": {
          "length": "33"
        },
        "7": {
          "length": "20"
        },
        "8": {
          "length": "29"
        },
        "9": {
          "length": "37"
        },
        "10": {
          "length": "36"
        },
        "11": {
          "length": "21"
        },
        "12": {
          "length": "21"
        },
        "13": {
          "length": "25"
        },
        "14": {
          "length": "29"
        },
        "15": {
          "length": "38"
        },
        "16": {
          "length": "20"
        },
        "17": {
          "length": "41"
        },
        "18": {
          "length": "37"
        },
        "19": {
          "length": "37"
        },
        "20": {
          "length": "21"
        },
        "21": {
          "length": "26"
        },
        "22": {
          "length": "20"
        },
        "23": {
          "length": "37"
        },
        "24": {
          "length": "20"
        },
        "25": {
          "length": "30"
        }
      }
    },
    "1 Chronicles": {
      "order": "13",
      "abbreviation": "1Chr",
      "chapters": {
        "1": {
          "length": "54"
        },
        "2": {
          "length": "55"
        },
        "3": {
          "length": "24"
        },
        "4": {
          "length": "43"
        },
        "5": {
          "length": "26"
        },
        "6": {
          "length": "81"
        },
        "7": {
          "length": "40"
        },
        "8": {
          "length": "40"
        },
        "9": {
          "length": "44"
        },
        "10": {
          "length": "14"
        },
        "11": {
          "length": "47"
        },
        "12": {
          "length": "40"
        },
        "13": {
          "length": "14"
        },
        "14": {
          "length": "17"
        },
        "15": {
          "length": "29"
        },
        "16": {
          "length": "43"
        },
        "17": {
          "length": "27"
        },
        "18": {
          "length": "17"
        },
        "19": {
          "length": "19"
        },
        "20": {
          "length": "8"
        },
        "21": {
          "length": "30"
        },
        "22": {
          "length": "19"
        },
        "23": {
          "length": "32"
        },
        "24": {
          "length": "31"
        },
        "25": {
          "length": "31"
        },
        "26": {
          "length": "32"
        },
        "27": {
          "length": "34"
        },
        "28": {
          "length": "21"
        },
        "29": {
          "length": "30"
        }
      }
    },
    "2 Chronicles": {
      "order": "14",
      "abbreviation": "2Chr",
      "chapters": {
        "1": {
          "length": "17"
        },
        "2": {
          "length": "18"
        },
        "3": {
          "length": "17"
        },
        "4": {
          "length": "22"
        },
        "5": {
          "length": "14"
        },
        "6": {
          "length": "42"
        },
        "7": {
          "length": "22"
        },
        "8": {
          "length": "18"
        },
        "9": {
          "length": "31"
        },
        "10": {
          "length": "19"
        },
        "11": {
          "length": "23"
        },
        "12": {
          "length": "16"
        },
        "13": {
          "length": "22"
        },
        "14": {
          "length": "15"
        },
        "15": {
          "length": "19"
        },
        "16": {
          "length": "14"
        },
        "17": {
          "length": "19"
        },
        "18": {
          "length": "34"
        },
        "19": {
          "length": "11"
        },
        "20": {
          "length": "37"
        },
        "21": {
          "length": "20"
        },
        "22": {
          "length": "12"
        },
        "23": {
          "length": "21"
        },
        "24": {
          "length": "27"
        },
        "25": {
          "length": "28"
        },
        "26": {
          "length": "23"
        },
        "27": {
          "length": "9"
        },
        "28": {
          "length": "27"
        },
        "29": {
          "length": "36"
        },
        "30": {
          "length": "27"
        },
        "31": {
          "length": "21"
        },
        "32": {
          "length": "33"
        },
        "33": {
          "length": "25"
        },
        "34": {
          "length": "33"
        },
        "35": {
          "length": "27"
        },
        "36": {
          "length": "23"
        }
      }
    },
    "Ezra": {
      "order": "15",
      "abbreviation": "Ezra",
      "chapters": {
        "1": {
          "length": "11"
        },
        "2": {
          "length": "70"
        },
        "3": {
          "length": "13"
        },
        "4": {
          "length": "24"
        },
        "5": {
          "length": "17"
        },
        "6": {
          "length": "22"
        },
        "7": {
          "length": "28"
        },
        "8": {
          "length": "36"
        },
        "9": {
          "length": "15"
        },
        "10": {
          "length": "44"
        }
      }
    },
    "Nehemiah": {
      "order": "16",
      "abbreviation": "Neh",
      "chapters": {
        "1": {
          "length": "11"
        },
        "2": {
          "length": "20"
        },
        "3": {
          "length": "32"
        },
        "4": {
          "length": "23"
        },
        "5": {
          "length": "19"
        },
        "6": {
          "length": "19"
        },
        "7": {
          "length": "73"
        },
        "8": {
          "length": "18"
        },
        "9": {
          "length": "38"
        },
        "10": {
          "length": "39"
        },
        "11": {
          "length": "36"
        },
        "12": {
          "length": "47"
        },
        "13": {
          "length": "31"
        }
      }
    },
    "Esther": {
      "order": "17",
      "abbreviation": "Esth",
      "chapters": {
        "1": {
          "length": "22"
        },
        "2": {
          "length": "23"
        },
        "3": {
          "length": "15"
        },
        "4": {
          "length": "17"
        },
        "5": {
          "length": "14"
        },
        "6": {
          "length": "14"
        },
        "7": {
          "length": "10"
        },
        "8": {
          "length": "17"
        },
        "9": {
          "length": "32"
        },
        "10": {
          "length": "3"
        }
      }
    },
    "Job": {
      "order": "18",
      "abbreviation": "Job",
      "chapters": {
        "1": {
          "length": "22"
        },
        "2": {
          "length": "13"
        },
        "3": {
          "length": "26"
        },
        "4": {
          "length": "21"
        },
        "5": {
          "length": "27"
        },
        "6": {
          "length": "30"
        },
        "7": {
          "length": "21"
        },
        "8": {
          "length": "22"
        },
        "9": {
          "length": "35"
        },
        "10": {
          "length": "22"
        },
        "11": {
          "length": "20"
        },
        "12": {
          "length": "25"
        },
        "13": {
          "length": "28"
        },
        "14": {
          "length": "22"
        },
        "15": {
          "length": "35"
        },
        "16": {
          "length": "22"
        },
        "17": {
          "length": "16"
        },
        "18": {
          "length": "21"
        },
        "19": {
          "length": "29"
        },
        "20": {
          "length": "29"
        },
        "21": {
          "length": "34"
        },
        "22": {
          "length": "30"
        },
        "23": {
          "length": "17"
        },
        "24": {
          "length": "25"
        },
        "25": {
          "length": "6"
        },
        "26": {
          "length": "14"
        },
        "27": {
          "length": "23"
        },
        "28": {
          "length": "28"
        },
        "29": {
          "length": "25"
        },
        "30": {
          "length": "31"
        },
        "31": {
          "length": "40"
        },
        "32": {
          "length": "22"
        },
        "33": {
          "length": "33"
        },
        "34": {
          "length": "37"
        },
        "35": {
          "length": "16"
        },
        "36": {
          "length": "33"
        },
        "37": {
          "length": "24"
        },
        "38": {
          "length": "41"
        },
        "39": {
          "length": "30"
        },
        "40": {
          "length": "24"
        },
        "41": {
          "length": "34"
        },
        "42": {
          "length": "17"
        }
      }
    },
    "Psalm": {
      "order": "19",
      "abbreviation": "Ps",
      "chapters": {
        "1": {
          "length": "6"
        },
        "2": {
          "length": "12"
        },
        "3": {
          "length": "8"
        },
        "4": {
          "length": "8"
        },
        "5": {
          "length": "12"
        },
        "6": {
          "length": "10"
        },
        "7": {
          "length": "17"
        },
        "8": {
          "length": "9"
        },
        "9": {
          "length": "20"
        },
        "10": {
          "length": "18"
        },
        "11": {
          "length": "7"
        },
        "12": {
          "length": "8"
        },
        "13": {
          "length": "6"
        },
        "14": {
          "length": "7"
        },
        "15": {
          "length": "5"
        },
        "16": {
          "length": "11"
        },
        "17": {
          "length": "15"
        },
        "18": {
          "length": "50"
        },
        "19": {
          "length": "14"
        },
        "20": {
          "length": "9"
        },
        "21": {
          "length": "13"
        },
        "22": {
          "length": "31"
        },
        "23": {
          "length": "6"
        },
        "24": {
          "length": "10"
        },
        "25": {
          "length": "22"
        },
        "26": {
          "length": "12"
        },
        "27": {
          "length": "14"
        },
        "28": {
          "length": "9"
        },
        "29": {
          "length": "11"
        },
        "30": {
          "length": "12"
        },
        "31": {
          "length": "24"
        },
        "32": {
          "length": "11"
        },
        "33": {
          "length": "22"
        },
        "34": {
          "length": "22"
        },
        "35": {
          "length": "28"
        },
        "36": {
          "length": "12"
        },
        "37": {
          "length": "40"
        },
        "38": {
          "length": "22"
        },
        "39": {
          "length": "13"
        },
        "40": {
          "length": "17"
        },
        "41": {
          "length": "13"
        },
        "42": {
          "length": "11"
        },
        "43": {
          "length": "5"
        },
        "44": {
          "length": "26"
        },
        "45": {
          "length": "17"
        },
        "46": {
          "length": "11"
        },
        "47": {
          "length": "9"
        },
        "48": {
          "length": "14"
        },
        "49": {
          "length": "20"
        },
        "50": {
          "length": "23"
        },
        "51": {
          "length": "19"
        },
        "52": {
          "length": "9"
        },
        "53": {
          "length": "6"
        },
        "54": {
          "length": "7"
        },
        "55": {
          "length": "23"
        },
        "56": {
          "length": "13"
        },
        "57": {
          "length": "11"
        },
        "58": {
          "length": "11"
        },
        "59": {
          "length": "17"
        },
        "60": {
          "length": "12"
        },
        "61": {
          "length": "8"
        },
        "62": {
          "length": "12"
        },
        "63": {
          "length": "11"
        },
        "64": {
          "length": "10"
        },
        "65": {
          "length": "13"
        },
        "66": {
          "length": "20"
        },
        "67": {
          "length": "7"
        },
        "68": {
          "length": "35"
        },
        "69": {
          "length": "36"
        },
        "70": {
          "length": "5"
        },
        "71": {
          "length": "24"
        },
        "72": {
          "length": "20"
        },
        "73": {
          "length": "28"
        },
        "74": {
          "length": "23"
        },
        "75": {
          "length": "10"
        },
        "76": {
          "length": "12"
        },
        "77": {
          "length": "20"
        },
        "78": {
          "length": "72"
        },
        "79": {
          "length": "13"
        },
        "80": {
          "length": "19"
        },
        "81": {
          "length": "16"
        },
        "82": {
          "length": "8"
        },
        "83": {
          "length": "18"
        },
        "84": {
          "length": "12"
        },
        "85": {
          "length": "13"
        },
        "86": {
          "length": "17"
        },
        "87": {
          "length": "7"
        },
        "88": {
          "length": "18"
        },
        "89": {
          "length": "52"
        },
        "90": {
          "length": "17"
        },
        "91": {
          "length": "16"
        },
        "92": {
          "length": "15"
        },
        "93": {
          "length": "5"
        },
        "94": {
          "length": "23"
        },
        "95": {
          "length": "11"
        },
        "96": {
          "length": "13"
        },
        "97": {
          "length": "12"
        },
        "98": {
          "length": "9"
        },
        "99": {
          "length": "9"
        },
        "100": {
          "length": "5"
        },
        "101": {
          "length": "8"
        },
        "102": {
          "length": "28"
        },
        "103": {
          "length": "22"
        },
        "104": {
          "length": "35"
        },
        "105": {
          "length": "45"
        },
        "106": {
          "length": "48"
        },
        "107": {
          "length": "43"
        },
        "108": {
          "length": "13"
        },
        "109": {
          "length": "31"
        },
        "110": {
          "length": "7"
        },
        "111": {
          "length": "10"
        },
        "112": {
          "length": "10"
        },
        "113": {
          "length": "9"
        },
        "114": {
          "length": "8"
        },
        "115": {
          "length": "18"
        },
        "116": {
          "length": "19"
        },
        "117": {
          "length": "2"
        },
        "118": {
          "length": "29"
        },
        "119": {
          "length": "176"
        },
        "120": {
          "length": "7"
        },
        "121": {
          "length": "8"
        },
        "122": {
          "length": "9"
        },
        "123": {
          "length": "4"
        },
        "124": {
          "length": "8"
        },
        "125": {
          "length": "5"
        },
        "126": {
          "length": "6"
        },
        "127": {
          "length": "5"
        },
        "128": {
          "length": "6"
        },
        "129": {
          "length": "8"
        },
        "130": {
          "length": "8"
        },
        "131": {
          "length": "3"
        },
        "132": {
          "length": "18"
        },
        "133": {
          "length": "3"
        },
        "134": {
          "length": "3"
        },
        "135": {
          "length": "21"
        },
        "136": {
          "length": "26"
        },
        "137": {
          "length": "9"
        },
        "138": {
          "length": "8"
        },
        "139": {
          "length": "24"
        },
        "140": {
          "length": "13"
        },
        "141": {
          "length": "10"
        },
        "142": {
          "length": "7"
        },
        "143": {
          "length": "12"
        },
        "144": {
          "length": "15"
        },
        "145": {
          "length": "21"
        },
        "146": {
          "length": "10"
        },
        "147": {
          "length": "20"
        },
        "148": {
          "length": "14"
        },
        "149": {
          "length": "9"
        },
        "150": {
          "length": "6"
        }
      }
    },
    "Proverbs": {
      "order": "20",
      "abbreviation": "Prov",
      "chapters": {
        "1": {
          "length": "33"
        },
        "2": {
          "length": "22"
        },
        "3": {
          "length": "35"
        },
        "4": {
          "length": "27"
        },
        "5": {
          "length": "23"
        },
        "6": {
          "length": "35"
        },
        "7": {
          "length": "27"
        },
        "8": {
          "length": "36"
        },
        "9": {
          "length": "18"
        },
        "10": {
          "length": "32"
        },
        "11": {
          "length": "31"
        },
        "12": {
          "length": "28"
        },
        "13": {
          "length": "25"
        },
        "14": {
          "length": "35"
        },
        "15": {
          "length": "33"
        },
        "16": {
          "length": "33"
        },
        "17": {
          "length": "28"
        },
        "18": {
          "length": "24"
        },
        "19": {
          "length": "29"
        },
        "20": {
          "length": "30"
        },
        "21": {
          "length": "31"
        },
        "22": {
          "length": "29"
        },
        "23": {
          "length": "35"
        },
        "24": {
          "length": "34"
        },
        "25": {
          "length": "28"
        },
        "26": {
          "length": "28"
        },
        "27": {
          "length": "27"
        },
        "28": {
          "length": "28"
        },
        "29": {
          "length": "27"
        },
        "30": {
          "length": "33"
        },
        "31": {
          "length": "31"
        }
      }
    },
    "Ecclesiastes": {
      "order": "21",
      "abbreviation": "Eccl",
      "chapters": {
        "1": {
          "length": "18"
        },
        "2": {
          "length": "26"
        },
        "3": {
          "length": "22"
        },
        "4": {
          "length": "16"
        },
        "5": {
          "length": "20"
        },
        "6": {
          "length": "12"
        },
        "7": {
          "length": "29"
        },
        "8": {
          "length": "17"
        },
        "9": {
          "length": "18"
        },
        "10": {
          "length": "20"
        },
        "11": {
          "length": "10"
        },
        "12": {
          "length": "14"
        }
      }
    },
    "Song of Solomon": {
      "order": "22",
      "abbreviation": "Song",
      "chapters": {
        "1": {
          "length": "17"
        },
        "2": {
          "length": "17"
        },
        "3": {
          "length": "11"
        },
        "4": {
          "length": "16"
        },
        "5": {
          "length": "16"
        },
        "6": {
          "length": "13"
        },
        "7": {
          "length": "13"
        },
        "8": {
          "length": "14"
        }
      }
    },
    "Isaiah": {
      "order": "23",
      "abbreviation": "Isa",
      "chapters": {
        "1": {
          "length": "31"
        },
        "2": {
          "length": "22"
        },
        "3": {
          "length": "26"
        },
        "4": {
          "length": "6"
        },
        "5": {
          "length": "30"
        },
        "6": {
          "length": "13"
        },
        "7": {
          "length": "25"
        },
        "8": {
          "length": "22"
        },
        "9": {
          "length": "21"
        },
        "10": {
          "length": "34"
        },
        "11": {
          "length": "16"
        },
        "12": {
          "length": "6"
        },
        "13": {
          "length": "22"
        },
        "14": {
          "length": "32"
        },
        "15": {
          "length": "9"
        },
        "16": {
          "length": "14"
        },
        "17": {
          "length": "14"
        },
        "18": {
          "length": "7"
        },
        "19": {
          "length": "25"
        },
        "20": {
          "length": "6"
        },
        "21": {
          "length": "17"
        },
        "22": {
          "length": "25"
        },
        "23": {
          "length": "18"
        },
        "24": {
          "length": "23"
        },
        "25": {
          "length": "12"
        },
        "26": {
          "length": "21"
        },
        "27": {
          "length": "13"
        },
        "28": {
          "length": "29"
        },
        "29": {
          "length": "24"
        },
        "30": {
          "length": "33"
        },
        "31": {
          "length": "9"
        },
        "32": {
          "length": "20"
        },
        "33": {
          "length": "24"
        },
        "34": {
          "length": "17"
        },
        "35": {
          "length": "10"
        },
        "36": {
          "length": "22"
        },
        "37": {
          "length": "38"
        },
        "38": {
          "length": "22"
        },
        "39": {
          "length": "8"
        },
        "40": {
          "length": "31"
        },
        "41": {
          "length": "29"
        },
        "42": {
          "length": "25"
        },
        "43": {
          "length": "28"
        },
        "44": {
          "length": "28"
        },
        "45": {
          "length": "25"
        },
        "46": {
          "length": "13"
        },
        "47": {
          "length": "15"
        },
        "48": {
          "length": "22"
        },
        "49": {
          "length": "26"
        },
        "50": {
          "length": "11"
        },
        "51": {
          "length": "23"
        },
        "52": {
          "length": "15"
        },
        "53": {
          "length": "12"
        },
        "54": {
          "length": "17"
        },
        "55": {
          "length": "13"
        },
        "56": {
          "length": "12"
        },
        "57": {
          "length": "21"
        },
        "58": {
          "length": "14"
        },
        "59": {
          "length": "21"
        },
        "60": {
          "length": "22"
        },
        "61": {
          "length": "11"
        },
        "62": {
          "length": "12"
        },
        "63": {
          "length": "19"
        },
        "64": {
          "length": "12"
        },
        "65": {
          "length": "25"
        },
        "66": {
          "length": "24"
        }
      }
    },
    "Jeremiah": {
      "order": "24",
      "abbreviation": "Jer",
      "chapters": {
        "1": {
          "length": "19"
        },
        "2": {
          "length": "37"
        },
        "3": {
          "length": "25"
        },
        "4": {
          "length": "31"
        },
        "5": {
          "length": "31"
        },
        "6": {
          "length": "30"
        },
        "7": {
          "length": "34"
        },
        "8": {
          "length": "22"
        },
        "9": {
          "length": "26"
        },
        "10": {
          "length": "25"
        },
        "11": {
          "length": "23"
        },
        "12": {
          "length": "17"
        },
        "13": {
          "length": "27"
        },
        "14": {
          "length": "22"
        },
        "15": {
          "length": "21"
        },
        "16": {
          "length": "21"
        },
        "17": {
          "length": "27"
        },
        "18": {
          "length": "23"
        },
        "19": {
          "length": "15"
        },
        "20": {
          "length": "18"
        },
        "21": {
          "length": "14"
        },
        "22": {
          "length": "30"
        },
        "23": {
          "length": "40"
        },
        "24": {
          "length": "10"
        },
        "25": {
          "length": "38"
        },
        "26": {
          "length": "24"
        },
        "27": {
          "length": "22"
        },
        "28": {
          "length": "17"
        },
        "29": {
          "length": "32"
        },
        "30": {
          "length": "24"
        },
        "31": {
          "length": "40"
        },
        "32": {
          "length": "44"
        },
        "33": {
          "length": "26"
        },
        "34": {
          "length": "22"
        },
        "35": {
          "length": "19"
        },
        "36": {
          "length": "32"
        },
        "37": {
          "length": "21"
        },
        "38": {
          "length": "28"
        },
        "39": {
          "length": "18"
        },
        "40": {
          "length": "16"
        },
        "41": {
          "length": "18"
        },
        "42": {
          "length": "22"
        },
        "43": {
          "length": "13"
        },
        "44": {
          "length": "30"
        },
        "45": {
          "length": "5"
        },
        "46": {
          "length": "28"
        },
        "47": {
          "length": "7"
        },
        "48": {
          "length": "47"
        },
        "49": {
          "length": "39"
        },
        "50": {
          "length": "46"
        },
        "51": {
          "length": "64"
        },
        "52": {
          "length": "34"
        }
      }
    },
    "Lamentations": {
      "order": "25",
      "abbreviation": "Lam",
      "chapters": {
        "1": {
          "length": "22"
        },
        "2": {
          "length": "22"
        },
        "3": {
          "length": "66"
        },
        "4": {
          "length": "22"
        },
        "5": {
          "length": "22"
        }
      }
    },
    "Ezekiel": {
      "order": "26",
      "abbreviation": "Ezek",
      "chapters": {
        "1": {
          "length": "28"
        },
        "2": {
          "length": "10"
        },
        "3": {
          "length": "27"
        },
        "4": {
          "length": "17"
        },
        "5": {
          "length": "17"
        },
        "6": {
          "length": "14"
        },
        "7": {
          "length": "27"
        },
        "8": {
          "length": "18"
        },
        "9": {
          "length": "11"
        },
        "10": {
          "length": "22"
        },
        "11": {
          "length": "25"
        },
        "12": {
          "length": "28"
        },
        "13": {
          "length": "23"
        },
        "14": {
          "length": "23"
        },
        "15": {
          "length": "8"
        },
        "16": {
          "length": "63"
        },
        "17": {
          "length": "24"
        },
        "18": {
          "length": "32"
        },
        "19": {
          "length": "14"
        },
        "20": {
          "length": "49"
        },
        "21": {
          "length": "32"
        },
        "22": {
          "length": "31"
        },
        "23": {
          "length": "49"
        },
        "24": {
          "length": "27"
        },
        "25": {
          "length": "17"
        },
        "26": {
          "length": "21"
        },
        "27": {
          "length": "36"
        },
        "28": {
          "length": "26"
        },
        "29": {
          "length": "21"
        },
        "30": {
          "length": "26"
        },
        "31": {
          "length": "18"
        },
        "32": {
          "length": "32"
        },
        "33": {
          "length": "33"
        },
        "34": {
          "length": "31"
        },
        "35": {
          "length": "15"
        },
        "36": {
          "length": "38"
        },
        "37": {
          "length": "28"
        },
        "38": {
          "length": "23"
        },
        "39": {
          "length": "29"
        },
        "40": {
          "length": "49"
        },
        "41": {
          "length": "26"
        },
        "42": {
          "length": "20"
        },
        "43": {
          "length": "27"
        },
        "44": {
          "length": "31"
        },
        "45": {
          "length": "25"
        },
        "46": {
          "length": "24"
        },
        "47": {
          "length": "23"
        },
        "48": {
          "length": "35"
        }
      }
    },
    "Daniel": {
      "order": "27",
      "abbreviation": "Dan",
      "chapters": {
        "1": {
          "length": "21"
        },
        "2": {
          "length": "49"
        },
        "3": {
          "length": "30"
        },
        "4": {
          "length": "37"
        },
        "5": {
          "length": "31"
        },
        "6": {
          "length": "28"
        },
        "7": {
          "length": "28"
        },
        "8": {
          "length": "27"
        },
        "9": {
          "length": "27"
        },
        "10": {
          "length": "21"
        },
        "11": {
          "length": "45"
        },
        "12": {
          "length": "13"
        }
      }
    },
    "Hosea": {
      "order": "28",
      "abbreviation": "Hos",
      "chapters": {
        "1": {
          "length": "11"
        },
        "2": {
          "length": "23"
        },
        "3": {
          "length": "5"
        },
        "4": {
          "length": "19"
        },
        "5": {
          "length": "15"
        },
        "6": {
          "length": "11"
        },
        "7": {
          "length": "16"
        },
        "8": {
          "length": "14"
        },
        "9": {
          "length": "17"
        },
        "10": {
          "length": "15"
        },
        "11": {
          "length": "12"
        },
        "12": {
          "length": "14"
        },
        "13": {
          "length": "16"
        },
        "14": {
          "length": "9"
        }
      }
    },
    "Joel": {
      "order": "29",
      "abbreviation": "Joel",
      "chapters": {
        "1": {
          "length": "20"
        },
        "2": {
          "length": "32"
        },
        "3": {
          "length": "21"
        }
      }
    },
    "Amos": {
      "order": "30",
      "abbreviation": "Amos",
      "chapters": {
        "1": {
          "length": "15"
        },
        "2": {
          "length": "16"
        },
        "3": {
          "length": "15"
        },
        "4": {
          "length": "13"
        },
        "5": {
          "length": "27"
        },
        "6": {
          "length": "14"
        },
        "7": {
          "length": "17"
        },
        "8": {
          "length": "14"
        },
        "9": {
          "length": "15"
        }
      }
    },
    "Obadiah": {
      "order": "31",
      "abbreviation": "Obad",
      "chapters": {
        "1": {
          "length": "21"
        }
      }
    },
    "Jonah": {
      "order": "32",
      "abbreviation": "Jonah",
      "chapters": {
        "1": {
          "length": "17"
        },
        "2": {
          "length": "10"
        },
        "3": {
          "length": "10"
        },
        "4": {
          "length": "11"
        }
      }
    },
    "Micah": {
      "order": "33",
      "abbreviation": "Mic",
      "chapters": {
        "1": {
          "length": "16"
        },
        "2": {
          "length": "13"
        },
        "3": {
          "length": "12"
        },
        "4": {
          "length": "13"
        },
        "5": {
          "length": "15"
        },
        "6": {
          "length": "16"
        },
        "7": {
          "length": "20"
        }
      }
    },
    "Nahum": {
      "order": "34",
      "abbreviation": "Nah",
      "chapters": {
        "1": {
          "length": "15"
        },
        "2": {
          "length": "13"
        },
        "3": {
          "length": "19"
        }
      }
    },
    "Habakkuk": {
      "order": "35",
      "abbreviation": "Hab",
      "chapters": {
        "1": {
          "length": "17"
        },
        "2": {
          "length": "20"
        },
        "3": {
          "length": "19"
        }
      }
    },
    "Zephaniah": {
      "order": "36",
      "abbreviation": "Zeph",
      "chapters": {
        "1": {
          "length": "18"
        },
        "2": {
          "length": "15"
        },
        "3": {
          "length": "20"
        }
      }
    },
    "Haggai": {
      "order": "37",
      "abbreviation": "Hag",
      "chapters": {
        "1": {
          "length": "15"
        },
        "2": {
          "length": "23"
        }
      }
    },
    "Zechariah": {
      "order": "38",
      "abbreviation": "Zech",
      "chapters": {
        "1": {
          "length": "21"
        },
        "2": {
          "length": "13"
        },
        "3": {
          "length": "10"
        },
        "4": {
          "length": "14"
        },
        "5": {
          "length": "11"
        },
        "6": {
          "length": "15"
        },
        "7": {
          "length": "14"
        },
        "8": {
          "length": "23"
        },
        "9": {
          "length": "17"
        },
        "10": {
          "length": "12"
        },
        "11": {
          "length": "17"
        },
        "12": {
          "length": "14"
        },
        "13": {
          "length": "9"
        },
        "14": {
          "length": "21"
        }
      }
    },
    "Malachi": {
      "order": "39",
      "abbreviation": "Mal",
      "chapters": {
        "1": {
          "length": "14"
        },
        "2": {
          "length": "17"
        },
        "3": {
          "length": "18"
        },
        "4": {
          "length": "6"
        }
      }
    }
  },
  "NT": {
    "Matthew": {
      "order": "40",
      "abbreviation": "Matt",
      "chapters": {
        "1": {
          "length": "25"
        },
        "2": {
          "length": "23"
        },
        "3": {
          "length": "17"
        },
        "4": {
          "length": "25"
        },
        "5": {
          "length": "48"
        },
        "6": {
          "length": "34"
        },
        "7": {
          "length": "29"
        },
        "8": {
          "length": "34"
        },
        "9": {
          "length": "38"
        },
        "10": {
          "length": "42"
        },
        "11": {
          "length": "30"
        },
        "12": {
          "length": "50"
        },
        "13": {
          "length": "58"
        },
        "14": {
          "length": "36"
        },
        "15": {
          "length": "39"
        },
        "16": {
          "length": "28"
        },
        "17": {
          "length": "27"
        },
        "18": {
          "length": "35"
        },
        "19": {
          "length": "30"
        },
        "20": {
          "length": "34"
        },
        "21": {
          "length": "46"
        },
        "22": {
          "length": "46"
        },
        "23": {
          "length": "39"
        },
        "24": {
          "length": "51"
        },
        "25": {
          "length": "46"
        },
        "26": {
          "length": "75"
        },
        "27": {
          "length": "66"
        },
        "28": {
          "length": "20"
        }
      }
    },
    "Mark": {
      "order": "41",
      "abbreviation": "Mark",
      "chapters": {
        "1": {
          "length": "45"
        },
        "2": {
          "length": "28"
        },
        "3": {
          "length": "35"
        },
        "4": {
          "length": "41"
        },
        "5": {
          "length": "43"
        },
        "6": {
          "length": "56"
        },
        "7": {
          "length": "37"
        },
        "8": {
          "length": "38"
        },
        "9": {
          "length": "50"
        },
        "10": {
          "length": "52"
        },
        "11": {
          "length": "33"
        },
        "12": {
          "length": "44"
        },
        "13": {
          "length": "37"
        },
        "14": {
          "length": "72"
        },
        "15": {
          "length": "47"
        },
        "16": {
          "length": "20"
        }
      }
    },
    "Luke": {
      "order": "42",
      "abbreviation": "Luke",
      "chapters": {
        "1": {
          "length": "80"
        },
        "2": {
          "length": "52"
        },
        "3": {
          "length": "38"
        },
        "4": {
          "length": "44"
        },
        "5": {
          "length": "39"
        },
        "6": {
          "length": "49"
        },
        "7": {
          "length": "50"
        },
        "8": {
          "length": "56"
        },
        "9": {
          "length": "62"
        },
        "10": {
          "length": "42"
        },
        "11": {
          "length": "54"
        },
        "12": {
          "length": "59"
        },
        "13": {
          "length": "35"
        },
        "14": {
          "length": "35"
        },
        "15": {
          "length": "32"
        },
        "16": {
          "length": "31"
        },
        "17": {
          "length": "37"
        },
        "18": {
          "length": "43"
        },
        "19": {
          "length": "48"
        },
        "20": {
          "length": "47"
        },
        "21": {
          "length": "38"
        },
        "22": {
          "length": "71"
        },
        "23": {
          "length": "56"
        },
        "24": {
          "length": "53"
        }
      }
    },
    "John": {
      "order": "43",
      "abbreviation": "John",
      "chapters": {
        "1": {
          "length": "51"
        },
        "2": {
          "length": "25"
        },
        "3": {
          "length": "36"
        },
        "4": {
          "length": "54"
        },
        "5": {
          "length": "47"
        },
        "6": {
          "length": "71"
        },
        "7": {
          "length": "53"
        },
        "8": {
          "length": "59"
        },
        "9": {
          "length": "41"
        },
        "10": {
          "length": "42"
        },
        "11": {
          "length": "57"
        },
        "12": {
          "length": "50"
        },
        "13": {
          "length": "38"
        },
        "14": {
          "length": "31"
        },
        "15": {
          "length": "27"
        },
        "16": {
          "length": "33"
        },
        "17": {
          "length": "26"
        },
        "18": {
          "length": "40"
        },
        "19": {
          "length": "42"
        },
        "20": {
          "length": "31"
        },
        "21": {
          "length": "25"
        }
      }
    },
    "Acts": {
      "order": "44",
      "abbreviation": "Acts",
      "chapters": {
        "1": {
          "length": "26"
        },
        "2": {
          "length": "47"
        },
        "3": {
          "length": "26"
        },
        "4": {
          "length": "37"
        },
        "5": {
          "length": "42"
        },
        "6": {
          "length": "15"
        },
        "7": {
          "length": "60"
        },
        "8": {
          "length": "40"
        },
        "9": {
          "length": "43"
        },
        "10": {
          "length": "48"
        },
        "11": {
          "length": "30"
        },
        "12": {
          "length": "25"
        },
        "13": {
          "length": "52"
        },
        "14": {
          "length": "28"
        },
        "15": {
          "length": "41"
        },
        "16": {
          "length": "40"
        },
        "17": {
          "length": "34"
        },
        "18": {
          "length": "28"
        },
        "19": {
          "length": "41"
        },
        "20": {
          "length": "38"
        },
        "21": {
          "length": "40"
        },
        "22": {
          "length": "30"
        },
        "23": {
          "length": "35"
        },
        "24": {
          "length": "27"
        },
        "25": {
          "length": "27"
        },
        "26": {
          "length": "32"
        },
        "27": {
          "length": "44"
        },
        "28": {
          "length": "31"
        }
      }
    },
    "Romans": {
      "order": "45",
      "abbreviation": "Rom",
      "chapters": {
        "1": {
          "length": "32"
        },
        "2": {
          "length": "29"
        },
        "3": {
          "length": "31"
        },
        "4": {
          "length": "25"
        },
        "5": {
          "length": "21"
        },
        "6": {
          "length": "23"
        },
        "7": {
          "length": "25"
        },
        "8": {
          "length": "39"
        },
        "9": {
          "length": "33"
        },
        "10": {
          "length": "21"
        },
        "11": {
          "length": "36"
        },
        "12": {
          "length": "21"
        },
        "13": {
          "length": "14"
        },
        "14": {
          "length": "23"
        },
        "15": {
          "length": "33"
        },
        "16": {
          "length": "27"
        }
      }
    },
    "1 Corinthians": {
      "order": "46",
      "abbreviation": "1Cor",
      "chapters": {
        "1": {
          "length": "31"
        },
        "2": {
          "length": "16"
        },
        "3": {
          "length": "23"
        },
        "4": {
          "length": "21"
        },
        "5": {
          "length": "13"
        },
        "6": {
          "length": "20"
        },
        "7": {
          "length": "40"
        },
        "8": {
          "length": "13"
        },
        "9": {
          "length": "27"
        },
        "10": {
          "length": "33"
        },
        "11": {
          "length": "34"
        },
        "12": {
          "length": "31"
        },
        "13": {
          "length": "13"
        },
        "14": {
          "length": "40"
        },
        "15": {
          "length": "58"
        },
        "16": {
          "length": "24"
        }
      }
    },
    "2 Corinthians": {
      "order": "47",
      "abbreviation": "2Cor",
      "chapters": {
        "1": {
          "length": "24"
        },
        "2": {
          "length": "17"
        },
        "3": {
          "length": "18"
        },
        "4": {
          "length": "18"
        },
        "5": {
          "length": "21"
        },
        "6": {
          "length": "18"
        },
        "7": {
          "length": "16"
        },
        "8": {
          "length": "24"
        },
        "9": {
          "length": "15"
        },
        "10": {
          "length": "18"
        },
        "11": {
          "length": "33"
        },
        "12": {
          "length": "21"
        },
        "13": {
          "length": "14"
        }
      }
    },
    "Galatians": {
      "order": "48",
      "abbreviation": "Gal",
      "chapters": {
        "1": {
          "length": "24"
        },
        "2": {
          "length": "21"
        },
        "3": {
          "length": "29"
        },
        "4": {
          "length": "31"
        },
        "5": {
          "length": "26"
        },
        "6": {
          "length": "18"
        }
      }
    },
    "Ephesians": {
      "order": "49",
      "abbreviation": "Eph",
      "chapters": {
        "1": {
          "length": "23"
        },
        "2": {
          "length": "22"
        },
        "3": {
          "length": "21"
        },
        "4": {
          "length": "32"
        },
        "5": {
          "length": "33"
        },
        "6": {
          "length": "24"
        }
      }
    },
    "Philippians": {
      "order": "50",
      "abbreviation": "Phil",
      "chapters": {
        "1": {
          "length": "30"
        },
        "2": {
          "length": "30"
        },
        "3": {
          "length": "21"
        },
        "4": {
          "length": "23"
        }
      }
    },
    "Colossians": {
      "order": "51",
      "abbreviation": "Col",
      "chapters": {
        "1": {
          "length": "29"
        },
        "2": {
          "length": "23"
        },
        "3": {
          "length": "25"
        },
        "4": {
          "length": "18"
        }
      }
    },
    "1 Thessalonians": {
      "order": "52",
      "abbreviation": "1Thess",
      "chapters": {
        "1": {
          "length": "10"
        },
        "2": {
          "length": "20"
        },
        "3": {
          "length": "13"
        },
        "4": {
          "length": "18"
        },
        "5": {
          "length": "28"
        }
      }
    },
    "2 Thessalonians": {
      "order": "53",
      "abbreviation": "2Thess",
      "chapters": {
        "1": {
          "length": "12"
        },
        "2": {
          "length": "17"
        },
        "3": {
          "length": "18"
        }
      }
    },
    "1 Timothy": {
      "order": "54",
      "abbreviation": "1Tim",
      "chapters": {
        "1": {
          "length": "20"
        },
        "2": {
          "length": "15"
        },
        "3": {
          "length": "16"
        },
        "4": {
          "length": "16"
        },
        "5": {
          "length": "25"
        },
        "6": {
          "length": "21"
        }
      }
    },
    "2 Timothy": {
      "order": "55",
      "abbreviation": "2Tim",
      "chapters": {
        "1": {
          "length": "18"
        },
        "2": {
          "length": "26"
        },
        "3": {
          "length": "17"
        },
        "4": {
          "length": "22"
        }
      }
    },
    "Titus": {
      "order": "56",
      "abbreviation": "Titus",
      "chapters": {
        "1": {
          "length": "16"
        },
        "2": {
          "length": "15"
        },
        "3": {
          "length": "15"
        }
      }
    },
    "Philemon": {
      "order": "57",
      "abbreviation": "Phlm",
      "chapters": {
        "1": {
          "length": "25"
        }
      }
    },
    "Hebrews": {
      "order": "58",
      "abbreviation": "Heb",
      "chapters": {
        "1": {
          "length": "14"
        },
        "2": {
          "length": "18"
        },
        "3": {
          "length": "19"
        },
        "4": {
          "length": "16"
        },
        "5": {
          "length": "14"
        },
        "6": {
          "length": "20"
        },
        "7": {
          "length": "28"
        },
        "8": {
          "length": "13"
        },
        "9": {
          "length": "28"
        },
        "10": {
          "length": "39"
        },
        "11": {
          "length": "40"
        },
        "12": {
          "length": "29"
        },
        "13": {
          "length": "25"
        }
      }
    },
    "James": {
      "order": "59",
      "abbreviation": "Jas",
      "chapters": {
        "1": {
          "length": "27"
        },
        "2": {
          "length": "26"
        },
        "3": {
          "length": "18"
        },
        "4": {
          "length": "17"
        },
        "5": {
          "length": "20"
        }
      }
    },
    "1 Peter": {
      "order": "60",
      "abbreviation": "1Pet",
      "chapters": {
        "1": {
          "length": "25"
        },
        "2": {
          "length": "25"
        },
        "3": {
          "length": "22"
        },
        "4": {
          "length": "19"
        },
        "5": {
          "length": "14"
        }
      }
    },
    "2 Peter": {
      "order": "61",
      "abbreviation": "2Pet",
      "chapters": {
        "1": {
          "length": "21"
        },
        "2": {
          "length": "22"
        },
        "3": {
          "length": "18"
        }
      }
    },
    "1 John": {
      "order": "62",
      "abbreviation": "1John",
      "chapters": {
        "1": {
          "length": "10"
        },
        "2": {
          "length": "29"
        },
        "3": {
          "length": "24"
        },
        "4": {
          "length": "21"
        },
        "5": {
          "length": "21"
        }
      }
    },
    "2 John": {
      "order": "63",
      "abbreviation": "2John",
      "chapters": {
        "1": {
          "length": "13"
        }
      }
    },
    "3 John": {
      "order": "64",
      "abbreviation": "3John",
      "chapters": {
        "1": {
          "length": "15"
        }
      }
    },
    "Jude": {
      "order": "65",
      "abbreviation": "Jude",
      "chapters": {
        "1": {
          "length": "25"
        }
      }
    },
    "Revelation": {
      "order": "66",
      "abbreviation": "Rev",
      "chapters": {
        "1": {
          "length": "20"
        },
        "2": {
          "length": "29"
        },
        "3": {
          "length": "22"
        },
        "4": {
          "length": "11"
        },
        "5": {
          "length": "14"
        },
        "6": {
          "length": "17"
        },
        "7": {
          "length": "17"
        },
        "8": {
          "length": "13"
        },
        "9": {
          "length": "21"
        },
        "10": {
          "length": "11"
        },
        "11": {
          "length": "19"
        },
        "12": {
          "length": "17"
        },
        "13": {
          "length": "18"
        },
        "14": {
          "length": "20"
        },
        "15": {
          "length": "8"
        },
        "16": {
          "length": "21"
        },
        "17": {
          "length": "18"
        },
        "18": {
          "length": "24"
        },
        "19": {
          "length": "21"
        },
        "20": {
          "length": "15"
        },
        "21": {
          "length": "27"
        },
        "22": {
          "length": "21"
        }
      }
    }
  }
};

var sectionNames = Object.keys(books);
bookMenu = [];
for(var i=0; i < sectionNames.length;i++){
	bookMenu[i] = {};
	bookMenu[i].title = sectionNames[i];
	bookMenu[i].books = [];

  var bookNames = Object.keys(books[sectionNames[i]])
  for(var j=0; j<bookNames.length; j++){
    bookMenu[i].books[j] = {};
    bookMenu[i].books[j].title = bookNames[j];
    bookMenu[i].books[j].order = books[sectionNames[i]][bookNames[j]].order;
    bookMenu[i].books[j].abbreviation = books[sectionNames[i]][bookNames[j]].abbreviation;
    bookMenu[i].books[j].chapters = [];

    var chapterNames = Object.keys(books[sectionNames[i]][bookNames[j]].chapters);
    for(var k=0; k<chapterNames.length; k++){
      bookMenu[i].books[j].chapters[k] = {};
      bookMenu[i].books[j].chapters[k].title = chapterNames[k];
      bookMenu[i].books[j].chapters[k].length = books[sectionNames[i]][bookNames[j]].chapters[chapterNames[k]].length;
    }
    console.log(chapterNames.length);
  }
}

console.log(JSON.stringify(bookMenu));

fs.writeFileSync('./bookMenu.json',JSON.stringify(bookMenu));

fs.writeFileSync('./bible-toc.html','');

fs.appendFileSync('./bible-toc.html',"<paper-menu>");

for(var i=0; i<bookMenu.length;i++){
  fs.appendFileSync('./bible-toc.html','<paper-submenu>');
  fs.appendFileSync('./bible-toc.html','<paper-item class="menu-trigger">' + bookMenu[i].title + '</paper-item>');
  fs.appendFileSync('./bible-toc.html','<paper-menu class="menu-content">');
  for(var j=0; j<bookMenu[i].books.length;j++){
    fs.appendFileSync('./bible-toc.html','<paper-submenu>');
    fs.appendFileSync('./bible-toc.html','<paper-item class="menu-trigger">' + bookMenu[i].books[j].title + '</paper-item>');
    fs.appendFileSync('./bible-toc.html','<paper-menu class="menu-content">');
    for(var k=0; k<bookMenu[i].books[j].chapters.length;k++){
      fs.appendFileSync('./bible-toc.html','<paper-submenu>');
      fs.appendFileSync('./bible-toc.html','<paper-item class="menu-trigger">' + bookMenu[i].books[j].chapters[k].title + '</paper-item>');
      fs.appendFileSync('./bible-toc.html','<paper-menu class="menu-content">');
      fs.appendFileSync('./bible-toc.html','<paper-dropdown-menu style="width:40%" label="Start">');
      fs.appendFileSync('./bible-toc.html','<paper-menu class="dropdown-content" selected="0">');
      fs.appendFileSync('./bible-toc.html','</paper-menu>');
      fs.appendFileSync('./bible-toc.html','</paper-dropdown-menu>');
      fs.appendFileSync('./bible-toc.html','<paper-dropdown-menu style="width:40%" label="End">');
      fs.appendFileSync('./bible-toc.html','<paper-menu class="dropdown-content" selected="0">');
      fs.appendFileSync('./bible-toc.html','</paper-menu>');
      fs.appendFileSync('./bible-toc.html','</paper-dropdown-menu>');
      fs.appendFileSync('./bible-toc.html','</paper-menu>');
      fs.appendFileSync('./bible-toc.html','</paper-submenu>');
    }
    fs.appendFileSync('./bible-toc.html','</paper-menu>');
    fs.appendFileSync('./bible-toc.html','</paper-submenu>');                     
  }
  fs.appendFileSync('./bible-toc.html','</paper-menu>');
  fs.appendFileSync('./bible-toc.html','</paper-submenu>');
}
fs.appendFileSync('./bible-toc.html',"</paper-menu>");