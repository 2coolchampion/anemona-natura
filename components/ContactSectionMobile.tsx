import ContactAddress from "./ContactAddress"
import ContactFormMobile from "./ContactFormMobile"

type ContactSectionMobileProps = {
  className?: string
}

const ContactSectionMobile = ({ className }: ContactSectionMobileProps) => {
  return (
    <div className={className}>
      <section className="w-full bg-green-dark px-4 py-16 sm:px-16 md:px-32">
        <div className="mt-10 flex items-center">
          <h2 className="mr-auto text-3xl font-extrabold text-background-light lg:hidden">
            CONTACT
          </h2>
          <div className="-mr-4 ml-auto h-[12px] w-[150px] bg-background-light lg:hidden"></div>
        </div>
        <ContactAddress />
      </section>
      <section className="w-full px-8 py-16 sm:px-16 md:px-32">
        <div className="flex flex-col space-y-8">
          <ContactFormMobile />
        </div>
      </section>
    </div>
  )
}

export default ContactSectionMobile
