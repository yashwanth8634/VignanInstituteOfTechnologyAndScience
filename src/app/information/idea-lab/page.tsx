
import { redirect } from 'next/navigation';


export const metadata = {
    title: "Idea Lab | VITS",
    description: "Information about Idea Lab at VITS.",
};

export default function Page() {
  redirect('https://www.vignanits.ac.in/IDEAlab/');
}
