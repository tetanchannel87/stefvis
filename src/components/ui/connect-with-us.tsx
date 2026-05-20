function SocialConnect() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-24 md:py-32">
      <div className="w-full max-w-3xl mx-auto text-center mb-16">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-500 mb-4">
          контакты
        </p>
        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Связаться
          </span>{" "}
          <span className="text-white">со мной</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          Открыт к проектам, коллабам и просто хорошему разговору о фронте.
          Выбери удобный способ — отвечаю быстро.
        </p>
      </div>

      <div className="relative w-full max-w-2xl">
        <div
          className="rounded-3xl bg-gradient-to-br from-neutral-900/80 to-black/90 border border-neutral-800 shadow-2xl backdrop-blur-3xl overflow-hidden p-5 md:p-8 transition-all duration-500 hover:scale-[1.02]"
          style={{
            boxShadow:
              "0 0 60px rgba(255, 255, 255, 0.08), 0 0 100px rgba(255, 255, 255, 0.04)",
          }}
        >
          <div className="flex flex-nowrap justify-around items-start gap-2 md:gap-8">
            <a
              href="https://t.me/stefan114"
              target="_blank"
              rel="noreferrer"
              className="social-icon telegram"
            >
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.96-.924c-.643-.204-.658-.643.136-.953l11.566-4.458c.538-.196 1.006.128.832.938z" />
                </svg>
              </div>
              <span className="icon-label">Telegram</span>
            </a>

            <a
              href="https://www.instagram.com/kew1xfn/"
              target="_blank"
              rel="noreferrer"
              className="social-icon instagram"
            >
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0 5.838a3.999 3.999 0 1 0 0 7.998 3.999 3.999 0 0 0 0-7.998zm0 6.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm5.116-7.65a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z" />
                </svg>
              </div>
              <span className="icon-label">Instagram</span>
            </a>

            <a href="mailto:Gorezko.08@mail.ru" className="social-icon email">
              <div className="icon-container">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </div>
              <span className="icon-label">Email</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .icon-container {
          display: inline-flex;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (min-width: 768px) {
          .icon-container {
            width: 80px;
            height: 80px;
          }
        }
        .icon-label {
          font-size: 12px;
        }
        @media (min-width: 768px) {
          .icon-label {
            font-size: 14px;
          }
        }
        .social-icon:hover .icon-container {
          transform: translateY(-10px) scale(1.1);
        }
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(5px);
        }
        .icon-label {
          margin-top: 12px;
          color: #e5e5e5;
          font-weight: 500;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .social-icon.telegram:hover .icon-container {
          background: #229ED9;
          box-shadow: 0 0 20px rgba(34, 158, 217, 0.6);
        }
        .social-icon.instagram:hover .icon-container {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          box-shadow: 0 0 20px rgba(225, 48, 108, 0.6);
        }
        .social-icon.email:hover .icon-container {
          background: #d97757;
          box-shadow: 0 0 20px rgba(217, 119, 87, 0.55);
        }
        .social-icon:hover svg {
          animation: shake 0.5s;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }
        .icon-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .social-icon:hover .icon-container::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

export { SocialConnect };
