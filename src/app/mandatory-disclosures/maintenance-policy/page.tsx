
import { redirect } from 'next/navigation';


export const metadata = {
    title: "Maintenance Policy | VITS",
    description: "Information about Maintenance Policy at VITS.",
};

export default function Page() {
  redirect('/Pdfs/MaintenancePolicy/Maintenance-policy.pdf');
}
