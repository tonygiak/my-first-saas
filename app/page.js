import ButtonLogin from "@/components/ButtonLogin";
import CheckIcon from "@/components/CheckIcon";

export default function Home() {
  const isLoggedIn = true;
  const name = "Antouan";
  return (
    <main>
      {/* Header */}
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
      {/* Hero Section */}
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
      {/* Pricing Section */}
      <section className="bg-base-200">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>
          <div className="card p-8 bg-base-100 w-96 rounded-3xl mx-auto shadow-sm space-y-5">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="text-sm uppercase font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckIcon />
                Collect customer feedback
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Unlimited boards
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                Admin dashboard
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                24/7 support
              </li>
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
    </main>
  );
}
