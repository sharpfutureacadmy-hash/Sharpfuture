import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courseData } from "@/lib/course";
import { InquiryPopup } from "@/components/inquiry-popup";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = courseData.find((item) => item.id === Number(id));

  if (!course) {
    notFound();
  }

  const whatsappEnrollUrl = `https://api.whatsapp.com/send/?phone=917319792555&text=${encodeURIComponent(
    `Hi, I would like to apply for the ${course.title} course at Sharp Future Academy. Please provide more details.`,
  )}&type=phone_number&app_absent=0`;

  return (
    <div className="bg-[#0b0b16] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          href="/#courses"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          HOME
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="relative h-[650px] overflow-hidden">

        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-2xl">

              <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
                Sharp Future Academy
              </span>

              <h1 className="text-6xl font-bold mt-6 leading-tight">
                {course.title}
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-8">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <div className="bg-white/10 backdrop-blur rounded-xl px-5 py-4">
                  <p className="text-gray-400 text-sm">Duration</p>
                  <h3 className="font-bold">{course.duration}</h3>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl px-5 py-4">
                  <p className="text-gray-400 text-sm">Course Fee</p>
                  <h3 className="font-bold">{course.fees}</h3>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl px-5 py-4">
                  <p className="text-gray-400 text-sm">Eligibility</p>
                  <h3 className="font-bold">{course.eligibility}</h3>
                </div>

              </div>

              <div className="flex flex-wrap gap-5 mt-10">

                <InquiryPopup
                  triggerLabel="Apply Now"
                  triggerClassName="bg-orange-500 hover:bg-orange-600 px-8 py-8 rounded-xl font-semibold transition text-white"
                  defaultOpen={false}
                />

                <a
                  href="/Brochure-2026.pdf"
                  download="Brochure-2026.pdf"
                  className="inline-flex items-center justify-center border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition"
                >
                  Download Brochure
                </a>

              </div>

            </div>

            {course.images?.length ? (
              <div className="relative self-start">
                <div className="absolute left-1/2 top-0 h-px w-96 -translate-x-1/2 bg-white/30" />
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border border-white/40 bg-white/80" />

                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl w-[360px] h-[240px]">
                    <div className="absolute left-1/2 top-0 h-8 w-[2px] -translate-x-1/2 bg-white/30" />
                    <Image
                      src={course.images[0]}
                      alt="Interior design sample 1"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex gap-4">
                    {course.images.slice(1).map((src, index) => (
                      <div key={src} className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl w-[270px] h-[210px]">
                        <div className="absolute left-1/2 top-0 h-7 w-[2px] -translate-x-1/2 bg-white/30" />
                        <Image
                          src={src}
                          alt={`Interior design sample ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

          </div>
        </div>

      </section>

      {/* COURSE OVERVIEW */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold mb-8">
          Course Overview
        </h2>

        <p className="text-gray-300 leading-9 text-lg">
          {course.overview}
        </p>

      </section>

      {/* WHAT YOU WILL LEARN */}

      <section className="max-w-7xl mx-auto py-10 px-6">

        <h2 className="text-4xl font-bold mb-12">
          What You Will Learn
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

{course.learn.map((item) => (

            <div
              key={item}
              className="bg-[#181824] rounded-xl p-6 border border-white/10"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </section>

      {/* SOFTWARE */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold mb-12">
          Software Covered
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{course.software.map((software) => (

            <div
              key={software}
              className="bg-[#181824] rounded-xl h-32 flex items-center justify-center font-semibold text-lg border border-white/10 hover:border-orange-500 transition"
            >
              {software}
            </div>

          ))}

        </div>

      </section>

      {/* CAREER */}

      <section className="bg-[#111122] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {course.careers.map((career) => (

              <div
                key={career}
                className="bg-[#181824] rounded-xl p-8 hover:scale-105 transition"
              >
                <h3 className="text-2xl font-semibold">{career}</h3>

                <p className="text-gray-400 mt-3">
                  High demand in Media, IT, Advertising &
                  Entertainment Industries.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Start Your Career?
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Join Sharp Future Academy and build a successful career with
          industry-oriented training and placement assistance.
        </p>

        <a
          href={whatsappEnrollUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl text-lg font-semibold"
        >
          Enroll Now
        </a>

      </section>

    </div>
  );
}