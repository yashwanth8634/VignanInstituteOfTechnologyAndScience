
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Hostel</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<div    id="Hostel" ><div   data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h2    >Hostel</h2><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto"  src="https://vignanits.ac.in/wp-content/uploads/2020/07/IMG-20180607-WA0010.jpg"    alt="" /><p class="mb-4 text-gray-700 leading-relaxed" >The College has campus attached spacious hostel which provides pleasant stay at affordable fee. It is Managed by our college management on no loss no gain principle. We serve Delicious and Nutritious food under the best hygienic conditions and in a spacious Dining Hall. The menu is decided by the students’ committee. The menu changes every week as per their interests. Rooms are Well ventilate &amp; spacious with executive study table, lockable cupboards for each student and attached toilets. The hostel is enabled with Digital library facility till late nights. It also has Wi-Fi facility and Internet connectivity. The hostel inmates have Exclusive computer Lab facility, Common room with a facility of indoor games and Cricket Ground, Volleyball Ground for outdoor games. They also have Activity room for recreation and talent exhibition. Like Literary, Art, Technical club facilities. Drinking water is Mineral water with water coolers. Students have Hot water facility with Solar system. We endow with 24 hrs health care centre with basic first aid facility and emergency vehicle. Students are monitored by Separate wardens for both boys and girls. We engage Special classes for slow learners with the help of residential faculty. Students are members in various clubs to monitor the well functioning of the hostel. Hostel day celebrations: Our students celebrate hostel day every year on 28th December amidst of joyful events and colorful ambience.</p>
</div></div>` }} 
      />
    </div>
  );
}
