{
    "name": "employeetracker",
    "version": "1.0.0",
    "lockfileVersion": 2,
    "requires": true,
    "packages": {
      "": {
        "name": "employeetracker",
        "version": "1.0.0",
        "license": "ISC",
        "dependencies": {
          "chalk": "^4.1.2",
          "console.table": "^0.10.0",
          "figlet": "^1.5.2",
          "inquirer": "^8.2.4",
          "mysql2": "^2.3.3"
        }
      },
      "node_modules/ansi-escapes": {
        "version": "4.3.2",
        "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
        "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
        "dependencies": {
          "type-fest": "^0.21.3"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/ansi-regex": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
        "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/ansi-styles": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
        "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
        "dependencies": {
          "color-convert": "^2.0.1"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/chalk/ansi-styles?sponsor=1"
        }
      },
      "node_modules/base64-js": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
        "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/bl": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
        "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
        "dependencies": {
          "buffer": "^5.5.0",
          "inherits": "^2.0.4",
          "readable-stream": "^3.4.0"
        }
      },
      "node_modules/buffer": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
        "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ],
        "dependencies": {
          "base64-js": "^1.3.1",
          "ieee754": "^1.1.13"
        }
      },
      "node_modules/chalk": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
        "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
        "dependencies": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/chalk/chalk?sponsor=1"
        }
      },
      "node_modules/chardet": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
        "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
      },
      "node_modules/cli-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
        "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
        "dependencies": {
          "restore-cursor": "^3.1.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/cli-spinners": {
        "version": "2.7.0",
        "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.7.0.tgz",
        "integrity": "sha512-qu3pN8Y3qHNgE2AFweciB1IfMnmZ/fsNTEE+NOFjmGB2F/7rLhnhzppvpCnN4FovtP26k8lHyy9ptEbNwWFLzw==",
        "engines": {
          "node": ">=6"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/cli-width": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
        "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==",
        "engines": {
          "node": ">= 10"
        }
      },
      "node_modules/clone": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
        "integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
        "engines": {
          "node": ">=0.8"
        }
      },
      "node_modules/color-convert": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
        "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
        "dependencies": {
          "color-name": "~1.1.4"
        },
        "engines": {
          "node": ">=7.0.0"
        }
      },
      "node_modules/color-name": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
        "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "node_modules/console.table": {
        "version": "0.10.0",
        "resolved": "https://registry.npmjs.org/console.table/-/console.table-0.10.0.tgz",
        "integrity": "sha512-dPyZofqggxuvSf7WXvNjuRfnsOk1YazkVP8FdxH4tcH2c37wc79/Yl6Bhr7Lsu00KMgy2ql/qCMuNu8xctZM8g==",
        "dependencies": {
          "easy-table": "1.1.0"
        },
        "engines": {
          "node": "> 0.10"
        }
      },
      "node_modules/defaults": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
        "integrity": "sha512-s82itHOnYrN0Ib8r+z7laQz3sdE+4FP3d9Q7VLO7U+KRT+CR0GsWuyHxzdAY82I7cXv0G/twrqomTJLOssO5HA==",
        "dependencies": {
          "clone": "^1.0.2"
        }
      },
      "node_modules/denque": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/denque/-/denque-2.1.0.tgz",
        "integrity": "sha512-HVQE3AAb/pxF8fQAoiqpvg9i3evqug3hoiwakOyZAwJm+6vZehbkYXZ0l4JxS+I3QxM97v5aaRNhj8v5oBhekw==",
        "engines": {
          "node": ">=0.10"
        }
      },
      "node_modules/easy-table": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/easy-table/-/easy-table-1.1.0.tgz",
        "integrity": "sha512-oq33hWOSSnl2Hoh00tZWaIPi1ievrD9aFG82/IgjlycAnW9hHx5PkJiXpxPsgEE+H7BsbVQXFVFST8TEXS6/pA==",
        "optionalDependencies": {
          "wcwidth": ">=1.0.1"
        }
      },
      "node_modules/emoji-regex": {
        "version": "8.0.0",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
        "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
      },
      "node_modules/escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
        "engines": {
          "node": ">=0.8.0"
        }
      },
      "node_modules/external-editor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
        "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
        "dependencies": {
          "chardet": "^0.7.0",
          "iconv-lite": "^0.4.24",
          "tmp": "^0.0.33"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/figlet": {
        "version": "1.5.2",
        "resolved": "https://registry.npmjs.org/figlet/-/figlet-1.5.2.tgz",
        "integrity": "sha512-WOn21V8AhyE1QqVfPIVxe3tupJacq1xGkPTB4iagT6o+P2cAgEOOwIxMftr4+ZCTI6d551ij9j61DFr0nsP2uQ==",
        "engines": {
          "node": ">= 0.4.0"
        }
      },
      "node_modules/figures": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
        "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
        "dependencies": {
          "escape-string-regexp": "^1.0.5"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/generate-function": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/generate-function/-/generate-function-2.3.1.tgz",
        "integrity": "sha512-eeB5GfMNeevm/GRYq20ShmsaGcmI81kIX2K9XQx5miC8KdHaC6Jm0qQ8ZNeGOi7wYB8OsdxKs+Y2oVuTFuVwKQ==",
        "dependencies": {
          "is-property": "^1.0.2"
        }
      },
      "node_modules/has-flag": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
        "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "dependencies": {
          "safer-buffer": ">= 2.1.2 < 3"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/ieee754": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
        "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "node_modules/inquirer": {
        "version": "8.2.4",
        "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-8.2.4.tgz",
        "integrity": "sha512-nn4F01dxU8VeKfq192IjLsxu0/OmMZ4Lg3xKAns148rCaXP6ntAoEkVYZThWjwON8AlzdZZi6oqnhNbxUG9hVg==",
        "dependencies": {
          "ansi-escapes": "^4.2.1",
          "chalk": "^4.1.1",
          "cli-cursor": "^3.1.0",
          "cli-width": "^3.0.0",
          "external-editor": "^3.0.3",
          "figures": "^3.0.0",
          "lodash": "^4.17.21",
          "mute-stream": "0.0.8",
          "ora": "^5.4.1",
          "run-async": "^2.4.0",
          "rxjs": "^7.5.5",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "through": "^2.3.6",
          "wrap-ansi": "^7.0.0"
        },
        "engines": {
          "node": ">=12.0.0"
        }
      },
      "node_modules/is-fullwidth-code-point": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
        "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-interactive": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
        "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/is-property": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-property/-/is-property-1.0.2.tgz",
        "integrity": "sha512-Ks/IoX00TtClbGQr4TWXemAnktAQvYB7HzcCxDGqEZU6oCmb2INHuOoKxbtR+HFkmYWBKv/dOZtGRiAjDhj92g=="
      },
      "node_modules/is-unicode-supported": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
        "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/lodash": {
        "version": "4.17.21",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
        "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
      },
      "node_modules/log-symbols": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
        "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
        "dependencies": {
          "chalk": "^4.1.0",
          "is-unicode-supported": "^0.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/long": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
        "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA=="
      },
      "node_modules/lru-cache": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
        "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
        "dependencies": {
          "yallist": "^4.0.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/mimic-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
        "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/mute-stream": {
        "version": "0.0.8",
        "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
        "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
      },
      "node_modules/mysql2": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/mysql2/-/mysql2-2.3.3.tgz",
        "integrity": "sha512-wxJUev6LgMSgACDkb/InIFxDprRa6T95+VEoR+xPvtngtccNH2dGjEB/fVZ8yg1gWv1510c9CvXuJHi5zUm0ZA==",
        "dependencies": {
          "denque": "^2.0.1",
          "generate-function": "^2.3.1",
          "iconv-lite": "^0.6.3",
          "long": "^4.0.0",
          "lru-cache": "^6.0.0",
          "named-placeholders": "^1.1.2",
          "seq-queue": "^0.0.5",
          "sqlstring": "^2.3.2"
        },
        "engines": {
          "node": ">= 8.0"
        }
      },
      "node_modules/mysql2/node_modules/iconv-lite": {
        "version": "0.6.3",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
        "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
        "dependencies": {
          "safer-buffer": ">= 2.1.2 < 3.0.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/named-placeholders": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/named-placeholders/-/named-placeholders-1.1.2.tgz",
        "integrity": "sha512-wiFWqxoLL3PGVReSZpjLVxyJ1bRqe+KKJVbr4hGs1KWfTZTQyezHFBbuKj9hsizHyGV2ne7EMjHdxEGAybD5SA==",
        "dependencies": {
          "lru-cache": "^4.1.3"
        },
        "engines": {
          "node": ">=6.0.0"
        }
      },
      "node_modules/named-placeholders/node_modules/lru-cache": {
        "version": "4.1.5",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
        "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
        "dependencies": {
          "pseudomap": "^1.0.2",
          "yallist": "^2.1.2"
        }
      },
      "node_modules/named-placeholders/node_modules/yallist": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
        "integrity": "sha512-ncTzHV7NvsQZkYe1DW7cbDLm0YpzHmZF5r/iyP3ZnQtMiJ+pjzisCiMNI+Sj+xQF5pXhSHxSB3uDbsBTzY/c2A=="
      },
      "node_modules/onetime": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
        "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
        "dependencies": {
          "mimic-fn": "^2.1.0"
        },
        "engines": {
          "node": ">=6"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/ora": {
        "version": "5.4.1",
        "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
        "integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
        "dependencies": {
          "bl": "^4.1.0",
          "chalk": "^4.1.0",
          "cli-cursor": "^3.1.0",
          "cli-spinners": "^2.5.0",
          "is-interactive": "^1.0.0",
          "is-unicode-supported": "^0.1.0",
          "log-symbols": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "wcwidth": "^1.0.1"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/pseudomap": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
        "integrity": "sha512-b/YwNhb8lk1Zz2+bXXpS/LK9OisiZZ1SNsSLxN1x2OXVEhW2Ckr/7mWE5vrC1ZTiJlD9g19jWszTmJsB+oEpFQ=="
      },
      "node_modules/readable-stream": {
        "version": "3.6.0",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
        "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
        "dependencies": {
          "inherits": "^2.0.3",
          "string_decoder": "^1.1.1",
          "util-deprecate": "^1.0.1"
        },
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/restore-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
        "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
        "dependencies": {
          "onetime": "^5.1.0",
          "signal-exit": "^3.0.2"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/run-async": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
        "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
        "engines": {
          "node": ">=0.12.0"
        }
      },
      "node_modules/rxjs": {
        "version": "7.5.6",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.5.6.tgz",
        "integrity": "sha512-dnyv2/YsXhnm461G+R/Pe5bWP41Nm6LBXEYWI6eiFP4fiwx6WRI/CD0zbdVAudd9xwLEF2IDcKXLHit0FYjUzw==",
        "dependencies": {
          "tslib": "^2.1.0"
        }
      },
      "node_modules/safe-buffer": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
        "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "node_modules/seq-queue": {
        "version": "0.0.5",
        "resolved": "https://registry.npmjs.org/seq-queue/-/seq-queue-0.0.5.tgz",
        "integrity": "sha512-hr3Wtp/GZIc/6DAGPDcV4/9WoZhjrkXsi5B/07QgX8tsdc6ilr7BFM6PM6rbdAX1kFSDYeZGLipIZZKyQP0O5Q=="
      },
      "node_modules/signal-exit": {
        "version": "3.0.7",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
        "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="
      },
      "node_modules/sqlstring": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/sqlstring/-/sqlstring-2.3.3.tgz",
        "integrity": "sha512-qC9iz2FlN7DQl3+wjwn3802RTyjCx7sDvfQEXchwa6CWOx07/WVfh91gBmQ9fahw8snwGEWU3xGzOt4tFyHLxg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/string_decoder": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
        "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
        "dependencies": {
          "safe-buffer": "~5.2.0"
        }
      },
      "node_modules/string-width": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
        "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
        "dependencies": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/strip-ansi": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
        "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
        "dependencies": {
          "ansi-regex": "^5.0.1"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/supports-color": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
        "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
        "dependencies": {
          "has-flag": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/through": {
        "version": "2.3.8",
        "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
        "integrity": "sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg=="
      },
      "node_modules/tmp": {
        "version": "0.0.33",
        "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
        "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
        "dependencies": {
          "os-tmpdir": "~1.0.2"
        },
        "engines": {
          "node": ">=0.6.0"
        }
      },
      "node_modules/tslib": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.4.0.tgz",
        "integrity": "sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ=="
      },
      "node_modules/type-fest": {
        "version": "0.21.3",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
        "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
      },
      "node_modules/wcwidth": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
        "integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
        "dependencies": {
          "defaults": "^1.0.3"
        }
      },
      "node_modules/wrap-ansi": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
        "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
        "dependencies": {
          "ansi-styles": "^4.0.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
        }
      },
      "node_modules/yallist": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
      }
    },
    "dependencies": {
      "ansi-escapes": {
        "version": "4.3.2",
        "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
        "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
        "requires": {
          "type-fest": "^0.21.3"
        }
      },
      "ansi-regex": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
        "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="
      },
      "ansi-styles": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
        "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
        "requires": {
          "color-convert": "^2.0.1"
        }
      },
      "base64-js": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
        "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
      },
      "bl": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
        "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
        "requires": {
          "buffer": "^5.5.0",
          "inherits": "^2.0.4",
          "readable-stream": "^3.4.0"
        }
      },
      "buffer": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
        "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
        "requires": {
          "base64-js": "^1.3.1",
          "ieee754": "^1.1.13"
        }
      },
      "chalk": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
        "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
        "requires": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        }
      },
      "chardet": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
        "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
      },
      "cli-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
        "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
        "requires": {
          "restore-cursor": "^3.1.0"
        }
      },
      "cli-spinners": {
        "version": "2.7.0",
        "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.7.0.tgz",
        "integrity": "sha512-qu3pN8Y3qHNgE2AFweciB1IfMnmZ/fsNTEE+NOFjmGB2F/7rLhnhzppvpCnN4FovtP26k8lHyy9ptEbNwWFLzw=="
      },
      "cli-width": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
        "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw=="
      },
      "clone": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
        "integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg=="
      },
      "color-convert": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
        "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
        "requires": {
          "color-name": "~1.1.4"
        }
      },
      "color-name": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
        "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "console.table": {
        "version": "0.10.0",
        "resolved": "https://registry.npmjs.org/console.table/-/console.table-0.10.0.tgz",
        "integrity": "sha512-dPyZofqggxuvSf7WXvNjuRfnsOk1YazkVP8FdxH4tcH2c37wc79/Yl6Bhr7Lsu00KMgy2ql/qCMuNu8xctZM8g==",
        "requires": {
          "easy-table": "1.1.0"
        }
      },
      "defaults": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
        "integrity": "sha512-s82itHOnYrN0Ib8r+z7laQz3sdE+4FP3d9Q7VLO7U+KRT+CR0GsWuyHxzdAY82I7cXv0G/twrqomTJLOssO5HA==",
        "requires": {
          "clone": "^1.0.2"
        }
      },
      "denque": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/denque/-/denque-2.1.0.tgz",
        "integrity": "sha512-HVQE3AAb/pxF8fQAoiqpvg9i3evqug3hoiwakOyZAwJm+6vZehbkYXZ0l4JxS+I3QxM97v5aaRNhj8v5oBhekw=="
      },
      "easy-table": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/easy-table/-/easy-table-1.1.0.tgz",
        "integrity": "sha512-oq33hWOSSnl2Hoh00tZWaIPi1ievrD9aFG82/IgjlycAnW9hHx5PkJiXpxPsgEE+H7BsbVQXFVFST8TEXS6/pA==",
        "requires": {
          "wcwidth": ">=1.0.1"
        }
      },
      "emoji-regex": {
        "version": "8.0.0",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
        "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg=="
      },
      "external-editor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
        "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
        "requires": {
          "chardet": "^0.7.0",
          "iconv-lite": "^0.4.24",
          "tmp": "^0.0.33"
        }
      },
      "figlet": {
        "version": "1.5.2",
        "resolved": "https://registry.npmjs.org/figlet/-/figlet-1.5.2.tgz",
        "integrity": "sha512-WOn21V8AhyE1QqVfPIVxe3tupJacq1xGkPTB4iagT6o+P2cAgEOOwIxMftr4+ZCTI6d551ij9j61DFr0nsP2uQ=="
      },
      "figures": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
        "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
        "requires": {
          "escape-string-regexp": "^1.0.5"
        }
      },
      "generate-function": {
        "version": "2.3.1",
        "resolved": "https://registry.npmjs.org/generate-function/-/generate-function-2.3.1.tgz",
        "integrity": "sha512-eeB5GfMNeevm/GRYq20ShmsaGcmI81kIX2K9XQx5miC8KdHaC6Jm0qQ8ZNeGOi7wYB8OsdxKs+Y2oVuTFuVwKQ==",
        "requires": {
          "is-property": "^1.0.2"
        }
      },
      "has-flag": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
        "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "ieee754": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
        "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA=="
      },
      "inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "inquirer": {
        "version": "8.2.4",
        "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-8.2.4.tgz",
        "integrity": "sha512-nn4F01dxU8VeKfq192IjLsxu0/OmMZ4Lg3xKAns148rCaXP6ntAoEkVYZThWjwON8AlzdZZi6oqnhNbxUG9hVg==",
        "requires": {
          "ansi-escapes": "^4.2.1",
          "chalk": "^4.1.1",
          "cli-cursor": "^3.1.0",
          "cli-width": "^3.0.0",
          "external-editor": "^3.0.3",
          "figures": "^3.0.0",
          "lodash": "^4.17.21",
          "mute-stream": "0.0.8",
          "ora": "^5.4.1",
          "run-async": "^2.4.0",
          "rxjs": "^7.5.5",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "through": "^2.3.6",
          "wrap-ansi": "^7.0.0"
        }
      },
      "is-fullwidth-code-point": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
        "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
      },
      "is-interactive": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
        "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w=="
      },
      "is-property": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/is-property/-/is-property-1.0.2.tgz",
        "integrity": "sha512-Ks/IoX00TtClbGQr4TWXemAnktAQvYB7HzcCxDGqEZU6oCmb2INHuOoKxbtR+HFkmYWBKv/dOZtGRiAjDhj92g=="
      },
      "is-unicode-supported": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
        "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw=="
      },
      "lodash": {
        "version": "4.17.21",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
        "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
      },
      "log-symbols": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
        "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
        "requires": {
          "chalk": "^4.1.0",
          "is-unicode-supported": "^0.1.0"
        }
      },
      "long": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/long/-/long-4.0.0.tgz",
        "integrity": "sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA=="
      },
      "lru-cache": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
        "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
        "requires": {
          "yallist": "^4.0.0"
        }
      },
      "mimic-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
        "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
      },
      "mute-stream": {
        "version": "0.0.8",
        "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
        "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
      },
      "mysql2": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/mysql2/-/mysql2-2.3.3.tgz",
        "integrity": "sha512-wxJUev6LgMSgACDkb/InIFxDprRa6T95+VEoR+xPvtngtccNH2dGjEB/fVZ8yg1gWv1510c9CvXuJHi5zUm0ZA==",
        "requires": {
          "denque": "^2.0.1",
          "generate-function": "^2.3.1",
          "iconv-lite": "^0.6.3",
          "long": "^4.0.0",
          "lru-cache": "^6.0.0",
          "named-placeholders": "^1.1.2",
          "seq-queue": "^0.0.5",
          "sqlstring": "^2.3.2"
        },
        "dependencies": {
          "iconv-lite": {
            "version": "0.6.3",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
            "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
            "requires": {
              "safer-buffer": ">= 2.1.2 < 3.0.0"
            }
          }
        }
      },
      "named-placeholders": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/named-placeholders/-/named-placeholders-1.1.2.tgz",
        "integrity": "sha512-wiFWqxoLL3PGVReSZpjLVxyJ1bRqe+KKJVbr4hGs1KWfTZTQyezHFBbuKj9hsizHyGV2ne7EMjHdxEGAybD5SA==",
        "requires": {
          "lru-cache": "^4.1.3"
        },
        "dependencies": {
          "lru-cache": {
            "version": "4.1.5",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
            "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
            "requires": {
              "pseudomap": "^1.0.2",
              "yallist": "^2.1.2"
            }
          },
          "yallist": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
            "integrity": "sha512-ncTzHV7NvsQZkYe1DW7cbDLm0YpzHmZF5r/iyP3ZnQtMiJ+pjzisCiMNI+Sj+xQF5pXhSHxSB3uDbsBTzY/c2A=="
          }
        }
      },
      "onetime": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
        "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
        "requires": {
          "mimic-fn": "^2.1.0"
        }
      },
      "ora": {
        "version": "5.4.1",
        "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
        "integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
        "requires": {
          "bl": "^4.1.0",
          "chalk": "^4.1.0",
          "cli-cursor": "^3.1.0",
          "cli-spinners": "^2.5.0",
          "is-interactive": "^1.0.0",
          "is-unicode-supported": "^0.1.0",
          "log-symbols": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "wcwidth": "^1.0.1"
        }
      },
      "os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g=="
      },
      "pseudomap": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
        "integrity": "sha512-b/YwNhb8lk1Zz2+bXXpS/LK9OisiZZ1SNsSLxN1x2OXVEhW2Ckr/7mWE5vrC1ZTiJlD9g19jWszTmJsB+oEpFQ=="
      },
      "readable-stream": {
        "version": "3.6.0",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
        "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
        "requires": {
          "inherits": "^2.0.3",
          "string_decoder": "^1.1.1",
          "util-deprecate": "^1.0.1"
        }
      },
      "restore-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
        "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
        "requires": {
          "onetime": "^5.1.0",
          "signal-exit": "^3.0.2"
        }
      },
      "run-async": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
        "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ=="
      },
      "rxjs": {
        "version": "7.5.6",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.5.6.tgz",
        "integrity": "sha512-dnyv2/YsXhnm461G+R/Pe5bWP41Nm6LBXEYWI6eiFP4fiwx6WRI/CD0zbdVAudd9xwLEF2IDcKXLHit0FYjUzw==",
        "requires": {
          "tslib": "^2.1.0"
        }
      },
      "safe-buffer": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
        "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "seq-queue": {
        "version": "0.0.5",
        "resolved": "https://registry.npmjs.org/seq-queue/-/seq-queue-0.0.5.tgz",
        "integrity": "sha512-hr3Wtp/GZIc/6DAGPDcV4/9WoZhjrkXsi5B/07QgX8tsdc6ilr7BFM6PM6rbdAX1kFSDYeZGLipIZZKyQP0O5Q=="
      },
      "signal-exit": {
        "version": "3.0.7",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
        "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="
      },
      "sqlstring": {
        "version": "2.3.3",
        "resolved": "https://registry.npmjs.org/sqlstring/-/sqlstring-2.3.3.tgz",
        "integrity": "sha512-qC9iz2FlN7DQl3+wjwn3802RTyjCx7sDvfQEXchwa6CWOx07/WVfh91gBmQ9fahw8snwGEWU3xGzOt4tFyHLxg=="
      },
      "string_decoder": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
        "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
        "requires": {
          "safe-buffer": "~5.2.0"
        }
      },
      "string-width": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
        "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
        "requires": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.1"
        }
      },
      "strip-ansi": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
        "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
        "requires": {
          "ansi-regex": "^5.0.1"
        }
      },
      "supports-color": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
        "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
        "requires": {
          "has-flag": "^4.0.0"
        }
      },
      "through": {
        "version": "2.3.8",
        "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
        "integrity": "sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg=="
      },
      "tmp": {
        "version": "0.0.33",
        "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
        "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
        "requires": {
          "os-tmpdir": "~1.0.2"
        }
      },
      "tslib": {
        "version": "2.4.0",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.4.0.tgz",
        "integrity": "sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ=="
      },
      "type-fest": {
        "version": "0.21.3",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
        "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
      },
      "wcwidth": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
        "integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
        "requires": {
          "defaults": "^1.0.3"
        }
      },
      "wrap-ansi": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
        "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
        "requires": {
          "ansi-styles": "^4.0.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0"
        }
      },
      "yallist": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
      }
    }
}