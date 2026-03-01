
import { redirect } from 'next/navigation';


export const metadata = {
    title: "Ariia | VITS",
    description: "Information about Ariia at VITS.",
};

export default function Page() {
  redirect("https://drive.google.com/file/d/1QBwjTtOyOkRIl6mOvbYG5sCWIXekZTxK/view");
}
