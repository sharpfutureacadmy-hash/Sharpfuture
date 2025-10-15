"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Who can apply for Sharp Future Academy courses?",
    answer:
      "Anyone who is passionate about Animation, VFX, Gaming, Design, or Digital Media. Beginners are welcome—no prior design or coding background is required for foundation tracks.",
  },
  {
    question: "What is the course duration and schedule?",
    answer:
      "Programs range from 2-month short modules to 41-month advanced diplomas. We offer weekday, weekend, and fast-track batches. Exact timelines vary by course and pace.",
  },
  {
    question: "How much are the fees? Do you offer EMI?",
    answer:
      "Fees depend on the program depth and duration. We provide flexible EMI plans and occasional scholarships based on merit or need. Speak with our counsellor for a personalized fee plan.",
  },
  {
    question: "Which software and tools will I learn?",
    answer:
      "Based on your track, modules include industry tools like Adobe Creative Cloud, Blender/Maya, 3ds Max, Unreal/Unity (for real-time), DaVinci Resolve, Nuke, Substance Suite, ZBrush and more—kept current with industry updates.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. Our placement cell supports with portfolio reviews, mock interviews, referrals, and placement drives with studios, agencies, and production houses. Your work portfolio is the key focus.",
  },
  {
    question: "Is there a demo class or counselling session?",
    answer:
      "Absolutely. Book a free counselling + demo session to experience the class flow, tools, and mentor interaction before enrolling.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, you'll receive an industry-recognized certificate on successful completion, along with a capstone portfolio review.",
  },
  {
    question: "What are the system requirements for online learners?",
    answer:
      "A modern Windows/macOS machine with 16GB RAM (32GB recommended for 3D/VFX), a mid-range GPU, and stable broadband (20 Mbps+). We'll share an exact spec sheet per track.",
  },
  {
    question: "How do I apply?",
    answer:
      'Click "Apply Now", fill your details, and our counsellor will call to schedule a counselling/demo. You can also walk in to our Lenin Chowk centre for on-the-spot guidance.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about courses, admissions, fees, and placements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Still have questions? We're here to help!</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
