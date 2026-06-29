import ButtonLogin from "@/components/ButtonLogin";
import CheckIcon from "@/components/CheckIcon";
import FAQItem from "@/components/FAQItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";

export default function Home() {
  const isLoggedIn = true;
  const name = "Antouan";
  const pricingFeaturesList = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support",
  ];
  const faqList = [
    {
      question: "How quickly can I launch a feedback board?",
      answer:
        "You can create your first board in a few minutes and start collecting feedback right away.",
    },
    {
      question: "Can customers vote on feature requests?",
      answer:
        "Yes. Customers can submit ideas, vote on requests, and help you prioritize what to build next.",
    },
    {
      question: "Do I need a developer to set this up?",
      answer:
        "No. The dashboard is designed so founders and teams can set up and manage feedback without code.",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-base-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">CodeFastSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a href="#pricing" className="btn btn-ghost">
              Pricing
            </a>
            <a href="#faq" className="btn btn-ghost">
              FAQ
            </a>
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
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image
          src={productDemo}
          alt="Product Demo"
          className="w-96 rounded-xl"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Collect customer feedback to build better products
          </h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes, prioritize features, and build
            products your customers will love.
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>
      {/* Pricing Section */}
      <section className="bg-base-200" id="pricing">
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
              {pricingFeaturesList.map((feature) => {
                return (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon />
                    {feature}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4 max-w-lg mx-auto">
            {faqList.map((qa) => (
              <FAQItem
                key={qa.question}
                question={qa.question}
                answer={qa.answer}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
