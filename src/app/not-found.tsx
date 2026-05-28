import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#070612',
        color: '#f5f5f5',
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        textAlign: 'center',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 480 }}>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#FF6B35',
          }}
        >
          Goodman GLS
        </p>
        <h1
          style={{
            margin: '12px 0 8px',
            fontSize: 28,
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          404 — Page not found
        </h1>
        <p
          style={{
            margin: '0 0 4px',
            fontSize: 15,
            color: '#a8a8b0',
            lineHeight: 1.5,
          }}
        >
          The page you are looking for could not be found.
        </p>
        <p
          style={{
            margin: '0 0 24px',
            fontSize: 14,
            color: '#888892',
            lineHeight: 1.5,
          }}
        >
          요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: '#FF6B35',
            color: '#070612',
            border: 'none',
            padding: '12px 24px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          Back to home / 홈으로
        </Link>
      </div>
    </div>
  );
}
