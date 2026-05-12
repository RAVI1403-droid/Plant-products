type ButtonProps = {
  text: string;
  primary?: boolean;
};

export default function Button({
  text,
  primary = false,
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-full transition-all duration-300 font-medium
      ${
        primary
          ? "bg-[#c8b84a] text-black hover:scale-105"
          : "border border-[#c8b84a] text-[#edf2d0] hover:bg-[#c8b84a] hover:text-black"
      }`}
    >
      {text}
    </button>
  );
}