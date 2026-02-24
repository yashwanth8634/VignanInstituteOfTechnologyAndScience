
import { redirect } from 'next/navigation';


export const metadata = {
    title: "IT Policy | VITS",
    description: "Information about IT Policy at VITS.",
};

export default function Page() {
  redirect('/Pdfs/ITPolicy/ITPolicy.pdf');
}
