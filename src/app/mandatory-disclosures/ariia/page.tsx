
import { redirect } from 'next/navigation';


export const metadata = {
    title: "Ariia | VITS",
    description: "Information about Ariia at VITS.",
};

export default function Page() {
  redirect('/Pdfs/ARIIA/ARI-C-19678-Report.pdf');
}
