import PricePanel from "@/components/PricePanel";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className=" p-8 m-4 shadow-sm inset-0 mx-auto rounded-2xl  w-fit bg-blue-200">
        <h1 className="text-center mb-4 p-2 text-blue-800 font-sans font-bold text-3xl">Shopping Cart 🛒</h1>
      <Product/>
      </section>
    </main>
  );
}
