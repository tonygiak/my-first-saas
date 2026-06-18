import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Antouan";
  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="btn btn-ghost">Pricing</a>
            <a className="btn btn-ghost">FAQ</a>
          </div>
          {/* <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div> */}
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
