"use client";

export default function FooterScene() {
  return (
    <section className="relative h-screen bg-white">
      <div className="flex h-[18vh] items-center justify-between gap-8 border-y border-zinc-200 bg-white px-[7vw] text-zinc-900">
        <p className="text-[clamp(16px,1.4vw,22px)] font-semibold">
          Exclusive launches, early offers and some fun.
        </p>

        <div className="flex min-w-[420px] items-center gap-3">
          <input
            aria-label="Email address"
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-full border border-zinc-300 px-6 text-sm outline-none transition focus:border-zinc-500"
          />
          <button className="h-12 rounded-full bg-[#2ECBBE] px-7 text-sm font-semibold text-white transition duration-500 hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>

      <footer className="relative h-[82vh] bg-[#35103A] px-[7vw] py-[7vh] text-white">
        <div className="grid grid-cols-[1.15fr_repeat(4,1fr)] gap-12">
          <div>
            <p className="text-[clamp(22px,2vw,34px)] font-light tracking-[0.14em]">
              SPECSCART
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/72">
              Performance eyewear, thoughtful styling, and everyday clarity for
              modern movement.
            </p>
          </div>

          {[
            ["Shop", "Eyeglasses", "Sunglasses", "Sports Eyewear", "New In"],
            ["Support", "Help Centre", "Track Order", "Returns", "Contact"],
            ["Company", "About", "Stores", "Careers", "Journal"],
            ["Legal", "Privacy", "Terms", "Accessibility", "Cookies"],
          ].map(([heading, ...items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                {heading}
              </h4>
              <div className="mt-5 space-y-3 text-sm text-white/84">
                {items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[6vh] left-[7vw] right-[7vw] flex items-center justify-between border-t border-white/15 pt-5 text-xs text-white/60">
          <p>© Specscart. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>YouTube</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
