const CTASection = () => {
  const scrollToChat = () => {
    document.getElementById('chat-test')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <style>
        {`
          .cta-section {
            padding: 100px 0;
            text-align: center;
            position: relative;
          }

          .cta-content {
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          .cta-title {
            margin-bottom: 32px;
            text-align: center;
          }

          .cta-line {
            display: block;
            white-space: nowrap;
          }

          @media (max-width: 480px) {
            .cta-section {
              padding: 72px 0;
            }

            .cta-title {
              margin-bottom: 24px;
            }

            .cta-line {
              white-space: normal;
            }
          }
        `}
      </style>
      <section className="cta-section section-glow">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="cta-line">Prêt à savoir si votre</span>
              <span className="cta-line">dossier vaut le coup ?</span>
            </h2>
            <button className="btn-cta" onClick={scrollToChat}>
              Faire le test gratuit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
