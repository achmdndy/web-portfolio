export function TechSolidarity() {
  return (
    <div className="aurora-max-w-3xl aurora-mx-auto aurora-leading-relaxed aurora-text-gray-800 dark:aurora-text-gray-200">
      <header className="aurora-mb-12">
        <h1 className="aurora-text-4xl md:aurora-text-5xl aurora-font-bold aurora-mb-4 aurora-leading-tight">
          The Tech Community&apos;s Selective Solidarity
        </h1>
        <p className="aurora-text-xl aurora-text-gray-600 dark:aurora-text-gray-400 aurora-mb-6">
          Ukraine vs. Palestine - Why the Different Responses?
        </p>
      </header>

      <p className="aurora-text-xl aurora-leading-relaxed aurora-mb-8">
        In early 2022, when Russia invaded Ukraine, the global tech community
        responded swiftly. Developer blogs, open-source maintainers, big tech
        companies, and even browser extensions showed Ukrainian flags or
        messages of support.
      </p>

      <blockquote className="aurora-my-12 aurora-border-l-4 aurora-border-primary aurora-pl-6 aurora-italic aurora-text-xl">
        However, when Israel launched military operations in Gaza—causing
        thousands of civilian casualties—the same platforms were largely silent.{' '}
        <span className="aurora-font-bold aurora-text-primary">
          #StandWithPalestine
        </span>{' '}
        has rarely been amplified by major tech influencers.
      </blockquote>

      <div className="aurora-space-y-12">
        <section>
          <h2 className="aurora-text-2xl aurora-font-bold aurora-mb-4">
            Political Sensitivities and Corporate Risk
          </h2>
          <p className="aurora-text-lg aurora-leading-relaxed">
            Tech companies, especially those headquartered in the West, often
            align with the geopolitical stance of their host countries.
            Supporting Ukraine aligned with U.S. and EU policies. Supporting
            Palestine, however, risks being labeled controversial or even
            antisemitic, despite being a human rights issue. This makes many
            organizations opt for{' '}
            <span className="aurora-bg-yellow-100 dark:aurora-bg-yellow-900 aurora-px-1">
              silence over perceived risk
            </span>
            .
          </p>
        </section>

        <section>
          <h2 className="aurora-text-2xl aurora-font-bold aurora-mb-4">
            Who Gets Humanized in Tech Media?
          </h2>
          <p className="aurora-text-lg aurora-leading-relaxed">
            When Ukraine was invaded, tech media humanized Ukrainian
            developers—highlighting engineers coding in bomb shelters,
            open-source maintainers fleeing war. Similar stories exist in Gaza,
            but they&apos;re rarely covered. The difference?{' '}
            <span className="aurora-font-bold">Narrative framing</span>. Western
            media often depicts Eastern Europeans as relatable. Middle
            Easterners, especially Palestinians, are frequently politicized
            rather than humanized.
          </p>
        </section>

        <section>
          <h2 className="aurora-text-2xl aurora-font-bold aurora-mb-4">
            The Impact of Platform Bias
          </h2>
          <div className="aurora-grid aurora-gap-6 md:aurora-grid-cols-2 aurora-my-8">
            <div className="aurora-bg-gray-50 dark:aurora-bg-gray-800 aurora-p-6 aurora-rounded-lg">
              <h3 className="aurora-text-xl aurora-font-bold aurora-mb-3">
                Censorship Issues
              </h3>
              <p>
                Several developers have reported{' '}
                <span className="aurora-font-bold">content takedowns</span> when
                posting about Palestine. Algorithmic moderation often flags
                terms like &quot;Free Palestine&quot; unfairly.
              </p>
            </div>
            <div className="aurora-bg-gray-50 dark:aurora-bg-gray-800 aurora-p-6 aurora-rounded-lg">
              <h3 className="aurora-text-xl aurora-font-bold aurora-mb-3">
                Selective Activism
              </h3>
              <p>
                The developer community prides itself on ethics, yet shows{' '}
                <span className="aurora-font-bold">selective outrage</span>. We
                rally behind &apos;safe&apos; issues but ignore others equally
                urgent.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="aurora-text-2xl aurora-font-bold aurora-mb-4">
            Moving Forward: What Can We Do?
          </h2>
          <div className="aurora-grid aurora-gap-4 md:aurora-grid-cols-2 aurora-my-8">
            <div className="aurora-flex aurora-items-start aurora-gap-3">
              <span className="aurora-text-primary aurora-font-bold">01.</span>
              <div>
                <h3 className="aurora-font-bold aurora-mb-2">
                  Normalize borderless solidarity
                </h3>
                <p>Support human rights, not just popular narratives</p>
              </div>
            </div>
            <div className="aurora-flex aurora-items-start aurora-gap-3">
              <span className="aurora-text-primary aurora-font-bold">02.</span>
              <div>
                <h3 className="aurora-font-bold aurora-mb-2">Amplify voices</h3>
                <p>Give platform to suppressed communities</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="aurora-mt-16 aurora-mb-12">
        <blockquote className="aurora-text-2xl aurora-italic aurora-text-center aurora-mb-6">
          &quot;Injustice anywhere is a threat to justice everywhere.&quot;
          <footer className="aurora-text-base aurora-mt-2 aurora-text-gray-600 dark:aurora-text-gray-400">
            — Martin Luther King Jr.
          </footer>
        </blockquote>
        <p className="aurora-text-lg aurora-text-center aurora-font-bold">
          We must ask ourselves: are we truly inclusive, or just selectively
          comfortable?
        </p>
      </section>
    </div>
  );
}
