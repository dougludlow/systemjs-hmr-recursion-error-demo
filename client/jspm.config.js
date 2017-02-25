SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "app/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@7.0.4",
      "typescript": "npm:typescript@2.2.1",
      "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
      "net": "npm:jspm-nodelibs-net@0.2.0",
      "module": "npm:jspm-nodelibs-module@0.2.0"
    },
    "packages": {
      "npm:typescript@2.2.1": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.11"
        }
      },
      "npm:source-map-support@0.4.11": {
        "map": {
          "source-map": "npm:source-map@0.5.6"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    "app": {
      "main": "main.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  meta: {
    "*.css": {
      "loader": "css"
    },
    "*.html": {
      "loader": "text"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.4.8",
    "@angular/compiler": "npm:@angular/compiler@2.4.8",
    "@angular/core": "npm:@angular/core@2.4.8",
    "@angular/forms": "npm:@angular/forms@2.4.8",
    "@angular/http": "npm:@angular/http@2.4.8",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.4.8",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.4.8",
    "@angular/router": "npm:@angular/router@3.4.8",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "core-js": "npm:core-js@2.4.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.32",
    "debug": "npm:debug@2.6.1",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "font-awesome": "npm:font-awesome@4.7.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "jquery": "npm:jquery@3.1.1",
    "moment": "npm:moment@2.17.1",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "reflect-metadata": "npm:reflect-metadata@0.1.10",
    "rxjs": "npm:rxjs@5.2.0",
    "socket.io-client": "github:socketio/socket.io-client@1.7.2",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "systemjs-hmr": "npm:systemjs-hmr@2.0.5",
    "systemjs-hot-reloader": "github:alexisvincent/systemjs-hot-reloader@1.0.0",
    "text": "github:systemjs/plugin-text@0.0.9",
    "timers": "npm:jspm-nodelibs-timers@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zone.js": "npm:zone.js@0.7.7"
  },
  packages: {
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.0.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.0": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:debug@2.6.1": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:font-awesome@4.7.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.32"
      }
    },
    "npm:rxjs@5.2.0": {
      "defaultExtension": "js",
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.0": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.9"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.3"
      }
    },
    "npm:readable-stream@2.2.3": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:alexisvincent/systemjs-hot-reloader@1.0.0": {
      "map": {
        "systemjs-hmr": "npm:systemjs-hmr@2.0.5"
      }
    },
    "github:twbs/bootstrap@3.3.7": {
      "main": "dist/js/bootstrap.js",
      "map": {
        "jquery": "npm:jquery@3.1.1"
      }
    }
  }
});