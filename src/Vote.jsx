import { useState } from 'react'

function Vote({ name }) {
  const [votes, setVotes] = useState(0)
  const reachedHighlight = votes >= 5

  return (
    <article className={`candidate-card${reachedHighlight ? ' is-leading' : ''}`}>
      <div className="candidate-topline">
        <span className="candidate-mark" aria-hidden="true">
          {name.slice(0, 1)}
        </span>
        {reachedHighlight && <span className="leading-label">בולט/ת</span>}
      </div>

      <h2>{name}</h2>

      <p className="vote-count" aria-live="polite" aria-atomic="true">
        <span className="vote-count-number">{votes}</span>
        <span className="vote-count-label">קולות</span>
      </p>

      {votes >= 10 && (
        <p className="vote-warning" role="status">
          המועמד מוביל!
        </p>
      )}

      <button className="vote-button" type="button" onClick={() => setVotes((currentVotes) => currentVotes + 1)}>
        הצבעה
      </button>

      <div className="secondary-actions">
        <button
          className="secondary-button"
          type="button"
          onClick={() => setVotes((currentVotes) => Math.max(0, currentVotes - 1))}
          aria-label={`בטל קול אחד עבור ${name}`}
        >
          בטל קול
        </button>
        <button
          className="secondary-button"
          type="button"
          onClick={() => setVotes(0)}
          aria-label={`אפס את הקולות של ${name}`}
        >
          איפוס
        </button>
      </div>
    </article>
  )
}

export default Vote