if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_chittagonian());
}
function Keyboard_chittagonian()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_chittagonian";
  this.KN="Sitainga";
  this.KMINVER="10.0";
  this.KV=null;
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0.1";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KVKD="U_0061 U_007A U_0111 U_1E0D U_0167 U_1E6D U_00F1 U_1E45 U_0254 U_E001 U_E002 U_E003 U_E004 U_0110 U_1E0C U_0166 U_1E6C U_00D1 U_1E44 U_0186 U_E005 U_E006 U_E007 U_E008";
  this.KVKL={
  "phone": {
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0071",
                "text": "q",
                "hint": "1",
                "sk": [
                  {
                    "id": "U_0031",
                    "text": "1"
                  }
                ]
              },
              {
                "id": "U_0077",
                "text": "w",
                "hint": "2",
                "sk": [
                  {
                    "id": "U_0032",
                    "text": "2"
                  }
                ]
              },
              {
                "id": "U_0065",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E9",
                    "text": "é"
                  },
                  {
                    "id": "U_011B",
                    "text": "ě"
                  },
                  {
                    "id": "U_00EA",
                    "text": "ê"
                  },
                  {
                    "id": "U_1EBD",
                    "text": "ẽ"
                  }
                ],
                "hint": "3"
              },
              {
                "id": "U_0072",
                "text": "r",
                "hint": "4",
                "sk": [
                  {
                    "id": "U_0034",
                    "text": "4"
                  }
                ]
              },
              {
                "id": "U_0074",
                "text": "t",
                "sk": [
                  {
                    "id": "U_0167",
                    "text": "ŧ"
                  },
                  {
                    "id": "U_1E6D",
                    "text": "ṭ"
                  }
                ],
                "hint": "5"
              },
              {
                "id": "U_0079",
                "text": "y",
                "hint": "6",
                "sk": [
                  {
                    "id": "U_0036",
                    "text": "6"
                  }
                ]
              },
              {
                "id": "U_0075",
                "text": "u",
                "sk": [
                  {
                    "id": "U_00FA",
                    "text": "ú"
                  },
                  {
                    "id": "U_01D4",
                    "text": "ǔ"
                  },
                  {
                    "id": "U_00FB",
                    "text": "û"
                  },
                  {
                    "id": "U_0169",
                    "text": "ũ"
                  }
                ],
                "hint": "7"
              },
              {
                "id": "U_0069",
                "text": "i",
                "sk": [
                  {
                    "id": "U_00ED",
                    "text": "í"
                  },
                  {
                    "id": "U_01D0",
                    "text": "ǐ"
                  },
                  {
                    "id": "U_00EE",
                    "text": "î"
                  },
                  {
                    "id": "U_0129",
                    "text": "ĩ"
                  }
                ],
                "hint": "8"
              },
              {
                "id": "U_006F",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F3",
                    "text": "ó"
                  },
                  {
                    "id": "U_01D2",
                    "text": "ǒ"
                  },
                  {
                    "id": "U_00F4",
                    "text": "ô"
                  },
                  {
                    "id": "U_00F5",
                    "text": "õ"
                  }
                ],
                "hint": "9"
              },
              {
                "id": "U_0070",
                "text": "p",
                "hint": "0",
                "sk": [
                  {
                    "id": "U_0030",
                    "text": "0"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0061",
                "text": "a",
                "sk": [
                  {
                    "id": "U_00E1",
                    "text": "á"
                  },
                  {
                    "id": "U_01CE",
                    "text": "ǎ"
                  },
                  {
                    "id": "U_00E2",
                    "text": "â"
                  },
                  {
                    "id": "U_00E3",
                    "text": "ã"
                  }
                ],
                "pad": "40",
                "hint": "@"
              },
              {
                "id": "U_0073",
                "text": "s",
                "hint": "$",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  },
                  {
                    "id": "U_015F",
                    "text": "ş"
                  }
                ]
              },
              {
                "id": "U_0064",
                "text": "d",
                "sk": [
                  {
                    "id": "U_0111",
                    "text": "đ"
                  },
                  {
                    "id": "U_1E0D",
                    "text": "ḍ"
                  }
                ],
                "hint": "<"
              },
              {
                "id": "U_0066",
                "text": "f",
                "hint": ">",
                "sk": [
                  {
                    "id": "U_003E",
                    "text": ">"
                  }
                ]
              },
              {
                "id": "U_0067",
                "text": "g",
                "hint": "+",
                "sk": [
                  {
                    "id": "U_002B",
                    "text": "+"
                  }
                ]
              },
              {
                "id": "U_0068",
                "text": "h",
                "hint": "-",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  }
                ]
              },
              {
                "id": "U_006A",
                "text": "j",
                "hint": "*",
                "sk": [
                  {
                    "id": "U_002A",
                    "text": "*"
                  }
                ]
              },
              {
                "id": "U_006B",
                "text": "k",
                "hint": "/",
                "sk": [
                  {
                    "id": "U_002F",
                    "text": "/"
                  }
                ]
              },
              {
                "id": "U_006C",
                "text": "l",
                "hint": "=",
                "sk": [
                  {
                    "id": "U_003D",
                    "text": "="
                  }
                ]
              },
              {
                "id": "T_spacer_row2",
                "width": "100",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "▲",
                "width": "150",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "U_007A",
                "text": "z",
                "hint": "(",
                "sk": [
                  {
                    "id": "U_0028",
                    "text": "("
                  }
                ]
              },
              {
                "id": "U_0078",
                "text": "x",
                "hint": ")",
                "sk": [
                  {
                    "id": "U_0029",
                    "text": ")"
                  }
                ]
              },
              {
                "id": "U_0063",
                "text": "c",
                "hint": "'",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  }
                ]
              },
              {
                "id": "U_0254",
                "text": "ɔ",
                "sk": [
                  {
                    "id": "U_E001",
                    "text": "ɔ́"
                  },
                  {
                    "id": "U_E002",
                    "text": "ɔ̌"
                  },
                  {
                    "id": "U_E003",
                    "text": "ɔ̂"
                  },
                  {
                    "id": "U_E004",
                    "text": "ɔ̃"
                  }
                ],
                "hint": "\""
              },
              {
                "id": "U_0062",
                "text": "b",
                "hint": "!",
                "sk": [
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "U_006E",
                "text": "n",
                "sk": [
                  {
                    "id": "U_00F1",
                    "text": "ñ"
                  },
                  {
                    "id": "U_1E45",
                    "text": "ṅ"
                  }
                ],
                "hint": "?"
              },
              {
                "id": "U_006D",
                "text": "m",
                "hint": ",",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "⌫",
                "width": "150"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_NUM",
                "text": "123",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "🌐",
                "width": "100"
              },
              {
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "400"
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "⏎",
                "width": "150",
                "nextlayer": "shift"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0051",
                "text": "Q",
                "nextlayer": "default",
                "hint": "1",
                "sk": [
                  {
                    "id": "U_0031",
                    "text": "1"
                  }
                ]
              },
              {
                "id": "U_0057",
                "text": "W",
                "nextlayer": "default",
                "hint": "2",
                "sk": [
                  {
                    "id": "U_0032",
                    "text": "2"
                  }
                ]
              },
              {
                "id": "U_0045",
                "text": "E",
                "sk": [
                  {
                    "id": "U_00C9",
                    "text": "É"
                  },
                  {
                    "id": "U_011A",
                    "text": "Ě"
                  },
                  {
                    "id": "U_00CA",
                    "text": "Ê"
                  },
                  {
                    "id": "U_1EBC",
                    "text": "Ẽ"
                  }
                ],
                "nextlayer": "default",
                "hint": "3"
              },
              {
                "id": "U_0052",
                "text": "R",
                "nextlayer": "default",
                "hint": "4",
                "sk": [
                  {
                    "id": "U_0034",
                    "text": "4"
                  }
                ]
              },
              {
                "id": "U_0054",
                "text": "T",
                "sk": [
                  {
                    "id": "U_0166",
                    "text": "Ŧ"
                  },
                  {
                    "id": "U_1E6C",
                    "text": "Ṭ"
                  }
                ],
                "nextlayer": "default",
                "hint": "5"
              },
              {
                "id": "U_0059",
                "text": "Y",
                "nextlayer": "default",
                "hint": "6",
                "sk": [
                  {
                    "id": "U_0036",
                    "text": "6"
                  }
                ]
              },
              {
                "id": "U_0055",
                "text": "U",
                "sk": [
                  {
                    "id": "U_00DA",
                    "text": "Ú"
                  },
                  {
                    "id": "U_01D3",
                    "text": "Ǔ"
                  },
                  {
                    "id": "U_00DB",
                    "text": "Û"
                  },
                  {
                    "id": "U_0168",
                    "text": "Ũ"
                  }
                ],
                "nextlayer": "default",
                "hint": "7"
              },
              {
                "id": "U_0049",
                "text": "I",
                "sk": [
                  {
                    "id": "U_00CD",
                    "text": "Í"
                  },
                  {
                    "id": "U_01CF",
                    "text": "Ǐ"
                  },
                  {
                    "id": "U_00CE",
                    "text": "Î"
                  },
                  {
                    "id": "U_0128",
                    "text": "Ĩ"
                  }
                ],
                "nextlayer": "default",
                "hint": "8"
              },
              {
                "id": "U_004F",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D3",
                    "text": "Ó"
                  },
                  {
                    "id": "U_01D1",
                    "text": "Ǒ"
                  },
                  {
                    "id": "U_00D4",
                    "text": "Ô"
                  },
                  {
                    "id": "U_00D5",
                    "text": "Õ"
                  }
                ],
                "nextlayer": "default",
                "hint": "9"
              },
              {
                "id": "U_0050",
                "text": "P",
                "nextlayer": "default",
                "hint": "0",
                "sk": [
                  {
                    "id": "U_0030",
                    "text": "0"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0041",
                "text": "A",
                "sk": [
                  {
                    "id": "U_00C1",
                    "text": "Á"
                  },
                  {
                    "id": "U_01CD",
                    "text": "Ǎ"
                  },
                  {
                    "id": "U_00C2",
                    "text": "Â"
                  },
                  {
                    "id": "U_00C3",
                    "text": "Ã"
                  }
                ],
                "nextlayer": "default",
                "pad": "40",
                "hint": "@"
              },
              {
                "id": "U_0053",
                "text": "S",
                "nextlayer": "default",
                "hint": "$",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  },
                  {
                    "id": "U_015E",
                    "text": "Ş"
                  }
                ]
              },
              {
                "id": "U_0044",
                "text": "D",
                "sk": [
                  {
                    "id": "U_0110",
                    "text": "Đ"
                  },
                  {
                    "id": "U_1E0C",
                    "text": "Ḍ"
                  }
                ],
                "nextlayer": "default",
                "hint": "<"
              },
              {
                "id": "U_0046",
                "text": "F",
                "nextlayer": "default",
                "hint": ">",
                "sk": [
                  {
                    "id": "U_003E",
                    "text": ">"
                  }
                ]
              },
              {
                "id": "U_0047",
                "text": "G",
                "nextlayer": "default",
                "hint": "+",
                "sk": [
                  {
                    "id": "U_002B",
                    "text": "+"
                  }
                ]
              },
              {
                "id": "U_0048",
                "text": "H",
                "nextlayer": "default",
                "hint": "-",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  }
                ]
              },
              {
                "id": "U_004A",
                "text": "J",
                "nextlayer": "default",
                "hint": "*",
                "sk": [
                  {
                    "id": "U_002A",
                    "text": "*"
                  }
                ]
              },
              {
                "id": "U_004B",
                "text": "K",
                "nextlayer": "default",
                "hint": "/",
                "sk": [
                  {
                    "id": "U_002F",
                    "text": "/"
                  }
                ]
              },
              {
                "id": "U_004C",
                "text": "L",
                "nextlayer": "default",
                "hint": "=",
                "sk": [
                  {
                    "id": "U_003D",
                    "text": "="
                  }
                ]
              },
              {
                "id": "T_spacer_row2",
                "width": "100",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "▲",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "U_005A",
                "text": "Z",
                "nextlayer": "default",
                "hint": "(",
                "sk": [
                  {
                    "id": "U_0028",
                    "text": "("
                  }
                ]
              },
              {
                "id": "U_0058",
                "text": "X",
                "nextlayer": "default",
                "hint": ")",
                "sk": [
                  {
                    "id": "U_0029",
                    "text": ")"
                  }
                ]
              },
              {
                "id": "U_0043",
                "text": "C",
                "nextlayer": "default",
                "hint": "'",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  }
                ]
              },
              {
                "id": "U_0186",
                "text": "Ɔ",
                "sk": [
                  {
                    "id": "U_E005",
                    "text": "Ɔ́"
                  },
                  {
                    "id": "U_E006",
                    "text": "Ɔ̌"
                  },
                  {
                    "id": "U_E007",
                    "text": "Ɔ̂"
                  },
                  {
                    "id": "U_E008",
                    "text": "Ɔ̃"
                  }
                ],
                "nextlayer": "default",
                "hint": "\""
              },
              {
                "id": "U_0042",
                "text": "B",
                "nextlayer": "default",
                "hint": "!",
                "sk": [
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "U_004E",
                "text": "N",
                "sk": [
                  {
                    "id": "U_00D1",
                    "text": "Ñ"
                  },
                  {
                    "id": "U_1E44",
                    "text": "Ṅ"
                  }
                ],
                "nextlayer": "default",
                "hint": "?"
              },
              {
                "id": "U_004D",
                "text": "M",
                "nextlayer": "default",
                "hint": ",",
                "sk": [
                  {
                    "id": "U_002C",
                    "text": ","
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "⌫",
                "width": "150"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_NUM",
                "text": "123",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "🌐",
                "width": "100"
              },
              {
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "400"
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "K_ENTER",
                "text": "⏎",
                "width": "150",
                "nextlayer": "shift"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1"
              },
              {
                "id": "U_0032",
                "text": "2"
              },
              {
                "id": "U_0033",
                "text": "3"
              },
              {
                "id": "U_0034",
                "text": "4"
              },
              {
                "id": "U_0035",
                "text": "5"
              },
              {
                "id": "U_0036",
                "text": "6"
              },
              {
                "id": "U_0037",
                "text": "7"
              },
              {
                "id": "U_0038",
                "text": "8"
              },
              {
                "id": "U_0039",
                "text": "9"
              },
              {
                "id": "U_0030",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0040",
                "text": "@",
                "pad": "40"
              },
              {
                "id": "U_0023",
                "text": "#"
              },
              {
                "id": "U_0024",
                "text": "$"
              },
              {
                "id": "U_0025",
                "text": "%"
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "U_002B",
                "text": "+"
              },
              {
                "id": "U_003D",
                "text": "="
              },
              {
                "id": "U_002F",
                "text": "/"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "U_0028",
                "text": "("
              },
              {
                "id": "U_0029",
                "text": ")"
              },
              {
                "id": "U_005F",
                "text": "_"
              },
              {
                "id": "U_0022",
                "text": "\""
              },
              {
                "id": "U_003A",
                "text": ":"
              },
              {
                "id": "U_003B",
                "text": ";"
              },
              {
                "id": "U_0027",
                "text": "'"
              },
              {
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "⌫",
                "width": "200"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "T_NUM",
                "text": "ABC",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "🌐",
                "width": "100"
              },
              {
                "id": "U_002C",
                "text": ","
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "400"
              },
              {
                "id": "U_002E",
                "text": "."
              },
              {
                "id": "K_ENTER",
                "text": "⏎",
                "width": "150",
                "nextlayer": "shift"
              }
            ]
          }
        ]
      }
    ],
    "fontsize": "1.2em",
    "font": "DejaVu Sans",
    "displayUnderlying": false
  },
  "tablet": {
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "hint": "!",
                "sk": [
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "K_2",
                "text": "2",
                "hint": "@",
                "sk": [
                  {
                    "id": "U_0040",
                    "text": "@"
                  }
                ]
              },
              {
                "id": "K_3",
                "text": "3",
                "hint": "#",
                "sk": [
                  {
                    "id": "U_0023",
                    "text": "#"
                  }
                ]
              },
              {
                "id": "K_4",
                "text": "4",
                "hint": "$",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "5",
                "hint": "%",
                "sk": [
                  {
                    "id": "U_0025",
                    "text": "%"
                  }
                ]
              },
              {
                "id": "K_6",
                "text": "6",
                "hint": "^",
                "sk": [
                  {
                    "id": "U_005E",
                    "text": "^"
                  }
                ]
              },
              {
                "id": "K_7",
                "text": "7",
                "hint": "&",
                "sk": [
                  {
                    "id": "U_0026",
                    "text": "&"
                  }
                ]
              },
              {
                "id": "K_8",
                "text": "8",
                "hint": "*",
                "sk": [
                  {
                    "id": "U_002A",
                    "text": "*"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "9",
                "hint": "(",
                "sk": [
                  {
                    "id": "U_0028",
                    "text": "("
                  }
                ]
              },
              {
                "id": "K_0",
                "text": "0",
                "hint": ")",
                "sk": [
                  {
                    "id": "U_0029",
                    "text": ")"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0071",
                "text": "q",
                "pad": "40"
              },
              {
                "id": "U_0077",
                "text": "w"
              },
              {
                "id": "U_0065",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E9",
                    "text": "é"
                  },
                  {
                    "id": "U_011B",
                    "text": "ě"
                  },
                  {
                    "id": "U_00EA",
                    "text": "ê"
                  },
                  {
                    "id": "U_1EBD",
                    "text": "ẽ"
                  }
                ]
              },
              {
                "id": "U_0072",
                "text": "r"
              },
              {
                "id": "U_0074",
                "text": "t",
                "sk": [
                  {
                    "id": "U_0167",
                    "text": "ŧ"
                  },
                  {
                    "id": "U_1E6D",
                    "text": "ṭ"
                  }
                ]
              },
              {
                "id": "U_0079",
                "text": "y"
              },
              {
                "id": "U_0075",
                "text": "u",
                "sk": [
                  {
                    "id": "U_00FA",
                    "text": "ú"
                  },
                  {
                    "id": "U_01D4",
                    "text": "ǔ"
                  },
                  {
                    "id": "U_00FB",
                    "text": "û"
                  },
                  {
                    "id": "U_0169",
                    "text": "ũ"
                  }
                ]
              },
              {
                "id": "U_0069",
                "text": "i",
                "sk": [
                  {
                    "id": "U_00ED",
                    "text": "í"
                  },
                  {
                    "id": "U_01D0",
                    "text": "ǐ"
                  },
                  {
                    "id": "U_00EE",
                    "text": "î"
                  },
                  {
                    "id": "U_0129",
                    "text": "ĩ"
                  }
                ]
              },
              {
                "id": "U_006F",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F3",
                    "text": "ó"
                  },
                  {
                    "id": "U_01D2",
                    "text": "ǒ"
                  },
                  {
                    "id": "U_00F4",
                    "text": "ô"
                  },
                  {
                    "id": "U_00F5",
                    "text": "õ"
                  }
                ]
              },
              {
                "id": "U_0070",
                "text": "p"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "U_0061",
                "text": "a",
                "sk": [
                  {
                    "id": "U_00E1",
                    "text": "á"
                  },
                  {
                    "id": "U_01CE",
                    "text": "ǎ"
                  },
                  {
                    "id": "U_00E2",
                    "text": "â"
                  },
                  {
                    "id": "U_00E3",
                    "text": "ã"
                  }
                ]
              },
              {
                "id": "U_0073",
                "text": "s",
                "sk": [
                  {
                    "id": "U_015F",
                    "text": "ş"
                  }
                ]
              },
              {
                "id": "U_0064",
                "text": "d",
                "sk": [
                  {
                    "id": "U_0111",
                    "text": "đ"
                  },
                  {
                    "id": "U_1E0D",
                    "text": "ḍ"
                  }
                ]
              },
              {
                "id": "U_0066",
                "text": "f"
              },
              {
                "id": "U_0067",
                "text": "g"
              },
              {
                "id": "U_0068",
                "text": "h"
              },
              {
                "id": "U_006A",
                "text": "j"
              },
              {
                "id": "U_006B",
                "text": "k"
              },
              {
                "id": "U_006C",
                "text": "l"
              },
              {
                "id": "T_spacer_row2",
                "width": "100",
                "sp": "10"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "▲",
                "width": "150",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "U_007A",
                "text": "z"
              },
              {
                "id": "U_0078",
                "text": "x"
              },
              {
                "id": "U_0063",
                "text": "c"
              },
              {
                "id": "U_0254",
                "text": "ɔ",
                "sk": [
                  {
                    "id": "U_E001",
                    "text": "ɔ́"
                  },
                  {
                    "id": "U_E002",
                    "text": "ɔ̌"
                  },
                  {
                    "id": "U_E003",
                    "text": "ɔ̂"
                  },
                  {
                    "id": "U_E004",
                    "text": "ɔ̃"
                  }
                ],
                "hint": "\""
              },
              {
                "id": "U_0062",
                "text": "b"
              },
              {
                "id": "U_006E",
                "text": "n",
                "sk": [
                  {
                    "id": "U_00F1",
                    "text": "ñ"
                  },
                  {
                    "id": "U_1E45",
                    "text": "ṅ"
                  }
                ]
              },
              {
                "id": "U_006D",
                "text": "m"
              },
              {
                "id": "K_BKSP",
                "text": "⌫",
                "width": "150"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "T_NUM",
                "text": "123",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "🌐",
                "width": "100"
              },
              {
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "400"
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ],
                "nextlayer": "shift"
              },
              {
                "id": "K_ENTER",
                "text": "⏎",
                "width": "150",
                "nextlayer": "shift"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "nextlayer": "default",
                "hint": "!",
                "sk": [
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ]
              },
              {
                "id": "K_2",
                "text": "2",
                "nextlayer": "default",
                "hint": "@",
                "sk": [
                  {
                    "id": "U_0040",
                    "text": "@"
                  }
                ]
              },
              {
                "id": "K_3",
                "text": "3",
                "nextlayer": "default",
                "hint": "#",
                "sk": [
                  {
                    "id": "U_0023",
                    "text": "#"
                  }
                ]
              },
              {
                "id": "K_4",
                "text": "4",
                "nextlayer": "default",
                "hint": "$",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "5",
                "nextlayer": "default",
                "hint": "%",
                "sk": [
                  {
                    "id": "U_0025",
                    "text": "%"
                  }
                ]
              },
              {
                "id": "K_6",
                "text": "6",
                "nextlayer": "default",
                "hint": "^",
                "sk": [
                  {
                    "id": "U_005E",
                    "text": "^"
                  }
                ]
              },
              {
                "id": "K_7",
                "text": "7",
                "nextlayer": "default",
                "hint": "&",
                "sk": [
                  {
                    "id": "U_0026",
                    "text": "&"
                  }
                ]
              },
              {
                "id": "K_8",
                "text": "8",
                "nextlayer": "default",
                "hint": "*",
                "sk": [
                  {
                    "id": "U_002A",
                    "text": "*"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "9",
                "nextlayer": "default",
                "hint": "(",
                "sk": [
                  {
                    "id": "U_0028",
                    "text": "("
                  }
                ]
              },
              {
                "id": "K_0",
                "text": "0",
                "nextlayer": "default",
                "hint": ")",
                "sk": [
                  {
                    "id": "U_0029",
                    "text": ")"
                  }
                ]
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0051",
                "text": "Q",
                "nextlayer": "default",
                "pad": "40"
              },
              {
                "id": "U_0057",
                "text": "W",
                "nextlayer": "default"
              },
              {
                "id": "U_0045",
                "text": "E",
                "sk": [
                  {
                    "id": "U_00C9",
                    "text": "É"
                  },
                  {
                    "id": "U_011A",
                    "text": "Ě"
                  },
                  {
                    "id": "U_00CA",
                    "text": "Ê"
                  },
                  {
                    "id": "U_1EBC",
                    "text": "Ẽ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0052",
                "text": "R",
                "nextlayer": "default"
              },
              {
                "id": "U_0054",
                "text": "T",
                "sk": [
                  {
                    "id": "U_0166",
                    "text": "Ŧ"
                  },
                  {
                    "id": "U_1E6C",
                    "text": "Ṭ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0059",
                "text": "Y",
                "nextlayer": "default"
              },
              {
                "id": "U_0055",
                "text": "U",
                "sk": [
                  {
                    "id": "U_00DA",
                    "text": "Ú"
                  },
                  {
                    "id": "U_01D3",
                    "text": "Ǔ"
                  },
                  {
                    "id": "U_00DB",
                    "text": "Û"
                  },
                  {
                    "id": "U_0168",
                    "text": "Ũ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0049",
                "text": "I",
                "sk": [
                  {
                    "id": "U_00CD",
                    "text": "Í"
                  },
                  {
                    "id": "U_01CF",
                    "text": "Ǐ"
                  },
                  {
                    "id": "U_00CE",
                    "text": "Î"
                  },
                  {
                    "id": "U_0128",
                    "text": "Ĩ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_004F",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D3",
                    "text": "Ó"
                  },
                  {
                    "id": "U_01D1",
                    "text": "Ǒ"
                  },
                  {
                    "id": "U_00D4",
                    "text": "Ô"
                  },
                  {
                    "id": "U_00D5",
                    "text": "Õ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0050",
                "text": "P",
                "nextlayer": "default"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "U_0041",
                "text": "A",
                "sk": [
                  {
                    "id": "U_00C1",
                    "text": "Á"
                  },
                  {
                    "id": "U_01CD",
                    "text": "Ǎ"
                  },
                  {
                    "id": "U_00C2",
                    "text": "Â"
                  },
                  {
                    "id": "U_00C3",
                    "text": "Ã"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0053",
                "text": "S",
                "nextlayer": "default",
                "sk": [
                  {
                    "id": "U_015E",
                    "text": "Ş"
                  }
                ]
              },
              {
                "id": "U_0044",
                "text": "D",
                "sk": [
                  {
                    "id": "U_0110",
                    "text": "Đ"
                  },
                  {
                    "id": "U_1E0C",
                    "text": "Ḍ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0046",
                "text": "F",
                "nextlayer": "default"
              },
              {
                "id": "U_0047",
                "text": "G",
                "nextlayer": "default"
              },
              {
                "id": "U_0048",
                "text": "H",
                "nextlayer": "default"
              },
              {
                "id": "U_004A",
                "text": "J",
                "nextlayer": "default"
              },
              {
                "id": "U_004B",
                "text": "K",
                "nextlayer": "default"
              },
              {
                "id": "U_004C",
                "text": "L",
                "nextlayer": "default"
              },
              {
                "id": "T_spacer_row2",
                "width": "100",
                "sp": "10"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "▲",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "U_005A",
                "text": "Z",
                "nextlayer": "default"
              },
              {
                "id": "U_0058",
                "text": "X",
                "nextlayer": "default"
              },
              {
                "id": "U_0043",
                "text": "C",
                "nextlayer": "default"
              },
              {
                "id": "U_0186",
                "text": "Ɔ",
                "sk": [
                  {
                    "id": "U_E005",
                    "text": "Ɔ́"
                  },
                  {
                    "id": "U_E006",
                    "text": "Ɔ̌"
                  },
                  {
                    "id": "U_E007",
                    "text": "Ɔ̂"
                  },
                  {
                    "id": "U_E008",
                    "text": "Ɔ̃"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_0042",
                "text": "B",
                "nextlayer": "default"
              },
              {
                "id": "U_004E",
                "text": "N",
                "sk": [
                  {
                    "id": "U_00D1",
                    "text": "Ñ"
                  },
                  {
                    "id": "U_1E44",
                    "text": "Ṅ"
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "U_004D",
                "text": "M",
                "nextlayer": "default"
              },
              {
                "id": "K_BKSP",
                "text": "⌫",
                "width": "150"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "T_NUM",
                "text": "123",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "🌐",
                "width": "100"
              },
              {
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ],
                "nextlayer": "default"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "400"
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  },
                  {
                    "id": "U_003F",
                    "text": "?"
                  },
                  {
                    "id": "U_0021",
                    "text": "!"
                  }
                ],
                "nextlayer": "shift"
              },
              {
                "id": "K_ENTER",
                "text": "⏎",
                "width": "150",
                "nextlayer": "shift"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1"
              },
              {
                "id": "U_0032",
                "text": "2"
              },
              {
                "id": "U_0033",
                "text": "3"
              },
              {
                "id": "U_0034",
                "text": "4"
              },
              {
                "id": "U_0035",
                "text": "5"
              },
              {
                "id": "U_0036",
                "text": "6"
              },
              {
                "id": "U_0037",
                "text": "7"
              },
              {
                "id": "U_0038",
                "text": "8"
              },
              {
                "id": "U_0039",
                "text": "9"
              },
              {
                "id": "U_0030",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0040",
                "text": "@",
                "pad": "40"
              },
              {
                "id": "U_0023",
                "text": "#"
              },
              {
                "id": "U_0024",
                "text": "$"
              },
              {
                "id": "U_0025",
                "text": "%"
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "U_002B",
                "text": "+"
              },
              {
                "id": "U_003D",
                "text": "="
              },
              {
                "id": "U_002F",
                "text": "/"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "U_0028",
                "text": "("
              },
              {
                "id": "U_0029",
                "text": ")"
              },
              {
                "id": "U_005F",
                "text": "_"
              },
              {
                "id": "U_0022",
                "text": "\""
              },
              {
                "id": "U_003A",
                "text": ":"
              },
              {
                "id": "U_003B",
                "text": ";"
              },
              {
                "id": "U_0027",
                "text": "'"
              },
              {
                "id": "U_003F",
                "text": "?"
              },
              {
                "id": "U_0021",
                "text": "!"
              },
              {
                "id": "U_005C",
                "text": "\\"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "🌐",
                "width": "100"
              },
              {
                "id": "U_005B",
                "text": "["
              },
              {
                "id": "U_005D",
                "text": "]"
              },
              {
                "id": "U_007B",
                "text": "{"
              },
              {
                "id": "U_007D",
                "text": "}"
              },
              {
                "id": "U_007C",
                "text": "|"
              },
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "id": "U_005E",
                "text": "^"
              },
              {
                "id": "K_BKSP",
                "text": "⌫",
                "width": "200"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "T_NUM",
                "text": "ABC",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "U_002C",
                "text": ","
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "500"
              },
              {
                "id": "U_002E",
                "text": ".",
                "nextlayer": "shift"
              },
              {
                "id": "K_ENTER",
                "text": "⏎",
                "width": "150",
                "nextlayer": "shift"
              }
            ]
          }
        ]
      }
    ],
    "fontsize": "1.2em",
    "font": "DejaVu Sans",
    "displayUnderlying": false
  }
};
  this.s_sentencePunctuation_12=".?!";
  this.s_whitespace_13="  \r\n\t";
  this.s20="touch";
  this.s21="touch";
  this.s22="";
  this.s23="shift";
  this.s24="shift";
  this.s25="shift";
  this.s26="shift";
  this.s27="default";
  this.KVER="18.0.249.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gn=function(t,e) {
    return this.g_NewContext_1(t,e);
  };
  this.gpk=function(t,e) {
    return this.g_PostKeystroke_2(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"đ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"ḍ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"ŧ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"ṭ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"ñ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"ṅ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"ɔ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"ɔ́");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"ɔ̌");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"ɔ̂");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"ɔ̃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10D)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"Đ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10E)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"Ḍ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x10F)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"Ŧ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x110)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"Ṭ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x111)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"Ñ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x112)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"Ṅ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x113)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x114)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ́");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x115)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ̌");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x116)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ̂");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, 0x117)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"Ɔ̃");
      }
    }
    return r;
  };
  this.g_NewContext_1=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KIFS(31,this.s20,t)){
        m=1;   // Line 46
        r=this.g_detectStartOfSentence_3(t,e);
        m=2;
      }
    return r;
  };
  this.g_PostKeystroke_2=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KIFS(31,this.s21,t)&&k.KIFS(42,this.s22,t)){
        m=1;   // Line 49
        r=this.g_detectStartOfSentence_3(t,e);
        m=2;
      }
    return r;
  };
  this.g_detectStartOfSentence_3=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(4,t,[{t:'a',a:this.s_sentencePunctuation_12},{t:'a',a:this.s_whitespace_13},{t:'a',a:this.s_whitespace_13},{t:'a',a:this.s_whitespace_13}])){
        m=1;   // Line 55
        k.KSETS(33,this.s26,t);
      }
      else if(k.KFCM(3,t,[{t:'a',a:this.s_sentencePunctuation_12},{t:'a',a:this.s_whitespace_13},{t:'a',a:this.s_whitespace_13}])){
        m=1;   // Line 54
        k.KSETS(33,this.s25,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_sentencePunctuation_12},{t:'a',a:this.s_whitespace_13}])){
        m=1;   // Line 53
        k.KSETS(33,this.s24,t);
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        m=1;   // Line 52
        k.KSETS(33,this.s23,t);
      }
    if(!m) {
    
      k.KSETS(33,this.s27,t);
    }
    return r;
  };
}
