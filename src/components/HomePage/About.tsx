"use client";

export default function About() {
  return (
    <section className="py-20 px-4 bg-white group overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up [animation-duration:1s]">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-vignan-blue text-center mb-4 transition-all duration-500 group-hover:scale-105">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vignan-purple to-purple-500">
            VGNT
          </span>
        </h2>

        {/* Animated Underline */}
        <div className="h-1 bg-gradient-to-r from-vignan-blue via-vignan-purple to-purple-500 mx-auto mb-10 rounded-full transition-all duration-500 w-24 group-hover:w-40" />

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify tracking-tight">
          <p>
            <span className="relative text-vignan-purple font-bold inline-block">
              VGNT
              <span className="absolute left-0 -bottom-1 h-[3px] bg-vignan-purple w-0 transition-all duration-500 group-hover:w-full"></span>
            </span>{" "}
            is an exemplary institution of higher learning with a mission of pursuing excellence in education and research. The institution, with its diverse and dynamic community of about 2500 students offers a distinctive combination of some of the finest facilities for MCA, MBA and M.Tech. with 5 different graduate and undergraduate programs CIVIL, MECH, EEE, ECE, CSE, CSE(AI & ML, CSE(Data Science), IT, EIE accomplished faculty, world-class facilities with hostel set on a sprawling 350 acres of sylvan surroundings of valleys and watersheds, mango groves and greenery.
          </p>

          <p>
            While students at VGNT immerse themselves in academics, the college has a lot in store for them outside the classroom. Student life includes participation in sports, recreational & co-curricular and cultural activities. In short, at VGNT, students will find an academic and social environment where everyone from faculty members to peers helps them shape their future.
          </p>

          <p>
            VGNT is home to aesthetically designed buildings with its state-of-the-art computer and internet facilities, modern laboratories, workshops, seminar halls, auditoriums and well-stocked libraries, sports and games fields.
          </p>
        </div>
      </div>
    </section>
  );
}
