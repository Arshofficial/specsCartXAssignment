"use client";

import Image from "next/image";
import {
  // Instagram,
  // Facebook,
  // Linkedin,
  // Youtube,
  Music2,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
  X,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2B0633] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,52,164,0.45),transparent_40%)]" />

      <div className="pointer-events-none absolute bottom-[-40px] left-[30px] select-none text-[180px] font-semibold tracking-[0.18em] text-white/[0.03]">
        SPECSCART
      </div>

      <div className="relative z-10 px-[42px] pb-5 pt-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-6">
            <div className="flex h-[30px] w-[118px] items-center justify-center border border-white/40 bg-white/5">
              <Image
                src="/specs-cart-logo.png"
                alt="Specscart"
                width={50}
                height={10}
                className="object-contain"
              />
            </div>

            <div className="flex items-center gap-1 text-[13px] text-white/90">
              <span>Excellent</span>
              <span className="font-medium">4.8 out of 5</span>
              <span className="text-[#00B67A]">★</span>
              <span className="text-white/80">Trustpilot</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {[
              "PayPal",
              "ApplePay",
              "GPay",
              "Amex",
              "Visa",
              "Master",
              "Klarna",
              "Afterpay",
            ].map((item) => (
              <div
                key={item}
                className="flex h-[20px] min-w-[36px] items-center justify-center rounded-[2px] bg-white px-1 text-[9px] font-medium text-black"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr_1.45fr] gap-10 py-10">
          <div className="space-y-5">
            {["Glasses", "Sunglasses", "Lenses", "Services", "Brands"].map(
              (item) => (
                <a
                  key={item}
                  className="block text-[14px] font-medium text-white/92 transition hover:text-white"
                >
                  {item}
                </a>
              ),
            )}

            <div className="flex items-center gap-3 pt-3">
              {[
                MessageCircle,
                Music2,
                MessageCircle,
                MessageCircle,
                MessageCircle,
                MessageCircle,
                X,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/85 transition hover:bg-white/10"
                >
                  <Icon size={15} strokeWidth={1.8} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {["About Us", "Blogs", "Stores", "Reviews"].map((item) => (
              <a
                key={item}
                className="block text-[14px] text-white/92 transition hover:text-white"
              >
                {item}
              </a>
            ))}

            <div className="flex items-center gap-2">
              <a className="text-[14px] text-white/92 transition hover:text-white">
                Career
              </a>

              <span className="rounded bg-[#00C56E] px-1.5 py-[2px] text-[9px] font-medium uppercase tracking-wide text-white">
                We are hiring
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {[
              "Help & FAQs",
              "Your Prescription",
              "How to Order",
              "Delivery Information",
            ].map((item) => (
              <a
                key={item}
                className="block text-[14px] text-white/92 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="border-l border-white/10 pl-10">
            <h3 className="mb-5 text-[16px] font-medium text-white/95">
              Help is always here
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-xl border border-white/15 bg-white/[0.02] p-4">
                <div className="flex items-start gap-3">
                  <Phone
                    size={17}
                    strokeWidth={1.7}
                    className="mt-0.5 text-white/70"
                  />

                  <div>
                    <p className="text-[14px] text-white/92">Call Us</p>
                    <p className="mt-1 text-[13px] text-white/45">
                      0161 312 5767
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/[0.02] p-4">
                <div className="flex items-start gap-3">
                  <Mail
                    size={17}
                    strokeWidth={1.7}
                    className="mt-0.5 text-white/70"
                  />

                  <div>
                    <p className="text-[14px] text-white/92">Email Us</p>
                    <p className="mt-1 text-[13px] text-white/45">
                      support@specscart.co.uk
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/[0.02] p-4">
                <div className="flex items-start gap-3">
                  <MessageCircle
                    size={17}
                    strokeWidth={1.7}
                    className="mt-0.5 text-white/70"
                  />

                  <div>
                    <p className="text-[14px] text-white/92">Live Chat</p>
                    <p className="mt-1 text-[13px] text-white/45 underline underline-offset-2">
                      Chat Now
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/[0.02] p-4">
                <div className="flex items-start gap-3">
                  <Clock3
                    size={17}
                    strokeWidth={1.7}
                    className="mt-0.5 text-white/70"
                  />

                  <div>
                    <p className="text-[14px] text-white/92">Open From</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-white/45">
                      Mon - Sat 9:00 AM - 5:30 PM
                      <br />
                      Sun 10:00 AM - 3:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-5 text-[12px] text-white/55">
          <p>Developed by HRM International Limited © 2024 Specscart.</p>

          <div className="flex items-center gap-3">
            <a className="hover:text-white/90">Sitemap</a>

            <span>|</span>

            <a className="hover:text-white/90">Terms & Conditions</a>

            <span>|</span>

            <a className="hover:text-white/90">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
