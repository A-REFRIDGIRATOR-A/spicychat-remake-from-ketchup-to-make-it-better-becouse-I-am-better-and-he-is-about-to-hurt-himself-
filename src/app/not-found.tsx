import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContainer } from "@/components/common/main-container";
import { MainLayout } from "@/components/layout/main-layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <MainLayout>
      <MainContainer className="min-h-[100dvh]">
        <Header />

        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <h1 className="text-5xl font-bold">404</h1>

          <span className="text-xl font-semibold">
            Page is either deleted or never existed.
          </span>

          <Link className="mt-10 rounded-lg bg-main-accent p-2" href="/">
            Go back home
          </Link>
        </div>

        <Footer />
      </MainContainer>
    </MainLayout>
  );
}
