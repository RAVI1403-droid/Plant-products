import Button from "./Button";

export default function HeroSection({
  title = "Bring Nature Into Your Home",
  subtitle = "Discover beautiful indoor plants that refresh your space and improve your lifestyle.",
  primaryBtnText = "Buy Now",
  secondaryBtnText = "Explore",
  bannerImage = "/images/plant-banner.png",
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10170d] via-[#182012] to-[#0f140c] opacity-95"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#edf2d0]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-[#c8d0b0] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button text={primaryBtnText} primary />
            <Button text={secondaryBtnText} />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 rounded-full"></div>

            {/* Banner Card */}
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
              <img
                src={bannerImage}
                alt="Plant Banner"
                className="w-[280px] sm:w-[350px] lg:w-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}