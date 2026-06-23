import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, CreditCard, Calendar, CheckCircle, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const offers = {
  diagnostic: { name: 'Diagnostic', price: 99 }
};

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const offerId = searchParams.get('offre') || 'diagnostic';
  const offer = offers[offerId] || offers.diagnostic;

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [status, setStatus] = useState('idle'); // idle | processing | success
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        navigate('/onboarding');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const validate = () => {
    const rawCard = cardNumber.replace(/\s/g, '');
    if (rawCard.length !== 16) return 'Le numéro de carte doit comporter 16 chiffres.';
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return 'La date d\'expiration doit être au format MM/AA.';
    if (cvc.length !== 3 || !/^\d{3}$/.test(cvc)) return 'Le CVC doit comporter 3 chiffres.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <>
      <style>
        {`
          .payment-section {
            padding: 140px 0 100px;
          }

          .payment-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 380px);
            gap: 40px;
            align-items: flex-start;
          }

          .payment-card {
            padding: 40px;
          }

          .payment-card h1 {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(32px, 4vw, 48px);
            margin-bottom: 8px;
            color: #D1B48C;
          }

          .payment-subtitle {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-soft);
            font-size: 14px;
            margin-bottom: 32px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: var(--text-main);
            margin-bottom: 8px;
          }

          .input-wrapper {
            position: relative;
          }

          .input-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-soft);
            pointer-events: none;
          }

          .form-input {
            width: 100%;
            background: rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            padding: 14px 16px 14px 44px;
            color: #fff;
            font-family: inherit;
            font-size: 15px;
            outline: none;
            transition: border-color 0.2s;
          }

          .form-input:focus {
            border-color: var(--accent);
          }

          .form-input::placeholder {
            color: var(--text-soft);
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .error-msg {
            color: #F87171;
            font-size: 13px;
            margin-top: -8px;
            margin-bottom: 20px;
          }

          .pay-button {
            width: 100%;
            min-height: 50px;
            font-size: 15px;
          }

          .security-note {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 16px;
            font-size: 12px;
            color: var(--text-soft);
          }

          .summary-card {
            padding: 28px;
            position: sticky;
            top: 100px;
          }

          .summary-title {
            font-size: 14px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 20px;
          }

          .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 0;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }

          .summary-row:last-child {
            border-bottom: none;
          }

          .summary-label {
            font-size: 14px;
            color: var(--text-main);
          }

          .summary-price {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
          }

          .summary-total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,0.12);
          }

          .summary-total .summary-label {
            font-weight: 600;
          }

          .summary-total .summary-price {
            font-size: 24px;
            color: var(--accent-light);
          }

          .success-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
            padding: 40px 0;
          }

          .success-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(34, 197, 94, 0.12);
            border: 1px solid rgba(34, 197, 94, 0.25);
            color: #4ADE80;
            display: grid;
            place-items: center;
          }

          .success-state h2 {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(28px, 6vw, 40px);
            color: #D1B48C;
          }

          .processing-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            padding: 60px 0;
          }

          .processing-state p {
            color: var(--text-muted);
          }

          @media (max-width: 900px) {
            .payment-grid {
              grid-template-columns: 1fr;
            }

            .summary-card {
              position: static;
            }
          }

          @media (max-width: 480px) {
            .form-row {
              grid-template-columns: 1fr;
            }

            .payment-card {
              padding: 28px;
            }
          }
        `}
      </style>

      <div className="app-wrapper">
        <Navbar />
        <main>
          <section className="payment-section">
            <div className="container">
              <div className="payment-grid">
                <div className="glass-card payment-card">
                  {status === 'success' ? (
                    <div className="success-state">
                      <div className="success-icon">
                        <CheckCircle size={40} />
                      </div>
                      <h2>Paiement confirmé !</h2>
                      <p>Redirection vers votre espace...</p>
                    </div>
                  ) : status === 'processing' ? (
                    <div className="processing-state">
                      <Loader2 size={48} style={{ animation: 'spin 1.2s linear infinite', color: 'var(--accent-light)' }} />
                      <p>Traitement de votre paiement sécurisé...</p>
                    </div>
                  ) : (
                    <>
                      <h1>Paiement sécurisé</h1>
                      <div className="payment-subtitle">
                        <Lock size={14} />
                        Paiement sécurisé par Stripe. Vos données sont chiffrées de bout en bout.
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Numéro de carte</label>
                          <div className="input-wrapper">
                            <CreditCard size={18} className="input-icon" />
                            <input
                              type="text"
                              className="form-input"
                              placeholder="1234 5678 9012 3456"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label>Expiration</label>
                            <div className="input-wrapper">
                              <Calendar size={18} className="input-icon" />
                              <input
                                type="text"
                                className="form-input"
                                placeholder="MM/AA"
                                value={expiry}
                                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <label>CVC</label>
                            <div className="input-wrapper">
                              <Lock size={18} className="input-icon" />
                              <input
                                type="text"
                                className="form-input"
                                placeholder="123"
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {error && <div className="error-msg">{error}</div>}

                        <button type="submit" className="btn-primary pay-button">
                          <Lock size={16} style={{ marginRight: '8px' }} />
                          Payer {offer.price} €
                        </button>

                        <div className="security-note">
                          <ShieldCheck size={14} />
                          Paiement 100% sécurisé — Certification PCI DSS
                        </div>
                      </form>
                    </>
                  )}
                </div>

                <div className="glass-card summary-card">
                  <div className="summary-title">Résumé</div>
                  <div className="summary-row">
                    <span className="summary-label">Offre sélectionnée</span>
                    <span className="summary-price">{offer.name}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Prix</span>
                    <span className="summary-price">{offer.price} €</span>
                  </div>
                  <div className="summary-total">
                    <span className="summary-label">Total</span>
                    <span className="summary-price">{offer.price} €</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PaymentPage;
