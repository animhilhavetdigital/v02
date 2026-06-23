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
          <div className="cta-content" style={{ maxWidth: '720px' }}>
            <h2 className="cta-title">Vous ne subissez plus seul</h2>
            <p style={{ marginBottom: '32px', color: 'rgba(226, 232, 255, 0.85)', fontSize: '16px', lineHeight: '1.65' }}>
              Commencez par remettre votre dossier en ordre. Droit Habitat vous aide à comprendre votre situation, structurer vos preuves et choisir la bonne suite.
            </p>
            <button className="btn-cta" onClick={scrollToChat}>
              Démarrer mon dossier
            </button>

            {/* Reassurance Bar */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '40px', color: 'rgba(226, 232, 255, 0.6)', fontSize: '13.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#D1B48C', borderRadius: '50%' }}></span>
                Confidentiel et sécurisé
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#D1B48C', borderRadius: '50%' }}></span>
                France uniquement
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#D1B48C', borderRadius: '50%' }}></span>
                Après signature
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: '#D1B48C', borderRadius: '50%' }}></span>
                Accompagnement structuré
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
