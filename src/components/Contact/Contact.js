import Search from "../Search";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <>
            <Search/>
            <div class="row tm-row tm-mb-120">
                <div class="col-12">
                    <h2 class="tm-color-primary tm-post-title tm-mb-60">Contact Us</h2>
                </div>
                <ContactForm/>
                <div class="col-lg-5 tm-contact-right">
                    <address class="mb-4 tm-color-gray">
                        120 Lorem ipsum dolor sit amet,
                        consectetur adipiscing 10550
                    </address>
                    <span class="d-block">
                        Tel:
                        <a href="tel:060-070-0980" class="tm-color-gray">060-070-0980</a>
                    </span>
                    <span class="mb-4 d-block">
                        Email:
                        <a href="mailto:info@company.com" class="tm-color-gray">info@company.com</a>
                    </span>
                    <p class="mb-5 tm-line-height-short">
                        Maecenas eu mi eu dui cursus
                        consequat non eu metus. Morbi ac
                        turpis eleifend, commodo purus
                        eget, commodo mauris.
                    </p>
                </div>
            </div>
        </>
    )
};

export default Contact;