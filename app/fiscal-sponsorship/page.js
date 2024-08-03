import React from "react";
import styles from "../fiscal-sponsorship/fiscalFAQ.css";
import Footer from "../components/Footer";
import FakeNavbar from "../components/FakeNavbar";

const page = () => {
  return (
    <>
      <div className="qaa">
        <FakeNavbar />
        <div className="qaa-2">
          <p className="question">What does Fiscal Sponsorship mean?</p>
          <p className="answer">
            Fiscal Sponsorship is when a film, related project, or event aims to
            secure funding from sources like individuals, foundations,
            government or corporate bodies that exclusively donate to nonprofit
            entities with IRS tax-exempt status. To qualify as an exempt, an
            organization needs to possess a valid 501(c)(3) certificate issued
            by the IRS.
          </p>

          <p className="question">
            Does acquiring a fiscal sponsor confer a nonprofit status on me/my
            project?
          </p>
          <p className="answer">
            No, having a fiscal sponsor affiliated with a nonprofit does not
            grant an individual or project a nonprofit or tax-exempt status.
            Only the IRS is authorized to issue a tax-exempt designation.
          </p>

          <p className="question">
            What advantages does my project gain from securing Fiscal
            Sponsorship from CCEA?
          </p>
          <p className="answer">
            Securing Fiscal Sponsorship from CCEA opens up avenues to receive
            donations from individual benefactors, foundations, and other
            financial backers who only contribute to recognized 501(c)(3)
            tax-exempt nonprofit entities. Individual donors may also be
            encouraged by the prospect of supporting your film through
            tax-deductible contributions.
          </p>

          <p className="question">
            Does my project maintain its independent legal identity under fiscal
            sponsorship?
          </p>
          <p className="answer">
            Absolutely. Your project maintains its distinct legal entity. It
            continues to be under your creative control and ownership, and you
            remain responsible for tax reporting and liability. CCEA does not
            claim any rights in the project.
          </p>

          <p className="question">
            Is it possible to seek Fiscal Sponsorship for multiple projects?
          </p>
          <p className="answer">
            Yes, however, each project will require a separate application
            submission.
          </p>

          <p className="question">
            When is the opportune time to seek Fiscal Sponsorship?
          </p>
          <p className="answer">
            Applications for fiscal sponsorship are entertained continuously,
            welcoming projects at any phase, be it development, production, or
            post-production. Please account for a review time of around 1- 4
            weeks when planning your submission.
          </p>

          <p className="question">
            What type of projects does CCEA consider for Fiscal Sponsorship?
          </p>
          <p className="answer">
            CCEA embraces independent projects encompassing narrative and
            documentary styles of any duration and genre. Furthermore, CCEA
            supports various other projects and entities aligned with its
            mission, and/or in the pursuit of attaining their 501(c)(3) status,
            including interactive media, podcasts, film festivals, and more.
          </p>

          <p className="question">
            Is there a requisite project stage to apply for Fiscal Sponsorship?
          </p>
          <p className="answer">
            Fiscal Sponsorship applications are open at any stage of production,
            right from early development to post-production phases. Applications
            are also entertained with the objective of funding film festival
            participations and/or distribution expenses.
          </p>

          <p className="question">
            Can non-U.S. citizens apply for sponsorship?
          </p>
          <p className="answer">
            Absolutely, we are open to applications from individuals outside the
            U.S. However, be aware that certain tax limitations might be
            applicable. For more detailed information, please contact us at
            info@ccearts.org.
          </p>

          <p className="question">
            What are the financial obligations associated with the Fiscal
            Sponsorship program?
          </p>
          <p className="answer">
            Projects accepted into the program will be levied a 4%
            administrative fee on contributions directed towards projects.
          </p>
          <p className="question">
            Could you explain the distinction between a donor and an investor?
          </p>
          <p className="answer">
            The terms "donor" and "investor" bear distinct meanings. A donor
            financially supports your project and receives a tax receipt,
            without any entitlement to project profits. Conversely, an investor
            backs your project financially, anticipating a return on the
            investment, inclusive of the principal amount, but cannot avail of
            tax receipts for the invested capital.
          </p>

          <p className="question">
            Can my project secure funding from both donors and investors?
          </p>
          <p className="answer">
            Yes, you can indeed. However, CCEA can only accept funds from
            donors, and only these contributors are eligible for tax deductions
            on their donations.
          </p>

          <p className="question">
            What is the procedure to request fund disbursement?
          </p>
          <p className="answer">
            You are free to request a fund disbursement at any juncture. There
            is no fixed limit on the amount that can be requested, as long as
            sufficient funds are present in your account. However, we advise
            against withdrawing more than what is anticipated to be utilized in
            a fiscal quarter. Weekly disbursements are processed through ACH,
            reflecting in your account on Fridays. Requests need to be submitted
            by 5:00 pm PT on Mondays to be included in that week's ACH run. Late
            submissions will be considered for the next week's ACH cycle. If
            Monday is a holiday, the deadline moves to the subsequent working
            day.
          </p>

          <p className="question">
            Can my project obtain fiscal sponsorship from multiple organizations
            simultaneously?
          </p>
          <p className="answer">
            If you have initiated the fiscal sponsorship application process
            with another entity, kindly refrain from applying with CCEA until
            the outcome of your previous application is clear.
          </p>

          <p className="question">
            What reporting obligations are imposed on project representatives?
          </p>
          <p className="answer">
            Project representatives are mandated to furnish an annual report to
            CCEA. This report serves as a progress tracker for your project and
            an opportunity to update us on any developments or alterations
            witnessed during the past calendar year. This report should be
            accompanied by a cost report delineating the allocation of funds
            disbursed to you throughout the last calendar year. If your project
            has wrapped up, the annual report needs to be complemented by a
            final cost report.
          </p>
          <p className="question">
            When can I apply, and when will I hear back?
          </p>
          <p className="answer">
            The CCEA accepts applications throughout the year. All applications
            will be reviewed by the Fiscal Sponsorship Committee to determine if
            they fit CCEA's requirements. Applicants will be notified of the
            status of their application via email within 2-3 weeks of receipt.
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfOSXl0DE6kTpCli5zwu4TeSDA0yIQfSzTEx4uyrZSbR-8Q6Q/viewform?embedded=true"
            width="640"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
