import Button from "./Button";

interface PlantCardProps {
  image: string;
  title: string;
  description: string;
  price: string | number;
}

export default function PlantCard({
  image,
  title,
  description,
  price,
}: PlantCardProps) {
  return (
    <div className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-5 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-[#c8b84a]/40">

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="mt-5 text-center">
        <h3
          className="text-2xl text-[#edf2d0] font-semibold"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>

        <p className="mt-3 text-sm text-[#b8c0a0] leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[#c8b84a] text-xl font-bold">
            ₹{price}
          </span>

          <Button text="Explore" primary />
        </div>
      </div>
    </div>
  );
}