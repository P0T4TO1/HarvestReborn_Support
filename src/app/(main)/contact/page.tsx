import { ContactForm } from "@/components";

export default async function Contact() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
