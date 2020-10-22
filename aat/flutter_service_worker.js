'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "27b0e96f8a3484c2a9be3fe8d941cefd",
"index.html": "1dca31d3252071177c817a3379b116e8",
"/": "1dca31d3252071177c817a3379b116e8",
"main.dart.js": "187949fc5c95ce49677889ebb543dce9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "89048d7ad4114272cab18955f34c27b0",
"assets/AssetManifest.json": "ae1088be5dca021da9274c4894a09481",
"assets/NOTICES": "d4ec7f20eb81064fd1f24a35d62a02ab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/2.jpg": "0ed90ac88d6a3da0ef012201b497e205",
"assets/assets/images/1.jpg": "2770133d4d85b5406b886f6597ce0e1b",
"assets/assets/audio_feedback/incorrect.mp3": "93c3ea8ecdefa87d8693c767cfff438c",
"assets/assets/audio_feedback/correct.mp3": "ddeae6a65dcb2ca00a4f16934a57a130",
"assets/assets/Arabic_letters/0005n.mp3": "c6e0597480ddd9b6de03b5783f0c9d3e",
"assets/assets/Arabic_letters/0013n.mp3": "c465678d6b6a1bb0892e41d70c04e839",
"assets/assets/Arabic_letters/0009n.mp3": "604140c01088913030d78ded1d9aa65d",
"assets/assets/Arabic_letters/0025n.mp3": "64976994b19f9f6e371a71f9e0649196",
"assets/assets/Arabic_letters/0024n.mp3": "bab0428e6e678793c0d0b19c1318ae0e",
"assets/assets/Arabic_letters/0008n.mp3": "8f9aa68712ee496eb5e1f180454115dc",
"assets/assets/Arabic_letters/0012n.mp3": "207348414176e3eb762d9dc36982b422",
"assets/assets/Arabic_letters/0004n.mp3": "eee873cac9bd31618bfedcfbea305d90",
"assets/assets/Arabic_letters/0019n.mp3": "a9f415ec6cf23e0b46982329398fbe17",
"assets/assets/Arabic_letters/0018.mp3": "ae124ef5a2dbb28ef78051f4e5909152",
"assets/assets/Arabic_letters/0024.mp3": "b293e327cf8782f9abb3e05deb18c476",
"assets/assets/Arabic_letters/0025.mp3": "c079dddde6900078f8c5c22b991c7776",
"assets/assets/Arabic_letters/0019.mp3": "ed8a7b34b6a28f2fb1171d24bdaabf7a",
"assets/assets/Arabic_letters/0023n.mp3": "819addcf2abfc056d3a4dd6552b794f2",
"assets/assets/Arabic_letters/0003n.mp3": "46860d8020ddc87e4a5353c8d1c3135a",
"assets/assets/Arabic_letters/0015n.mp3": "5163f6fac73f2722be0dce56e85f6cee",
"assets/assets/Arabic_letters/0027.mp3": "fe5739a8dcedb83864919efcc6e5960a",
"assets/assets/Arabic_letters/0026.mp3": "981cef59da84b52b583bd9363dbc8b15",
"assets/assets/Arabic_letters/0022.mp3": "4fec7aa3023a9d511f5f26f43e7cd3e2",
"assets/assets/Arabic_letters/0014n.mp3": "fa1574eea14a2f7c62ec8c168ecb7381",
"assets/assets/Arabic_letters/0023.mp3": "ab8f3f5490b4fda62d70e71370a0e728",
"assets/assets/Arabic_letters/0002n.mp3": "efb026b4f9df33927b1ce60e9dfbbbe6",
"assets/assets/Arabic_letters/0022n.mp3": "b39e10946ee825a53061ccc5ecdde1b8",
"assets/assets/Arabic_letters/0021.mp3": "a5ea25de90c2cb832759759ed36ea420",
"assets/assets/Arabic_letters/0009.mp3": "d62f1ed884694bc6f64c04e86bcae9a1",
"assets/assets/Arabic_letters/0008.mp3": "383d393dcfdb028974933efc18e7fc28",
"assets/assets/Arabic_letters/0020.mp3": "b4df8192b8f86f20cd9d973eee5c6c2e",
"assets/assets/Arabic_letters/0018n.mp3": "a3c6bbbafb870a97eddc627b72392ada",
"assets/assets/Arabic_letters/0021n.mp3": "3bf2b41c8418e2f096af4d0d25f7c920",
"assets/assets/Arabic_letters/0011.mp3": "678ac701af6eea17a21ef6829e739a8a",
"assets/assets/Arabic_letters/0005.mp3": "8edc47f4cd3d5b7f23db5e8f238649da",
"assets/assets/Arabic_letters/0004.mp3": "0186a06b3bdfe924629c9e08064a118c",
"assets/assets/Arabic_letters/0010.mp3": "04ddfe1e8dc6fb9a6da5996b7050654a",
"assets/assets/Arabic_letters/0006.mp3": "59a15187878d2213b383d2816c9e11b0",
"assets/assets/Arabic_letters/0012.mp3": "ccbbb96c583c85d449bc9f7551cb70e5",
"assets/assets/Arabic_letters/0013.mp3": "15e85b4b03eb087f69bda7e80acaf9ab",
"assets/assets/Arabic_letters/0017n.mp3": "81fe77ef25f277eedb2f037b798d9f64",
"assets/assets/Arabic_letters/0007.mp3": "b80ac3cc0784931256f0d0724d7bd7dd",
"assets/assets/Arabic_letters/0001n.mp3": "9fab22776adb430c3f636896df893988",
"assets/assets/Arabic_letters/0003.mp3": "6dc9b4bf00293e1af05a5b46ef95e397",
"assets/assets/Arabic_letters/0016n.mp3": "a34510c49913deba6b61ca71f6210aec",
"assets/assets/Arabic_letters/0017.mp3": "1c368931512d71a29a4aa55e0471324b",
"assets/assets/Arabic_letters/0016.mp3": "d3b826df64414755e5b793744cd5016e",
"assets/assets/Arabic_letters/0002.mp3": "39f47464f9f23ea3fffb5cb02694ae7e",
"assets/assets/Arabic_letters/0014.mp3": "bc22d3f0975d63d7231dbcb936dabdde",
"assets/assets/Arabic_letters/0011_.mp3": "d192189d316682bc77f799304228a464",
"assets/assets/Arabic_letters/0028.mp3": "dc3549a32844ba06e0a2c212865e947e",
"assets/assets/Arabic_letters/0001.mp3": "0d8f4a5acec512037f4ebcceebf7afe6",
"assets/assets/Arabic_letters/0015.mp3": "364113edffd4ff1ea2ed5f2197dfc628",
"assets/assets/Arabic_letters/0020n.mp3": "19440a4f6a8046cc13543ba719e994a2",
"assets/assets/Arabic_letters/0011n.mp3": "75f6b8637f402bfa82ea51222ddfa10f",
"assets/assets/Arabic_letters/0007n.mp3": "bb748b7d54e7052c4b60adba070c70cd",
"assets/assets/Arabic_letters/0027n.mp3": "7f285e148d9f70c38a68aa10c289afa2",
"assets/assets/Arabic_letters/vowels/a0003.mp3": "f3fa7272fd9662d7627873cbd87f604f",
"assets/assets/Arabic_letters/vowels/a0017.mp3": "e0278b65673254162a6e63899a483f1b",
"assets/assets/Arabic_letters/vowels/i0011.mp3": "f06505f8b93510cdf24a73699ca15a3e",
"assets/assets/Arabic_letters/vowels/i0005.mp3": "1c8591a3fe0f2b1b4deedd4bbbc3e151",
"assets/assets/Arabic_letters/vowels/u0006.mp3": "2d1038b437d2cd9f869ef710b6bf08c5",
"assets/assets/Arabic_letters/vowels/u0012.mp3": "76f6361515810a45c3cb4431e7410db6",
"assets/assets/Arabic_letters/vowels/u0013.mp3": "880ccda19244edc6635ffc084fba9971",
"assets/assets/Arabic_letters/vowels/u0007.mp3": "48a2d6239e6ae0cd1b62f58588efae3e",
"assets/assets/Arabic_letters/vowels/i0004.mp3": "610e716ca4a199159b4d0a208211c198",
"assets/assets/Arabic_letters/vowels/i0010.mp3": "e42f1fa954941bd39444625d225b5432",
"assets/assets/Arabic_letters/vowels/a0016.mp3": "49d43ac2f33ef5a5133e84aeaa38d4bb",
"assets/assets/Arabic_letters/vowels/a0002.mp3": "2141981157e9f1e1171a239db0d228fa",
"assets/assets/Arabic_letters/vowels/a0028.mp3": "b0313a3d1831cc733547d4082ab7441f",
"assets/assets/Arabic_letters/vowels/a0014.mp3": "fc3781108d69a4af113259a3d5017c78",
"assets/assets/Arabic_letters/vowels/i0006.mp3": "deeaf855b0ce74603877f535538126e4",
"assets/assets/Arabic_letters/vowels/i0012.mp3": "5bc498c2989ceb5909f0ed3f07d84e58",
"assets/assets/Arabic_letters/vowels/u0011.mp3": "7d1846d5ae151607354497869dde710d",
"assets/assets/Arabic_letters/vowels/u0005.mp3": "cb7dbdca6a3055bed2b71a4e8e89b23d",
"assets/assets/Arabic_letters/vowels/u0004.mp3": "d817296b5f3a57e430169cd15afbd1df",
"assets/assets/Arabic_letters/vowels/u0010.mp3": "5295c1b4d87c443726275259e21f52b0",
"assets/assets/Arabic_letters/vowels/i0013.mp3": "dd93df7edce1bf89423671b63014b1d7",
"assets/assets/Arabic_letters/vowels/i0007.mp3": "f737464212c1689ad05ea0a77afd3a91",
"assets/assets/Arabic_letters/vowels/a0001.mp3": "49b84a11514646942879dfa17cafcb1b",
"assets/assets/Arabic_letters/vowels/a0015.mp3": "1b9efd62fe8e221b620c0d936895f3bf",
"assets/assets/Arabic_letters/vowels/a0011.mp3": "4a5772d7bbe8851b592d7a57afc75917",
"assets/assets/Arabic_letters/vowels/a0005.mp3": "fd37b76e8e25c831ca7ff4b26ed187e1",
"assets/assets/Arabic_letters/vowels/i0003.mp3": "7d6770a0ee6cdc8c3ebb78690c91650f",
"assets/assets/Arabic_letters/vowels/i0017.mp3": "695acaee2924fc2cb442c3004837746d",
"assets/assets/Arabic_letters/vowels/u0028.mp3": "7163296e531544ac49b28f15df298f55",
"assets/assets/Arabic_letters/vowels/u0014.mp3": "eafe1bb79f8551dd4094f18c38195a09",
"assets/assets/Arabic_letters/vowels/u0001.mp3": "f7e3e2e7d3a7c3fce9be72fc4b3ccf72",
"assets/assets/Arabic_letters/vowels/u0015.mp3": "2d4abf0646c2f0b565801db2948ba286",
"assets/assets/Arabic_letters/vowels/i0016.mp3": "9a28d053ba81e7a9c11715acf0f2f51e",
"assets/assets/Arabic_letters/vowels/i0002.mp3": "abdf2fee7360cda319c913bc031072b3",
"assets/assets/Arabic_letters/vowels/a0004.mp3": "ecaafcc216a7474145ea4add916e198a",
"assets/assets/Arabic_letters/vowels/a0010.mp3": "cf945b22d38cae0de7e3e69d2954df66",
"assets/assets/Arabic_letters/vowels/a0006.mp3": "82948b0d88f6232bf27f5d7e201e0977",
"assets/assets/Arabic_letters/vowels/a0012.mp3": "a4e3de76dfb1b3ba2492661ce4476734",
"assets/assets/Arabic_letters/vowels/i0014.mp3": "09a6e863377dff5b2b19197926d24d4b",
"assets/assets/Arabic_letters/vowels/i0028.mp3": "8d911d054e20a04672479aba52e82972",
"assets/assets/Arabic_letters/vowels/u0003.mp3": "510d9f17ff7b237274342e72791f6c59",
"assets/assets/Arabic_letters/vowels/u0017.mp3": "ff374e0d2217153d54a72a863a32acdf",
"assets/assets/Arabic_letters/vowels/u0016.mp3": "e1113a0953efed50b318ebce55b77fe3",
"assets/assets/Arabic_letters/vowels/u0002.mp3": "3a49d4f06f43e55a4c3af7d23c67f908",
"assets/assets/Arabic_letters/vowels/i0001.mp3": "ce0692f92970439395b4d47cf8af06bb",
"assets/assets/Arabic_letters/vowels/i0015.mp3": "d9b924a62efaaefa4177dde46a004e39",
"assets/assets/Arabic_letters/vowels/a0013.mp3": "1c42866886e56212af0ca1aaab20cc5f",
"assets/assets/Arabic_letters/vowels/a0007.mp3": "6e8bc450a2eed62e37de06938039f0dd",
"assets/assets/Arabic_letters/vowels/a0022.mp3": "016e79cb61a8d2e75b9a5bc21e9d166a",
"assets/assets/Arabic_letters/vowels/i0018.mp3": "982cb655de9b39e3ab24c5107e334de3",
"assets/assets/Arabic_letters/vowels/i0024.mp3": "42bb7a79f4ec4478f322f6dc8909f8db",
"assets/assets/Arabic_letters/vowels/u0027.mp3": "67525edbf89d8b748697d80d15b5b8bf",
"assets/assets/Arabic_letters/vowels/u0026.mp3": "8dcf9c7f06591794b1bf99e878f60255",
"assets/assets/Arabic_letters/vowels/i0025.mp3": "46926b4ded1a3543640f636a1faf04c0",
"assets/assets/Arabic_letters/vowels/i0019.mp3": "3e38483a8b29e91f721e71e4c0c11621",
"assets/assets/Arabic_letters/vowels/a0023.mp3": "2795f8d1586a03cff2d2f7c853e2ea21",
"assets/assets/Arabic_letters/vowels/a0009.mp3": "af762dbc0069609c8955e204da0f14df",
"assets/assets/Arabic_letters/vowels/a0021.mp3": "28ae7b22e899fe782ac5a48f232f5779",
"assets/assets/Arabic_letters/vowels/i0027.mp3": "f6807004ed0d2069049c428351aa2bbf",
"assets/assets/Arabic_letters/vowels/u0024.mp3": "f870a6b479317ec53fdb318826336d9a",
"assets/assets/Arabic_letters/vowels/u0018.mp3": "9e99deb1cc999b3b28cfba05cf0bd702",
"assets/assets/Arabic_letters/vowels/u0019.mp3": "47bb4a0729db8c71a264b23fcc61ee74",
"assets/assets/Arabic_letters/vowels/u0025.mp3": "40c051c2d253aa1171b04de5c38b8023",
"assets/assets/Arabic_letters/vowels/i0026.mp3": "a299940ccf1c9236acb1f4f3f3b788a0",
"assets/assets/Arabic_letters/vowels/a0020.mp3": "3ee59f30aff8ed75b65434c9de87dace",
"assets/assets/Arabic_letters/vowels/a0008.mp3": "8742f01e7160bff683c2d7352fb45a74",
"assets/assets/Arabic_letters/vowels/a0024.mp3": "f73a367853f556dd5b5a197b186b483f",
"assets/assets/Arabic_letters/vowels/a0018.mp3": "443dc8374115e1147f53eaa3ec465d8e",
"assets/assets/Arabic_letters/vowels/i0022.mp3": "af539c14f03dcaf9b4e804d3abf6ce46",
"assets/assets/Arabic_letters/vowels/u0009.mp3": "b44bd0dad1dc64700e682993f8b713b3",
"assets/assets/Arabic_letters/vowels/u0021.mp3": "cd85bc5ce9517bb1f0f80cab9a598a9a",
"assets/assets/Arabic_letters/vowels/u0020.mp3": "ef330f04b1ab129cf04736f8a25133a9",
"assets/assets/Arabic_letters/vowels/u0008.mp3": "bb5e6e59a560b02ed41a021b0c046244",
"assets/assets/Arabic_letters/vowels/i0023.mp3": "28f0c3d7442cf58c7e5e328c5c62fbe2",
"assets/assets/Arabic_letters/vowels/a0019.mp3": "7aa65cecc6f8a51b2ec8fdf0a534f979",
"assets/assets/Arabic_letters/vowels/a0025.mp3": "bd603b8fd5eb8f72be63be94c156a9d9",
"assets/assets/Arabic_letters/vowels/a0027.mp3": "322a6a4250bd179e23367fc1f4598d85",
"assets/assets/Arabic_letters/vowels/i0021.mp3": "c2af09fbab51f32eb75e46b6c92e5e2a",
"assets/assets/Arabic_letters/vowels/i0009.mp3": "86bf82e60b6b74663c91e452033ce490",
"assets/assets/Arabic_letters/vowels/u0022.mp3": "625576476e7d91263dd394b47a47dba4",
"assets/assets/Arabic_letters/vowels/u0023.mp3": "0f849a283c81e06b62f03a2f3ff0137e",
"assets/assets/Arabic_letters/vowels/i0008.mp3": "b45a777f04312b3f5ca6ddc47c54f863",
"assets/assets/Arabic_letters/vowels/i0020.mp3": "b08c8acc44c74e14f951b5affd113081",
"assets/assets/Arabic_letters/vowels/a0026.mp3": "dca08e75c238f6ccd9547d6824ccc5d1",
"assets/assets/Arabic_letters/0011_n.mp3": "3d86f8f31469802e833c46c8bac6fea1",
"assets/assets/Arabic_letters/0026n.mp3": "564aaf5a01ad5ea9d20d714d95496268",
"assets/assets/Arabic_letters/0006n.mp3": "de800f78ef2e22f02bced9fc43519192",
"assets/assets/Arabic_letters/0010n.mp3": "02afdc3433f8d10ff13420f6e88bb1e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
