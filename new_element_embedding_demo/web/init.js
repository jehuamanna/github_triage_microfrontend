

function loader({entrypointUrl}) {
    // Embed flutter into div#flutter_target
    let target = document.querySelector("#flutter_target");
    _flutter.loader.loadEntrypoint({
        entrypointUrl,
      onEntrypointLoaded: async function (engineInitializer) {
        let appRunner = await engineInitializer.initializeEngine({
          hostElement: target,
          assetBase: "http://localhost:9999/"
        });
        await appRunner.runApp();
      },
    });
  }



  var app = {
    // Optional
    async bootstrap(props) {
      console.log("App is initializing!", props);
    },
    // Required
    async mount(props) {
      console.log("App is mounting", props);
      loader({entrypointUrl: "http://localhost:9999/main.dart.js"})
    //   window.entrypointUrl =  "http://localhost:9999/main.dart.js";
    },
    // Required
    async unmount(props) {
      console.log("App is unmounting", props);
      const flutterElement = document.querySelector("#flutter_target")
      flutterElement.innerHTML= ""
    },
  };

  window.app = app;