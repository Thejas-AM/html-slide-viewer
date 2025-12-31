import { HtmlSlideViewer } from './components/HtmlSlideViewer';
import { DEMO_HTML_SLIDES } from './demoData';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>HTML Presentation Viewer</h1>
          <p className="app-subtitle">Custom-built preview component for HTML slides</p>
        </div>
      </header>

      <main className="app-main">
        <div className="viewer-section">
          <HtmlSlideViewer
            slides={DEMO_HTML_SLIDES}
            previewWidth={960}
            previewHeight={540}
            showFilmstrip={true}
            filmstripPosition="right"
            viewMode="scroll"
            onSlideChange={(index, slide) => {
              console.log('HTML slide changed to:', index, slide.title);
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;


