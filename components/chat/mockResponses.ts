interface MockResponse {
  text: string;
  topic: string | null;
}

export function getMockResponse(input: string, lastTopic: string | null = null): MockResponse {
  const lower = input.toLowerCase().trim();

  // FOLLOW-UP HANDLERS (MUST BE FIRST)

  // Follow-up: user is answering a grade question after enrollment was discussed
  if (lastTopic === 'enrollment' && (lower.includes('grade') || lower.includes('1st') || lower.includes('2nd') || lower.includes('3rd') || lower.includes('4th') || lower.includes('5th') || lower.includes('6th') || lower.includes('7th') || lower.includes('8th') || lower.includes('9th') || lower.includes('10th') || lower.includes('11th') || lower.includes('12th') || /^[0-9]/.test(lower) || lower.includes('kindergarten') || lower.includes('kinder') || lower.includes('pre-k') || lower.includes('prek'))) {
    // Detect grade level and respond appropriately
    if (lower.includes('pre-k') || lower.includes('prek') || lower.includes('preschool') || lower.includes('3') || lower.includes('4 year'))
      return { text: "For Pre-K, your child needs to meet at-risk criteria like qualifying for free meals or having developmental delays. The 4-year-old program is free. Start with the Pre-K Interest Form at usd259.org. Walk-in help at 412 S. Main, Mon-Fri 8:30 AM - 4 PM. Are you a new family to WPS or returning?", topic: 'enrollment' };
    if (lower.includes('kindergarten') || lower.includes('kinder'))
      return { text: "For kindergarten, your child needs to be 5 by August 31. It's a free full-day program. All kindergarten families must enroll in person during late July. Use SchoolFinder at usd259.org to find your assigned school. Are you new to WPS or returning?", topic: 'enrollment' };
    // Grades 1-12
    return { text: "Got it! Are you new to Wichita Public Schools, or is your child returning from last year? The process is a bit different for each.", topic: 'enrollment' };
  }

  // Follow-up: user is answering new vs returning after enrollment
  if (lastTopic === 'enrollment' && (lower.includes('new') || lower.includes('just moved') || lower.includes('moving') || lower.includes('first time')))
    return { text: "Welcome to Wichita! For new families, create a ParentVUE account at usd259.org to start online enrollment. You'll need proof of address like a utility bill or lease, immunization records, and birth certificate. Online enrollment opens July 7 for grades 1-12. In-person enrollment is late July. Use SchoolFinder to find your assigned school, or call 316-973-4498.", topic: 'enrollment' };

  if (lastTopic === 'enrollment' && (lower.includes('return') || lower.includes('already') || lower.includes('last year') || lower.includes('same school') || lower.includes('coming back')))
    return { text: "Great! Returning families just need to complete online enrollment through ParentVUE each year, even if staying at the same school. It opens July 7 for 2025-26. If you forgot your ParentVUE password, use the reset button or call the Help Desk at 316-973-4357.", topic: 'enrollment' };

  // Generic follow-up acknowledgments that could follow any topic
  if (lastTopic && (lower === 'ok' || lower === 'okay' || lower === 'got it' || lower === 'i see' || lower === 'alright'))
    return { text: "Anything else you'd like to know?", topic: null };

  // STANDARD RESPONSES

  // Greetings
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|howdy|sup|what's up|yo)\b/.test(lower))
    return { text: "Hey! What can I help you with today?", topic: null };

  // Thanks / goodbye
  if (/^(thanks|thank you|thx|appreciate|bye|goodbye|see you|that's all|that's it)\b/.test(lower))
    return { text: "You're welcome! If anything else comes up, call us at 316-973-4000 or visit usd259.org. Have a great day!", topic: null };

  // Vague / conversational
  if (/^(i have a question|i want to ask|can you help|i need help|help me|can i ask|i have some questions|few questions)/.test(lower))
    return { text: "Of course! Go ahead and ask — I'm here to help with anything about WPS schools, enrollment, transportation, meals, and more.", topic: null };

  // Yes / affirmative
  if (/^(yes|yeah|yep|sure|ok|okay|go ahead|please|yea)\b/.test(lower))
    return { text: "Great! What would you like to know?", topic: null };

  // What can you do / capabilities
  if (lower.includes('what can you') || lower.includes('what do you') || lower.includes('how can you help'))
    return { text: "I can help with enrollment, finding your assigned school, school calendars, bus routes, lunch menus, magnet programs, and general questions about Wichita Public Schools. What do you need?", topic: null };

  // Enrollment / admission / register
  if (lower.includes('enroll') || lower.includes('admission') || lower.includes('register') || lower.includes('sign up') || lower.includes('new student'))
    return { text: "What grade is your child going into? The process is a bit different depending on age — Pre-K, Kindergarten, or grades 1-12.", topic: 'enrollment' };

  // Kindergarten specific
  if (lower.includes('kindergarten') || lower.includes('kinder'))
    return { text: "Your child needs to be 5 by August 31. WPS offers free full-day kindergarten at all elementary schools. All kindergarten families must enroll in person during late July. Use SchoolFinder at usd259.org to find your assigned school, or call 316-973-4498.", topic: 'enrollment' };

  // Pre-K specific
  if (lower.includes('pre-k') || lower.includes('prek') || lower.includes('preschool') || lower.includes('pre k'))
    return { text: "WPS Pre-K is free for qualifying 4-year-olds who turn 4 by August 31. Your child may qualify if the family qualifies for free meals or the child has developmental delays. Start with the Pre-K Interest Form at usd259.org. Walk-in help is available at 412 S. Main, Mon-Fri 8:30 AM - 4 PM.", topic: 'enrollment' };

  // Calendar / dates / first day
  if (lower.includes('calendar') || lower.includes('first day') || lower.includes('school year') || lower.includes('start date') || lower.includes('when does school'))
    return { text: "First day of school is August 14, 2025. New middle and high school students have orientation August 13. The full calendar is downloadable at usd259.org under Calendar.", topic: 'calendar' };

  // Bus / transportation
  if (lower.includes('bus') || lower.includes('transport') || lower.includes('ride') || lower.includes('firstview'))
    return { text: "Students living more than 2.5 miles from their assigned school get bus transportation. Download the FirstView app for real-time bus tracking. For questions call 316-973-2190.", topic: 'transport' };

  // Lunch / meals / food / menu / breakfast
  if (lower.includes('lunch') || lower.includes('meal') || lower.includes('food') || lower.includes('menu') || lower.includes('breakfast') || lower.includes('nutrition'))
    return { text: "WPS serves 51,000+ meals daily. All elementary students get free breakfast in the classroom. Check menus at schoolcafe.com. Apply for free/reduced meals through LINQ Connect — even if you're not sure you qualify, it's worth applying because it also reduces other fees.", topic: 'meals' };

  // Find school / which school / address
  if (lower.includes('which school') || lower.includes('find school') || lower.includes('assigned school') || lower.includes('my school') || lower.includes('school finder') || lower.includes('neighborhood school'))
    return { text: "Use the SchoolFinder tool at usd259.org — type in your home address and it'll show your assigned school and whether you qualify for bus service. Or call 316-973-4498.", topic: 'schools' };

  // Magnet / choice / program / stem / arts
  if (lower.includes('magnet') || lower.includes('choice') || lower.includes('program') || lower.includes('stem') || lower.includes('fine arts') || lower.includes('ib ') || lower.includes('biomed'))
    return { text: "WPS has 23 magnet schools with themes like STEM, Fine Arts, Leadership, and Traditional. Applications open in October, due in January (middle/high) or February (elementary). Contact the Magnet office at 316-973-4464 or visit usd259.org.", topic: 'schools' };

  // Contact / phone / call / email / address
  if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('number') || lower.includes('email') || lower.includes('address'))
    return { text: "Main line: 316-973-4000. Enrollment: 316-973-4498. Transportation: 316-973-2190. Help Desk: 316-973-4357. Email: info@usd259.net. Address: 903 S. Edgemoor, Wichita, KS 67218.", topic: 'contact' };

  // ParentVUE / grades / password / login
  if (lower.includes('parentvue') || lower.includes('parent vue') || lower.includes('grades') || lower.includes('password') || lower.includes('login') || lower.includes('log in'))
    return { text: "Log into ParentVUE to check grades, attendance, and assignments. Forgot your password? Use the reset button on the ParentVUE homepage. If that doesn't work, call the Help Desk at 316-973-4357.", topic: 'parentvue' };

  // Special education / IEP
  if (lower.includes('special education') || lower.includes('special ed') || lower.includes('iep') || lower.includes('disability') || lower.includes('special needs'))
    return { text: "WPS has a full special education department. Call 316-973-4425 — they'll walk you through evaluations, IEPs, and support services based on your child's needs.", topic: 'special-ed' };

  // Sports / athletics
  if (lower.includes('sport') || lower.includes('athletic') || lower.includes('football') || lower.includes('basketball') || lower.includes('soccer') || lower.includes('baseball'))
    return { text: "WPS offers 21 high school sports and 7 middle school sports. Check with your child's school for specific teams, tryout dates, and schedules.", topic: 'sports' };

  // Immunization / vaccines / shots
  if (lower.includes('immuniz') || lower.includes('vaccin') || lower.includes('shots'))
    return { text: "All students must meet Kansas immunization requirements before attending school. Free immunizations are available at the Sedgwick County Health Department at 2716 W. Central, Mon-Wed 8 AM-4:30 PM, Thu 1-6 PM. Contact your school nurse with questions.", topic: 'health' };

  // Transfer / move / change school
  if (lower.includes('transfer') || lower.includes('move') || lower.includes('change school') || lower.includes('switch school'))
    return { text: "You can request a school change through the Special Assignment process, open January 1 through June 30. Note: transportation won't be provided to the new school. Contact the new school with proof of your new address if you've moved.", topic: 'enrollment' };

  // Weather / snow day / closing
  if (lower.includes('weather') || lower.includes('snow') || lower.includes('closing') || lower.includes('cancelled') || lower.includes('closed'))
    return { text: "When school is cancelled for weather, check local TV, the WPS app, or call your school. Keep your contact info updated in ParentVUE to get automated notifications.", topic: 'weather' };

  // Fees / cost / pay
  if (lower.includes('fee') || lower.includes('cost') || lower.includes('pay') || lower.includes('free') || lower.includes('reduced'))
    return { text: "School fees vary by grade level. Many fees can be reduced by filling out the Free and Reduced Meals application through LINQ Connect. All elementary students get free breakfast regardless.", topic: 'fees' };

  // App / technology / mobile
  if (lower.includes('app') || lower.includes('mobile') || lower.includes('download') || lower.includes('seesaw') || lower.includes('linq'))
    return { text: "Key apps: WPS Mobile App (free, search 'Wichita Public Schools'), FirstView for bus tracking, LINQ Connect for meal payments, School Cafe for menus, and Seesaw for K-5 classwork. ParentVUE works in the browser.", topic: 'technology' };

  // Summer / after school
  if (lower.includes('summer') || lower.includes('after school') || lower.includes('before school'))
    return { text: "WPS offers summer programs and summer meal sites for kids ages 1-18. After-school activities vary by school — check with your specific school. Details are posted on usd259.org closer to summer.", topic: 'programs' };

  // Grade specific questions
  if (lower.includes('1st grade') || lower.includes('2nd grade') || lower.includes('3rd grade') || lower.includes('4th grade') || lower.includes('5th grade') || lower.includes('elementary'))
    return { text: "Elementary schools serve Pre-K through 5th grade. Your child is assigned based on your home address. Use SchoolFinder at usd259.org to find your school. Online enrollment opens July 7 for returning families.", topic: 'schools' };

  if (lower.includes('middle school') || lower.includes('6th grade') || lower.includes('7th grade') || lower.includes('8th grade'))
    return { text: "Middle schools serve grades 6-8. Your child is assigned based on home address. Magnet options include Allison Traditional, Brooks STEM & Arts, Coleman Environmental, and Mayberry Fine Arts. New students get orientation August 13.", topic: 'schools' };

  if (lower.includes('high school') || lower.includes('9th grade') || lower.includes('10th') || lower.includes('11th') || lower.includes('12th') || lower.includes('freshman'))
    return { text: "WPS has 7 comprehensive high schools: East, West, North, South, Southeast, Northwest, and Heights. Plus Northeast Magnet and alternative options. Special programs include IB at East, BioMed at North, Early College Academy at Northwest, and 25 CTE pathways.", topic: 'schools' };

  // Catch-all that doesn't feel like a loop
  return { text: "I'm not sure about that specific question, but I can help with enrollment, finding your school, calendars, buses, meals, magnet programs, and more. Try asking about one of those, or call WPS at 316-973-4000 for anything else!", topic: null };
}
