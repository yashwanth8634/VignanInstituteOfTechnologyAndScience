
import { redirect } from 'next/navigation';


export const metadata = {
    title: "Online Grievance | VITS",
    description: "Information about Online Grievance at VITS.",
};

export default function Page() {
  redirect('http://103.10.134.234/VGNT_Grievance/');
}
