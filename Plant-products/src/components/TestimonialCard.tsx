type TestimonialCardProps = {
  name: string;
  review: string;
  rating: number;
  avatar: string;
};

export default function TestimonialCard({
  name,
  review,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-[#c8b84a]/30">

      
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-[#c8b84a]/30"
        />

        <div>
          <h4 className="text-[#edf2d0] font-semibold text-lg">
            {name}
          </h4>

          
          <div className="flex mt-1">
            {[...Array(rating)].map((_, index) => (
              <span key={index} className="text-[#c8b84a]">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

     
      <p className="mt-5 text-[#b8c0a0] leading-relaxed text-sm">
        "{review}"
      </p>
    </div>
  );
}