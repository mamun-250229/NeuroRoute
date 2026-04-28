import Navbar from '../components/layout/Navbar'

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div
        style={{
          paddingTop: '120px',
          textAlign: 'center',
          padding: '160px 24px 60px',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            color: 'var(--orange)',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Building in progress
        </p>
        <h1
          className="serif gradient-text"
          style={{ fontSize: '56px', fontWeight: 700, marginBottom: '16px' }}
        >
          NeuroRoute
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '18px',
            maxWidth: '480px',
            margin: '0 auto',
          }}
        >
          Navbar and theme toggle are working.
          Sections coming next.
        </p>
      </div>
    </div>
  )
}