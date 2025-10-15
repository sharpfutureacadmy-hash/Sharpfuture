import { Card, CardContent } from "@/components/ui/card"

export function Team() {
  const teamMembers = [
    {
      name: "Mr. Narendra Chaudhary",
      position: "Director",
      specialization:
        "A visionary leader with deep industry knowledge, driving innovation and guiding the institute towards excellence in creative education.",
      image: "/narendra-chaudhari.png",
    },
    {
      name: "Mrs. Neha Kumari",
      position: "Director",
      specialization:
        "An inspiring leader dedicated to nurturing talent, ensuring quality training, and fostering a culture of creativity and growth",
      image: "/neha-kumari.avif",
    },
    {
      name: "Mr. Om Prakash Tiwari",
      position: "Business Development Manager",
      specialization:
        "Expert in strategic partnerships and growth, building strong industry connections to create new opportunities for students and the institute.",
      image: "/om-prakash-tiwari.png",
    },
    {
      name: "Mr. Pankaj Kumar Singh",
      position: "Faculty",
      specialization:
        "A creative educator with expertise in animation and design, committed to delivering hands-on, industry-focused training to students.",
      image: "/pankaj-kumar-singh.jpeg",
    },
    {
      name: "Mr. Manish Verma",
      position: "Marketing Head",
      specialization:
        "An innovative marketer with a passion for branding and outreach, ensuring our programs reach aspiring creatives across the region.",
      image: "/manish-verma.png",
    },
    {
      name: "Ms. Sushmita Kumari",
      position: "Academic Counsellor",
      specialization:
        "Guides students through their learning journey, helping them choose the right courses and supporting them in achieving career goals.",
      image: "/sushmita-kumari.png",
    },
    {
      name: "Ms. Sonam Kumari",
      position: "Academic Counsellor",
      specialization:
        "Dedicated to mentoring and guiding students, ensuring they get the maximum value from their education and training experience.",
      image: "/sonam-kumari.png",
    },
  ]

  return (
    <section id="team" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced faculty members who are industry professionals dedicated to nurturing the next
            generation of creative talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cyan-100 group-hover:border-cyan-300 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>

                <p className="text-cyan-600 font-semibold mb-2">{member.position}</p>

                <p className="text-gray-600 text-sm mb-2">{member.specialization}</p>

                {/* Removed the experience div as it was not present in the teamMembers array */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Director's Message</h3>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                "At Sharp Future Academy, we believe in nurturing creativity and transforming passion into profession.
                With several years of excellence in vocational training, we have consistently delivered industry-ready
                professionals who have made their mark in Hollywood and Bollywood productions."
              </p>
              <p className="mb-4">
                "Our commitment goes beyond just teaching technical skills. We focus on developing creative thinking,
                problem-solving abilities, and industry-relevant expertise that helps our students excel in their chosen
                careers. From VFX artists to creative heads, our alumni are making us proud across the globe."
              </p>
              <p className="italic text-slate-600">
                "Your future is in your hands with Sharp Future Academy. Let us help you achieve your highest creative
                potential."
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-semibold text-slate-800">Mr. Narendra Chaudhary</p>
                <p className="text-sm text-gray-600">Center Head, Sharp Future Academy</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our faculty brings together years of industry experience from leading animation studios, design agencies,
            and tech companies. They are committed to providing hands-on training and mentorship to help students
            achieve their career goals in the creative industry.
          </p>
        </div>
      </div>
    </section>
  )
}
