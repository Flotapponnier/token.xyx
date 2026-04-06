import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-dvh bg-gradient-to-b space-y-12 from-gray-1400/5 via-white to-white relative overflow-x-hidden">
        <section className="mx-auto max-w-7xl px-6 pt-28 mt-12 pb-12">
          <div className="mx-auto max-w-4xl text-center text-pretty">
            <h1 className="text-balance text-[44px] leading-[1.02] md:text-[54px] font-medium text-text-extra-high">
              Tokens on Solana
            </h1>
          </div>
          <div className="mt-10">
            <HeroSearch />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
