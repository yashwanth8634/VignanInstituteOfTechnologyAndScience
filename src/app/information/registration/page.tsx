
import { redirect } from 'next/navigation';


export const metadata = {
    title: "Registration | VITS",
    description: "Information about Registration at VITS.",
};

export default function Page() {
  redirect('https://vignanits.ac.in/old_website/Registration%20Form.docx');
}
