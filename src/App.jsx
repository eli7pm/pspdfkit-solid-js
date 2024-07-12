import logo from './logo.svg';
import styles from './App.module.css';
import PdfViewerComponent from "./components/PspdfkitViewer";

function App() {
  return (
    <div class={styles.App}>
      <PdfViewerComponent document="form_eli.pdf"/>
    </div>
  );
}

export default App;
