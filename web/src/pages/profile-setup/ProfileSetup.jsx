import { useState } from "react"
import SetupCard from "../../components/SetupCard"

const setupSteps = [
  { section: "profile", title: "Your profile" },
  ...Array.from({ length: 8 }, (_, index) => ({
    section: "financial",
    title: "Financial setup",
    detail: `Step ${index + 1} of 8`,
  })),
  { section: "lifestyle", title: "Lifestyle & spending habits" },
  { section: "goals", title: "Savings & investment goals" },
]

function ProfileSetup({ onComplete, onBackToSignup }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const currentStep = setupSteps[stepIndex]

  function goNext() {
    if (stepIndex === setupSteps.length - 1) {
      onComplete()
      return
    }

    setStepIndex((current) => current + 1)
  }

  function skipSection() {
    const section = currentStep.section
    let nextIndex = stepIndex + 1

    while (
      nextIndex < setupSteps.length &&
      setupSteps[nextIndex].section === section
    ) {
      nextIndex += 1
    }

    if (nextIndex === setupSteps.length) {
      onComplete()
      return
    }

    setStepIndex(nextIndex)
  }

  function goBack() {
    if (stepIndex === 0) {
      onBackToSignup()
      return
    }

    setStepIndex((current) => current - 1)
  }

  return (
    <SetupCard
      title={currentStep.title}
      stepLabel={`Step ${stepIndex + 1} of ${setupSteps.length}`}
      onBack={goBack}
      onNext={goNext}
      onSkip={skipSection}
      nextLabel={stepIndex === setupSteps.length - 1 ? "Finish" : "Next"}
    >
      {currentStep.section === "profile" ? (
        <div className="setup-fields">
          <div className="setup-field-group">
            <label htmlFor="profile-name">Name</label>
            <input
              className="setup-field"
              id="profile-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="setup-field-group">
            <label htmlFor="profile-country">Living country</label>
            <input
              className="setup-field"
              id="profile-country"
              type="text"
              autoComplete="country-name"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Your country"
            />
          </div>
        </div>
      ) : (
        <div className="setup-placeholder">
          {currentStep.detail && <p>{currentStep.detail}</p>}
          <p>Questions for this section will be added here.</p>
        </div>
      )}
    </SetupCard>
  )
}

export default ProfileSetup