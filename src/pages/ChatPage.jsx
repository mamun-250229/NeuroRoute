import { Link } from 'react-router-dom'
import { ArrowLeft, Zap } from 'lucide-react'

export default function ChatPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        className="card"
        style={{
          padding: '40px',
          maxWidth: '420px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'var(--orange)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            boxShadow: 'var(--shadow-orange)',
          }}
        >
          <Zap size={24} color="white" />
        </div>
        <h1
          className="serif"
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          Chat Interface
        </h1>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '15px',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          Full streaming chat UI coming soon.
        </p>
        <Link
          to="/"
          className="btn-secondary"
          style={{ justifyContent: 'center', width: '100%' }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}