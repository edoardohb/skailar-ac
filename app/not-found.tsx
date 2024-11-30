import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-center">
      <div className="flex items-center" style={{ fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"' }}>
        <div>
          <style dangerouslySetInnerHTML={{
            __html: `
            body { color: #000; background: #fff; margin: 0; }
            .next-error-h1 { border-right: 1px solid rgba(0,0,0,.3); }
            @media (prefers-color-scheme: dark) {
              body { color: #fff; background: #000; }
              .next-error-h1 { border-right: 1px solid rgba(255,255,255,.3); }
            }
          ` }} />
          <h1 style={{ display: 'inline-block', margin: '0 20px 0 0', padding: '0 23px 0 0', fontSize: '24px', fontWeight: '500', verticalAlign: 'top', lineHeight: '49px' }} className="next-error-h1">404</h1>
          <div className="inline-block">
            <h2 style={{ fontSize: '14px', fontWeight: '400', lineHeight: '49px', margin: '0' }}>This page could not be found.</h2>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-6 text-center">
        <Link className="text-zinc-500" href='/'>
          Powered by{' '}
          <span className="text-muted-foreground">skailar.ac</span>
        </Link>
        <p className="text-xs text-zinc-500 max-w-xl mt-2">
          If you are performing any action in the application and are receiving this error repeatedly, please let us know through our{' '}
          <Link href='https://discord.gg/skailar' target="_blank" className="text-zinc-400">
            Discord
          </Link>{' '}
          so that we can assist you.
        </p>
      </footer>
    </div>
  )
}