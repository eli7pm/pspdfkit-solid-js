import PSPDFKit from "pspdfkit";
import {createEffect} from "solid-js";

export default function PdfViewerComponent(props) {
 // Ensure that there's only one PSPDFKit instance.
  let container
  createEffect(() => {
    PSPDFKit.load({
      // Container where PSPDFKit should be mounted.
      container:container,
      // The document to open.
      document: props.document,
      // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: `${window.location.protocol}//${window.location.host}/`,
      toolbarItems: [{
        type: "form-creator"
      }]
    });
  });
  // This div element will render the document to the DOM.
  return (
    <div style={"width: 100%; height: 100vh;"} ref={container}></div>
  );
}
