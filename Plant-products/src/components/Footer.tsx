export default function Footer() {
  return (
    <footer className="bg-[#0d1209] border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        
          <div>
            <h2
              className="text-3xl text-[#edf2d0] font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              FloraVision
              <span className="text-[#c8b84a]">.</span>
            </h2>

            <p className="mt-4 text-[#b8c0a0] leading-relaxed text-sm">
              Bringing nature closer to your home with elegant indoor plants.
            </p>
          </div>

          
          <div>
            <h3 className="text-[#edf2d0] text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#b8c0a0]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Plants</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          
          <div className="lg:col-span-2">
            <h3 className="text-[#edf2d0] text-xl font-semibold mb-4">
              Subscribe Newsletter
            </h3>

            <p className="text-[#b8c0a0] text-sm mb-5">
              Get updates about new plants and special offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-[#edf2d0] outline-none"
              />

              <button className="px-6 py-3 rounded-full bg-[#c8b84a] text-black font-medium hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#7d8468] text-sm">
            © 2026 FloraVision. All rights reserved.
          </p>

          
          <div className="flex gap-4">
            <a href="#" className="text-[#c8b84a]">Instagram</a>
            <a href="#" className="text-[#c8b84a]">Twitter</a>
            <a href="#" className="text-[#c8b84a]">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}