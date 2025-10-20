import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";
import QuoteSection from "../components/shared/QuoteSection";
import { useTranslation } from "../translations";
import { useFetch } from "../hooks/useFetch";

const Contact: React.FC = () => {
  const { t, language } = useTranslation();
  const currentLanguage = language;
  const address =
    language === "pt"
      ? "Rua Jorge Alves 28, Loja"
      : language === "fr"
      ? "Rua Jorge Alves 28, Loja"
      : "Rua Jorge Alves 28, Loja";

  const query = `
    *[_type == "contactUs"]
  `;

  const { data, isLoading, error } = useFetch(query);

  if (isLoading) return null;
  if (error) return <div>Error: {error}</div>;

  const contactUsContent = data[0];

  return (
    <div className="pt-14">
      <div className="bg-[#1F2937] text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${contactUsContent.heroImg})` }}
        ></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {contactUsContent.heroTitle[currentLanguage]}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {contactUsContent.heroSubtitle[currentLanguage]}
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 tracking-tight">
                    {t("contact.form.title")}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {contactUsContent.getInTouchParagraph[currentLanguage]}
                  </p>
                </div>

                <ContactForm lng={currentLanguage} />
              </div>

              <div className="lg:pl-10">
                <div className="bg-[#F8F7F4] p-10 mb-10 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gray-900"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gray-900"></div>

                  <h3 className="text-2xl font-bold mb-8">
                    {t("contact.office.title")}
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-gray-900 mt-1 mr-6" />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {t("contact.office.visit")}
                        </h4>
                        <p className="text-gray-600">{address}</p>
                        <p className="text-gray-600">1299-783 Lisbon, Portugal</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone size={24} className="text-gray-900 mt-1 mr-6" />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {t("contact.office.call")}
                        </h4>
                        <p className="text-gray-600">+351 913 077 000</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail size={24} className="text-gray-900 mt-1 mr-6" />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {t("contact.office.email")}
                        </h4>
                        <a
                          href="mailto:francoisangel@square-way.com"
                          className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center group"
                        >
                          <span>francoisangel@square-way.com</span>
                          <ArrowRight
                            size={16}
                            className="ml-2 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 z-10">
                    <GoogleMap address="Rua Jorge Alves 28, Loja, 1299-783 Lisbon, Portugal" />
                  </div>
                  <div className="absolute inset-0 border-2 border-gray-900 transform translate-x-4 translate-y-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F7F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 relative group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.services.investment.title")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("contact.services.investment.description")}
                </p>
              </div>

              <div className="bg-white p-8 relative group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.services.design.title")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("contact.services.design.description")}
                </p>
              </div>

              <div className="bg-white p-8 relative group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.services.management.title")}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t("contact.services.management.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection quote={contactUsContent.quote[currentLanguage]} />
    </div>
  );
};

export default Contact;
