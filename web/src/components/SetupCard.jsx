import "./SetupCard.css"

function SetupCard({
  title,
  stepLabel,
  children,
  onBack,
  onNext,
  onSkip,
  nextLabel = "Next",
}) {
  return (
    <main className="setup-container">
      <section className="setup-card" aria-labelledby="setup-title">
        <p className="setup-step">{stepLabel}</p>
        <h2 id="setup-title">{title}</h2>
        <div className="setup-content">{children}</div>
        <div className="setup-actions">
          <button className="setup-button setup-button-secondary" type="button" onClick={onBack}>
            Back
          </button>
          <button className="setup-button setup-button-link" type="button" onClick={onSkip}>
            Skip for now
          </button>
          <button className="setup-button setup-button-primary" type="button" onClick={onNext}>
            {nextLabel}
          </button>
        </div>
      </section>
    </main>
  )
}

export default SetupCard