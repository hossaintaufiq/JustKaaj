import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import LoginForm from "@/Component/Auth/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
        <LoginForm />
      </section>
      <Footer />
    </div>
  );
}
