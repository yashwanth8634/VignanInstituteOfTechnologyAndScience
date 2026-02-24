


export const metadata = {
    title: "IT Policy | VITS",
    description: "Information about IT Policy at VITS.",
};

export default function ITPolicy() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/Pdfs/ITPolicy/ITPolicy.pdf"
        className="w-full h-full"
      />
    </div>
  );
}
