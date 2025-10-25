import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItem";

const FaqPage = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faq = [
    {
      question: "Is PlanEase free to use?",
      answer:
        "Yes, PlanEase offers a generous free tier that allows you to create a certain number of lesson plans per month. We also have premium plans with unlimited generation, advanced features, and collaboration tools for individual teachers and entire schools.",
    },
    {
      question: "What subjects and grade levels are supported?",
      answer:
        "Our AI is trained on a vast range of educational materials and can generate lesson plans for virtually any subject and grade level, from kindergarten to high school. You can specify the subject and grade in the planner form for tailored results.",
    },
    {
      question: "How does the AI ensure the quality of the lesson plans?",
      answer:
        "Our AI models are specifically fine-tuned for educational content. It suggests activities, objectives, and assessments based on pedagogical best practices and can align with common curriculum standards. However, we always recommend that educators review and customize the generated plan to best fit their students' unique needs.",
    },
    {
      question: "Can I customize the lesson plans?",
      answer:
        "Absolutely! The generated plan is a starting point. You have full control to edit, add, or remove any part of the lesson. Our goal is to assist, not replace, the professional judgment of the teacher.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We take data privacy and security very seriously. All your data is encrypted and stored securely. We do not share your personal information or the content of your lesson plans with third parties. Please see our Privacy Policy for more details.",
    },
    {
      question: "Can I export my lesson plans?",
      answer:
        "Yes, you can export your lesson plans in PDF format for easy sharing or printing.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <main className='min-h-screen overflow-hidden'>
      <div className='container pt-24 pb-24'>
        <section className='relative mb-16'>
          <div className='md:w-2/3 space-y-4 w-full'>
            <PageHeader
              title='Help Center'
              heading='Frequently Asked Questions'
              description="Find answers to common questions about PlanEase. If you can't find what you're looking for, feel free to contact us."
            />
          </div>
        </section>

        <section className='flex flex-col lg:flex-row gap-12'>
          {/* faq list */}
          <div className='lg:w-2/3'>
            <div className='space-y-4 w-full'>
              {faq.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndexes.includes(index)}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>

          {/* contact us card */}
          <aside className='lg:w-1/3 '>
            <div className='bg-base-200 shadow-lg shadow-primary/5 rounded-2xl p-8 ring ring-base-300 '>
              <h3 className='font-bold text-2xl font-serif text-neutral mb-3'>
                Still have questions?
              </h3>
              <p className='text-base text-neutral-muted mb-6'>
                If you can't find the answer you're looking for, please don't
                hesitate to contact our support team.
              </p>

              <Link
                to='/contact'
                className='btn btn-secondary text-lg w-full py-2'>
                Contact Us
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default FaqPage;
