import Vote from './Vote'
import './App.css'

function App() {
  const candidates = ['דני', 'רותי', 'יוסי']

  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow"><span className="live-dot" /> הקלפי הכיתתית</p>
        <h1>הבחירה בידיים שלכם</h1>
        <p className="intro">בחרו את המועמד או המועמדת שלכם, ועקבו אחרי התוצאות בזמן אמת.</p>
      </header>

      <section className="voting-section" aria-labelledby="candidates-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">הקולות שלכם קובעים</p>
            <h2 id="candidates-title">המועמדים</h2>
          </div>
          <span className="candidate-total">{candidates.length} מועמדים</span>
        </div>

        <div className="candidate-grid">
          {candidates.map((name) => <Vote key={name} name={name} />)}
        </div>
      </section>

      <footer className="page-footer">
        <span>כל קול נספר</span>
        <span>ההצבעות נשמרות בנפרד לכל מועמד</span>
      </footer>
    </main>
  )
}

export default App
